<template>
    <div id="allPush">
        <p class="title">分享</p>
        <ul class="share">
            <li><p><img src="@/assets/community/img/wechat_1.png" alt=""></p><span>微信</span></li>
            <li><p><img src="@/assets/community/img/friend_1.png" alt=""></p><span>朋友圈</span></li>
            <li><p><img src="@/assets/community/img/qq_1.png" alt=""></p><span>QQ</span></li>
            <li><p><img src="@/assets/community/img/zoom_1.png" alt=""></p><span>QQ空间</span></li>
        </ul>
        <ul class="extra share">
            <li><p><img src="@/assets/community/img/link.png" alt=""></p><span>复制链接</span></li>
            <li><p><img src="@/assets/community/img/ban.png" alt=""></p><span>屏蔽</span></li>
            <li><p><img src="@/assets/community/img/complaint.png" alt=""></p><span>投诉</span></li>
            <li><p><img src="@/assets/community/img/home.png" alt=""></p><span>主页</span></li>
        </ul>
            <p class="cancel" :hide_zjy="flagHide_zjy" @click="handlePush_zjy()">取消</p>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    data(){
        return {
            flagHide_zjy:false
        }
    },
    methods:{
        ...Vuex.mapActions({
            handlePush_zjy:"Community/handlePush_zjy",
        }),
}
}
</script>
<style lang="scss" scoped>
    #allPush{
        width:100%;
        height:5.89rem;
        background:rgba(231,231,231,1);
        font-size:.3rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;      
        position: fixed;
        left:0;
        bottom:0;
        z-index:5;
        // transform: translateY(0rem);
        .title{
            width:100%;
            margin:.35rem 0;
            text-align: center;
        }
        .share{
            width:100%;
            height:1.8rem;
            display: flex;
            justify-content: space-between;
            padding: 0 1.1rem;
            border-bottom:1px solid #CACACA;
            li{
                width:25%;
                height:auto;
                font-size:.22rem;
                font-family:PingFang-SC-Regular;
                text-align: center;
                p{
                    width:1rem;
                    height:1rem;
                    background: #FFFFFF;
                    overflow: hidden;
                    margin-bottom:.2rem;
                    
                    img{
                        width:.6rem;
                        height:.6rem;                       
                        margin:.2rem;
                    }
                }
                span{
                    margin-left:-.29rem;
                }
                
            }
        }
        .extra{
            margin-top:.35rem;
            border:none;
        }
        .cancel{
            width:100%;
            height:.9rem;
            background: #fff;
            text-align: center;
            line-height:.9rem;
        }
    }
</style>