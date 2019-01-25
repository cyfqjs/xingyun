<template>
    <div id="proberbs">
        <div id="proberbsTop">
           <router-link :to="{name:'redact'}">
               <img src="@/assets/personImg/left.png">
            </router-link>
           <span>个人箴言</span>
           <router-link :to="{name:'redact'}" class="finish">
               完成
            </router-link>
        </div>
        <div id="proberbsBottom">
            <textarea cols="102" rows="10"></textarea>
            <p>请输入不超过14字的个人箴言</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    
}
</script>

<style lang="scss" scoped>
     #proberbsTop{
        width:7.5rem;
        height:1.28rem;
        line-height: 1.28rem;
        background:rgba(47,40,75,1);
        display: flex;
        justify-content: space-around;
        a:nth-child(1)>img{
            width:.5rem;
            height:.5rem;
            display:inline-block;
            position:fixed;
            top:.4rem;
            left:.4rem;
        }
        .finish{
            font-size: .3rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
        }
        span{
            display:inline-block;
            width:3rem;
            font-size:0.38rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            text-align: center;
        }
    }
    #proberbsBottom{
        width:7.5rem;
        height:80rem;
        background:rgba(34,29,59,1);
        textarea{
            display:block;
            margin:0 auto;
            background:rgba(242,242,242,1);
        }
        p{
            padding:.2rem;
            font-size:.3rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(196,196,196,1);
        }
    }
</style>

