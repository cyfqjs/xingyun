<template>
  <div class="setHui">
    <Header-com></Header-com>
    <Main-com></Main-com>
    <Footer-com></Footer-com>
  </div>
</template>

<script>
import Footer from "./set/footer";
import Header from "./set/header";
import Main from "./set/main";
import Vuex from "vuex";
export default {
  components: {
    "Footer-com": Footer,
    "Header-com": Header,
    "Main-com": Main
  }
};
</script>

<style lang="scss">
	.setHui{
		width: 100%;
		height: 13.34rem;
		background: rgba(34,29,59,1);
	}
	
</style>