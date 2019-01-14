<template>
        <div id="pushpic">
           <Header-com></Header-com>
           <Imgmain-com></Imgmain-com>
        </div>
    </template>
<script>
    import header from "./components/header";
    import imgmain from "./components/imgmain";
    export default {
        components: {
            "Header-com": header,
            "Imgmain-com": imgmain,
        }
    }
</script>
<style lang="scss" scoped>
    #pushpic {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: rgba(244, 244, 244, 1);
    }
</style>