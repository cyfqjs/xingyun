<template>
  <div class="ideaM">
    <div class="ideaM1">
      <textarea cols="60" rows="18" placeholder="请输入您遇到的问题或建议"></textarea>
    </div>
    <div class="telH">
      <input type="text" placeholder="联系方式：QQ/邮箱/电话">
    </div>
    <button class="bthH" @click="handleSubmit">提交</button>
  </div>
</template>
<script>
import {MessageBox} from "mint-ui";
export default {
  methods: {
    handleSubmit(){
      MessageBox({
        title: "提交成功！",
        message: "跳转页面",
        showCancelButton: true
      });
      this.$router.go(-1)
    },
  }
};
</script>
<style lang="scss">
.ideaM {
  width: 100%;
  height: 12.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .ideaM1 {
    textarea {
      width: 7.1rem;
      height: 4.3rem;
      background: rgba(68, 61, 108, 1);
      opacity: 0.3;
      border-radius: 0.1rem;
      margin-top: 0.2rem;
      border: none;
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: beige;
      line-height: 0.7rem;
    }
  }
  .telH {
    width: 7.1rem;
    height: 1rem;
    input {
      width: 7.1rem;
      height: 1rem;
      background: rgba(68, 61, 108, 1);
      opacity: 0.3;
      border-radius: 0.1rem;
      border: none;
      margin-top: 0.3rem;
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgb(216, 207, 207);
    }
  }
  .bthH {
    width: 6.24rem;
    height: 0.9rem;
    background: rgba(68, 61, 108, 1);
    opacity: 0.4;
    border-radius: 0.45rem;
    border: none;
    margin-top: 1.4rem;
    font-size: 0.42rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
