<template>
  <div id="two">
    <ul>
      <li
        v-for="(item,index) in navs"
        v-bind="{class:activeIndex == index? 'active':''}"
        @click="handleToggle(index)"
      >{{item.mode}}</li>
    </ul>
    <div class="bot">
      <div class="reg" v-show="flag">
        <!-- 手机号注册 -->
        <form class="form2" @submit="toTwo" action>
          <label>
            <span>{{phone}}:</span>
            <i class="pIcon"></i>
            <input v-model="phoneNumber" class="pNumber" type="text" @blur="handleNum()">
          </label>
          <br>
          <div class="sBlock">
            <span>密码:</span>
            <i class="mIcon"></i>
            <input class="pwd1" v-model="pwd1" :type="inputType" @blur="handlePwd1()">
            <i class="eye1" @click="eyeClick"></i>
          </div>
          <br>
          <div class="sBlock">
            <span>确认密码</span>
            <i class="mIcon"></i>
            <input class="pwd2" v-model="pwd2" :type="inputType2" @blur="handlePwd2()">
            <i class="eye1" @click="eyeClick2"></i>
          </div>
          <br>
          <div class="identifying">
            <span>验证码:</span>
            <i class="cIcon" @click.stop="sendYzm()">
              <b v-show="show">{{authTime}}</b>
              {{message}}
            </i>
            <input class="pCode" type="text" v-model="code" @blur="handleYzm()">
          </div>

          <br>
          <input class="pReg" type="submit" value="注册">
        </form>
      </div>

      <!-- 邮箱注册 -->
      <div class="reg" v-show="!flag">
        <form class="form2" @submit="etoTwo">
          <label>
            <span>{{email}}:</span>
            <i class="eIcon"></i>
            <input type="text" v-model="emailContent" @blur="eFn">
          </label>
          <br>
          <div class="eBlock">
            <span>密码:</span>
            <i class="mIcon"></i>
            <input :type="inputType" v-model="ePwd1" @blur="pFn1" class="ePwd1">
            <i class="eye1" @click="eyeClick"></i>
          </div>
          <br>
          <div class="eBlock">
            <span>确认密码</span>
            <i class="mIcon"></i>
            <input :type="inputType2" v-model="ePwd2" class="ePwd2" @blur="pFn2">
            <i class="eye1" @click="eyeClick2"></i>
          </div>
          <br>
          <div class="yzmBlock">
            <span>验证码:</span>
            <i class="cIcon" @click.stop="sendYzm2()"> <b v-show="show">{{authTime}}</b>
              {{message}}</i>
            <input class="pCode" type="text" v-model="code2" @blur="handleYzm2()">
          </div>
          <br>
          <input class="eReg" type="submit" value="注册">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      navs: [{ mode: "手机注册" }, { mode: "邮箱注册" }],
      activeIndex: 0,
      flag: true,
      phone: "手机号",
      email: "邮箱号",
      phoneNumber: "",
      pFlag: "",
      pwd1: "",
      flagPwd1: "",
      pwd2: "",
      flagPwd2: "",
      code: "",
      flagCode: "",

      code2: "",
      falgCode2: "",
      codeFwq: "",
      codeFwqe: "",
      ePwd2: "",
      ePwd1: "",
      emailContent: "",
      eFlag: "",

      eye: true,
      inputType: "password",
      eye2: true,
      inputType2: "password",

      show: false,
      message: "发送验证码",
      authTime: "60"
    };
  },
  methods: {
    //小眼睛
    eyeClick() {
      if (this.eye) {
        this.eye = false;
        this.inputType = "password";
      } else {
        this.eye = true;
        this.inputType = "text";
      }
    },
    eyeClick2() {
      if (this.eye2) {
        this.eye2 = false;
        this.inputType2 = "password";
      } else {
        this.eye2 = true;
        this.inputType2 = "text";
      }
    },
    // 手机事宜
    handleNum() {
      var regp = /1(3|5|7|8)[0-9]{9}/;
      if (regp.test(this.phoneNumber)) {
        this.pFlag = true;
        console.log("right");
      } else {
        this.pFlag = false;
        console.log("err");
        Toast({
          message: "请输入正确的手机号",
          duration: 1000,
          className: "sty"
        });
        return;
      }
    },
    handlePwd1() {
      var reg = /^[a-zA-Z0-9]{6,8}$/;
      if (reg.test(this.pwd1)) {
        this.flagPwd1 = true;
        console.log("right");
      } else {
        this.flagPwd1 = false;
        console.log("err");
        Toast({
          message: "请输入6-8位密码",
          duration: 1000,
          className: "sty"
        });
        return;
      }
    },
    handlePwd2() {
      if (this.pwd2 != this.pwd1) {
        this.flagPwd2 = false;
        console.log("err");
        Toast({
          message: "两次输入密码不一致",
          duration: 1000,
          className: "sty"
        });
        return;
      } else {
        if (this.pwd2 == "") {
          Toast({
            message: "请输入密码",
            duration: 1000,
            className: "sty"
          });
        } else {
          this.flagPwd2 = true;
          console.log("right");
        }
      }
    },
    handleYzm() {
      if (this.codeFwq != this.code) {
        this.flagCode = false;
        Toast({
          message: "验证码错误",
          duration: 1000,
          className: "sty"
        });
      } else {
        if (this.code == "") {
          Toast({
            message: "请输入验证码",
            duration: 1000,
            className: "sty"
          });
        } else {
          this.flagCode = true;
        }
      }
    },
    sendYzm() {
      if (this.phoneNumber == "") {
        Toast({
          message: "请先输入手机号",
          className: "sty"
        });
      } else {
        if (!this.show) {
          this.message = "秒后重新发送";
          this.show = true;
          var timer = setInterval(() => {
            this.authTime--;
            if (this.authTime <= 0) {
              this.show = false;
              this.message = "发送验证码";
              clearInterval(timer);
              this.authTime = "60";
            }
          }, 1000);
        }
        axios({
          url: "http://39.96.91.169:8080/StarOfSea/login/phoneCode",
          method: "post",
          data: {
            phone: this.phoneNumber
          }
        })
          .then(data => {
            this.codeFwq = data.code;
            console.log(this.codeFwq);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },

    handleToggle(index) {
      this.activeIndex = index;
      for (var i = 0; i < this.navs.length; i++) {
        this.flag = true;
        if (i == index) {
          this.flag = false;
        }
      }
    },
    toTwo() {
      if (
        this.phoneNumber == "" ||
        this.pwd1 == "" ||
        this.pwd2 == "" ||
        this.code == ""
      ) {
        alert("请填写所有表单项");
      } else {
        axios({
          url: "http://39.96.91.169:8080/StarOfSea/login/createUser",
          method: "post",
          data: {
            username: this.phoneNumber,
            password: this.pwd1
          }
        }).then(data => {
          if (this.pFlag && this.flagPwd1 && this.flagPwd2 && this.flagCode) {
            console.log(data);
            if (data.code == 1) {
              this.$router.push("../../regtwo");
            } else {
              return false;
            }
          }
        });
      }
      return false;
    },
    // 邮箱事宜
    eFn() {
      var rege = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
      if (rege.test(this.emailContent)) {
        this.eFlag = true;
        console.log("right");
      } else {
        this.eFlag = false;
        console.log("err");
        Toast({
          message: "请输入正确的邮箱号",
          duration: 1000,
          className: "sty"
        });
      }
    },
    pFn1() {
      var reg = /^[a-zA-Z0-9]{6,8}$/;
      if (reg.test(this.ePwd1)) {
        this.flagPwd1 = true;
        console.log("right");
      } else {
        this.flagPwd1 = false;
        console.log("err");
        Toast({
          message: "请输入6-8位密码",
          duration: 1000,
          className: "sty"
        });
        return;
      }
    },
    pFn2() {
      if (this.ePwd2 != this.ePwd1) {
        this.flagPwd2 = false;
        console.log("err");
        Toast({
          message: "两次输入密码不一致",
          duration: 1000,
          className: "sty"
        });
      } else {
        if (this.ePwd2 == "") {
          Toast({
            message: "请输入密码",
            duration: 1000,
            className: "sty"
          });
        } else {
          this.flagPwd2 = true;
          console.log("right");
        }
      }
    },
    handleYzm2() {
      if (this.codeFwqe != this.code2) {
        this.flagCode2 = false;
        Toast({
          message: "验证码错误",
          duration: 1000,
          className: "sty"
        });
      } else {
        if (this.code2 == "") {
          Toast({
            message: "请输入验证码",
            duration: 1000,
            className: "sty"
          });
        } else {
          this.flagCode2 = true;
          Toast({
            message: "验证码正确",
            duration: 1000,
            className: "sty"
          });
        }
      }
    },
    sendYzm2() {
      if (this.emailContent == "") {
        Toast({
          message: "请先输入邮箱",
          className: "sty"
        });
      } else {
        if (!this.show) {
          this.message = "秒后重新发送";
          this.show = true;
          var timer = setInterval(() => {
            this.authTime--;
            if (this.authTime <= 0) {
              this.show = false;
              this.message = "发送验证码";
              clearInterval(timer);
              this.authTime = "60";
            }
          }, 1000);
        }
        axios({
          url: "http://39.96.91.169:8080/StarOfSea/login/emailCode",
          method: "post",
          data: {
            email: this.emailContent
          }
        })
          .then(data => {
            this.codeFwqe = data.code;
            console.log(this.codeFwqe);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    etoTwo() {
      if (
        this.emailContent == "" ||
        this.ePwd1 == "" ||
        this.ePwd2 == "" ||
        this.code2 == ""
      ) {
        alert("请填写所有表单项");
      } else {
        axios({
          url: "http://39.96.91.169:8080/StarOfSea/login/createUser",
          method: "post",
          data: {
            username: this.emailContent,
            password: this.ePwd1
          }
        }).then(data => {
          if (this.eFlag && this.flagPwd1 && this.flagPwd2 && this.flagCode2) {
            console.log(data);
            if (data.code == 1) {
              this.$router.push("../../regtwo");
            } else {
              return false;
            }
          }
        });
      }
      return false;
    }
  }
};
</script>

<style lang="scss">
.sty {
  left: 56% !important;
  top: 59% !important;
  .mint-toast-text {
    font-size: 0.48rem;
  }
}
#two {
  ul {
    margin-top: 0.6rem;
    display: flex;
    justify-content: center;
    li {
      width: 3.4rem;
      height: 0.6rem;
      background: #cc3333;
      text-align: center;
      line-height: 0.6rem;
      background-color: rgba(255, 255, 255, 0.3);
      color: #fff;
      border-radius: 0.2rem;
      font-size: 0.28rem;
    }
    .active {
      background: red;
      color: #000;
    }
  }
  .bot {
    padding-top: 0.4rem;
    .reg {
      .form2 {
        padding-left: 0.4rem;
        label {
          display: flex;
          position: relative;
          .pIcon,
          .eIcon {
            display: block;
            width: 0.3rem;
            height: 0.4rem;
            position: absolute;
            left: 1.7rem;
            top: 0.25rem;
            background: url(../../../../assets/login/icon_dx@2x.png) no-repeat
              center;
          }
          .eIcon {
            width: 0.41rem;
            left: 1.6rem;
            background: url(../../../../assets/login/icon_yx@2x.png) no-repeat
              center;
          }
          .mIcon {
            display: block;
            width: 0.3rem;
            height: 0.4rem;
            position: absolute;
            left: 1.7rem;
            top: 0.25rem;
            background: url(../../../../assets/login/icon_mm@2x.png) no-repeat
              center;
          }
          .eye1 {
            display: block;
            width: 0.4rem;
            height: 0.4rem;
            position: absolute;
            right: 1rem;
            top: 0.25rem;
            cursor: pointer;
            background: url(../../../../assets/login/icon_mmkj@2x.png) no-repeat
              center;
          }
          .cIcon {
            width: 1.6rem;
            height: 0.4rem;
            line-height: 0.38rem;
            display: block;
            position: absolute;
            z-index: 1;
            right: 1rem;
            top: 0.24rem;
            font-style: normal;
            font-size: 0.28rem;
            border: 1px red solid;
            border-radius: 0.2rem;
            color: #fff;
            text-align: center;
            background: rgba(0, 0, 0, 0.3);
            // display: none;
          }
          .cIcon2 {
            width: 1.6rem;
            height: 0.4rem;
            line-height: 0.38rem;
            display: block;
            position: absolute;
            right: 1rem;
            top: 0.24rem;
            font-style: normal;
            font-size: 0.28rem;
            border: 1px red solid;
            border-radius: 0.2rem;
            color: #fff;
            text-align: center;
            background: rgba(0, 0, 0, 0.3);
            display: none;
          }
          span {
            display: block;
            width: 1.2rem;
            color: #fff;
            line-height: 0.9rem;
            font-size: 0.28rem;
            font-weight: bold;
            margin-right: 0.2rem;
            text-align-last: justify;
            text-align: justify;
            text-justify: distribute-all-lines;
          }
          input {
            width: 5rem;
            height: 0.9rem;
            line-height: 0.9rem;
            background: rgba(255, 255, 255, 1);
            opacity: 0.3;
            border: 0;
            border-radius: 0.22rem;
            outline: medium;
            padding-left: 0.8rem;
            padding-right: 0.8rem;
            font-size: 0.32rem;
          }
          .pCode {
            width: 3rem;
            padding-right: 0;
          }
        }
        .sBlock , .eBlock{
          display: flex;
          position: relative;
          span {
            display: block;
            width: 1.2rem;
            color: #fff;
            line-height: 0.9rem;
            font-size: 0.28rem;
            font-weight: bold;
            margin-right: 0.2rem;
            text-align-last: justify;
            text-align: justify;
            text-justify: distribute-all-lines;
          }
          .eye1 {
            display: block;
            width: 0.4rem;
            height: 0.4rem;
            position: absolute;
            z-index: 10;
            right: 1rem;
            top: 0.25rem;
            cursor: pointer;
            background: url(../../../../assets/login/icon_mmkj@2x.png) no-repeat
              center;
          }
          .pwd1,
          .pwd2 , .ePwd1 ,.ePwd2{
            width: 5rem;
            height: 0.9rem;
            line-height: 0.9rem;
            background: rgba(255, 255, 255, 1);
            opacity: 0.3;
            border: 0;
            border-radius: 0.22rem;
            outline: medium;
            padding-left: 0.8rem;
            padding-right: 0.8rem;
            font-size: 0.32rem;
          }
          .mIcon {
            display: block;
            width: 0.3rem;
            height: 0.4rem;
            position: absolute;
            left: 1.7rem;
            top: 0.25rem;
            background: url(../../../../assets/login/icon_mm@2x.png) no-repeat
              center;
          }
        }
        
        .yzmBlock {
          display: flex;
          position: relative;
          span {
            display: block;
            width: 1.2rem;
            color: #fff;
            line-height: 0.9rem;
            font-size: 0.28rem;
            font-weight: bold;
            margin-right: 0.2rem;
            text-align-last: justify;
            text-align: justify;
            text-justify: distribute-all-lines;
          }
          .cIcon {
            width: 1.6rem;
            height: 0.4rem;
            line-height: 0.38rem;
            display: block;
            position: absolute;
            z-index: 1;
            right: 1rem;
            top: 0.24rem;
            font-style: normal;
            font-size: 0.28rem;
            // border: 1px red solid;
            border-radius: 0.2rem;
            color: #fff;
            text-align: center;
            background: rgba(0, 0, 0, 0.3);
          }
          .pCode {
            width: 5rem;
            height: 0.9rem;
            line-height: 0.9rem;
            background: rgba(255, 255, 255, 1);
            opacity: 0.3;
            border: 0;
            border-radius: 0.22rem;
            outline: medium;
            padding-left: 0.8rem;
            padding-right: 0.8rem;
            font-size: 0.32rem;
            width: 3rem;
            padding-right: 0;
          }
        }
        .identifying {
          display: flex;
          position: relative;
          span {
            display: block;
            width: 1.2rem;
            color: #fff;
            line-height: 0.9rem;
            font-size: 0.28rem;
            font-weight: bold;
            margin-right: 0.2rem;
            text-align-last: justify;
            text-align: justify;
            text-justify: distribute-all-lines;
          }
          .cIcon {
            width: 1.6rem;
            height: 0.4rem;
            line-height: 0.38rem;
            display: block;
            position: absolute;
            z-index: 1;
            right: 1rem;
            top: 0.24rem;
            font-style: normal;
            font-size: 0.28rem;
            // border: 1px red solid;
            border-radius: 0.2rem;
            color: #fff;
            text-align: center;
            background: rgba(0, 0, 0, 0.3);
          }
          .pCode {
            width: 5rem;
            height: 0.9rem;
            line-height: 0.9rem;
            background: rgba(255, 255, 255, 1);
            opacity: 0.3;
            border: 0;
            border-radius: 0.22rem;
            outline: medium;
            padding-left: 0.8rem;
            padding-right: 0.8rem;
            font-size: 0.32rem;
            width: 3rem;
            padding-right: 0;
          }
        }
        .pReg,
        .eReg {
          display: block;
          height: 0.9rem;
          line-height: 0.9rem;
          width: 4rem;
          margin: 0.4rem 0 0 1.4rem;
          background: rgb(255, 0, 0);
          color: #fff;
          font-size: 0.48rem;
          font-family: PingFang-SC-Medium;
          border-radius: 0.22rem;
          border: 0;
        }
      }
    }
  }
}
</style>