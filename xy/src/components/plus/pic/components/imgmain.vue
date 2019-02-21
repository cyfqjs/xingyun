<template>
        <div class="imgmain">
        <textarea  id="textarea" cols="30" rows="10" @change="handchange($event)"></textarea>
        <div class="image-list">
        <div style="text-align:center" ref="divGenres" class="list-default-img" v-show="isPhoto" @click.stop="addPic">
            <div id="addtsimg">
                <img src="@/assets/plus/icon_+_fb@2x.png"/>
            </div>
            <br>
            <span>请选择或者拍照上传照片</span>
            <input type="file" accept="image/*"   @change="onFileChange" style="display: none;" mutiple="mutiple" >
        </div>
        <ul class="list-ul" v-show="!isPhoto">
            <li class="list-li " v-for="(iu, index) in imgUrls">
                <a class="list-link" @click='previewImage(iu)'>
                    <img :src="iu">
                </a>
                <span class="list-img-close" @click='delImage(index)'></span>
            </li>
            <li class="list-li">
                <span class="add-img" @click.stop="addPic"> </span>
            </li>
        </ul>
        </div>
        <div class="add-preview" v-show="isPreview" @click="closePreview">
            <img :src="previewImg">
        </div>
        </div>
    </template>
<script>
    import axios from "axios"
    import lrz from "lrz";
    import {
        XHeader,
        Confirm
    } from 'vux'
    export default {
        mounted() {
            this.Observer.$on("sendpic", () => {
                this.saveImage();
            })
        },
        data: function() {
            return {
                textarea: "",
                show: false,
                imgUrls: [],
                urlArr: [],
                isPhoto: true,
                btnTitle: '',
                isModify: false,
                previewImg: '',
                isPreview: false,
                files: []
            }
        },
        watch: {
            imgUrls: 'toggleAddPic'
        },
        methods: {
            handchange(e) {
                let val = e.target.value;
                this.textarea = val;
            },
            toggleAddPic: function() {
                let vm = this;
                if (vm.imgUrls.length >= 1) {
                    vm.isPhoto = false;
                } else {
                    vm.isPhoto = true;
                }
            },
            addPic: function(e) {
                let els = this.$refs.divGenres.querySelectorAll('input[type=file]')
                els[0].click()
                return false
            },
            onFileChange: function(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                this.createImage(files, e);
            },
            createImage: function(file, e) {
                let vm = this;
                lrz(file[0], {
                    width: 480
                }).then(function(rst) {
                    vm.imgUrls.push(rst.base64);
                    this.files.push(rst.formdata)
                    return rst;
                }).always(function() {
                    // 清空文件上传控件的值
                    e.target.value = null;
                });
            },
            delImage: function(index) {
                let vm = this;
                vm.$vux.confirm.show({
                    title: '确定删除该图片?',
                    onConfirm() {
                        vm.imgUrls.splice(index, 1);
                    }
                })

            },
            previewImage: function(url) {
                let vm = this;
                vm.isPreview = true;
                vm.previewImg = url;
            },
            closePreview: function() {
                let vm = this;
                vm.isPreview = false;
                vm.previewImg = "";
            },
            saveImage: function() {
                let vm = this;
                let urlArr = [],
                    imgUrls = this.imgUrls;

                for (let i = 0; i < imgUrls.length; i++) {
                    if (imgUrls[i].indexOf('file') == -1) {
                        urlArr.push(imgUrls[i].split(',')[1]);
                    } else {
                        urlArr.push(imgUrls[i]);
                    }
                }
                this.sendpic();
            },
            sendpic: function() {
                 let t=sessionStorage.getItem("token");
                axios({
                        url: "http://39.96.91.169/StarOfSea/community/addShare",
                        method: "post",
                        data: {
                            "title": "",
                            "content": this.textarea,
                            "img": this.files
                        },
                        headers:{
                             accessToken:t
                        },
                    })
                    .then(data => {
                        if (data.code == 1) {
                            alert("发表成功");
                            this.$router.push("/hPage")
                        } else if (data.code == 0) {
                            alert("发表失败");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
</script>
<style lang="scss" scoped>
    #imgmain {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .list-default-img {
        padding: 5px 11px;
        #addtsimg {
            width: 1rem;
            height: 1rem;
            border: 1px dotted #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 30px;
                height: 30px;
            }
        }
    }
    
    #textarea {
        width: 100%;
        height: 4rem;
        resize: none;
        padding: 10px 10px;
        font-size: 14px;
    }
    
    .list-li {
        padding: 0px 11px;
        display: inline-block;
        position: relative;
        text-align: center;
    }
    
    .list-link img {
        width: 1rem;
        height: 1rem;
    }
    
    .list-link a:visited {
        background-color: #465c71;
        border: 1px #4e667d solid;
        color: #dde4ec;
        display: flex;
        line-height: 1.35em;
        padding: 4px 20px;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .list-link a:hover {
        background-color: #bfcbd6;
        color: #465c71;
    }
    
    .list-link a:active {
        background-color: #465c71;
        color: #cfdbe6;
    }
    
    .list-img-close {
        background: #ffffff url('../../../../assets/plus/icon_qx_fb@2x.png');
        border-color: #ff4a00;
        background-position: center;
        background-size: 35px 35px;
        display: block;
        float: left;
        width: .1rem;
        height: .1rem;
        position: absolute;
        top: 2px;
        right: 13px;
        margin-top: 0px;
        margin-left: 0px;
        padding: 8px;
        z-index: 10;
        border-radius: 5px;
        text-align: center;
    }
    
    .add-img {
        display: flex;
        background-image: url('../../../../assets/plus/icon_+_fb@2x.png');
        background-repeat: no-repeat;
        width: 1rem;
        height: 1rem;
        background-position: center;
        background-size: .3rem .3rem;
        border: 1px dotted #ccc;
    }
    
    .add-preview {
        width: 80%;
    }
</style>