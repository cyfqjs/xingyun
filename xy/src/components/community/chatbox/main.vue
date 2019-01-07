<template>
    <div id="main">
        <ul class="chat">
            <li class="friend">
                <span>12-29 8:00</span>
                <p class="you"><img src="@/assets/community/img/test.png" alt=""><span>thanks for your attention~</span></p>             
            </li>
            <li class="me">
                <span>12-29 8:00</span>
                <p class="my"><span>小姐姐请问你是天蝎座吗？</span><img src="@/assets/community/img/tx.jpeg" alt=""></p>               
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #main{
        width:100%;
        height:100%;
        min-height:100rem;
        background:url("../../../assets/community/img/chat.jpeg");
        padding:.48rem .2rem ;
    }
    #main>ul{
        width:100%;
        height:100%;
    }
    #main .friend>span, #main .me>span{
        height:.2rem;
        color:#fff;
        font-size:.26rem;
        margin:.48rem 2.88rem
    }
     #main>.chat .you, #main>.chat .my{
         height:.78rem;
         display: flex;
         align-items:center;
     }
     #main>.chat .you>img, #main>.chat .my>img{
         width:.83rem;
         height:.83rem;
         border-radius:50%;
     }
</style>