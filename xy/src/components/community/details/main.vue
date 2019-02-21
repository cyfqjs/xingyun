<template>
  <div id="main" class="wrapper" ref=mainWrapper>
    <ul class="content details">
      <li>
        <p class="photo_zjy">
          <img :src="details_zjy.photo_path" alt>
        </p>
        <p class="name_zjy">{{details_zjy.name}}
          <span>{{details_zjy.createdate}}</span>
        </p>
        <p class="Concern_zjy" @click="handleGz_zjy">
          <router-link to v-text="details_zjy.statu==1?'已关注':'+ 关注'"></router-link>
        </p>
        <p class="content_zjy">
          {{details_zjy.content}}
        </p>
        <p class="pic_zjy">
          <img v-for="(img,index) in details_zjy.img_paths" :src="img" alt="">
        </p>
        <div class="zwhere">
            分享<p><img src="@/assets/community/img/wechat.png" alt=""></p>
                <p><img src="@/assets/community/img/friend.png" alt=""></p>
                <p><img src="@/assets/community/img/qq.png" alt=""></p>
                <p><img src="@/assets/community/img/zone.png" alt=""></p>
        </div>
        <div class="count">
            <p>评论<span> {{details_zjy.replies.length}}</span></p>
            <p>喜欢<span> {{details_zjy.compliments}}</span></p>
        </div>
        <ul class="plDatails">
            <li v-for="(item,index) in details_zjy.replies">
                <p><img :src="item.img_path" alt=""><b>{{item.name}}<span>{{item.content}}</span></b></p>
                <p @click="hanldeHide_zjy"> <span @click="handlePid(item)"><router-link to="/reply">共{{item.replies.length}}条回复></router-link></span></p>
                <p><span>{{item.createtime}}</span><b><img @click="handleSpeak({con:4,id:item.id})" src="@/assets/community/img/pl_zjy.png" alt=""><span>{{item.complimer}}</span></b></p>             
            </li>     
        </ul>
      </li>
      
    </ul>
    <div class="speak" v-show="flagPl_zjy">
        <textarea  v-model="main_zjy" placeholder="写评论..."></textarea>
        <p @click="handleSendT_zjy({...details_zjy,main_zjy,con,eid})">发送</p>
    </div>
  </div>
