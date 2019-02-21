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
import BScroll from "better-scroll"
import Vuex from "vuex"
export default {
    components:{
        "Header-com":Header,
        "Main-com":Main,
        "Footer-com":Footer
    },
    
}
</script>
<style scoped>
    #home{
        width:100%;
        height:100%;
        background: url("../../../assets/community/img/ltbj.png");
        background-size:cover; 
    }
    .mainWrapper{
        width:100%;
        height:100%;
    }
    .chat{
        height:100%;
    }
</style>