<template>
	<div id="suss">
		<h2>注册成功</h2>
		<router-link :to="{name:'login'}">
			<span class="toLogin">立即登录</span>
		</router-link>
	</div>
</template>

<script>
</script>

<style lang="scss">
	#suss{
		display: flex;
		flex-direction: column;
		align-items: center;
		h2{
			font-family: PingFang-SC-Medium;
			font-size: .48rem;
			color: #333;
			margin-top: 1rem;
			margin-bottom: 1.6rem;
		}
		.toLogin{
			display: block;
			height: .9rem;
			width: 6.24rem;
			background: url(../../../../assets/login/bg_main@2x.png) no-repeat center;
			color: #fff;
			font-size: .4rem;
			text-align: center;
			line-height: .9rem;
			font-family: PingFang-SC-Medium;
			
		}
	}
</style>