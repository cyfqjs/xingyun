<template>
<!-- 热门话题内容页 -->
  <div class="app">
    <div class="contentback-father">
      <mt-header fixed class="contentback">
        <router-link to="/spot" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    
    <topic-com></topic-com>
    <vote-com></vote-com>
    <topiccomment-com></topiccomment-com>
    <router-view></router-view>
  </div>
</template>
<script>
import Topic from "../components/hotvue/topic.vue";
import Vote from "../components/hotvue/vote.vue";
import Topiccomment from "../components/hotvue/topiccomment.vue";
export default {
  components: {
    "topic-com": Topic,
    "vote-com":Vote,
    "topiccomment-com":Topiccomment,
  }
};
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: auto;
  background: url("../../../assets/spot/tucen1@2x.png");
  .contentback-father {
    background: #2F284B;
    height: 1.29rem;
    .contentback {
      width: 100%;
      height: 0.98rem;
      margin-top: 0.25rem;
      background: #2F284B;
    }
  }
}
</style>
