<template>
  <div class="bPhone">
    <div class="back" @click="handleB">
      <img src="../../../../assets/set/back@2x.png">
    </div>
    <ul>
      <p class="phone1">绑定手机</p>
      <li class="phone2">
        <div>
          <input type="text" placeholder="手机号">
        </div>
      </li>
      <li class="phone3">
        <div>
          <input type="text" placeholder="输入验证码">
          <button @click="handleGet">| 获取验证码</button>
        </div>
      </li>
      <li>
        <button class="que" @click="handleQue">确定</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  methods: {
    handleB() {
      this.$router.go(-1);
    },
    handleGet() {
      Toast({
        message: "验证码发送成功！",
        position: "bottom",
        duration: 3000
      });
    },
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
      margin-left: 0.3rem;
      border: none;
      background: rgba(255, 255, 255, 1);
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

