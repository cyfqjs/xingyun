<template>
  <div id="app">
    <router-view/>
  	<Footer-com v-show="this.$route.meta.flag"/>
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
    #app {
        width: 100%;
        height: 100%;
        font-size: 16px;
    }
</style>