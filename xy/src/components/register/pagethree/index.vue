<template>
	<div id="treg">
		<tlogo-com></tlogo-com>
		<suss-com></suss-com>
	</div>
</template>

<script>
	import Suss from './components/suss'
	import Tlogo from './components/tlogo'
	
	export default	{
		components:{
			"suss-com":Suss,
			"tlogo-com":Tlogo
		}
	}
</script>

<style>
</style>