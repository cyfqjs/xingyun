<template>
    <div id="langmain">
        <Header-com></Header-com>
        <Langtxt-com></Langtxt-com>
    </div>
    </template>
<script>
    import header from "./components/header.vue"
    import langtxt from "./components/langtxt.vue"
    export default {
        components: {
            "Header-com": header,
            "Langtxt-com": langtxt
        }
    }
</script>
<style lang="scss" scoped>
    #langmain {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: rgba(244, 244, 244, 1);
    }
</style>