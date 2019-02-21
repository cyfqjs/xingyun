<template>
  <!-- 热门话题内容页 -->
  <div class="app">
    <!--固定头部-->
    <div class="contentback-father">
      <mt-header fixed class="contentback">
        <router-link to="/spot" slot="left">
          <mt-button><img src="@/assets/spot/icon8-ht@2x.png"/></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="wrapper" ref="homeWrapper">
      <div class="content">
        <div class="topic">
          <ul>
            <li>
              <div class="title">{{details.content}}</div>
            </li>
          </ul>
        </div>
        <div class="vote">
          <div class="title">请选择您的观点</div>
          <div class="or">
            <div class="agree" @click="yes()">可以</div>
            <div class="oppose" @click="no()">不可以</div>
          </div>
        </div>
        <div class="hotcomment">
          <div class="title">发表的观点</div>
          <ul>
            <li v-for="(item,index) in replies">
              <div class="left">
                <div class="headerphoto">
                  <img :src="item.img_path">
                  <!-- 'http://39.96.91.169:8080/'+ -->
                </div>
              </div>
              <div class="right">
                <div class="uname">
                  <span>{{item.name}}</span>
                  <span>{{new Date(item.createtime).toLocaleDateString()}}</span>
                </div>
                <div class="sex">{{item.gender}} {{item.constellat}}</div>
                <div class="vote">投票给:{{item.opinion}}</div>
                <div class="viewpoint">{{item.content}}</div>
                <div class="hfcontent" v-for="(repliesitem,index) in item.replies"><span>{{repliesitem.name}}</span>{{" 回复:" +repliesitem.content}}</div>

                <div class="zandpl">
                  <div class="z">
                    <div class="dz" @click="dz(item)">
                      <!-- 用户评论点赞 -->
                      <img
                        :src="item.flag?require('../../../assets/spot/icon_ax_hf@2x.png'):require('../../../assets/spot/icon_axq_hf@2x.png')"
                        class="z"
                      >
                    </div>
                    <span>{{item.compliments}}</span>
                  </div>
                  <div class="pl" @click="pl(item)">
                    <div class="hf">
                      <img src="@/assets/spot/icon_pl_dt@2x.png" class="pl">
                    </div>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 弹框投票 -->
      </div>
    </div>
    <div class="coven" v-show="floag">
      <div class="out">
        <p>投票给:{{opinion}}</p>
        <div class="idea">
          <p>说说你的想法</p>
          <textarea v-model="message" ref="textarea" autofocus="autofocus"></textarea>
          <div class="choice">
            <span class="cancel" @click="cancel()">取消</span>
            <span class="send" @click="send()">发送</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 评论弹框 -->
    <div class="coventwo" v-show="floagtwo">
      <div class="out">
        <div class="top">
          <div class="back" @click="close()">
            <img src="@/assets/spot/icon9-ht@2x.png">
          </div>
          <span>回复</span>
        </div>
        <div class="idea">
          <div class="people">
            <div class="info">
              <div class="left">
                <span>
                  <img :src="xx.img_path">
                </span>
              </div>
              <div class="right">
                <p>
                  <b>{{xx.name}}</b>
                  <span>时间</span>
                </p>
                <p>{{xx.gender}} {{xx.constellat}}</p>
              </div>
            </div>
            <div class="other">
              <p class="othervote">投票给：{{xx.opinion}}</p>
              <p class="otheropinion">{{xx.content}}</p>
            </div>
          </div>
          <div class="choice">
            <input type="text" v-model="umessage">
            <span @click="comments()">发表</span>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Axios from "axios";
