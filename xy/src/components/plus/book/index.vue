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
<style lang="scss" scoped>
    input,
    button,
    select,
    textarea {
        outline: none
    }
    
    #pushbook {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: rgba(244, 244, 244, 1);
        flex: 1;
    }
</style>