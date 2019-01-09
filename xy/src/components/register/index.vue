<template>
	<div id="register">
		<rlogo-com></rlogo-com>
		<two-com></two-com>	
	</div>
</template>

<script>
	import Twom from './components/twoMethods'
	import Rlogo from './components/rLogo'
	export default{
		components:{
			"two-com":Twom,
			"rlogo-com":Rlogo
		}
	}
</script>

<style lang="scss">
	#register{
		width: 100%;
		height: 100%;
		background: #000;
	}
</style>