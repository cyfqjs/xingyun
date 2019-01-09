<template>
    <div id="redact">
        <div id="redactTop">
            <router-link :to="{name:'personal'}"><img src="@/assets/personImg/left.png"></router-link>  
            <router-link :to="{name:'personal'}">保存</router-link>>
            <div id="qiebac">
                <img src="@/assets/personImg/prophoto.png">
            </div>
            <div id="qietx">
                <img src="@/assets/personImg/bi.png" @click="handle()">
            </div>
            <div id="tx">
                <!-- <img src="@/assets/personImg/fansImg.png"> -->
            </div>
        </div>
        <div id="redactBottom">
            <div id="form">
                <div class="name">
                    <label>昵称</label><input type="text" placeholder="此处最多6字">
                </div>
                 <div class="sex">
                    <label>性别</label><input type="radio" name="sex" >男<input type="radio" name="sex" >女
                </div>
                 <div class="address">
                    <label>地址</label><input type="text">
                </div>
                 <div class="age">
                    <label>年龄</label><input type="text">
                </div>
                 <div class="data">
                    <label>出生日期</label><input type="datetime-local">
                </div>
                 <div class="time">
                    <label>出生时间</label><input type="time">
                </div>
                 <div class="proberbs">
                    <label>个人箴言</label>
                    <router-link :to="{name:'proberbs'}">
                        <img src="@/assets/personImg/right.png">
                    </router-link>
                </div>
            </div>
            <p>您的信息将用于定制您的每日运势</p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        handle(){
            alert(1);
        }
    }
}
</script>

<style lang="scss" >
    #redact{
        #redactTop{
            width:7.5rem;
            height:5rem;
            background:url("../../../assets/personImg/proberbsback.png");
            a:nth-child(1){
                width:.5rem;
                height:.5rem;
                display:block;
                position:fixed;
                top:.4rem;
                left:.4rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            a:nth-child(2){
                display:block;
                width:.6rem;
                height:.6rem;
                position:fixed;
                right:.4rem;
                top:.4rem;
                font-size:.3rem;
                font-family:PingFangSC-Regular;
                color:#fff;
            }
            #qiebac{
                width:1.26rem;
                height:1.26rem;
                position:fixed;
                top:15%;
                left:45%;
                border:.01rem dashed #ccc;
                img{
                    width:100%;
                    height:100%;
                }
            }
            #qietx{
                width:.43rem;
                height:.43rem;
                position:fixed;
                left:8%;
                top:34%;
                z-index:10;
                img{
                    width:100%;
                    height:100%;
                }
            }
            #tx{
                width:1.24rem;
                height:1.24rem;
                border-radius:50%;
                background:black;
                position:fixed;
                left:.2rem;
                top:4.11rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        #redactBottom{
            width:7.5rem;
            height:7.5rem;
            background:rgba(34,29,59,1);
            padding:.5rem 0;
            #form{
                width:7.5rem;
                height:6.3rem;
                background:#2f284b;
                div{
                    width:7.5rem;
                    height:.88rem;
                    line-height:.88rem;
                    border-bottom:.01rem solid rgba(49,49,49,1);
                    font-size: .25rem;
                    color:#fff;
                    label{
                        display: inline-block;
                        width:3rem;
                        padding:.1rem;
                    }
                    input{
                        background: #2F284B;
                        border: 0;
                        color:#fff;
                    }
                    img{
                        display: inline-block;
                        width:.2rem;
                        height:.28rem;
                        float:right;
                        margin:.3rem;
                    }
                }
            }
            p{
                font-size:.24rem;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                text-align:center;
            }
        }
    }
</style>

