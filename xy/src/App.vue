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

<style scoped>
html,body{
  width: 100%;
  height: 100%;
}
  #app{
    width: 100%;
    height: 100%
  }
</style>
