<template>
        <div class="imgmain">
        <textarea  id="" cols="30" rows="10"></textarea>
        <div class="image-list">
        <div style="text-align:center" ref="divGenres" class="list-default-img" v-show="isPhoto" @click.stop="addPic">
        <img src="@/assets/plus/icon_+_fb@2x.png" />
        <br>
        <span>请选择或者拍照上传照片</span>
        <input type="file" accept="image/" capture="camera" @change="onFileChange" style="display: none;"  multiple>
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
        <div style="font: 0px/0px sans-serif;clear: both;display: block"> </div>
        </div>
    </template>
<script>
    import lrz from "lrz";
    import {
        XHeader,
        Confirm
    } from 'vux'
    export default {
        data: function() {
            return {
                show: false,
                imgUrls: [],
                urlArr: [],
                isPhoto: true,
                btnTitle: '',
                isModify: false,
                previewImg: '',
                isPreview: false
            }
        },
        watch: {
            imgUrls: 'toggleAddPic'
        },
        methods: {
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

                //数据传输操作
            }
        }
    }
</script>
<style lang="scss">
    .list-li {
        padding: 15px;
        display: inline-block;
        position: relative;
        text-align: center;
    }
    
    .list-link img {
        width: 100px;
        height: 100px;
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
        width: 10px;
        height: 10px;
        position: absolute;
        top: 14px;
        right: 14px;
        margin-top: 0px;
        margin-left: 0px;
        padding: 8px;
        z-index: 10;
        border-radius: 5px;
        text-align: center;
    }
    
    .add-img {
        display: block;
        background-image: url('../../../../assets/plus/icon_+_fb@2x.png');
        background-repeat: no-repeat;
        width: 100px;
        height: 100px;
        background-position: center;
        background-size: 98px 98px;
    }
</style>