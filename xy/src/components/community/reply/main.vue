<template>
    <div id="main_zjy">
        <div class="wrapper mainWrapper" ref="mainWrapper">
            <ul class="content list_zjy">
                <router-link to="" v-for="(item,index) in plList" :key="index">
                    <li>
                        <p class="photo_zjy">
                            <img :src="item.img_path" alt="">
                            <span>{{item.name}}
                                <b>{{item.createtime}}</b>
                            </span>
                            <b>
                                <img src="@/assets/community/img/pl_zjy.png" alt=""><img src="@/assets/community/img/zh.png" alt="">{{item.compliments}}
                            </b>
                        </p>
                        <p class="message_zjy">{{item.content}}</p>            
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
import Vue from "vue"
export default {
    created(){
    },
    mounted() {
        this.scroll=new BScroll(this.$refs.mainWrapper,{
            click:true
        })
    },
    computed:{
        ...Vuex.mapState({
            plList:state=>state.Community.plList                       
        }),
        
    },
    
    watch:{
        Talklist_zjy(newVal,oldVal){
                this.scroll.refresh();
        }
    }
}
</script>
<style lang="scss" scoped>
    #main_zjy{
        width:100%;
        height:100%;
        background: #221D3B;
        padding: .88rem 0 .98rem;
        .mainWrapper{
            width:100%;
            height:100%;
            .list_zjy{
                width:100%;
                height:auto;
                a{
                    display: block;
                    width:100%;
                    height:auto;
                    padding: .26rem .2rem;
                    border-bottom:1px solid #2C254B;
                    li{
                       .photo_zjy{
                            width:100%;
                            height:auto;
                            display: flex;
                            justify-content: space-between;
                            img{
                                width:.5rem;
                                height:.5rem;
                                border-radius:50%;
                                }
                            span{
                                display: block;
                                width:2rem;
                                height:auto;  
                                color:#fff;
                                font-family:PingFangSC-Regular;
                                font-size:.18rem;
                                font-weight:400;                  
                                margin-left:-3.3rem;
                                b{
                                    display: block;
                                    color:#B8B8B8;
                                    margin-top:-.1rem
                                }                       
                            }
                            b{
                                display:block;
                                height:auto;
                                padding-top:.2rem;
                                img{
                                    display: inline-block;
                                    width:.24rem;
                                    height:.22rem;
                                    margin-right:.1rem;
                                    margin-bottom:-0.05rem
                                }
                            }
                            
                        }     
                     }
                    
                }
            }
            .message_zjy{
                width:100%;
                height:auto;
                margin:.39rem 0 0 .55rem;
                font-size:20px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:#fff;
                padding-left:.2rem ;
            }
        }
    }
</style>