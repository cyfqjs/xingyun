<template>
  <div id="ipt">
    <form id="form1" @submit.prevent="handle()" method="post">
      <label>
        <span class="iconUser"></span>
        <input type="text" v-model="username" @blur="handleName" id="uname" placeholder="请输入手机号或邮箱">
      </label>
      <br>
      <label>
        <span class="iconCode"></span>
        <input type="password" id="pwd" @blur="handlePwd" v-model="password" placeholder="********">
        <span class="iconEye"></span>
      </label>
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
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      flagName: "",
      falgPwd: ""
    };
  },
  methods: {
    handleName() {
      var regp = /1(3|5|7|8)[0-9]{9}/;
      var rege = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
      if (regp.test(this.username) || rege.test(this.username)) {
        this.flagName = true;
        // s1.innerHTML = "合法";
        // alert(1);
        console.log("right");
      } else {
        this.flagName = false;
        // s1.innerHTML = "不合法";
        // alert(0);
        console.log("err");
      }
    },
    handlePwd(){
      var reg = /^[0-9A-Za-z]{6}$/;
      if(reg.test(this.password)){
        this.falgPwd = true;
        // alert(1);
        
      }else{
        this.flagPwd = false;
        // alert(0);
        console.log("err");
      }
    },
    handle() {
      console.log(this.username, this.password);
      if (this.username == "" || this.password == "") {
        alert("用户名或密码不能为空");
      } else {
        // console.log(this.username,this.password);这个地方是访问不到空的用户名和密码的。
        let data = { username: this.username, password: this.password };
        axios({
          methods: "post",
          url: "/api/mock/5c384148422c0541bcaa485c/example/login",
          params: data,
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        })
          .then(data => {
            console.log(data.data.data[0].username, data.data.data[0].password);
            // if(this.username == data.data.data[0].username &&this.password == data.data.data[0].password){
            //   alert("登陆成功");
            //   this.$router.push("../../recommend");
            // }else{
            //   alert("err");
            // }

            this.$router.push("../../recommend");

            // if(data.ucode == 0){
            //    alert("用户名不存在");
            // }else{
            //   if(data.pcode == 0){
            //     alert("账号密码不匹配，请重新输入");
            //   }else{
            //     alert("登陆成功");
            //     this.$router.push("../../recommend");
            //   }
            // }
          })
          .catch(err => {
            console.log(err);
          });
      }

      //
      // return false;
    }
  }
};
</script>

<style lang="scss">
#ipt {
  width: 6.22rem;
  margin: 0 auto;
  #form1 {
    width: 6.22rem;
    text-align: center;
    label {
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
        top: -0.1rem;
        left: 0.39rem;
        background: url(../../../assets/login/icon_mm@2x.png) no-repeat center;
      }
      .iconEye {
        display: block;
        height: 0.46rem;
        width: 0.32rem;
        position: absolute;
        top: -0.1rem;
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