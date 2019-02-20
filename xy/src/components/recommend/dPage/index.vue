<template>
  <div id="recommend" class="midwrapper" ref="mainWrapper">
    <div class="content">
      <top-com></top-com>
      <mid-com></mid-com>
      <bot-com></bot-com>
    </div>
  </div>
</template>

<script>
import Top from "./components/top";
import Mid from "./components/mid";
import Bot from "./components/bot";



export default {
  components: {
    "top-com": Top, 
    "mid-com": Mid,
    "bot-com": Bot,

  },
  
};
</script>

<style lang="scss">
  .midwrapper{
    height: 100%;
    background: url(../../../assets/recommend/szbj.png) no-repeat center 1.28rem ;
    .content{
      margin-bottom: 600rem;
    }
  }
</style>
