<template>
	<div id="Person">
		<div id="personTop" >
          	    <router-link :to="{name:'community'}"><img src="@/assets/personImg/left.png"></router-link>
				<div id="name" >{{fansIndexName}}</div>
				<div id="photo">
					<img :src="fansIndexImg">
				</div>
		</div>
		<div id="personContent">
			<div id="signatrue">
				<span id="fansSign">{{fansIndexSign}}</span>
			</div>
			<div id="data">
				<div id="agreen">已获得认同<span>1.3k</span></div>
				<div id="letter">
					<router-link to="/talklist">
					
						<img src="@/assets/personImg/aaa.png"/>
						<span @click="handleChat_zjy">私信</span>
					
					</router-link>	
				</div>
				<div id="focusOn">
					<router-link to="">
						<img src="@/assets/personImg/gou.png"/>
						<span>已关注</span>
					</router-link>	
				</div>
			</div>
		</div>
		<div id="personFans">
			<ul>
				<li>
					<a>发布<span>12</span></a>
				</li>
				<li>
					<router-link :to="{name:'foucson'}">关注∞</router-link>	
				</li>
				<li>
					<router-link :to="{name:'fans'}">粉丝<span>6.6k</span></router-link>
				</li>
			</ul>
		</div>
		<Time-com/>
	</div>
</template>

<script>
import Time from "../../personal/main/time.vue";
import bScroll from "better-scroll";
import Vuex from "vuex";
export default{
	components:{
		"Time-com": Time
	},
	data() {
		return {
			fansIndexId:-1,
			fansIndexName:'',
			fansIndexSign:'',
			fansIndexImg:''
		}
	},
	created() {
		let{id,name,sign,img}=this.$route.params;
		this.fansIndexId=id;
		this.fansIndexName=name;
		this.fansIndexSign=sign;
		this.fansIndexImg=img;
	},
	methods:{
		handleChat_zjy(){
			this.$router.push("/talklist")
			
		}
	}
}
</script>

<style lang="scss" scoped>
#Person{
	#personTop{
		width:100%;
		height:5rem;
		background-image:url("../../../../src/assets/personImg/back.png");
		position:relative;
		a{
			position: absolute;
			left: 0.62rem;
			top:1rem;
			img{
				width:0.5rem;
				height:0.48rem;
			}
		}
		#name{
			position: absolute;
			left:1.6rem;
			bottom: 0;
			font-size:0.38rem;
			font-family:PingFangSC-Regular;
			font-weight:4rem;
			color:rgba(255,255,255,1);
		}
		#photo{
			position: absolute;
			bottom: -0.6rem;
			left:0.2rem;
			width:1.24rem;
			height:1.24rem;
			border-radius:50%;
			background:black;
			z-index: 2;
			img{
				width:100%;
				height:100%;
				border-radius:50%;	
			}
		}
	}
	#personContent{
		width:100%;
		height:1.4rem;
		background:rgba(34,29,59,1);
		position: relative;
		#signatrue{
			position: absolute;
			left:1.6rem;
			top:0.1rem;
			width:26rem;
			height:0.23px;
			font-size:0.24rem;
			font-family:PingFangSC-Regular;
			font-weight:4rem;
			color:rgba(255,255,255,1);
			a{	
				width:0.8rem;
				height:0.2rem;
				color:rgba(255,255,255,1);
				font-size:0.014rem;
				font-family:PingFangSC-Regular;
				font-weight:4rem;
				color:rgba(255,255,255,1);
				border:1px solid rgba(255,255,255,1);
				border-radius:10px;
				margin-left: 2rem;
			}
		}
		#data{
			position: absolute;
			bottom: 0;
			width:7.5rem;
			color:rgba(255,255,255,1);       
            display: flex;
            justify-content: space-around;
			padding:.2rem; 
			div{
				border:.01rem solid rgba(255,255,255,1);
				border-radius:.1rem;
				a{
					color:rgba(255,255,255,1);       
					img{
						display: inline-block;
						width:.31rem;
						height:.23rem;
					}
				}
			}
			#agrenn{
				width:1.25rem;
				height:0.17rem;
				font-size:0.18rem;
				font-family:PingFangSC-Regular;
				font-weight:bold;
				border:1px solid rgba(255,255,255,1);
				border-radius:10px;
				margin-bottom: 0.24rem;
			}
		}
	}
	#personFans{
		width:100%;
		height:0.7rem;
		background:silver;
		ul{
			width:7.5rem;
			height:0.7rem;
			background:rgba(47,40,75,1);
			line-height: 0.7rem;
			li>a{
				list-style: none;	
				color:white;
				float: left;
				width: 2.5rem;
				text-align: center;
			}
		}
	}
	#personBottom{
		width:100%;
		background:rgba(34,29,59,1);
		color:#fff;
	}
}
</style>
