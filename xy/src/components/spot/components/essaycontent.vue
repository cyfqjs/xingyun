<template>
  <!-- 文章详情 -->
  <div class="app">
    <div class="back">
      <mt-header fixed class="contentback">
        <router-link to="/spot" slot="left">
          <mt-button class="backicon">
            <img src="@/assets/spot/icon8-ht@2x.png">
          </mt-button>
        </router-link>
        <mt-button slot="right" @click="share()">分享</mt-button>
      </mt-header>
    </div>

    <div class="wrapper" ref="homeWrapper">
      <div class="cont">
        <div class="bgopcity">
          <div class="apptwo">
            <div class="content">
              <div class="user">
                <div class="headphoto">
                  <router-link :to="{name:'fansspot',params:{id:articledetails.uid,name:articledetails.name,img:articledetails.imgpath,sign:articledetails.title}}" >
                    
                  <img :src="articledetails.imgpath">
                  </router-link>
                  <!--  -->
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
                <div class="gl" v-for="(item_text,index) in item.replies">
                  <span>{{item_text.name}}</span>
                  回复：{{item_text.content}}
                </div>
                <div class="cl">
                  <!--评论用户-->
                  <div class="hfwrap" @click="hfessay(4,item.id)">
                    <div class="hf">
                      <img src="@/assets/spot/icon_pl_dt@2x.png">
                    </div>
                    <span>18</span>
                  </div>
                  <!--点赞评论-->
                  <div class="zwrap" @click="dzpl(4,item)">
                    <div class="z">
                      <img
                        :src="item.flag?require('../../../assets/spot/icon_ax_hf@2x.png'):require('../../../assets/spot/icon_axq_hf@2x.png')"
                      >
                    </div>
                    <span>{{item.compliments}}</span>
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
        <div class="fx" @click="sharebottom()">
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
    <!-- 评论区 -->
    <div class="hfpeople" v-show="show">
      <textarea class="hfbox" placeholder="写评论..." autofocus="autofocus" v-model="plcontent"></textarea>
      <span @click="send()">发送</span>
    </div>
    <!-- 分享区 -->
    <div class="share" v-show="shareshow">
      <div class="sharewhere">
        <h5>分享</h5>
        <ul>
          <li>
            <div>
              <img src="../../../assets/spot/icon_wx_dt@2x.png">
            </div>
            <span>微信</span>
          </li>
          <li>
            <div>
              <img src="../../../assets/spot/icon_pyq_dt@2x.png">
            </div>
            <span>朋友圈</span>
          </li>
          <li>
            <div>
              <img src="../../../assets/spot/icon_qq_dt@2x.png">
            </div>
            <span>QQ</span>
          </li>
          <li>
            <div>
              <img src="../../../assets/spot/icon_kj_dt@2x.png">
            </div>
            <span>QQ空间</span>
          </li>
        </ul>
      </div>
      <div class="report">
        <ul>
          <li>
            <div>
              <img src="../../../assets/spot/icon_lj_fx@2x.png">
            </div>
            <span>复制链接</span>
          </li>
          <li>
            <div>
              <img src="../../../assets/spot/icon_pb_fx@2x.png">
            </div>
            <span>屏蔽</span>
          </li>
          <li>
            <div>
              <img src="../../../assets/spot/icon_ts_fx@2x.png">
            </div>
            <span>投诉</span>
          </li>
          <li>
            <div>
              <img src="../../../assets/spot/icon-zy_fx@2x.png">
            </div>
            <span>返回主页</span>
          </li>
        </ul>
      </div>
      <div class="cancel" @click="cancel()">取消</div>
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
      shareshow: false,
      tpurl: "",
      aid: "",
      //评论id或者是文章id
      plid: "",
      //
      type: "",
      //文章点赞状态
      flag: "",
      uflag: "",
      show: false,
      plcontent: "",
      articledetails: {},
      replies: {},
      t: ""
    };
  },
  methods: {
    //触发分享功能
    share() {
      this.shareshow = true;
    },
    //触发分享功能
    sharebottom() {
      this.shareshow = true;
    },
    //取消评论
    cancel() {
      this.shareshow = false;
    },
    //触发评论功能
    hfessay(val1, val2) {
      this.type = val1;
      this.show = true;
      this.plid = val2;
      //console.log(this.id)
    },
    //评论点赞
    dzpl(val, item) {
      console.log(item);
      console.log(val);
      if (item.flag == 1) {
        this.uflag = 0;
      } else {
        this.uflag = 1;
      }
      Axios({
        method: "post",
        url: "http://39.96.91.169/StarOfSea/action/compliment",
        data: {
          aid: item.id,
          type: 4,
          state: this.uflag
        },
        headers: {
          accessToken: this.t
        }
      }).then(data => {
        console.log(data);
        Axios({
          method: "get",
          url: "http://39.96.91.169/StarOfSea/focus/getArticleDetails",
          params: {
            aid: this.aid
          },
          headers: {
            accessToken: this.t
          }
        }).then(data => {
          this.articledetails = data.articledetails;
          this.replies = data.articledetails.replies;
          console.log(this.articledetails);
          this.flag = this.articledetails.flag;
          if (this.flag == 1) {
            this.tpurl = require("../../../assets/spot/icon_ax_hf@2x.png");
          } else {
            this.tpurl = require("../../../assets/spot/icon_axq_hf@2x.png");
          }

          //console.log(this.replies);
        });
      });
    },
    //文章点赞
    praiseessay() {
      if (this.flag == 1) {
        Axios({
          method: "post",
          url: "http://39.96.91.169/StarOfSea/action/compliment",
          data: {
            aid: this.aid,
            type: 1,
            state: 0
          },
          headers: {
            accessToken: this.t
          }
        }).then(data => {
          //console.log(data)
          if (data.code == 1) {
            this.flag = 0;
            this.tpurl = require("../../../assets/spot/icon_axq_hf@2x.png");
          }
        });
      } else {
        Axios({
          method: "get",
          url: "http://39.96.91.169/StarOfSea/focus/getArticleDetails",
          params: {
            aid: this.aid
          },
          headers: {
            accessToken: this.t
          }
        }).then(data => {
          //console.log(data)
          if (data.code == 1) {
            this.flag = 1;
            this.tpurl = require("../../../assets/spot/icon_ax_hf@2x.png");
          }
        });
      }
    },

    //文章评论   用户评论
    send() {
      this.show = false;

      Axios({
        method: "post",
        url: "http://39.96.91.169/StarOfSea/action/addReply",
        data: {
          aid: this.plid,
          type: this.type,
          option: this.option,
          content: this.plcontent
        },
        headers: {
          accessToken: this.t
        }
      }).then(data => {
        this.plcontent = "";
        if (data.code == 1) {
          Axios({
            method: "get",
            url: "http://39.96.91.169/StarOfSea/focus/getArticleDetails",
            params: {
              aid: this.aid
            },
            headers: {
              accessToken: this.t
            }
          }).then(data => {
            this.articledetails = data.articledetails;
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
    let t = sessionStorage.getItem("token");
    this.t = t;
    Axios({
      method: "get",
      url: "http://39.96.91.169/StarOfSea/focus/getArticleDetails",
      params: {
        aid: this.aid
      },
      headers: {
        accessToken: this.t
      }
    }).then(data => {
      this.articledetails = data.articledetails;
      this.replies = data.articledetails.replies;
      console.log(this.articledetails);
      this.flag = this.articledetails.flag;
      if (this.flag == 1) {
        this.tpurl = require("../../../assets/spot/icon_ax_hf@2x.png");
      } else {
        this.tpurl = require("../../../assets/spot/icon_axq_hf@2x.png");
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
      font-size: 0.25rem;
      color: #ccc;
      a {
        font-size: 0.3rem;
      }
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
                a{
                  display: block;
                  width: 100%;
                  height: 100%;
                  img {
                  width: 100%;
                  height: 100%;
                }
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
            width: 94%;
            height: 1.6rem;
            margin: 0.1rem auto;
            overflow: hidden;
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
                img {
                  width: 100%;
                }
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
              .gl {
                word-wrap: break-word;
                width: 2.5rem;
                margin-left: 0.15rem;
                color: rgb(165, 153, 177);
                span {
                  color: skyblue;
                  margin-right: 0.08rem;
                }
              }
              .cl {
                width: 100%;
                height: 0.3rem;
                position: absolute;
                top: 0.3rem;
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
  .share {
    width: 100%;
    height: 5.6rem;
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    background: #e7e7e7;
    //268 200
    .sharewhere {
      width: 100%;
      height: 2.68rem;
      border-bottom: 0.02rem#CACACA solid;
      h5 {
        width: 100%;
        height: 0.98rem;
        line-height: 0.98rem;
        text-align: center;
        font-size: 0.28rem;
      }
      ul {
        width: 74.6%;
        height: 1.7rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        li {
          width: 1rem;
          height: 1.7rem;
          div {
            background: #fff;
            width: 100%;
            height: 1rem;
            padding-top: 0.2rem;
            img {
              width: 60%;
              margin: 0 auto;
            }
          }
          span {
            display: block;
            width: 100%;
            margin-top: 0.22rem;
            text-align: center;
            font-size: 0.22rem;
            font-family: PingFang-SC-Regular;
            font-weight: bold;
          }
        }
      }
    }
    .report {
      width: 100%;
      height: 2rem;
      padding-top: 0.3rem;
      ul {
        width: 74.6%;
        height: 1.7rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        li {
          width: 1rem;
          height: 1.7rem;
          div {
            background: #fff;
            width: 100%;
            height: 1rem;
            padding-top: 0.2rem;
            img {
              width: 60%;
              margin: 0 auto;
            }
          }
          span {
            display: block;
            width: 100%;
            margin-top: 0.22rem;
            text-align: center;
            font-size: 0.22rem;
            font-family: PingFang-SC-Regular;
            font-weight: bold;
          }
        }
      }
    }
    .cancel {
      width: 100%;
      height: 0.9rem;
      background: #fff;
      font-size: 0.3rem;
      font-weight: bold;
      color: #000;
      text-align: center;
      line-height: 0.9rem;
    }
  }
}
</style>
