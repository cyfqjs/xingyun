<template>
	<div id="register">
		<rtop-com></rtop-com>
		<rlogo-com></rlogo-com>
		<two-com></two-com>	
	</div>
</template>

<script>
	import Twom from './components/twoMethods'
	import Rlogo from './components/rLogo'
	import Rtop from './components/rTop'
	export default{
		components:{
			"two-com":Twom,
			"rlogo-com":Rlogo,
			"rtop-com":Rtop
		}
	}
</script>

<style lang="scss">
	#register{
		width: 100%;
		height: 100%;
		background:url(../../../assets/login/dlbj.jpeg) no-repeat center;
	}
</style>