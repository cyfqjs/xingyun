<template>
  <div id="app">
  	<Footer-com  v-if="this.$router.flag"/>
    <router-view/>
  </div>
</template>

<script>
<<<<<<< HEAD
import Footer from "./components/footer/index.vue";
export default {
	  components: {
    "Footer-com":Footer,
    
  }
}
=======
    import Footer from "./components/footer/index.vue";
    export default {
        components: {
            "Footer-com": Footer
        }
    }
>>>>>>> sjw
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>