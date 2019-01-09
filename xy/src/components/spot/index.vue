<template>
	<div class="stop">
		<search-com></search-com>
		<nav-com></nav-com>
		
		

	</div>
</template>

<script>
import Search from "@/components/spot/components/search.vue";
import Nav from "@/components/spot/components/nav.vue";

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
/* html,body{
	height: 100%;
	background:url();
} */
.stop{
	width: 100%;
	background:url('../../assets/spot/tucen1@2x.png');
	text-align: center;
	
}
</style>