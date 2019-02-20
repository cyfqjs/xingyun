<template>
  <div class="stop">
    <div class="search">
      <p>看点</p>
      <router-link to="search">
        <input type="text" placeholder="请输入博主ID" v-model="searchcontent" @keyup="search()">
        <button>
          <img src="../../assets/spot/icon1-kd@2x.png">
        </button>
      </router-link>
      <p>{{constellation}}</p>
    </div>
    <!--热门话题与精彩文章组建切换-->
    <div class="navl">
      <div class="nav">
        <ul>
          <li
            v-for="(item,index) in navs"
            @click="handleTo(index)"
            :class="activeindex==index?'active':''"
          >{{item}}</li>
        </ul>
      </div>

      <component :is="conName"></component>
    </div>
    <div class="smal" @click="hendleshow">
      <img src="@/assets/spot/icon3-kd@2x.png">
    </div>

    <div class="constellation" v-show="flag" >
      <div class="wrapper" ref="homeWrapper">
        <div class="content">
          <ul>
            <li v-for="(item,index) in constellationlist" @click="selectconstellation(index)">
              <img :src="item">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Hot from "./components/indexvue/hot";
import Wonderful from "./components/indexvue/wonderful";
import axios from "axios";
// import qs from "qs";
export default {
  components: {
    "hot-com": Hot,
    "wonderful-com": Wonderful
  },

  //   http://39.96.91.169:8080/StarOfSea-1.0-SNAPSHOT/focus/getCurlycues
  data() {
    return {
      navs: ["热门话题", "精彩文章"],
      searchcontent: "",
      activeindex: 0,
      conName: "hot-com",
      flag: false,
      constellation:"水瓶座",
      selectconstellationlist:["白羊座","巨蟹座","摩羯座","双子座","狮子座","天秤座","射手座","处女座","金牛座","天蝎座","水瓶座","双鱼座"],
      constellationlist: [
        require('../../assets/spot/ascendant_aries_icon.png'),
        require('../../assets/spot/ascendant_cancer_icon.png'),
        require('../../assets/spot/ascendant_capricorn_icon.png'),
        require('../../assets/spot/ascendant_gemini_icon.png'),
        require('../../assets/spot/ascendant_leo_icon.png'),
        require('../../assets/spot/ascendant_libra_icon.png'),
        require('../../assets/spot/ascendant_sagittarius_icon.png'),

        require('../../assets/spot/ascendant_virgo_icon.png'),
        require('../../assets/spot/ascendant_taurus_icon.png'),
        require('../../assets/spot/ascendant_scorpio_icon.png'),
        require('../../assets/spot/ascendant_aquarius_icon.png'),
        require('../../assets/spot/ascendant_pisces_icon.png')
      ]
    };
  },
  methods: {
    search() {
      axios
        .post("http://39.96.91.169/StarOfSea/action/searchUser", {
          search: this.searchcontent
        })
        .then(data => {
          console.log(data);
        });
    },
    handleTo(index) {
      if (index == 0) {
        this.conName = "hot-com";
      } else if (index == 1) {
        this.conName = "wonderful-com";
      }
      this.activeindex = index;
    },
    hendleshow() {
      this.flag = true;
    },
    selectconstellation(val){
      this.flag=false;
      this.constellation=this.selectconstellationlist[val];
      
      
    }
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      click: true,
      pullUpLoad: true,
      scrollX: true,
      freeScroll: true,
      bounce: true
    });
    console.log(this.scroll);
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.stop {
  width: 100%;
  height: 100%;
  background: url("../../assets/spot/tucen1@2x.png");
  background-size: 100% 100%;
  text-align: center;
  padding-top: 0.1rem;
  position: relative;
  .search {
    width: 100%;
    height: 1.3rem;
    padding-top: 0.4rem;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #2f284a;
    opacity: 0.8;
    p {
      font-size: 0.32rem;
      color: white;
    }
    a {
      width: 3.56rem;
      display: flex;
      justify-content: space-between;
      input {
        width: 3.56rem;
        height: 0.42rem;
        background: #3d326c;
        border-radius: 0.1rem;
        border: none;
        outline: none;
        font-size: 0.28rem;
        color: #cdcdcd;
      }
      button {
        width: 0.4rem;
        height: 0.42rem;
        margin-left: -1.22rem;
        border-radius: 0.1rem;
        border: none;
        background: #3d326c;
        outline: none;
        img {
          width: 60%;
        }
      }
    }
  }
  .navl {
    height: 100%;
    margin-top: 1.3rem;
    .nav {
      width: 93.3%;
      height: 7.8%;
      display: flex;
      justify-content: space-between;
      background: #2f284a;
      align-items: center;
      margin: 0.16rem auto;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        background: #2f284a;
        align-items: center;
        margin: 0.16rem auto;
        li {
          width: 50%;
          height: 100%;
          background: #2f284a;
          display: flex;
          align-items: center;
          justify-content: space-around;
          color: white;
          font-size: 0.28rem;
          text-align: center;
          font-family: "PingFang-SC-Regular";
        }
        .active {
          background: #3e326b;
        }
      }
    }
  }
  .smal {
    width: 0.67rem;
    height: 0.67rem;
    position: absolute;
    top: 6.49rem;
    left: 7.1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .constellation {
    width: 100%;
    height: 13.34rem;
    background: rgba(61, 50, 108, 0.7);
    z-index: 9;
    position: absolute;
    top: 0;
    .wrapper {
      width: 7.5rem;
      height: 2.75rem;
      position: absolute;
      top: 6.02rem;
      left: 0;
      overflow: hidden;
      //background: rgba(61, 50, 108, 0.7);
      .content {
        width: 23rem;
        height: 2.75rem;
        ul {
          width: 23rem;
          height: 2.75rem;
          // margin-top: 6.02rem;
          display: flex;
          overflow: hidden;
          li {
            width: 1.33rem;
            height: 1.33rem;
            margin: 0 0.3rem 0 0.3rem;
            // margin: 0 0.1rem 0 0.1rem;
            float: left;
            img {
              width: 1.33rem;
              height: 1.33rem;
            }
          }
        }
      }
    }
  }
}
</style>