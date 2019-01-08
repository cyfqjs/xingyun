<template>
  <div id="app">
    <router-view/>
  	<!-- <Footer-com/> -->
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

<style scoped>
  #app{
    width:100%;
    height:100%;
  }
</style>
