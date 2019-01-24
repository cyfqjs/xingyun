<template>
	<div id="mTop">
		<router-link :to="{name:'regone'}">
			<span class="lt">&lt;</span>
		</router-link>
		<h2>让别人了解更好的你</h2>
	</div>
</template>

<script>
	
</script>

<style lang="scss">
	#mTop{
		display: flex;
		background: #2F284B;
		width: 100%;
		height: 1.28rem;
		.lt{
			display:block;
			height: 1.28rem;
			line-height: 1.28rem;
			color: #fff;
			font-size: .48rem;
			padding-left: .2rem;
		}
		h2{
			display: flex;
			flex: 1;
			justify-content: center;
			color: #fff;
			align-items: center;
			font-family: PingFang-SC-Medium;
		}
	}
</style>