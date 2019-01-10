<template>
  <div class="ideaHui">
    <Ideah-com></Ideah-com>
    <Ideam-com></Ideam-com>
    <router-view></router-view>
  </div>
</template>

<script>
import Ideah from "./ideaHeader";
import Ideam from "./ideamain";
import Vuex from "vuex";
export default {
  components: {
    "Ideah-com": Ideah,
    "Ideam-com": Ideam
  }
};
</script>
<style lang="scss">
.ideaHui {
  width: 100%;
  height: 13.34rem;
  background: rgba(34, 29, 59, 1);
}
</style>

