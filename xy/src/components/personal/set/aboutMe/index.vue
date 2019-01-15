<template>
  <div class="about">
    <Amheader-com></Amheader-com>
    <Ammain-com></Ammain-com>
    <Amfooter-com></Amfooter-com>
    <router-view></router-view>
  </div>
</template>
<script>
import Amheader from "./aboutHeader";
import Ammain from "./aboutMain";
import Amfooter from "./aboutFooter";
import axios from "axios";
export default {
  
  components: {
      "Amheader-com": Amheader,
    "Ammain-com": Ammain,
    "Amfooter-com": Amfooter
  },
};
</script>
<style lang="scss">
.about {
  width: 100%;
  height: 13.34rem;
  background: rgba(34, 29, 59, 1);
}
</style>

