<template>
  <div class="bindCh">
    <BindCheader-com></BindCheader-com>
    <BindCmain-com></BindCmain-com>
    <router-view></router-view>
  </div>
</template>

<script>
import BindCheader from "./bindcheader";
import BindCmain from "./bindCmain";
import Vuex from "vuex";
export default {
  components: {
    "BindCheader-com": BindCheader,
    "BindCmain-com": BindCmain
  }
};
</script>
<style lang="scss">
.bindCh {
  width: 100%;
  height: 13.34rem;
  background: rgba(34, 29, 59, 1);
}
</style>

