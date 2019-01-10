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

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>

