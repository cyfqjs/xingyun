<template>
  <div class="app">
    <div class="back">
      <mt-header fixed class="contentback">
        <router-link to="/spot" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="back" slot="right"></mt-button>
      </mt-header>
    </div>
    <content-com></content-com>
    <comment-com></comment-com>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import Content from "../components/essayvue/content.vue";
import Comment from "../components/essayvue/comment.vue";
export default {
  components: {
    "content-com": Content,
    "comment-com":Comment,
  }
}
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: auto;
  background: url("../../../assets/spot/tucen1@2x.png");
  .back {
    background: #2f284b;
    height: 1.29rem;
    .contentback {
      width: 100%;
      height: 0.98rem;
      margin-top: 0.25rem;
      background: #2f284b;
    }
  }
}
</style>
