<template>
  <div class="app">
    <div class="back">
      <mt-header fixed class="contentback">
        <router-link to="/spot" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="back" slot="right"></mt-button>
      </mt-header>
    </div>

    <div class="wrapper" ref="homeWrapper">
      <div class="cont">
        <div class="bgopcity">
          <div class="apptwo">
            <div class="content">
              <div class="user">
                <div class="headphoto">
                  <img src="@/assets/spot/icon_axq_hf.png">
                </div>
                <div class="uname">
                  <div class="name">{{articledetails.name}}</div>
                  <div class="personality">{{articledetails.brief}}</div>
                </div>
                <div class="follow">+ 关注</div>
              </div>
              <div class="title">{{articledetails.title}}</div>
              <p>{{articledetails.content}}</p>
              <div class="foot">
                <div class="browse">阅读：{{articledetails.createDate}}</div>
                <div class="like">
                  <img src="@/assets/spot/icon_axq_hf.png">
                </div>
                <div class="likecount">喜欢{{articledetails.compliments}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="comment">
          <!--全部评论-->
          <p class="title">全部评论</p>
          <ul>
            <li v-for="(item,index) in replies">
              <!-- 头像 -->
              <div class="headpho">
                <span>
                  <img :src="item.img_path">
                </span>
              </div>
              <div class="right">
                <div class="uname">{{item.name}}</div>
                <div class="pl">{{item.content}}</div>
                <div class="gl" v-for="(item_text,index) in item.replies"><span>{{item_text.name}}</span>回复：{{item_text.content}}</div>
                <div class="cl">
                  <!--评论用户-->
                  <div class="hfwrap" @click="hfessay(4,item.id)">
                    <div class="hf">
                      <img src="@/assets/spot/icon_pl_dt@2x.png">
                    </div>
                    <span>18</span>
                  </div>
                  <!--点赞评论-->
                  <div class="zwrap" @click="dzpl(4,item.id)">
                    <div class="z">
                      <img src="@/assets/spot/icon_axq_hf@2x.png">
                    </div>
                    <span>{{item.compliments}}</span>S
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <p class="footer">-v-暂时没有更多评论了呦~~</p>
        </div>
      </div>
    </div>
    <ul class="operation">
      <li>
        <div class="fx">
          <img src="@/assets/spot/icon_fx_dt@2x.png">
        </div>分享
      </li>
      <li>
        <div class="pl" @click="hfessay(1,aid)">
          <img src="@/assets/spot/icon_pl_dt@2x.png">
        </div>评论
      </li>
      <li>
        <!--点赞文章-->
        <div class="xh" @click="praiseessay()">
          <img :src="tpurl">
        </div>喜欢
      </li>
    </ul>
    <div class="hfpeople" v-show="show">
      <textarea class="hfbox" placeholder="写评论..." autofocus="autofocus" v-model="plcontent"></textarea>
      <span @click="send()">发送</span>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import { Header } from "mint-ui";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      tpurl:"",
      aid:"",
      //评论id或者是文章id
      plid: "",
      //
      type:"",
      //文章点赞状态
      flag:"",
      show: false,
      plcontent: "",
      articledetails: {},
      replies: {}
    };
  },
  methods: {
    //触发评论功能
    hfessay(val1,val2) {
      this.type=val1;
      this.show = true;
      this.plid=val2;
      //console.log(this.id)
    },
    //评论点赞
    handlelike(){

      Axios({
        method: "post",
        url: "http://39.96.91.169:8080/StarOfSea/action/compliment",
        data: {
          uid: 1,
          aid: this.articledetails.id,
          type:1,
          // state: w
        }
      }).then(data => {
        this.plcontent = "";
        if (data.code == 1) {
          Axios({
            method: "post",
            url: "http://39.96.91.169:8080/StarOfSea/focus/getArticleDetails",
            headers: { "Content-type": "application/json" },
            data: {
              uid: 1,
              aid: this.id
            }
          }).then(data => {
            this.articledetails = data.articledetails;
            this.replies = data.articledetails.replies;
            // console.log(this.articledetails);
            console.log(this.replies);
          });
        }
      });
    },
    //文章点赞
    praiseessay(){
      if(this.flag==1){
        Axios({
        method:"post",
        url:"http://39.96.91.169:8080/StarOfSea/action/compliment",
        data:{
          aid:this.aid,
	        type:1,
	        uid:1,
	        state:0
        }
      }).then(data=>{
        //console.log(data)
         if(data.code==1){
           this.flag=0;
           this.tpurl=require("../../../assets/spot/icon_axq_hf@2x.png")
         }
       
      })
      }else{
        Axios({
        method:"post",
        url:"http://39.96.91.169:8080/StarOfSea/action/compliment",
        data:{
          aid:this.aid,
	        type:1,
	        uid:1,
	        state:1
        }
      }).then(data=>{
        //console.log(data)
         if(data.code==1){
           this.flag=1;
           this.tpurl=require("../../../assets/spot/icon_ax_hf@2x.png")
         }
       
      })
      }
      
    },

    //文章评论   用户评论
    send() {
      this.show = false;

      Axios({
        method: "post",
        url: "http://39.96.91.169:8080/StarOfSea/action/addReply",
        data: {
          uid: 1,
          aid: this.plid,
          type: this.type,
          option:this.option,
          content: this.plcontent,
        }
      }).then(data => {
        this.plcontent = "";
        if (data.code == 1) {
          Axios({
            method: "post",
            url: "http://39.96.91.169:8080/StarOfSea/focus/getArticleDetails",
            headers: { "Content-type": "application/json" },
            data: {
              uid: 1,
              aid: this.aid
            }
          }).then(data => {
            this.articledetails =data.articledetails;
            this.replies = data.articledetails.replies;
            // console.log(this.articledetails);
            console.log(this.replies);
          });
        }
      });
    }
  },
  created() {
    this.aid = this.$route.params.id;
    // console.log(this.aid);
    Axios({
      method: "post",
      url: "http://39.96.91.169:8080/StarOfSea/focus/getArticleDetails",
      headers: { "Content-type": "application/json" },
      data: {
        uid: 1,
        aid: this.aid
      }
    }).then(data => {
       this.articledetails = data.articledetails;
       this.replies = data.articledetails.replies;
      //console.log(this.articledetails);
      this.flag=this.articledetails.flag;
      if(this.flag==1){
        
        this.tpurl=require("../../../assets/spot/icon_ax_hf@2x.png")
      }else{
        this.tpurl=require("../../../assets/spot/icon_axq_hf@2x.png")
      }
      
       //console.log(this.replies);
    });
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      click: true,
      pullUpLoad: true
    });
    // hfpeople()
  }
};
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  background: url("../../../assets/spot/tucen1@2x.png");
  background-size: 100% 100%;

  .back {
    background: #2f284b;
    height: 1.29rem;
    .contentback {
      width: 100%;
      height: 0.98rem;
      margin-top: 0.25rem;
      background: #2f284b;
    }
  }

  .wrapper {
    height: 100%;
    overflow: hidden;
    .cont {
      padding-bottom: 1.4rem;
      .bgopcity {
        width: 100%;
        height: 100%;
        background: rgba(47, 40, 75, 0.2);
        .apptwo {
          width: 100%;
          min-height: 10.45rem;
          background: url("../../../assets/spot/ltbj.png") no-repeat;
          background-size: 7.5rem 10.45rem;

          padding-top: 0.2rem;
          .content {
            position: relative;
            min-height: 10.33rem;
            width: 94.6%; //710
            margin: 0 auto;
            background: #221d3b;
            opacity: 0.8;
            padding-top: 0.15rem;
            .user {
              width: 100%;
              height: 0.98rem;
              background: #221d3b;
              display: flex;
              .headphoto {
                width: 13.8%; //.98
                height: 0.98rem;
                margin-left: 0.08rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .uname {
                width: 62%; //4.41
                height: auto;
                .name {
                  width: 100%;
                  height: 0.31rem;
                  color: #fbf9f9;
                  font-size: 0.31rem;
                  margin-top: 0.22rem;
                }
                .personality {
                  font-size: 0.25rem;
                  margin-top: 0.14rem;
                  color: #e0d7fa;
                }
              }
              .follow {
                width: 17.8%; //1.27
                height: 0.59rem;
                background: rgba(230, 209, 249, 0.3);
                margin-right: 0.17rem;
                margin-top: 0.27rem;
                text-align: center;
                line-height: 0.59rem;
                color: white;
                font-size: 0.24rem;
              }
            }
            .title {
              width: 100%;
              margin-top: 0.43rem;
              text-align: center;
              font-size: 0.34rem;
              color: #fff;
            }
            p {
              width: 89%; //6.33
              margin: 0 auto;
              margin-top: 0.5rem;
              font-size: 0.25rem;
              color: #e0d7fa;
              letter-spacing: 0.04rem;
              line-height: 0.35rem;
            }
            .foot {
              width: 100%; //710
              height: 0.4rem;
              display: flex;
              position: absolute;
              padding-left: 0.15rem;
              padding-right: 0.15rem;
              line-height: 0.4rem;
              //
              bottom: -1rem;
              .browse {
                width: 23.5%; //1.67rem
                height: 0.4rem;
                border-radius: 0.05rem;
                background: rgba($color: #fff, $alpha: 0.6);
                font-size: 0.24rem;
                color: #27103c;
                // font-family: "PingFang-SC-Regular";
                line-height: 0.4rem;
                text-align: center;
              }
              .like {
                width: 0.33rem;
                height: 0.3rem;
                position: absolute;
                right: 2.1rem;
                top: 0.05rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .likecount {
                width: 1.76rem;
                height: 0.4rem;
                border-radius: 0.05rem;
                background: rgba($color: #fff, $alpha: 0.6);
                color: #27103c;
                font-size: 0.24rem;
                font-family: "PingFang-SC-Regular";
                line-height: 0.4rem;
                text-align: center;
                position: absolute;
                right: 0.14rem;
              }
            }
          }
        }
      }
      .comment {
        width: 6.94rem;
        margin: 0 auto;
        .title {
          width: 100%;
          height: 1.58rem;
          font-size: 0.32rem;
          color: white;
          line-height: 1.58rem;
          margin-top: 1rem;
        }
        ul {
          width: 100%;
          height: auto;
          li {
            width: 92%;
            min-height: 1.87rem;
            margin: .1rem auto;
            display: flex;
            .headpho {
              width: 0.8rem;
              height: 100%;
              span {
                display: block;
                width: 0.64rem;
                height: 0.64rem;
                border-radius: 50%;
                background: #ccc;
              }
            }
            .right {
              width: 6.1rem;
              margin-left: 0.2rem;
              position: relative;
              .uname {
                width: 100%;
                height: 0.52rem;
                color: rgba(255, 255, 255, 0.932);
                font-size: 0.3rem;
              }
              .pl {
                width: 100%;
                font-size: 0.26rem;
                color: rgb(165, 153, 177);
              }
              .gl{
                margin-left: .15rem;
                color: rgb(165, 153, 177);
                span{
                  color:skyblue;
                  margin-right: .08rem;
                }
              }
              .cl {
                width: 100%;
                height: 0.3rem;
                position: absolute;
                top: .3rem;
                display: flex;
                margin-top: 0.5rem;
                font-size: 0.24rem;
                color: rgba(255, 255, 255, 0.897);
                .zwrap {
                  margin-left: 0.6rem;
                  display: flex;
                  .z {
                    width: 0.33rem;
                    height: 0.29rem;
                    margin-right: 0.05rem;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                }
                .hfwrap {
                  margin-left: 4rem;
                  display: flex;
                  .hf {
                    width: 0.33rem;
                    height: 0.29rem;
                    margin-right: 0.05rem;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                }
              }
            }
          }
        }

        .footer {
          width: 100%;
          height: 0.5rem;
          line-height: 0.5rem;
          text-align: center;
          font-size: 0.28rem;
          color: pink;
        }
      }
    }
  }
  .hfpeople {
    width: 100%;
    height: 15%;
    background: #cacaca;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    .hfbox {
      width: 5.8rem;
      height: 82%;
      margin-left: 0.21rem;
      border-radius: 0.1rem;
      font-size: 0.2rem;
      outline: none;
    }
    span {
      display: block;
      margin-left: 0.42rem;
      font-size: 0.32rem;
      color: #000;
      font-family: "PingFang-SC-Regular";
    }
  }
  .operation {
    width: 100%;
    height: 0.68rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: rgb(47, 40, 75);
    justify-content: space-between;
    li {
      width: 2.4rem;
      height: 0.46rem;
      border-right: 0.01rem solid #ccc;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      .fx {
        width: 0.28rem;
        height: 0.28rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .pl {
        width: 0.33rem;
        height: 0.29rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .xh {
        width: 0.32rem;
        height: 0.26rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    li:nth-children(3) {
      border: none;
    }
  }
}
</style>
