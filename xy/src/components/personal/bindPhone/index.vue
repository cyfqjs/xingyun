<template>
  <div class="bindH">
    <Header-com></Header-com>
    <Main-com></Main-com>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./header";
import Main from "./main";
import Vuex from "vuex";
export default {
  components: {
    "Header-com": Header,
    "Main-com": Main
  }
};
</script>

<style lang="scss">
	.bindH{
		width: 100%;
		height: 13.34rem;
		background: rgba(34,29,59,1);
	}
	
</style>

