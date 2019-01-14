<template>
	<div id="mMain">
		<label><span class="nickName"></span><input type="text" placeholder="昵称"/></label>
		<br />
		<label><span class="sex"></span><input type="text" placeholder="性别"/></label>
		<br />
		<label><span class="birth"></span><input type="text" placeholder="生日"/></label>
		<br />
		<label><span class="addr"></span><input type="text" placeholder="地址"/></label>
		<br />
		<button @click="toThree" class="done">完成注册</button>
	</div>
</template>

<script>
	export default{
		methods:{
			toThree(){
				this.$router.push('../../regthree')
			}
		}
	}
</script>

<style lang="scss">
	#mMain {
		display: flex;
		flex-direction: column;
		label {
			display: flex;
			justify-content: center;
			position: relative;
			.nickName{
				display: block;
				width: .38rem;
				height: .4rem;
				background: url(../../../../assets/login/icon_nc@2x.png) no-repeat center;
				position: absolute;
				left: .7rem;
				top: .42rem;
				
			}
			.sex{
				display: block;
				width: .38rem;
				height: .4rem;
				background: url(../../../../assets/login/icon_xb@2x.png) no-repeat center;
				position: absolute;
				left: .7rem;
				top: .42rem;
				
			}
			.birth{
				display: block;
				width: .38rem;
				height: .4rem;
				background: url(../../../../assets/login/icon_csrq@2x.png) no-repeat center;
				position: absolute;
				left: .7rem;
				top: .42rem;
				
			}
			.addr{
				display: block;
				width: .38rem;
				height: .4rem;
				background: url(../../../../assets/login/icon_dz@2x.png) no-repeat center;
				position: absolute;
				left: .7rem;
				top: .42rem;
				
			}
			input {
				width: 6.24rem;
				height: .9rem;
				background: rgba(255, 255, 255, 1);
				opacity: 0.3;
				border: 0;
				border-bottom: #000000 .01rem solid;
				outline: medium;
				font-size: .32rem;
				margin-top: .2rem;
				padding-left: .6rem;
			}
		}
		.done {
			margin: 0 auto;
			width: 6.24rem;
			height: .9rem;
			text-align: center;
			line-height: .9rem;
			background: url(../../../../assets/login/bg_main@2x.png) no-repeat center;
			color: #fff;
			font-size: .32rem;
			font-family: PingFang-SC-Medium;
			border: 0;
			outline: medium;
		}
	}
</style>