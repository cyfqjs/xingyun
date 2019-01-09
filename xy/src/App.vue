<template>
  <div id="app">
  	<Footer-com v-show="this.$route.meta.flag"/>
    <router-view/>
  </div>
</template>

<script>
    import Footer from "./components/footer/index.vue";
    export default {
        components: {
            "Footer-com": Footer,
        }
    }
</script>

<<<<<<< HEAD
<style scoped>
html,body{
  width: 100%;
  height: 100%;
}
  #app{
    width: 100%;
    height: 100%
  }
=======
<style>
    #app {
        width: 100%;
        height: 100%;
        position: relative;
    }
>>>>>>> 92beca15a764bd74a6839eb15ce3b8c0212c734f
</style>

