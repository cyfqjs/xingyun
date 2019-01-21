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
          <label>
            <span>密码:</span>
            <i class="mIcon"></i>
            <input class="pwd1" v-model="pwd1" type="password" @blur="handlePwd1()">
            <i class="eye1"></i>
          </label>
          <br>
          <label>
            <span>确认密码</span>
            <i class="mIcon"></i>
            <input class="pwd2" v-model="pwd2" type="password" @blur="handlePwd2()">
            <i class="eye1"></i>
          </label>
          <br>
          <label>
            <span>验证码:</span>
            <i class="cIcon" @click="sendYzm()">发送验证码</i>
            <input class="pCode" type="text" v-model="code">
          </label>
          <br>
          <input class="pReg" type="submit" value="注册" @click="pReg">
        </form>
      </div>
      <!-- 邮箱注册 -->
      <div class="reg" v-show="!flag">
        <form class="form2" @submit="toTwo" action>
          <label>
            <span>{{email}}:</span>
            <i class="eIcon"></i>
            <input type="text">
          </label>
          <br>
          <label>
            <span>密码:</span>
            <i class="mIcon"></i>
            <input type="password">
            <i class="eye1"></i>
          </label>
          <br>
          <label>
            <span>确认密码</span>
            <i class="mIcon"></i>
            <input type="password">
            <i class="eye1"></i>
          </label>
          <br>
          <label>
            <span>验证码:</span>
            <i class="cIcon">发送验证码</i>
            <input type="text" v-model="code2">
          </label>
          <br>
          <input class="eReg" type="submit" value="注册">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
      code:"",
      flagCode:"",
      code2:"",
      falgCode2:""
    };
  },
  methods: {
    handleNum() {
      var regp = /1(3|5|7|8)[0-9]{9}/;
      if (regp.test(this.phoneNumber)) {
        this.pFlag = true;
        console.log("right");
      } else {
        this.pFlag = false;
        console.log("err");
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
      }
    },
    handlePwd2() {
      if(this.pwd2!=this.pwd1){
        this.flagPwd2 = false;
        console.log("err");

      }else{
        this.flagPwd2 = true;
        console.log("right");
        
      }
    },
    sendYzm() {
        axios({
      url:"http://39.96.91.169:8080/StarOfSea/login/phoneCode",
      method:"post",
      data:{
        phone:this.phoneNumber
      }
    })
    .then((data)=>{
      // console.log(data);
      console.log(data.code);
          if(data.code == this.code){
            this.flagCode = true;
            console.log(right);
          }else{
            this.flagCode = false;
          }
    })
        // .then(data => {
        //   console.log(data.code);
        //   if(data.code == this.code){
        //     this.flagCode = true;
        //   }else{
        //     this.flagCode = false;
        //   }
        // })
        .catch(err => {
          console.log(err);
        })
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
      this.$router.push("../../regtwo");
      return false;
    },

  pReg(){
    axios({
      url:"http://39.96.91.169:8080/StarOfSea/login/createUser",
      method:"post",
      data:{
        username:this.phoneNumber,
        password:this.pwd1
      }
    }).then(data=>{
      console.log(data);
    })
  }

  }
};
</script>

<style lang="scss">
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
            padding-right: 2rem;
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