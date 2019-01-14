<template>
    <div id="fans">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        <div id="fansTop">
           <router-link :to="{name:'personal'}"><img src="@/assets/personImg/left.png"></router-link>
           <span>我的粉丝</span>
        </div>
        <div id="fansContent" class="wrapper" ref="fansWrapper">
            <ul class="content">
                <li v-for="(item,index) in fansdata">
                    <div id="left">
                        <router-link :to="{name:'fansindex'}">
                            <img :src="item.fansImg" @click="handlefansIndex(item.id)">
                        </router-link>
                        <div id="message">
                            <div id="fansName">{{item.fansName}}</div>
                            <div id="fansSign">{{item.fansSign}}</div>
                        </div>
                    </div>
                    <div id="focusOn">+关注</div>
                </li>
            </ul>
        </div> 
    </div>
</template>


<script>
import BScroll from "better-scroll";
import axios from "axios";
import vuex from "vuex";
export default {
    updated() {
        this.$nextTick(()=>{
            this.scroll=new BScroll(this.$refs.fansWrapper,{
                scrollY:true,
                click:true
            })
      })
       // console.log(this.scroll)
        
    },
    methods: {
        ...vuex.mapActions({
            handleGet:"Main/handleGet"
        }),
        handlefansIndex(id){
            this.$proto.$emit("handlefansIndex",id);  //发送点击的粉丝下标
        }
    },
    created() {
        this.handleGet();
    },
    computed: {
        ...vuex.mapState({
            fansdata:state=>state.Main.fansData,
        })
    },
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