</template>
<script>
import getMyData from "../time.js"
import BScroll from "better-scroll";
import Vuex from "vuex";
export default {
    created(){
        // 控制评论框的显示
        this.Observer.$on("handlePl_zjy",(val)=>{
            this.flagPl_zjy=val.flag;
            this.con=val.con
        })
    },
    data(){
        return {    
            // 判断评论类型是动态还是评论 
            con:-1,
            // 评论id
            eid:-1,
            hide_zjy:null,
             // 评论框是否显示
            flagPl_zjy:false,
             // 发送内容
            main_zjy:"",
        }
        
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.mainWrapper,{
            click:true
            
        })
    },
    computed: {
        ...Vuex.mapState({
            // 动态详情
            details_zjy:state=>{
                if(state.Community.detailsOne==""){
                    state.Community.detailsOne=JSON.parse(sessionStorage.getItem("details"))
                }
                
                return state.Community.detailsOne
            }
        })
    },
    methods:{
        // 转发框隐藏显示
        hanldeHide_zjy(){
            this.hide_zjy=false;
            this.$emit("hide_zjy",this.hide_zjy)
        },
        // 评论功能
         handleSendT_zjy(params){
             console.log( this.main_zjy)
             this.$store.dispatch("Community/handleSendT_zjy",params);
             this.main_zjy="";
             
        
         },
        //  二次评论
         handleSpeak(con){
             this.con=con.con;
             this.eid=con.id;
             this.flagPl_zjy=!this.flagPl_zjy;
            //  this.handleSendT_zjy({...this.details_zjy,content:this.main_zjy,con:this.con,eid:this.id})
         },
        //  保存评论的id
         ...Vuex.mapMutations({
                handlePid:"Community/handlePid"
         }),
        ...Vuex.mapActions({
            // 关注
            handleGz_zjy:"Community/handleGz_zjy",
        })
    }
}
</script>
<style lang="scss" scoped>
    #main{
        width:100%;
        height:100%;
        background: #221D3B;
        color:#fff;      
        .details{
            width:100%;
            height:auto;
            padding:.88rem .2rem .7rem ;
            li{
                width:100%;
                height:auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                padding-top:.3rem;
                .photo_zjy{
                    width:1.08rem;
                    height:1.08rem;
                    img{
                        width:100%;
                        height:100%;
                        border-radius:50%;

                    }
                 }
                .name_zjy{
                    width:2.08rem;
                    height:.5rem;
                    font-size:.3rem;
                    line-height: .32rem;
                    margin-left:-2.4rem;
                    span{
                        font-size:.2rem;
                        font-family: PingFang-SC-Regular;
                        color:#ccc;
                        display: block;
                    }
                }
                .Concern_zjy{
                    width:.9rem;
                    height:.48rem;
                    a{
                        widows: 100%;
                        height:100%;
                        display: block;
                        color:#9B51E2;
                        text-align: center;
                        line-height: .48rem;
                        font-size:.22rem;
                        border:.01rem dashed 
                    }
                }
                .content_zjy{
                    width:100%;
                    height:auto;
                    font-size:.24rem;
                    margin:.3rem 0 .3rem ;
                }
                .pic_zjy{
                    width:100%;
                    height:auto;
                    display: flex;
                    flex-wrap:wrap;
                    img{
                        width:48%;
                        height:50%;
                        margin:0 .05rem;
                    }
                }
                .zwhere{
                    width:100%;
                    height:.52rem;
                    font-size:.22rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(184,184,184,1);
                    display: flex;
                    align-items: center;
                    padding-left:.6rem;
                    margin:.6rem 0;
                    p{
                        width:.43rem;
                        height:.43rem;
                        margin-right:.5rem;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    p:nth-child(1){
                        margin-left:.6rem;
                    }
                }
                .count{
                    width:100%;
                    height:.7rem;
                    display:flex;
                    justify-content:space-between;
                    align-items: center;
                    font-size:.22rem;
                    border-bottom:1px solid #B8B8B8;
                    span{
                        color:#B8B8B8;
                    }
                }
                .plDatails{
                    width:100%;
                    height:auto;
                    li{
                        width:100%;
                        height:auto;
                        padding: .2rem 0;
                        p:nth-child(1){
                            width:100%;
                            height:auto;
                            font-size:.2rem;
                            font-family:PingFangSC-Light;
                            img{
                                width: .5rem;
                                height:.5rem;
                                border-radius:50%;
                                float:left;
                                margin-right:.2rem;
                                }
                            b{
                                float:left;
                                width:90%;
                                span{
                                    display: block;
                                    width:100%;
                                    height:auto;
                                    margin-top:.1rem;
                                }
                            }
                        }
                        p:nth-child(2){
                            width:6.46rem;
                            height:.57rem;
                            background: #2C254B;
                            font-size:.2rem;
                            padding-left:.2rem ;
                            margin:.2rem 0 .2rem .65rem;
                            line-height:.57rem;
                            font-family:PingFangSC-Regular;
                            span{
                                a{
                                    color:#C78FFF;  
                                }
                            }
                        }
                        p:nth-child(3){
                            width:100%;
                            height:.25rem;
                            line-height:.25rem;
                            padding-left:.75rem ;
                            font-size:.18rem;
                            font-family:PingFang-SC-Regular;
                            font-weight:400;
                            color:rgba(184,184,184,1);
                            b{
                                float:right;
                                img{
                                    width:.24rem;
                                    height:.22rem;
                                    float:left;
                                    margin:.03rem .05rem;
                                }
                            }      
                        }
                    }
                }
            }
        }
         .speak{
        width:100%;
        height:2.09rem;
        background:#CACACA;
        position: fixed;
        left:0;
        bottom:5.79rem;
        z-index:3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem;
        textarea{
            display: block;
            width: 5.8rem;
            height:1.69rem;
            border:1px dashed #000;
            text-align: left;
            font-size:.25rem;
            font-family:PingFang-SC-Regular;
        }
        p{
            width:.8rem;
            font-size:.3rem;
            font-family:PingFang-SC-Regular;
        }
    }
    }
</style>