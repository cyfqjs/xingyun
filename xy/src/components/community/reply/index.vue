<template>
    <div id="home">
        <Header-com></Header-com>
        <Main-com></Main-com>
        <Footer-com></Footer-com>
    </div>
</template>
<script>
import Header from "./header"
import Main from "./main"
import Footer from "./footer"
export default {
    components:{
        "Header-com":Header,
        "Main-com":Main,
        "Footer-com":Footer,
    }
}   
</script>
<style lang="scss" scoped>
    #home{
       width:100%;
       height:100%;
       background: #221D3B;
    }
</style>