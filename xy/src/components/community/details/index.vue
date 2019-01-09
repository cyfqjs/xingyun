<template>
    <div id="home">
       <Header-com></Header-com> 
       <Main-com></Main-com>
       <Footer-com v-show="flagHide_zjy"></Footer-com>
       <Allpush-com v-show="flagPush_zjy"></Allpush-com>
    </div>
</template>
<script>
import Header from "./header"
import Main from "./main"
import Footer from "./footer"
import Allpush from "./allpush"
import Vuex from "vuex"
export default {
    data(){
        return {
            
        }
    },
    computed:{
        ...Vuex.mapState({
            flagPush_zjy:state=>state.Community.flagPush_zjy,
            flagHide_zjy:state=>state.Community.flagHide_zjy,
        })
    },
    components:{
        "Header-com":Header,
        "Main-com":Main,
        "Footer-com":Footer,
        "Allpush-com":Allpush

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