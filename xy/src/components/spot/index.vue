<template>
	<div class="stop">
		<search-com></search-com>
		<nav-com></nav-com>
		
		

	</div>
</template>

<script>
import Search from "@/components/spot/components/indexvue/search.vue";
import Nav from "@/components/spot/components/indexvue/nav.vue";

	export default{
		created(){
			// this.axios({
			// 	url:""
			// })
			console.log(this);
		},
		components:{
			"search-com":Search,
			"nav-com":Nav,
		},
		data(){
			return{
				flog:true,
			}
		}
	}
</script>

<style scoped>
.stop{
	width: 100%;
	height:100%;
	background:url('../../assets/spot/tucen1@2x.png');
	text-align: center;
	
}
</style>