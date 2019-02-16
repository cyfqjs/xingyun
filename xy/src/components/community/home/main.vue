<template>
    <div id="main">
        <div class="wrapper homeWrapper" ref="homeWrapper">
            <ul class="content">
                <!-- 点击到详情 -->
                <router-link to="/details"  v-for="(item,index) in Moments_zjy" :key="index">
                    <li @click="handleDetails_zjy(item)">
                        <p class="photo_zjy"><img :src="item.photo_path" alt=""></p>
                        <p class="name_zjy">{{item.name}}<span>{{item.createdate}}</span></p>
                        <p class=" Concern_zjy" @click="handleGz_zjy(item)"><router-link to="" v-text="item.statu==1?'已关注':'+ 关注'" :class="item.statu==0?'ever':''"></router-link></p>
                        <p class="content_zjy">
                            {{item.content}}
                        </p>
                        <p class="pic_zjy">
                            <img v-for="(item,index) in item.img_paths" :src="item"  alt="">
                        </p>
                        <p class="fdp_zjy">
                            <router-link to="" ><img @click="handlePush_zjy" src="@/assets/community/img/fx_zjy.png" alt=""><span>{{item.times}}</span></router-link>
                            <router-link :to="{name:'details',query:{dc:item}}"><img src="@/assets/community/img/pl_zjy.png" alt=""><span>{{item.replies.length}}</span></router-link>
                            <router-link to=""><img @click="handleAddDz_zjy(item)" :src='item.flag==0?"../../../static/dz_zjy.png":"../../../static/zh.png"' alt=""><span>{{item.compliments}}</span></router-link>
                        </p>
                    </li>
                </router-link>
            </ul>
        </div>
        <div class="loading" v-show="flagLoading">
            <i class="fa fa-spinner fa-pulse"></i>
       </div>
       <div class="loading" v-show="flagLoadingY">
            <p>亲，这回真没了^_^</p>
       </div>
    </div>
</template>
<script>
import getMyDate from "../time.js";
import BScroll from "better-scroll";
import axios from "axios"
import Vuex from "vuex";
export default {
    data(){
        return {
            flagLoading:false,
            flagLoadingY:false,
            // listIndex:0,
            // 转发
            flagPush_zjy:false,
            // 点赞
            flagXin:null,

        }
    },
    created(){
        // 页面加载获取动态列表
        this.handleMoments_zjy();
        axios({
            method:"get",
            url:"http://39.96.91.169/StarOfSea/login/getCookie",
            // headers:{"Content-type":"application/json"},
            withCredentials:true
        })
    },
    mounted() {
        this.scroll=new BScroll(this.$refs.homeWrapper,{
            click:true,
            pullUpLoad:true,
            probeType:2
        })
        this.scroll.on("pullingUp",()=>{
            this.handleMoments_zjy();
        })
        // this.scroll.on("scroll",({x,y})=>{
        //     if(y<-1970){
        //         this.flagLoading=!flagLoading;
        //     }
        // })
    },
    computed:{
        ...Vuex.mapState({
            Moments_zjy:state=>{
                state.Community.Moments_zjy.map((item,index)=>{
                    item.createdate=getMyDate.getMyDate(item.createdate)
                })
                return state.Community.Moments_zjy
            }
        }),
    },
    methods:{
        // ...Vuex.mapMutations({
        // }),
        ...Vuex.mapActions({
            // 获取动态列表
            handleMoments_zjy:"Community/handleMoments_zjy",
            // 关注
            handleGz_zjy:"Community/handleGz_zjy"
        }),
        // 点赞
        handleAddDz_zjy(item){
            if(item.flag==1){
                item.flag=0
                item.compliments--;
                
            }else{
                item.flag=1 
                item.compliments++;

            }
            console.log(item.flag)
            this.$store.dispatch("Community/handleAddDz_zjy",item)
        },
        // 转发
        handlePush_zjy(){
            this.flagPush_zjy=true;
            this.$emit("push_zjy",this.flagPush_zjy)
        },
        handleDetails_zjy(val){
            // 点击时获取某条具体动态
            this.$store.dispatch("Community/handleOne_zjy",val)
            //将某一条动态的具体数据传递给footer功能栏，实现点赞和评论等。
            this.Observer.$emit("handleDetails_zjy",val);
        },
         
    },
    watch:{
        // 监听动态列表
         Moments_zjy(newVal,oldVal){
            // 数据更新后，保证滚动的效果
             this.scroll.refresh();
             //上拉加载后，通知用户可以再次加载。
             this.scroll.finishPullUp();
         },
    }
}
</script>
<style scoped>
    #main{
        width:100%;
        height:100%;
        background: #221D3B;
        color:#fff;
        padding:.58rem .2rem 1rem ;
    }
    #main>.homeWrapper{
        width:100%;
        height:100%;
    }
    #main>.homeWrapper>Ul{
        overflow: hidden;
    }
    #main>.homeWrapper>Ul>a{
        display: block;
        width:100%;
        height:auto;
        color:#fff;
        margin-top:.5rem;
    }
    #main>.homeWrapper>Ul>a>li{
        width:100%;
        height:auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-top:.15rem;
    }
     #main>.homeWrapper>Ul>a>li>.photo_zjy{
         width:.9rem;
         height:.9rem;
     }
     #main>.homeWrapper>Ul>a>li>.photo_zjy>img{
         width:100%;
         height:100%;
         border-radius:50%;

     }
     #main .name_zjy{
         width:40%;
         height:.5rem;
         font-size:.28rem;
         line-height: .32rem;
         margin-left:-2rem;
     }
     #main .name_zjy>span{
         font-size:.18rem;
         color:#ccc;
         display: block;
        font-family: PingFang-SC-Regular;
         
     }
     #main .Concern_zjy{
         width:.9rem;
         height:.48rem;
     }
     #main .Concern_zjy>a{
         widows: 100%;
         height:100%;
         display: block;
         color:#9B51E2;
         text-align: center;
         line-height: .48rem;
         font-size:.22rem;
         border:.01rem dashed 
     }
     /* #main .Concern_zjy>.ever{
         background:url("../../../assets/community/img/gz_zjy.png");
         color:#fff
     } */
     #main .content_zjy{
         width:100%;
         height:auto;
         font-size:.24rem;
         margin:.3rem 0 .3rem ;
         font-family:PingFangSC-Light;
     }
      #main .fdp_zjy{
          width:100%;
          height:.5rem;
          display:flex;
          justify-content: space-between;
          align-items: center;
          border-top:.01rem solid #2C254B;
          margin-top:.2rem;
      }
      #main .fdp_zjy>a{
          display: inline-block;
          width:33%;
          line-height:.5rem;
          display:flex;
          align-items:center;
      }
      .fdp_zjy>a>img{
          width:.33rem;
          height:.29rem;
          margin:0 .1rem 0 .7rem;
      }
      #main .pic_zjy{
          width:100%;
          height:auto;
          display: flex;
          flex-wrap:wrap;
      }
      #main .pic_zjy>img{
          width:48%;
          height:50%;
          margin:0 .05rem;
      }
      .loading{
         width: 100%;
         height: .3rem;
         display: flex;
         justify-content: center;
         align-items: center;
         margin-top:.2rem;
     }
    .loading>i{
        font-size: .34rem;
    }
</style>