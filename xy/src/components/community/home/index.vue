<template>
	<div id="home">
		<Header-com></Header-com>
		<Main-com @push_zjy="handlePush_zjy"></Main-com>
	  <Allpush-com v-show="flagPush_zjy"></Allpush-com>	
	</div>
</template>

<script>
import Vuex from "vuex";
import Header from "./header";
import Main from "./main";
import Allpush from "../details/allpush";

import BScroll from "better-scroll";
	export default {
		created(){
			this.$store.dispatch("Community/handlePush_zjy");
		},
		data(){
			return {
				flagPush_zjy:null
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
		},
		computed:{
			...Vuex.mapState({
				flagPush_zjy:state=>state.Community.flagPush_zjy
				
			})
		}
	}
</script>

<style scoped>
	#home{
		width:100%;
		height:100%;
		background:#221D3B;
	}
</style>