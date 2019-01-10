<template>
	<div id="rTop">
		<router-link :to="{name:'login'}">
			<span class="lt">&lt;</span>
		</router-link>
		<h2>手机/邮箱注册</h2>
	</div>
</template>

<script>
	
</script>

<style lang="scss">
	#rTop{
		display: flex;
		.lt{
			display:block;
			color: #fff;
			font-size: .48rem;
			padding-left: .2rem;
			padding-top: .2rem;
		}
		h2{
			display: flex;
			flex: 1;
			justify-content: center;
			color: #fff;
			padding-top: .3rem;
			margin-left: -.34rem;
		}
	}
</style>