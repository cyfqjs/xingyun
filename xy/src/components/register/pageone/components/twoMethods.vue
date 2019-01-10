<template>
	<div id="two">
		<ul>
			<li 
				v-for="(item,index) in navs"
                v-bind="{class:activeIndex == index? 'active':''}"
				@click="handleToggle(index)"
			>
				{{item.mode}}
			</li>
			
		</ul>
		<div class="bot">
			<div class="reg" v-show="flag">
				<form class="form2"  action="">
					<label><span>{{phone}}:</span><i class="pIcon"></i><input v-model="phoneNumber" class="pNumber" type="text" /></label>
					<br />
					<label><span>密码:</span><i class="mIcon"></i><input class="pwd1" type="password" /><i class="eye1"></i></label>
					<br />
					<label><span>确认密码</span><i class="mIcon"></i><input class="pwd2" type="password" /><i class="eye1"></i></label>
					<br />
					<label><span>验证码:</span><i class="cIcon">发送验证码</i><i class="cIcon2">重新发送(50s)</i><input class="pCode" type="text" /></label>
					<br />
					<input class="pReg" type="submit" value="注册"/>
				</form>
			</div>
			<div class="reg" v-show="!flag">
				<form class="form2"  action="">
					<label><span>{{email}}:</span><i class="eIcon"></i><input type="text" /></label>
					<br />
					<label><span>密码:</span><i class="mIcon"></i><input type="password" /><i class="eye1"></i></label>
					<br />
					<label><span>确认密码</span><i class="mIcon"></i><input type="password" /><i class="eye1"></i></label>
					<br />
					<label><span>验证码:</span><i class="cIcon">发送验证码</i><input type="text" /></label>
					<br />
					<input class="eReg" type="submit" value="注册"/>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navs:[
					{"mode":"手机注册"},
					{"mode":"邮箱注册"}
				],
				activeIndex:0,
				flag:true,
				phone:"手机号",
				email:"邮箱号",
				phoneNumber:""
				
			}
		},
		methods:{
            handleToggle(index){
                this.activeIndex = index;
				for(var i=0;i<this.navs.length;i++){
					this.flag = true;
					if(i==index){
						this.flag = false;
					}
				}
            }   
        }
	}
</script>

<style lang="scss">
	#two{
		ul{
			margin-top: .6rem;
			display: flex;
			justify-content: center;
			li{
				width: 3.4rem;
				height: .6rem;
				background: #CC3333;
				text-align: center;
				line-height: .6rem;
				background-color: rgba(255,255,255,.3);
				color: #fff;
				border-radius: .2rem;
				font-size: .28rem;
			}
			.active{
				background:red;
            	color: #000;
			}
		}
		.bot{
			padding-top: .4rem;
			.reg{
				.form2{
					padding-left:.4rem ;
					label{
						display:flex;
						position: relative;
						.pIcon,.eIcon{
							display: block;
							width: .3rem;
							height: .4rem;
							position: absolute;
							left: 1.7rem;
							top: .25rem;
							background: url(../../../../assets/login/icon_dx@2x.png) no-repeat center;
						}
						.eIcon{
							width: .41rem;
							left:1.6rem;
							background: url(../../../../assets/login/icon_yx@2x.png) no-repeat center;
							
						}
						.mIcon{
							display: block;
							width: .3rem;
							height: .4rem;
							position: absolute;
							left: 1.7rem;
							top: .25rem;
							background: url(../../../../assets/login/icon_mm@2x.png) no-repeat center;
						}
						.eye1{
							display: block;
							width: .4rem;
							height: .4rem;
							position: absolute;
							right: 1rem;
							top: .25rem;
							cursor: pointer;
							background: url(../../../../assets/login/icon_mmkj@2x.png) no-repeat center;
						}
						.cIcon{
							width: 1.6rem;
							height: .40rem;
							line-height: .38rem;
							display: block;
							position: absolute;
							right: 1rem;
							top: .24rem;
							font-style: normal;
							font-size: .28rem;
							border: 1px red solid;
							border-radius: .2rem;
							color: #fff;
							text-align: center;
							background: rgba(0,0,0,.3);
							
						}
						.cIcon2{
							width: 1.6rem;
							height: .40rem;
							line-height: .38rem;
							display: block;
							position: absolute;
							right: 1rem;
							top: .24rem;
							font-style: normal;
							font-size: .28rem;
							border: 1px red solid;
							border-radius: .2rem;
							color: #fff;
							text-align: center;
							background: rgba(0,0,0,.3);
							display: none;
						}
						span{
							display: block;
							width: 1.2rem;
							color: #fff;
							line-height: .9rem;
							font-size: .28rem;
							font-weight: bold;
							margin-right: .2rem;
							text-align-last:justify;
							text-align:justify;
							text-justify:distribute-all-lines; 
						}
						input{
							width: 5rem;
							height: .9rem;
							line-height: .9rem;
							background: rgba(255, 255, 255, 1);
							opacity: 0.3;
							border: 0;
							border-radius: .22rem;
							outline: medium;
							padding-left: .8rem;
							padding-right: .8rem;
							font-size: .32rem;
						}
						.pCode{
							padding-right: 2rem;
						}
					}
					.pReg,.eReg{
						display: block;
						height: .9rem;
						line-height: .9rem;
						width: 4rem;
						margin: .4rem 0 0 1.4rem ;
						background: rgb(255,0,0);
						color:#fff;
						font-size: .48rem;
						font-family: PingFang-SC-Medium;
						border-radius: .22rem;
						border: 0;
					}
				}
				
			}
		}
	}
</style>