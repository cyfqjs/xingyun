<template>
    <div id="talkList_zjy">
        <Header-com></Header-com>
        <Main-com></Main-com> 
    </div>
</template>
<script>
import Header from "./header"
import Main from "./main"
import BScroll from "better-scroll"
export default {
    components:{
        "Header-com":Header,
        "Main-com":Main
    }
}
</script>
<style scoped>
    #talkList_zjy{
        width:100%;
        height:100%;
         background: #221D3B;
    }
</style>