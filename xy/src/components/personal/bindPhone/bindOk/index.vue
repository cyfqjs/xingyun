<template>
  <div class="bindok">
    <Bindoko-com></Bindoko-com>
    <Bindokt-com></Bindokt-com>
    <router-view></router-view>
  </div>
</template>
<script>
import Bindoko from "./bindokOne";
import Bindokt from "./bindokTwo";
import Vuex from "vuex";
export default {
  components: {
    "Bindoko-com": Bindoko,
    "Bindokt-com": Bindokt
  }
};
</script>
<style lang="scss">
.bindok {
  width: 100%;
  height: 13.34rem;
  background: rgba(34, 29, 59, 1);
}
</style>

