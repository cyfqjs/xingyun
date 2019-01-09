<template>
    <div id="pushbook">
        <Header-com></Header-com>
        <Bookmain-com></Bookmain-com>
    </div>
</template>
<script>
    import header from "./components/header.vue";
    import bookmain from "./components/bookmain.vue"
    import Vuex from "vuex"
    export default {
        components: {
            "Header-com": header,
            "Bookmain-com": bookmain
        }
    }
</script>
<style lang="scss">
    #pushbook {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>