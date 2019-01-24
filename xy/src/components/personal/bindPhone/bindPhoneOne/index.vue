<template>
  <div class="bPhone">
    <router-link :to="{name:'indexPhone'}">
      <div class="back">
        <img src="@/assets/set/back@2x.png">
      </div>
    </router-link>
    <ul>
      <p class="phone1">绑定微博</p>
      <li class="phone2">
        <div>
          <input type="text" placeholder="微博号" v-model="message">
        </div>
      </li>
      <li class="phone3">
        <div>
          <input type="text" placeholder="输入密码">
          <!-- <button @click="handleGet">| 获取验证码</button> -->
        </div>
      </li>
      <li>
        <router-link :to="{name:'bindok',query:{tel:message}}">
          <mt-button type="default" class="que" @click="handleQue">确定</mt-button>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast, MessageBox, Button } from "mint-ui";
export default {
  data () {
    return {
      message:""
    }
  },
  methods: {
    handleGet() {
      Toast({
        message: "验证码发送成功！",
        position: "bottom",
        duration: 3000
      });
    },
    handleQue() {
      MessageBox({
        title: "手机绑定成功！",
        message: "跳转页面",
        showCancelButton: true
      });
    }
  }
};
</script>


<style lang="scss">
.bPhone {
  background: url("../../../../assets/set/szbj.png");
  background-size: contain;
  width: 100%;
  height: 13.34rem;
  .back {
    display: flex;
    align-items: center;
    width: 0.2rem;
    height: 0.34rem;

    img {
      width: 100%;
      height: 100%;
      margin-left: 0.3rem;
      margin-top: 0.4rem;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    top: 3.04rem;
    left: 0.74rem;
    justify-content: center;
  }
  .phone1 {
    width: 2.4rem;
    height: 0.57rem;
    font-size: 0.6rem;
    font-family: PingFang-SC-Regular;
    // font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
  .phone3 > div {
    width: 6.24rem;
    height: 0.9rem;
    background: rgba(255, 255, 255, 1);
    opacity: 0.3;
    border-radius: 0.44rem;
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    input {
      border: none;
      margin-left: 0.4rem;
      height: 0.9rem;
    }
    button {
      // margin-left: -0.1rem;
      border: none;
      background: rgba(255, 255, 255, 1);
      flex-shrink: 0;
    }
  }
  .phone2 {
    width: 6.24rem;
    height: 0.9rem;
    background: rgba(255, 255, 255, 1);
    opacity: 0.3;
    border-radius: 0.44rem;
    margin-top: 0.7rem;
    display: flex;
    align-items: center;
    margin-top: 0.7rem;
    input {
      border: none;
      margin-left: 0.4rem;
      height: 0.9rem;
    }
  }
  .que {
    width: 6.24rem;
    height: 0.9rem;
    background: rgba(255, 255, 255, 1);
    opacity: 0.3;
    border-radius: 0.44rem;
    margin-top: 0.7rem;
    font-size: 0.42rem;
  }
}
</style>

