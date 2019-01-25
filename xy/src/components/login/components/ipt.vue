<template>
  <div id="ipt">
    <form id="form1" @submit.prevent="handle()" method="post">
      <label>
        <span class="iconUser"></span>
        <input
          type="text"
          :value="username"
          @blur="handleName($event) ,handleName1()"
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
          @blur="handlePwd($event),handlePwd1()"
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
      flagName: "",
      flagPwd: "",
      eye: true,
      inputType: "password"
    };
  },
  computed: {
    ...Vuex.mapState({
      username: state => state.loginBlock.username,
      password: state => state.loginBlock.password
    })
  },
  methods: {
    ...Vuex.mapMutations({
      handleName: "loginBlock/handleName",
      handlePwd: "loginBlock/handlePwd",
      clearPwd: "loginBlock/clearPwd"
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
    handleName1() {
      var regp = /1(3|5|7|8)[0-9]{9}/;
      var rege = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
      if (regp.test(this.username) || rege.test(this.username)) {
        this.flagName = true;
        // s1.innerHTML = "合法";
        // alert();
        console.log("right");
      } else {
        this.flagName = false;
        // s1.innerHTML = "不合法";
        // alert("请输入正确的手机号或密码");
        Toast({
          message: "手机号或邮箱错误",
          duration: 1000,
          className: "sty"
        });
        console.log("err");
      }
    },
    handlePwd1() {
      var reg = /^[0-9A-Za-z]{6,8}$/;
      if (reg.test(this.password)) {
        this.flagPwd = true;
      } else {
        if (this.password.length < 6 || this.password.length > 8) {
          Toast({
            message: "密码应为6-8位",
            duration: 1000,
            className: "sty"
          });
          this.flagPwd = false;
        }
        console.log("err");
      }
    },
    handle() {
      // console.log(this);
      // console.log(this.username, this.password);

      if (this.flagPwd && this.flagName) {
        if (this.username == "" || this.password == "") {
          alert("用户名或密码不能为空");
        } else {
          // console.log(this.username,this.password);这个地方是访问不到空的用户名和密码的。
          // let data = { username: this.username, password: this.password };
          axios({
            url: "http://39.96.91.169:8080/StarOfSea/login/userLogin",
            method: "post",
            data: {
              username: this.username,
              password: this.password
            }
          })
            .then(data => {
              console.log(data);
              // console.log(data.data.data[0].username, data.data.data[0].password);
              // if(this.username == data.data.data[0].username &&this.password == data.data.data[0].password){
              //   alert("登陆成功");
              //   this.$router.push("../../recommend");
              // }else{
              //   alert("err");
              // }
              if (data.code == 0) {
                Toast({
                  message: data.msg,
                  duration: 1000,
                  className: "sty"
                });
                console.log(this.password);
                this.clearPwd();
              } else {
                Toast({
                  message: data.msg,
                  duration: 1000,
                  className: "sty"
                });
                this.$router.push("../../recommend");
              }
            })
            .catch(err => {
              console.log(err);
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
  // left: 56% !important;
  // top: 59% !important;
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
      }
      .iconCode {
        display: block;
        height: 0.46rem;
        width: 0.32rem;
        position: absolute;
        top: 0.4rem;
        left: 0.39rem;
        background: url(../../../assets/login/icon_mm@2x.png) no-repeat center;
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