<template>
	<div id="ipt">
		<form id="form1" @submit.prevent="handle()" method="post">
			<label><span class="iconUser"></span><input type="text" id="uname" placeholder="请输入手机号或邮箱"/></label>
			<br />
			<label><span class="iconCode"></span><input type="password" id="pwd" placeholder="********"/><span class="iconEye"></span></label>
			<br />
			<input id="btn"  type="submit" value="登录" />
		</form>
		<div class="aBtn clear">
			<!--<a class="jump" href="#">立即注册</a>-->
			<router-link :to="{name:'regone'}">
				<span class="jump">立即注册</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			handle(){
//				location.href = "http://localhost:8080/#/recommend";
				this.$router.push("../../recommend");
				return false;
			}
		}
	}
</script>

<style lang="scss">
	#ipt {
		width: 6.22rem;
		margin: 0 auto;
		#form1 {
			width: 6.22rem;
			text-align: center;
			label {
				position: relative;
				.iconUser {
					display: block;
					height: .36rem;
					width: .37rem;
					position: absolute;
					top: -0.1rem;
					left: .39rem;
					background: url(../../../assets/login/icon_zh@2x.png) no-repeat center;
				}
				.iconCode{
					display: block;
					height: .46rem;
					width: .32rem;
					position: absolute;
					top: -0.1rem;
					left: .39rem;
					background: url(../../../assets/login/icon_mm@2x.png) no-repeat center;
				}
				.iconEye{
					display: block;
					height: .46rem;
					width: .32rem;
					position: absolute;
					top: -0.1rem;
					right: .4rem;
					background: url(../../../assets/login/icon_mmkj@2x.png) no-repeat center;
				}
				#uname {
					width: 6.24rem;
					height: .9rem;
					background: rgba(255, 255, 255, 1);
					opacity: 0.3;
					border: 0;
					border-radius: .44rem;
					margin-top: 1.1rem;
					padding-left:1rem ;
					padding-right: 1rem;
					outline: medium;
					font-size: .32rem;
				}
				#pwd {
					width: 6.24rem;
					height: .9rem;
					background: rgba(255, 255, 255, 1);
					opacity: 0.3;
					border: 0;
					border-radius: .44rem;
					margin: .2rem 0;
					outline: medium;
					padding-left:1rem ;
					padding-right: 1rem;
					font-size: .32rem;
				}
				
			}
			#btn {
				width: 6.24rem;
				height: .9rem;
				background: rgba(255,255, 255, .3);
				border: 0;
				border-radius: .44rem;
				color: #fff;
				font-family: PingFang-SC-Medium;
				font-size: .42rem;
			}
		}
		.aBtn {
			.jump {
				float: right;
				display: block;
				margin-top: .20rem;
				line-height: .22rem;
				height: .22rem;
				font-size: .24rem;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color:rgba(255,255,255,1);
			}
		}
	}
</style>