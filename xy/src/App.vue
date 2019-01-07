<template>
  <div id="app">
  	<Footer-com/>
    <router-view/>
  </div>
</template>

<script>
import Footer from "./components/footer/index.vue";
export default {
	  components: {
    "Footer-com":Footer,
    
  }
}
</script>

<style>

</style>
