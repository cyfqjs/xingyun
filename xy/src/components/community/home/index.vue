<template>
	<div id="home">
		<Header-com></Header-com>
		<Main-com @push_zjy="handlePush_zjy"></Main-com>
		<transition name="pushActive_zjy">
	  		<Allpush-com v-show="flagPush_zjy" @pushChange_zjy="handlerP_zjy"></Allpush-com>			
		</transition>
	</div>
</template>

<script>
import Vuex from "vuex";
import Header from "./header";
import Main from "./main";
import Allpush from "../details/allpush";

import BScroll from "better-scroll";
	export default {
		data(){
			return {
				flagPush_zjy:false,
			}
		},
		components:{
			"Header-com":Header,
			"Main-com":Main,
			"Allpush-com":Allpush
		},
		methods:{
			handlePush_zjy(val){
				this.flagPush_zjy=val;
			},
			handlerP_zjy(val){
				this.flagPush_zjy=val;
			}
		},
		// computed:{
		// 	...Vuex.mapState({
		// 		flagPush_zjy:state=>state.Community.flagPush_zjy
				
		// 	})
		// }
	}
</script>

<style scoped>
	#home{
		width:100%;
		height:100%;
		background:#221D3B;
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