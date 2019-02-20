<template>
	<div id="Person">
		<div id="personTop">
			<router-link :to="{name:'set'}"><img src="@/assets/personImg/shezhi.png"></router-link>
			<div id="name">{{personIndex.name}}</div>
			<div id="photo">
				<img src="@/assets/personImg/photo.png">
			</div>
		</div>
		<div id="personContent">
			<div id="signatrue">
				<!-- 个人箴言？？？？ null -->
				<span>{{personIndex.brief}}</span>
				<router-link :to="{name:'redact'}">编辑资料</router-link>
			</div>
			<div id="data">
				<div id="agreen">已获得认同<span>{{personIndex.agree}}</span></div>
			</div>
		</div>
		<div id="personFans">
			<ul>
				<li>
					<a>发布<span>{{personIndex.release}}</span></a>
				</li>
				<li>
					<router-link :to="{name:'foucson'}">关注∞</router-link>	
				</li>
				<li>
					<router-link :to="{name:'fans'}">粉丝<span>{{personIndex.fans}}</span></router-link>
				</li>
			</ul>
		</div>
		<Time-com/>
	</div>
</template>

<script>
import Time from "./time.vue";
import bScroll from "better-scroll";
import vuex from "vuex";
export default{
	components:{
		"Time-com": Time
	},
	created() {
		//console.log(this)
		this.handleIndex();
	},
	computed: {
		...vuex.mapState({
			personIndex:state=>state.Main.personIndex
		})
	},
	methods: {
		...vuex.mapActions({
			handleIndex:"Main/handleIndex"
		})
	},
}
</script>

<style lang="scss">
#Person{
	#personTop{
		width:100%;
		height:5rem;
		background-image:url("../../../../src/assets/personImg/back.png");
		position:relative;
		a{
			position: absolute;
			right: 0.62rem;
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
				width:1.24rem;
				height:1.24rem;
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
				width:1rem;
				height:1rem;
				color:rgb(15, 10, 10);
				font-size:.25rem;
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
				font-size:.25rem;
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