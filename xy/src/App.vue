<template>
  <div id="app">
  	<Footer-com v-if="$route.meta.flag"/>
    <router-view/>
  </div>
</template>

<script>
import Footer from "./components/footer/index.vue";
export default {
	  components: {
    "Footer-com":Footer
  }
}
</script>

<style>
	#app{
		height: 100%;
		width:100%;
		background: url(assets/login/dlbj.jpeg);
	}
</style>
