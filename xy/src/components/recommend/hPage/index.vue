<template>
  <div id="recommend" class="wrapper" ref="mainWrapper">
    <div class="content">
      <top-com></top-com>
      <tarot-com></tarot-com>
      <fortune-com></fortune-com>
      <calendar-com></calendar-com>
      <topic-com></topic-com>
      <article-com></article-com>
    </div>
  </div>
</template>

<script>
import Top from "./components/top";
import Tarot from "./components/tarot";
import Fortune from "./components/fortune";
import Calendar from "./components/calendar";
import Topic from "./components/topic";
import Article from "./components/article";

import BScroll from 'better-scroll';

export default {
  components: {
    "top-com": Top,
    "tarot-com": Tarot,
    "fortune-com": Fortune,
    "calendar-com": Calendar,
    "topic-com": Topic,
    "article-com": Article,

  },
  mounted() {
    // let wrapper = document.querySelector('.wrapper');
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.mainWrapper, {
        	click:true
        });
        // console.log(this.scroll);
        
      })
    }
};
</script>

<style lang="scss" scoped>
  .wrapper{
    height: 100%;
    background: url(../../../assets/recommend/bj1@2x.png) no-repeat center 1.28rem ;
    .content{
      margin-bottom: 600rem;
    }
  }
</style>
