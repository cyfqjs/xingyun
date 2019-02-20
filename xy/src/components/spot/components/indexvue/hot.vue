<template>
<!-- 热门话题列表 -->
  <div class="hot">
    <div class="wrapper" ref="homeWrapper">
      <div class="content">
        <ul>
          <li v-for="(item,index) in hotlist">
            <router-link :to="'topiccontent/'+item.id">
              <!-- +item.topicid+'/'+item.backimg -->
              <div class="topic">{{item.content}}</div>
              <div class="praisecount">
                <span>评分：{{item.score}}</span>
                <!-- <span>{{item.praisepeoplehead[0]}}</span>
              <span>{{item.praisepeoplehead[1]}}</span>
                <span>{{item.praisepeoplehead[2]}}</span>-->
                <span class="praise">{{item.times}}人</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
// http://39.96.91.169:8080/StarOfSea-1.0-SNAPSHOT/focus/getArtilces
// http://39.96.91.169:8080/StarOfSea-1.0-SNAPSHOT/focus/getArticleDetails
// 折柳  下午 14:33:01
// http://39.96.91.169:8080/StarOfSea-1.0-SNAPSHOT/focus/getCurlycues
// http://39.96.91.169:8080/StarOfSea-1.0-SNAPSHOT/focus/getCurlycueDetails

<script>
import BScroll from "better-scroll";
import Axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      // content: "话题内容"
      // id: "话题id"
      // pid: "话题详情表id"[]
      // score: "评分"
      // times: "浏览次数"
      hotlist: [
        // {
        //   content: "分手可以体面吗",
        //   id: "1",
        //   times: 4536
        // },
      ]
    };
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      click: true,
      pullUpLoad: true
    });
  },
  created() {
    Axios({
      method: "get",
      url: "http://39.96.91.169:8080/StarOfSea/focus/getCurlycues"
    }).then(data => {
      this.hotlist = data.curlycues;
      console.log(data);
    });
  }
};
</script>
<style lang="scss" scoped>
.hot {
  width: 100%;
  height: 100%;
  .wrapper {
    height: 100%;
    overflow: hidden;
    .content {
      ul {
        width: 83.2%;
        margin: 0 auto;
        height: auto;
        padding-bottom: 3.5rem;
        li {
          width: 100%;
          height: 2.4rem;
          color: white;
          background: url("../../../../assets/spot/jiatu-kd@2x.png");
          background-size: 100% 100%;
          margin-top: .2rem;
          font-family: "PingFang-SC-Regular";
          .topic {
            width: 100%;
            height: .64rem;
            text-align: center;
            font-size: 0.26rem;
            color: white;
            line-height: 0.54rem;
            background: rgba(48, 16, 112, 0.3);
          }
          .praisecount {
            width: 100%;
            height: 0.54rem;
            line-height: 0.54rem;
            margin-top: 1.23rem;
            background: rgba(47, 14, 111, 0.3);
            display: flex;
            position: relative;
            align-items: center;
            span {
              color: #fff;
              padding-left: .1rem;
            }
            .praise {
              height: 0.48rem;
              display: block;
              position: absolute;
              right: 0.5rem;
              border-radius: 0;
              background: none;
              color: white;
              font-size: 0.22rem;
            }
            a {
              color: white;
              margin-right: 0.15rem;
            }
          }
        }
      }
    }
  }
}

</style>