export default {
  data() {
    return {
      xx: [],
      opinion: "",
      message: "",
      umessage: "",
      floag: false,
      floagtwo: false,
      uflag: "",
      replies: {},
      details: {
        //"agree":(认同数),
        //"resist":(反对数),
        //"content":"(内容)",
        //"createdate":(发表时间),
        //"id":(详情id),
        //"flag": 1(1赞同，-1反对),
      },
      t: ""
    };
  },
  methods: {
    yes() {
      //投票给同意
      this.floag = true;
      this.$refs.textarea.focus();
      this.opinion = "同意";
      Axios({
        method: "post",
        url: "http://39.96.91.169/StarOfSea/action/compliment",
        data: {
          aid: this.id,
          type: 2,
          state: 1
        },
        headers: {
          accessToken: this.t
        }
      }).then(data => {
        console.log(data);
        Axios({
      method: "get",
      url: "http://39.96.91.169/StarOfSea/focus/getCurlycueDetails",
      params: {
        aid: this.id
      },
      headers: {
        accessToken: this.t
      }
    }).then(data => {
      this.details = data.details;
      //console.log(this.details);
      this.replies = data.details.replies;
      //console.log(this.replies);
    });
      });
    },
    no() {
      this.floag = true;
      this.$refs.textarea.focus();
      this.opinion = "反对";
      Axios({
        method: "post",
        url: "http://39.96.91.169/StarOfSea/action/compliment",
        data: {
          aid: this.id,
          type: 2,
          state: 0
        },
        headers: {
          accessToken: this.t
        }
      }).then(data => {
        //console.log(data)
        Axios({
      method: "get",
      url: "http://39.96.91.169/StarOfSea/focus/getCurlycueDetails",
      params: {
        aid: this.id
      },
      headers: {
        accessToken: this.t
      }
    }).then(data => {
      this.details = data.details;
      //console.log(this.details);
      this.replies = data.details.replies;
      //console.log(this.replies);
    });
      });
    },
    cancel() {
      this.floag = false;
    },
    send() {
      //发送投票内容
      this.floag = false;
      // this.message="";
      Axios({
        method: "post",
        url: "http://39.96.91.169/StarOfSea/action/addReply",
        data: {
          aid: this.details.id,
          type: 2,
          opinion: this.opinion,
          content: this.message
        },
        headers: {
          accessToken: this.t
        }
      }).then(data => {
        //返回的参数"status":1,"msg":"发表成功"
        //      "status":0,"msg":"发表失败"
        if (data.code == 1) {
          Axios({
            method: "get",
            url: "http://39.96.91.169/StarOfSea/focus/getCurlycueDetails",
            params: {
              aid: this.id
            },
            headers: {
              accessToken: this.t
            }
          }).then(data => {
            this.details = data.details;
            //console.log(this.details);
            this.replies = data.details.replies;
            //console.log(this.replies);
          });
        }
      });
    },
    //点赞评论
    dz(val) {
      //console.log(val);
      if (val.flag == 1) {
        this.uflag = 0;
      } else {
        this.uflag = 1;
      }
      Axios({
        method: "post",
        url: "http://39.96.91.169/StarOfSea/action/compliment",
        data: {
          aid: val.id,
          type: 4,
          state: this.uflag
        },
        headers: {
          accessToken: this.t
        }
      }).then(data => {
        Axios({
          method: "get",
          url: "http://39.96.91.169/StarOfSea/focus/getCurlycueDetails",
          params: {
            aid: this.id
          },
          headers: {
            accessToken: this.t
          }
        }).then(data => {
          this.details = data.details;
          // console.log(this.details);
          this.replies = data.details.replies;
          //console.log(this.replies);
        });
      });
    },
    pl(val) {
      this.floagtwo = true;
      this.xx = val;
      //console.log(this.xx);
    },
    close() {
      this.floagtwo = false;
    },
    //评论用户观点
    comments() {
      console.log(this.umessage)
      Axios({
        method: "post",
        url: "http://39.96.91.169/StarOfSea/action/addReply",
        data: {
          aid: this.xx.id,
          type: 4,
          opinion:"",
          content: this.umessage
        },
        headers: {
          accessToken: this.t
        }
      }).then(data => {
        this.floagtwo = false;
        console.log(data);
        this.umessage="";
        if (data.code == 1) {

          Axios({
            method: "get",
            url: "http://39.96.91.169/StarOfSea/focus/getCurlycueDetails",
            params: {
              aid: this.id
            },
            headers: {
              accessToken: this.t
            }
          }).then(data => {
            this.details = data.details;
            console.log(this.details);
            this.replies = data.details.replies;
            console.log(this.replies);
          });
        }
      });
    }
  },

  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
    let t = sessionStorage.getItem("token");
    this.t = t;
    Axios({
      method: "get",
      url: "http://39.96.91.169/StarOfSea/focus/getCurlycueDetails",
      params: {
        aid: this.id
      },
      headers: {
        accessToken: this.t
      }
    }).then(data => {
      this.details = data.details;
      //console.log(this.details);
      this.replies = data.details.replies;
      //console.log(this.replies);
    });
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      click: true,
      pullUpLoad: true
    });
  }
};
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  background: url("../../../assets/spot/tucen1@2x.png");
  background-size: 100% 100%;
  position: relative;

  .contentback-father {
    // padding-top: 1rem;
    background: #2f284b;
    height: 0.29rem;
    .contentback {
      width: 100%;
      height: 0.98rem;
      margin-top: 0.25rem;
      background: #2f284b;
    }
  }
  .wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-top: 1rem;
    .content {
      margin-top: 0;
      padding-bottom: 1.4rem;
      height: auto;
      .topic {
        width: 7.07rem;
        margin: 0 auto;
        ul {
          width: 100%;
          li {
            width: 100%;
            height: 2.65rem;
            margin-top: 0.19rem;
            background: url("../../../assets/spot/jiatu-kd@2x.png");
            background-size: 100% 100%;
            padding-top: 0.61rem;
            .title {
              width: 100%;
              height: 0.75rem;
              background: rgba(47, 40, 75, 0.44);
              font-size: 0.28rem;
              font-family: "PingFang-SC-Regular";
              text-align: center;
              color: white;
              line-height: 0.75rem;
            }
          }
        }
      }
      .vote {
        width: 75%;
        margin: 0 auto;
        margin-top: 0.61rem;
        .title {
          width: 100%;
          text-align: center;
          // margin-top:.62rem;
          height: 0.28rem;
          font-size: 0.28rem;
          color: white;
          font-family: "PingFang-SC-Regular";
        }
        .or {
          width: 100%;
          height: 2.13rem;
          margin-top: 1.03rem;
          display: flex;
          justify-content: space-around;
          .agree,
          .oppose {
            width: 2.13rem;
            height: 2.13rem;
            background: #ccc;
            background: url("../../../assets/spot/icon1-ht@2x.png") no-repeat;
            background-size: 100% 100%;
            text-align: center;
            line-height: 1.9rem;
            font-size: 0.28rem;
            color: white;
          }
          .oppose {
            background: url("../../../assets/spot/icon2-ht@2x.png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .hotcomment {
        width: 100%;
        .title {
          width: 90%;
          margin: 0 auto;
          font-size: 0.28rem;
          color: white;
          padding-bottom: 0.24rem;
          opacity: 0.8;
          border-bottom: 0.01rem #fff solid;
          font-family: "PingFang-SC-Regular";
        }
        ul {
          width: 7.34rem;
          margin: 0 auto;
          li {
            width: 100%;
            min-height: 2.14rem;
            display: flex;
            padding-top: 0.24rem;
            border-bottom: 0.01rem solid rgba(235, 232, 249, 0.39);
            .left {
              width: 0.78rem;
              height: 100%;
              .headerphoto {
                width: 0.48rem;
                height: 0.48rem;
                border-radius: 50%;
                background: #000;
                margin: 0 auto;
                img {
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                }
              }
            }
            .right {
              width: 7.13rem;
              height: 100%;
              padding-right: 0.16rem;
              font-size: 0.26rem;
              color: #fff;
              font-family: "Courier New", Courier, monospace;
              opacity: 0.9;

              .uname {
                width: 100%;
                font-size: 0.28rem;
                display: flex;
                justify-content: space-between;
              }
              .sex {
                color: #999;
              }
              .vote {
                margin-top: 0.2rem;
                margin-left: 0;
                color: #dc7725;
              }
              .viewpoint {
                color: #ebe8f9;
              }
              .hfcontent{
                color: rgb(182, 175, 175);
              }
              .zandpl {
                width: 100%;
                display: flex;
                margin-top: 0.15rem;
                .z {
                  display: flex;
                  .dz {
                    width: 0.33rem;
                    height: 0.29rem;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  span {
                    margin-left: 0.2rem;
                    color: white;
                    font-size: 0.24rem;
                    margin-bottom: 0.3rem;
                  }
                }
                .pl {
                  margin-left: 1rem;
                  display: flex;
                  .hf {
                    width: 0.33rem;
                    height: 0.29rem;
                    img {
                      margin-left: 0;
                      width: 100%;
                      height: 100%;
                      margin-bottom: 0.3rem;
                    }
                  }
                  span {
                    margin-left: 0.2rem;
                    color: white;
                    font-size: 0.24rem;
                    margin-bottom: 0.3rem;
                  }
                }

                // .pl {
                //   margin-left: 1rem;
                // }
              }
            }
          }
        }
      }
    }
  }
  .coven {
    width: 100%;
    height: 100%;
    background: rgba(47, 40, 75, 0.8);
    position: fixed;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 5;
    .out {
      width: 6.12rem;
      height: 5.2rem;
      position: fixed;
      left: 0.7rem;
      top: 30%;
      background: #50445e;
      border-radius: 0.25rem;
      p {
        padding: 0.32rem 0 0 0.48rem;
        width: 100%;
        height: 0.88rem;
        border-bottom: 0.01rem solid #ccc;
        color: #9d98ae;
        font-size: 0.26rem;
      }
      .idea {
        width: 100%;
        height: 3.02rem;
        border-bottom: 1px solid #ccc;
        p {
          width: 100%;
          height: 0.84rem;
          padding-left: 0.48rem;
          font-size: 0.26rem;
          color: #9d98ae;
          border: none;
        }
        textarea {
          width: 100%;
          height: 2.18rem;
          background: #50445e;
          border: 0;
          outline: none;
          text-align: center;
          font-size: 0.24rem;
          color: #9d98ae;
        }
        .choice {
          width: 100%;
          height: 1.06rem;
          display: flex;
          margin-top: 0.1rem;
          .send {
            display: block;
            width: 50%;
            height: 1.06rem;
            line-height: 1.06rem;
            text-align: center;
            font-size: 0.3rem;
            color: #ad602b;
            border-left: 0.01rem solid #ccc;
          }
          .cancel {
            display: block;
            width: 50%;
            height: 1.06rem;
            line-height: 1.06rem;
            text-align: center;
            font-size: 0.3rem;
            color: #ccc;
          }
        }
      }
    }
  }
  .coventwo {
    width: 100%;
    height: 100%;
    background: rgba(47, 40, 75, 0.5);
    position: fixed;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 5;
    .out {
      width: 6.12rem;
      height: 5rem;
      position: fixed;
      left: 9%;
      top: 30%;
      background: #50445e;
      border-radius: 0.25rem;
      .top {
        //padding: 0.32rem 0 0 0.48rem;
        width: 100%;
        height: 0.88rem;
        border-bottom: 0.01rem solid #ccc;
        color: #9d98ae;
        font-size: 0.26rem;
        display: flex;
        align-items: center;
        .back {
          width: 0.22rem;
          height: 0.25rem;
          margin-left: 0.08rem;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        span {
          margin-left: 40%;
          width: 1rem;
        }
      }
      .idea {
        width: 100%;
        height: 3.02rem;
        border-bottom: 1px solid #ccc;
        .people {
          width: 100%;
          height: 2.9rem;
          font-size: 0.26rem;
          color: #9d98ae;
          border: none;
          .info {
            width: 100%;
            height: 1.2rem;
            margin: 0 auto;
            display: flex;
            .left {
              width: 0.83rem;
              height: 100%;
              margin-top: 0.46rem;
              span {
                display: block;
                width: 0.48rem;
                height: 0.48rem;
                border-radius: 50%;
                background: #fff;
                margin: 0 auto;
                img {
                  width: 100%;
                }
              }
            }
            .right {
              margin-top: 0.46rem;
              width: 5rem;
              p {
                width: 5rem;
                b {
                  font-size: 0.28rem;
                }
                span {
                  position: absolute;
                  right: 0.22rem;
                  top: 1.4rem;
                }
              }
            }
          }
          .other {
            margin-left: 0.84rem;
            font-size: 0.26rem;
            .othervote {
              color: #dc7725;
            }
            .otheropinion {
              color: #fffdfd;
              margin-top: 0.05rem;
              opacity: 0.8;
            }
          }
        }
        .choice {
          width: 100%;
          height: 1.06rem;
          display: flex;
          margin-top: 0.1rem;
          align-items: center;
          border-top: 0.01rem solid #ccc;
          input {
            width: 5rem;
            height: 0.45rem;
            border-radius: 0.3rem;
            margin-left: 0.18rem;
            background: #ebe8f9;
            outline: none;
            font-size: 0.24rem;
          }
          span {
            font-size: 0.32rem;
            color: #dc7725;
            margin-top: 0.03rem;
            margin-left: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
