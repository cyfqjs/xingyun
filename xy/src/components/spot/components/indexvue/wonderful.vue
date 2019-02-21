<template>
  <!-- 精彩文章列表 -->
  <div class="wonderful">
    <div class="wrapper" ref="homeWrapper">
      <div class="content">
        <ul>
          <li v-for="(item,index) in articles">
            <router-link :to="'essaycontent/'+item.id">
              <div class="logo"></div>
              <div class="logoright">
                <span class="title">{{item.title}}</span>
                <span class="glanceover">{{item.compliments}}人</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Axios from "axios";
import { Header } from "mint-ui";
export default {
  data() {
    return {
      articles: [
        // {
        //   compliments: "点赞数",
        //   id: "文章id",
        //   img_paths: null,
        //   name: "作者名字",
        //   pid: "详情表id",
        //   state: 0,
        //   times: 0,
        //   title: "文章标题"
        // },
        // {
        //   compliments: "点赞数",
        //   id: "文章id",
        //   img_paths: null,
        //   name: "作者名字",
        //   pid: "详情表id",
        //   state: 0,
        //   times: 0,
        //   title: "文章标题"
        // }
      ]

      // articles: []
    };
  },
  created() {
    let t=sessionStorage.getItem("token");
    this.t=t;
    Axios({
      method: "get",
      url: "http://39.96.91.169/StarOfSea/focus/getArtilces",
      headers:{
        accessToken:this.t
      }
    }).then(data => {
      
      this.articles = data.articles;
      console.log(this.articles);
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
.wonderful {
  width: 100%;
  margin: 0 auto;
  .wrapper {
    height: 10.3rem;
    overflow: hidden;
    .content {
      padding-bottom: 0.7rem;

      ul {
        width: 83.2%;
        margin: 0 auto;
        li {
          width: 100%; //6.24
          height: 1.6rem;
          margin-top: 0.2rem;
          border-radius: 0.1rem;
          color: white;
          display: flex;
          background: rgba(255, 255, 255, 0.19);
          font-family: "PingFang-SC-Regular";
          a {
            display: block;
            width: 100%;
            height: 100%;
            display: flex;
            border-radius: 0.1rem;
            color: white;
          }
          .logo {
            width: 27.8%;
            height: 1.58rem;
            border-radius: 0.1rem;
            background: url("../../../../assets/spot/hotjiatu-kd@2x.png");
            background-size: 100% 100%;
          }
          .logoright {
            width: 72.4%; //4.52
            height: 1.58rem;
            .title {
              display: block;
              width: 68.5%;
              height: 0.28rem;
              font-size: 0.28rem;
              margin-left: 0.56rem;
              margin-top: 0.18rem;
            }
            .glanceover {
              display: block;
              height: 0.24rem;
              margin-left: 2.6rem;
              margin-top: 0.58rem;
              font-size: 0.24rem;
            }
          }
        }
      }
    }
  }
}
</style>
