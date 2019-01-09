<template>
  <div id="app">
  	<Footer-com v-show="this.$route.meta.flag"/>
    <router-view/>
  </div>
</template>

<script>
<<<<<<< HEAD
    import Footer from "./components/footer/index.vue";
    export default {
        components: {
            "Footer-com": Footer,
        }
    }
=======
import Footer from "./components/footer/index.vue";
export default {
	  components: {
    "Footer-com":Footer,
  }
}
>>>>>>> lei
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>