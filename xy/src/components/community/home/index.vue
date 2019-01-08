<template>
	<div id="home">
		<Header-com></Header-com>
		<div class="wrapper" ref="homeWrapper">
			<div class="content">
				<Main-com></Main-com>	
			</div>
		</div>
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

		},
		mounted() {
			this.scroll=new BScroll(this.$refs.homeWrapper,{
				tap:true
			});
		},
	}
</script>

<style scoped>
	#home{
		width:100%;
		height:100%;
		background:#221D3B;
	}
	#home>.wrapper{
		width:100%;
		height:100%;
	}
</style>