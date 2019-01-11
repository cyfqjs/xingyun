<template>
	<div id="mreg">
		<mtop-com></mtop-com>
		<mlogo-com></mlogo-com>
		<mmain-com></mmain-com>
	</div>
</template>

<script>
	import Mlogo from './components/mLogo'
	import Mmain from './components/mMain'
	import Mtop from './components/mTop'
	export default{
		components:{
			"mlogo-com":Mlogo,
			"mmain-com":Mmain,
			"mtop-com":Mtop
		}
	}
</script>

<style lang="scss">
	#mreg{
		width: 100%;
		height: 100%;
	}
</style>