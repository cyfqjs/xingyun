<template>
        <div id="pushpic">
           <Header-com></Header-com>
           <Imgmain-com></Imgmain-com>
           <Tool-com></Tool-com>
        </div>
    </template>
<script>
    import header from "./components/header";
    import imgmain from "./components/imgmain";
    import tool from "./components/tool";
    export default {
        components: {
            "Header-com": header,
            "Imgmain-com": imgmain,
            "Tool-com": tool
        }
    }
</script>
<style lang="scss">

</style>