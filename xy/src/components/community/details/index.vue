<template>
    <div id="home">
       <Header-com></Header-com> 
       <Main-com @hide_zjy="handleHide_zjy" v-show="hide_zjy"></Main-com>
       <Footer-com v-show="flagHide_zjy" @handlePl="handlePl_zjy"></Footer-com>
       <transition name="pushActive_zjy">    
            <Allpush-com v-show="flagPush_zjy"></Allpush-com>    
       </transition>
       <Speak-com  v-show="flagPl_zjy"></Speak-com>
       <router-view></router-view>
    </div>
</template>
<script>
import Header from "./header"
import Main from "./main"
import Footer from "./footer"
import Allpush from "./allpush"
import Speak from "./speak"
import Vuex from "vuex"
export default {
    created(){
        // 根据路由的跳转，判断是否显示主页内容
        this.Observer.$on("hideShow_zjy",(val)=>{
            this.hide_zjy=true;
        })
    },
    data(){
        return {
            hide_zjy:true,
            // 评论框是否显示
            flagPl_zjy:false,
        }
    },
    computed:{
        ...Vuex.mapState({
            // 底部评论框是否显示
            flagPush_zjy:state=>state.Community.flagPush_zjy,
            flagHide_zjy:state=>state.Community.flagHide_zjy,
        })
    },
    components:{
        "Header-com":Header,
        "Main-com":Main,
        "Footer-com":Footer,
        "Allpush-com":Allpush,
        "Speak-com":Speak

    },
    methods:{
        handleHide_zjy(val){
            this.hide_zjy=val;
        },
        //控制评论框是否显示
        handlePl_zjy(val){
            console.log(1)
            this.flagPl_zjy=val;
        }
    }
}
</script>
<style lang="scss" scoped>
    #home{
        width:100%;
        height:100%;
        background: #221D3B;
    }
    .pushActive_zjy-enter,.pushActive_zjy-leave-to{
		transform: translateY(5.89rem);
		opacity: 0;
	}
	.pushActive_zjy-enter-active,.pushActive_zjy-leave-active{
		transition:all 1s;
	}
	.pushActive_zjy-enter-to,.pushActive_zjy-leave{
		transform: translateY(0);
		opacity: 1;
	}
</style>