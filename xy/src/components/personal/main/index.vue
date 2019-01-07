<template>
	<div id="Person">
		<div id="personTop">
				<a><i>~~~</i></a>
				<div>星空下的友人</div>
				<div id="photo"></div>
		</div>
		<div id="personContent">
			<div id="signatrue">梦想着东西想想就可以了</div>
			<div id="data">
				<div id="agreen">已获得认同<span>1.3k</span></div>
				<div id="letter"><i>~</i>私信</div>
				<div id="focusOn"><i>~</i>已关注</div>
			</div>
		</div>
		<div id="personFans"></div>
		<div id="personBottom">
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
			<h1>ss</h1>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
#Person{
	#personTop{
		width:100%;
		height:5rem;
		background:pink;
		position:relative;
		a{
			position: absolute;
			right: 0.62rem;
			top:1rem;
			width:0.5rem;
			height:0.48rem;
		}
		div{
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
		}
	}
	#personContent{
		width:100%;
		height:1.4rem;
		background:sandybrown;
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
			color:rgba(255,255,255,1)
		}
		#data{
			position: absolute;
			bottom: 0;
			display: flex;
			
		}
	}
	#personFans{
		width:100%;
		height:0.7rem;
		background:silver;
	}
	#personBottom{
		width:100%;
		background:green;
		overflow-y: auto ;
	}
}
</style>