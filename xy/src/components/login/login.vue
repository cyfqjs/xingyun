<template>
	<div id="login">
		<logo-com></logo-com>
		<ipt-com></ipt-com>
	</div>
</template>

<script>
	import Logo from './components/logo'
	import Ipt from './components/ipt'
	export default{
		components:{
			 "logo-com":Logo,
			 "ipt-com":Ipt,
		}
	}
</script>

<style lang="scss">
	#login{
		width: 100%;
		height: 100%;
		
		background: url(../../assets/login/dlbj.jpeg) no-repeat;
		background-size: 100% 100%;
	}
</style>