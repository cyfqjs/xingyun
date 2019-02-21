<template>
  <div id="mid">
    <div class="midL">
      <img :src="img" alt>
    </div>
    <div class="midR">
      <li>
        牌名
        <span>{{brand}}</span>
      </li>
      <li>
        关键词
        <span>{{keyword}}</span>
      </li>
      <li>
        星座
        <span>{{constellat}}</span>
      </li>
      <li>
        元素
        <span>{{elementary}}</span>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let brand = JSON.parse(sessionStorage.getItem("conData")).brand;
    let keyword = JSON.parse(sessionStorage.getItem("conData")).keyword;
    let constellat = JSON.parse(sessionStorage.getItem("conData")).constellat;
    let elementary = JSON.parse(sessionStorage.getItem("conData")).elementary;
    let img = JSON.parse(sessionStorage.getItem("conData")).img;
    return {
      brand: brand,
      keyword: keyword,
      constellat: constellat,
      elementary: elementary,
      img: img
    };
  },
  mounted() {
    let brand = JSON.parse(sessionStorage.getItem("conData")).brand;
    if (JSON.parse(sessionStorage.getItem("conData")).keyword == null) {
      let keyword = "无";
    } else {
      let keyword = JSON.parse(sessionStorage.getItem("conData")).keyword;
    }
    if (JSON.parse(sessionStorage.getItem("conData")).elementary == null) {
      let elementary = "无";
    } else {
      let elementary = JSON.parse(sessionStorage.getItem("conData")).elementary;
    }

    let constellat = JSON.parse(sessionStorage.getItem("conData")).constellat;

    let img = JSON.parse(sessionStorage.getItem("conData")).img;
  }
};
</script>

<style lang="scss">
#mid {
  display: flex;
  .midL {
    height: 4.65rem;
    width: 2.82rem;
    border: 0.02rem #0f131d solid;
    margin: 0.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .midR {
    margin-top: 0.4rem;
    margin-left: 0.4rem;

    li {
      margin-top: 0.58rem;
      color: #fefefe;
      font-family: PingFang-SC-Regular;
      span {
        margin-left: 0.8rem;
      }
    }
  }
}
</style>
