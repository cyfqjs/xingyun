<template>
    <div id="main">
        <div class="wrapper mainWrapper" ref="mainWrapper">
            <ul class="content chat">
                <li class="friend">
                    <span>12-29 8:00</span>
                    <p class="you"><img src="@/assets/community/img/test.png"  alt=""><span>thanks for your attention~
                        thanks for your attention~thanks for your attention~ </span></p>             
                </li>
                <li class="me">
                    <span>12-29 8:00</span>
                    <p class="my"><span>小姐姐请问你是天蝎座吗？
                        小姐姐请问你是天蝎座吗？小姐姐请问你是天蝎座吗？小小姐的萨达十大</span><img src="@/assets/community/img/tx.jpeg" alt=""></p>               
                </li>
                <li class="friend">
                    <span>12-29 8:00</span>
                    <p class="you"><img src="@/assets/community/img/test.png"  alt=""><span>thanks for your attention~
                        </span></p>             
                </li>
                <li class="me">
                    <span>12-29 8:00</span>
                    <p class="my"><span>小姐姐请问你是天蝎座吗？
                        小姐姐请问你是天蝎座吗？小姐姐请问你是天蝎座吗？</span><img src="@/assets/community/img/tx.jpeg" alt=""></p>               
                </li>
                <li class="friend">
                    <span>12-29 8:00</span>
                    <p class="you"><img src="@/assets/community/img/test.png"  alt=""><span>thanks for your attention~
                        </span></p>             
                </li>
                <li class="me">
                    <span>12-29 8:00</span>
                    <p class="my"><span>小姐姐请问你是天蝎座吗？
                        小姐姐请问你是天蝎座吗？小姐姐请问你是天蝎座吗？</span><img src="@/assets/community/img/tx.jpeg" alt=""></p>               
                </li>
                <li class="friend">
                    <span>12-29 8:00</span>
                    <p class="you"><img src="@/assets/community/img/test.png"  alt=""><span>thanks for your attention~
                        </span></p>             
                </li>
                <li class="me">
                    <span>12-29 8:00</span>
                    <p class="my"><span>小姐姐请问你是天蝎座吗？
                        小姐姐请问你是天蝎座吗？小姐姐请问你是天蝎座吗？</span><img src="@/assets/community/img/tx.jpeg" alt=""></p>               
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    created(){
        
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.mainWrapper,{
            
        })
    },
    methods:{
        
    },
}
</script>
<style scoped>
    #main{
        width:100%;
        height:100%;
        /* background:url("../../../assets/community/img/chat.jpeg"); */
        overflow: hidden;
        /* padding-bottom:1rem; */
    }
    #main>.mainWrapper{
        width:100%;
        height:100%;
    }
    #main>.mainWrapper>.chat{
        width:100%;
        padding-bottom:2rem; 
    }
     #main>.mainWrapper>ul>li{ 
         margin:.48rem 0;
     }
    #main>.mainWrapper>ul>.friend{
        margin-left:.2rem;
    }
    #main>.mainWrapper>.chat>.friend>span,#main>.mainWrapper>.chat>.me>span{
        display: block;
        height:.2rem;
        color:#fff;
        font-size:.26rem;
        margin:0 0 .48rem 3rem;
    }
    #main>.mainWrapper>.chat>.me{
        margin-left:1.56rem;
    }
    #main>.mainWrapper>.chat>.me>span{
        margin-left:1.7rem
    }
    #main>.mainWrapper>.chat>.friend>.you,#main>.mainWrapper>.chat>.me>.my{
        width:5.74rem;
        height:auto;
        display: flex;
        align-items: center;
    }
    #main>.mainWrapper>.chat>.friend>.you>img,#main>.mainWrapper>.chat>.me>.my>img{
        width:.82rem;
        height:.82rem;
        border-radius:50%;
    }

    #main>.mainWrapper>.chat>.me>.my>img{
        margin-left:.2rem;
    }
     #main>.mainWrapper>.chat>.friend>.you>span,#main>.mainWrapper>.chat>.me>.my>span{
         width:4.56rem;
         height:auto;
         background: #fff;
         font-size:.3rem;
         margin-left:.2rem;
         padding: .25rem .2rem;
         border-radius:.15rem;
          color:#595959;
          word-wrap:break-word;
          word-break: break-all;
     }
     #main>.mainWrapper>.chat>.me>.my>span{
         background:#C490BF;
         color:#fff;
     }
</style>