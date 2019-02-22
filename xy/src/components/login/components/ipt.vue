<template>
  <div id="ipt">
    <form id="form1" @submit.prevent="handle() " method="post">
      <label>
        <span class="iconUser"></span>
        <input
          type="text"
          :value="username"
          @blur="handleName($event)"
          id="uname"
          placeholder="请输入用户名"
        >
      </label>
      <br>
      <div class="sBlock">
        <span class="iconCode"></span>
        <input
          :type="inputType"
          :value="password"
          id="pwd"
          @blur="handlePwd($event)"
          placeholder="请输入密码"
        >
        <span class="iconEye" @click="eyeClick"></span>
      </div>
      <br>
      <input id="btn" type="submit" value="登录">
    </form>
    <div class="aBtn clear">
      <!--<a class="jump" href="#">立即注册</a>-->
      <router-link :to="{name:'regone'}">
        <span class="jump">立即注册</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      eye: true,
      inputType: "password"
    };
  },
  computed: {
    ...Vuex.mapState({
      username: state => state.loginBlock.username,
      password: state => state.loginBlock.password,
      flagName: state => state.loginBlock.flagName,
      flagPwd: state => state.loginBlock.flagPwd,
    })
  },
  methods: {
    ...Vuex.mapMutations({
      handleName: "loginBlock/handleName",
      handlePwd: "loginBlock/handlePwd",
      clearPwd: "loginBlock/clearPwd",
    }),
    eyeClick() {
      if (this.eye) {
        this.eye = false;
        this.inputType = "password";
      } else {
        this.eye = true;
        this.inputType = "text";
      }
    },
    handle() {
      if (this.flagPwd && this.flagName) {
        if (this.username == "" || this.password == "") {
          alert("用户名或密码不能为空");
        } else {
          axios({
            url: "http://39.96.91.169/StarOfSea/login/userLogin",
            method: "post",
            data: {
              username: this.username,
              password: this.password
            }
          })
            .then(data => {
              if (data.code == 0) {
                Toast({
                  message: data.msg,
                  duration: 1000,
                  className: "sty"
                });
                this.clearPwd();
              } else {
                sessionStorage.setItem('userMessage',JSON.stringify(data.user));
                sessionStorage.setItem('token',data.token);
                Toast({
                  message: "登陆成功",
                  duration: 1000,
                  className: "sty"
                });
                this.$router.push("../../hPage");
              }
            })
            .catch(err => {
            });
        }
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
.sty {
  left: 50% !important;
  top: 50% !important;
  .mint-toast-text {
    font-size: 0.48rem;
  }
}
#ipt {
  width: 6.22rem;
  margin: 0 auto;
  #form1 {
    width: 6.22rem;
    text-align: center;
    label,
    .sBlock {
      position: relative;
      .iconUser {
        display: block;
        height: 0.36rem;
        width: 0.37rem;
        position: absolute;
        top: -0.1rem;
        left: 0.39rem;
        background: url(../../../assets/login/icon_zh@2x.png) no-repeat center;
        background-size: 100% 100%;
      }
      .iconCode {
        display: block;
        height: 0.46rem;
        width: 0.32rem;
        position: absolute;
        top: 0.4rem;
        left: 0.39rem;
        background: url(../../../assets/login/icon_mm@2x.png) no-repeat center;
        background-size: 100% 100%;
      }
      .iconEye {
        display: block;
        height: 0.46rem;
        width: 0.32rem;
        position: absolute;
        z-index: 10;
        top: 0.45rem;
        right: 0.4rem;
        background: url(../../../assets/login/icon_mmkj@2x.png) no-repeat center;
        background-size: 100% 100%;
      }
      #uname {
        width: 6.24rem;
        height: 0.9rem;
        background: rgba(255, 255, 255, 1);
        opacity: 0.3;
        border: 0;
        border-radius: 0.44rem;
        margin-top: 1.1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        outline: medium;
        font-size: 0.32rem;
      }
      #pwd {
        width: 6.24rem;
        height: 0.9rem;
        background: rgba(255, 255, 255, 1);
        opacity: 0.3;
        border: 0;
        border-radius: 0.44rem;
        margin: 0.2rem 0;
        outline: medium;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 0.32rem;
      }
    }

    #btn {
      width: 6.24rem;
      height: 0.9rem;
      background: rgba(255, 255, 255, 0.3);
      border: 0;
      border-radius: 0.44rem;
      color: #fff;
      font-family: PingFang-SC-Medium;
      font-size: 0.42rem;
      outline: medium;
    }
  }
  .aBtn {
    .jump {
      float: right;
      display: block;
      margin-top: 0.2rem;
      line-height: 0.22rem;
      height: 0.22rem;
      font-size: 0.24rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>