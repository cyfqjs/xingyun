<template>
    <div id="fans">
        <div id="fansTop">
           <router-link :to="{name:'personal'}"><img src="@/assets/personImg/left.png"></router-link>
           <span>我的粉丝</span>
        </div>
        <div id="fansContent">
            <ul>
                <li>
                    <div id="left">
                        <router-link :to="{name:'fansindex'}">
                            <img src="@/assets/personImg/fansImg.png">
                        </router-link>
                        <div id="message">
                            <div id="fansName">雷雷雷雷雷</div>
                            <div id="fansSign">说不过你，但喜欢你</div>
                        </div>
                    </div>
                    <div id="focusOn">+关注</div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" >
    #fansTop{
        width:7.5rem;
        height:1.28rem;
        line-height: 1.28rem;
        background:rgba(47,40,75,1);
        display: flex;
        justify-content: center;
        img{
            width:.5rem;
            height:.5rem;
            display:inline-block;
            position:fixed;
            top:.4rem;
            left:.4rem;
        }
        span{
            display:inline-block;
            width:3rem;
            height:0.35rem;
            font-size:0.38rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            text-align: center;
            
        }
    }
    #fansContent{
        width:7.5rem;
        height:12.06rem;
        background:rgba(34,29,59,1);
        ul{
            padding:.19rem;
            height:100%;
        }
        li{
            height:1.5rem;
            border-bottom:.01rem dashed #334;
            list-style: none;
            display:flex;
            justify-content: space-between;
            #left{
                display:flex;
                padding:.2rem;
                img{
                    display:inline-block;
                    width:1.05rem,;
                    height:1.05rem;
                    border-radius:50%;
                }
                #message{
                    padding:.2rem;
                     #fansName{
                        width:2rem;
                        height:.4rem;
                        font-size:.24rem;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(247,235,235,1);
                    }
                    #fansSign{
                        width:3.23rem;
                        height:.4rem;
                        font-size:.24rem;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(247,235,235,1);
                    }
                }
            }
             #focusOn{
                width:.90rem;
                height:.48rem;
                line-height:.48rem;
                text-align:center;
                border:.02rem solid rgba(199,143,255,1);
                border-radius:.06rem;
                font-size:.22rem;
                font-family:PingFangSC-Regular;
                font-weight:bold;
                color:rgba(199,143,255,1);
                margin: .5rem;
            }
        }
        
      
    }
</style>
