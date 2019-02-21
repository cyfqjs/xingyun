<template>
    <div id="fans">
        <div id="fansTop">
           <router-link :to="{name:'personal'}"><img src="@/assets/personImg/left.png"></router-link>
           <span>我关注的</span>
        </div>
        <div id="fansContent" class="wrapper" ref="foucsonWrapper">
            <ul class="content">
                <li v-for="(item,index) in foucson">
                    <div id="left">
                        <router-link :to="{name:'fansindex',params:{id:item.id,name:item.fousonName,sign:item.foucsonSign,img:item.fousonImg}}">
                            <img :src="item.fousonImg">
                        </router-link>
                        <div id="message">
                            <div id="fansName">{{item.foucsonName}}</div>
                            <div id="fansSign">{{item.foucsonSign}}</div>
                        </div>
                    </div>
                    <div id="focusOn">已关注</div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import BScroll from "better-scroll";
import vuex from "vuex";
export default {
    updated() {
          this.scroll=new BScroll(this.$refs.foucsonWrapper,{
              scrollY:true
          })
         
    },
    methods: {
        ...vuex.mapActions({
            handleGet:"Main/handleGetFoucson"
        })
    },
    created() {
        this.handleGet()
    },
    computed: {
        ...vuex.mapState({
            foucson:state=>state.Main.foucsonData
        })
    },
}
</script>

<style lang="scss" scoped>
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
        overflow: hidden;
        ul{
            padding:.19rem;
            height:80rem;
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
                text-align: center;
                border:.02rem solid rgba(199,143,255,1);
                border-radius:.06rem;
                font-size:.22rem;
                font-family:PingFangSC-Regular;
                font-weight:bold;
                color:rgba(255,254,255,1);
                background:#9B51E2;
                margin: .5rem;
            }
        }
        
      
    }
</style>

