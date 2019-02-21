<template>
  <div id="top">
    <span class="backHpage" @click="backHpage">&lt;</span>
    <div class="titCon">
      <h2>{{titBrand}}</h2>
    </div>
  </div>
</template>
<script>

export default {
  data() {let a = sessionStorage.getItem("conData");
console.log(sessionStorage.getItem("conData"));
let b = JSON.parse(a).brand;
    return {
      titBrand: b
    };
  },
  mounted() {
    let a = sessionStorage.getItem("conData");
    let b = JSON.parse(a).brand;
    this.titBrand = b;
  },
  methods: {
    backHpage() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
#top {
  height: 1.28rem;
  width: 100%;
  background: #2f284b;
  border-bottom: 1px solid #242957;
  display: flex;
  align-items: center;
  .titCon {
    height: 1.28rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      text-align: center;
      color: #fff;
      font-size: 0.38rem;
      font-family: PingFang-SC-Regular;
      font-weight: normal;
    }
  }

  .backHpage {
    font-size: 0.42rem;
    color: #fff;
    padding-left: 0.2rem;
  }
}
</style>

