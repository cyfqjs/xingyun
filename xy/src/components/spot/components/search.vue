<template>
  <div class="app">
    <div class="search">
      <span class="back" @click="back()">
        <img src="../../../assets/spot/icon_fh_dt@2x.png">
      </span>
      <span class="searchicon">
        <img src="../../../assets/spot/icon1-kd@2x.png">
      </span>
      <input type="text" placeholder="请输入博主ID" v-model="searchcontent" @keyup="search()">
    </div>
    <div class="wrapper" ref="homeWrapper">
      <div class="content">
        <ul>
          <li v-for="(item,index) in list">
            <span>
              <img :src="item.imgpath">
            </span>
            <div class="user">
              <h2>{{item.name}}</h2>
              <p>{{item.gender}}</p>
              <p>{{item.constellat}}</p>
              <h5>箴言:{{item.brief}}</h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Axios from "axios";
export default {
  data() {
    return {
      searchcontent: "",
      list: [],
      t: ""
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
    let t = sessionStorage.getItem("token");
    this.t = t;
  },
  methods: {
    search(){
      Axios({
        method: "post",
        url: "http://39.96.91.169/StarOfSea/action/searchUser",
        data: {
          search: this.searchcontent
        },
        headers: {
          accessToken: this.t
        }
      }).then(data => {
        //console.log(data);
        this.list = data.users;
        //console.log(this.list);
      });
    },
    back() {
      this.$router.history.push("/spot");
    }
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

  .search {
    text-align: center;
    height: 1.6rem;
    position: relative;
    img{
      width: .3rem;
    }
    .back {
      display: block;
      position: absolute;
      left: 0.2rem;
      top: 1rem;
      width:.4rem;
      img{
        width: 100%;
      }
    }
    .searchicon {
      display: block;
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
    input {
      width: 6rem;
      height: 0.6rem;
      background: #3d326c;
      border-radius: 0.3rem;
      border: none;
      outline: none;
      font-size: 0.28rem;
      color: #cdcdcd;
      margin-top: 0.9rem;
      margin-bottom: 0.7rem;
      padding-left: 0.2rem;
      z-index: 3rem;
    }
  }
  .wrapper {
    height: 88%;
    z-index: 33;
    overflow: hidden;
    margin-top: 0;
    .content {
      width: 90%;
      margin: 0.2rem auto;
      padding-bottom: .3rem;
      ul {
        width: 100%;
        li {
          width: 100%;
          height: 1rem;
          margin-top: 0.7rem;
          display: flex;
          align-items: center;
          span {
            display: block;
            width: 1.05rem;
            margin-left: 0.2rem;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .user {
            width: 82%;
            height: 100%;
            margin-left: 0.1rem;
            margin-top: 0.1rem;
            h2 {
              font-size: 0.34rem;
              color: #f7ebeb;
              font-weight: 300;
              margin-top: 0.07rem;
            }
            p {
              font-size: 0.22rem;
              display: inline-block;
              color: #f7ebeb;
              margin-top: 0.04rem;
              margin-left: 0.08rem;
            }
            h5 {
              font-size: 0.22rem;
              color: #f7ebeb;
              font-weight: 100;
              margin-top: 0.05rem;
              margin-left: 0.08rem;
            }
          }
        }
      }
    }
  }
}
</style>
