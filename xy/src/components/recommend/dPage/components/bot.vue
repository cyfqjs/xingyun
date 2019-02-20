<template>
  <div id="bot">
    <div class="bao">
      <div class="jieshi">解释</div>
      <p>{{explain}}</p>
      <div class="miaoshu">牌面描述</div>
      <p>{{describe}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let describe = JSON.parse(sessionStorage.getItem("conData")).describe;
    let explain = JSON.parse(sessionStorage.getItem("conData")).explain;
    return {
      describe: describe,
      explain: explain
    };
  },
  mounted() {
    let describe = JSON.parse(sessionStorage.getItem("conData")).describe;
    let explain = JSON.parse(sessionStorage.getItem("conData")).explain;
  }
};
</script>

<style lang="scss">
#bot {
  width: 7.13rem;
  height: 5.46rem;
  color: #fff;
  margin: 0 auto;
  .bao {
    height: 100%;
    width: 100%;
    border: 0.02rem solid rgba(255, 255, 255, 1);
    border-radius: 0.1rem;
    padding: 0.2rem;
    p {
      line-height: 0.5rem;
    }
    .jieshi,
    .miaoshu {
      font-size: 0.36rem;
      font-family: PingFang-SC-Regular;
    }
  }
}
</style>
