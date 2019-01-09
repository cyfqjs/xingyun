<template>
	<div id="home">
		<Header-com></Header-com>
		<Main-com></Main-com>	
	</div>
</template>

<script>
import Header from "./header";
import Main from "./main";
import BScroll from "better-scroll";
	export default {
		components:{
			"Header-com":Header,
			"Main-com":Main

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