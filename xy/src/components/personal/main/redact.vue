<template>
  <div id="redact">
    <div id="redactTop">
      <div id="left">
        <router-link :to="{name:'personal'}">
          <img src="@/assets/personImg/left.png">
        </router-link>
      </div>
      <div id="right">
        <router-link :to="{name:'personal'}">保存</router-link>>
      </div>
      <div id="qiebac" @click="handle()" >
        <img src="@/assets/personImg/prophoto.png">
      </div>
      <div id="tx" @click="handle()">
        <img :src="imgSrc">
      </div>
      <!-- 点击选取头像的动画 -->
      <transition
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
        appear-active-class="animated fadeInUp"
        :duration="250"
      >
        <div id="takePhoto" v-show="fade" ref="takephoto">
          <p @click="photo()">拍照</p>
          <p @click="photo()">从相册中选择</p>
          <input type="file" @change="handleChenge()" style="display:none" accept="image/*" >
        </div>
      </transition>
      <!-- 遮罩 -->
      <div id="mask" v-show="fade" @click.stop="hide()"></div>
    </div>
    <div id="redactBottom">
      <div id="form">
        <div class="name">
          <label>昵称</label>
          <input type="text" placeholder="此处最多6字" :value="personIndex.name">
        </div>
        <div class="sex">
          <label>性别</label>
          <input type="radio" name="sex" :checked="personIndex.gender">男
          <input type="radio" name="sex" :checked="personIndex.gender">女
        </div>
        <div class="address">
          <label>地址</label>
          <input type="text" :value="personIndex.address">
        </div>
        <div class="age">
          <label>年龄</label>
          <!-- 后端没有返回值 -->
          <input type="text" value="22">
        </div>
        <div class="data">
          <label>出生日期</label>
          <input type="datetime-local">
        </div>
        <div class="time">
          <label>出生时间</label>
          <input type="time">
        </div>
        <div class="proberbs">
          <label>个人箴言</label>
          <router-link :to="{name:'proberbs'}">
            <img src="@/assets/personImg/right.png">
          </router-link>
        </div>
      </div>
      <p>您的信息将用于定制您的每日运势</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vuex from "vuex";
export default {
  data() {
    return {
      fade: false,
      imgSrc: require("@/assets/personImg/bi.png")
    };
  },
  created() {
     this.handleIndex();
  },
  methods: {
    ...vuex.mapActions({
			handleIndex:"Main/handleIndex"
		}),
    handle() {
      this.fade = true;
    },
    hide() {
      this.fade = false;
    },
    photo() {
      this.fade = false;
      var dis = this.$refs.takephoto.querySelectorAll("input[type=file]");
      dis[0].click();
    },
    handleChenge(e) {
     var str=this.$refs.takephoto.querySelectorAll("input[type=file]")[0].files[0];
        var reader=new FileReader();
        reader.readAsDataURL(str);
        reader.onloadend = function (e) {
             this.imgSrc=e.target.result;
          const imgURL = window.URL.createObjectURL(str) ;
          //console.log(e.target.result,imgURL)    
        }
  }},
  computed: {
		...vuex.mapState({
  			personIndex:state=>state.Main.personIndex
		})
	},
};
</script>

<style lang="scss" >
#redact {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  #redactTop {
    width: 7.5rem;
    height: 5rem;
    background: url("../../../assets/personImg/proberbsback.png") center/7.5rem
      5rem no-repeat;
    #mask {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: black;
      opacity: 0.5;
    }
    #left > a {
      width: 0.5rem;
      height: 0.5rem;
      display: block;
      position: fixed;
      top: 0.4rem;
      left: 0.4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    #right > a {
      display: block;
      width: 0.6rem;
      height: 0.6rem;
      position: fixed;
      right: 0.4rem;
      top: 0.4rem;
      font-size: 0.3rem;
      font-family: PingFangSC-Regular;
      color: #fff;
    }
    #qiebac {
      width: 1.26rem;
      height: 1.26rem;
      position: fixed;
      top: 15%;
      left: 45%;
      border: 0.01rem dashed #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    #takePhoto {
      width: 7.5rem;
      height: 2rem;
      font-size: 0.24rem;
      color: #000;
      background:#fff ;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 10;
      p{
          height:1rem;
          line-height: 1rem;
          border-bottom: .01rem dashed #ccc;
          font-size:.30rem;
          text-align: center;
      }
    }
    #tx {
      width: 1.24rem;
      height: 1.24rem;
      border-radius: 50%;
      background: black;
      position: fixed;
      left: 0.2rem;
      top: 4.11rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.43rem;
        height: 0.43rem;
      }
    }
  }
  #redactBottom {
    background: rgba(34, 29, 59, 1);
    padding: 0.5rem 0;
    flex: 1;
    #form {
      width: 7.5rem;
      background: #2f284b;
      div {
        width: 7.5rem;
        height: 0.88rem;
        line-height: 0.88rem;
        border-bottom: 0.01rem solid rgba(49, 49, 49, 1);
        font-size: 0.28rem;
        color: #fff;
        label {
          display: inline-block;
          width: 3rem;
          padding: 0.1rem;
        }
        input {
          background: #2f284b;
          border: 0;
          color: #fff;
          font-size: 0.25rem;
        }
        img {
          width: 0.2rem;
          height: 0.28rem;
          float: right;
          margin: 0.3rem;
        }
      }
    }
    p {
      font-size: 0.24rem;
      height: 0.8rem;
      line-height: 0.8rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-align: center;
    }
  }
}
</style>

