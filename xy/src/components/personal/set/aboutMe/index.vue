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
  created () {
    this.handleGet()
  },
  components: {
      "Amheader-com": Amheader,
    "Ammain-com": Ammain,
    "Amfooter-com": Amfooter
  },
  methods: {
    handleGet(){
      axios({
        url:"/api/mock/5c3465937db0f179db20292b/api/idea"
      })
      .then((data)=>{
          console.log(data)
      })
    }
  }
};
</script>
<style lang="scss">
.about {
  width: 100%;
  height: 13.34rem;
  background: rgba(34, 29, 59, 1);
}
</style>

