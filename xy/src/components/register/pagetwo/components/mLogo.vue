<template>
	<div id="mLogo">
		<div class="imgwrap">
			<span class="change">更换头像</span><img src="../../../../assets/login/pic_tx@2x.png" alt="" />
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	#mLogo{
		display: flex;
		justify-content: center;
		margin-top: .6rem;
		.imgwrap{
			position: relative;
			border:1px dashed #333;
			padding:.1rem;
			.change{
				display: block;
				position: absolute;
				left: .82rem;
				top: 1.18rem;
				color: #fff;
			}
			img{
				display: block;
				width: 2.44rem;
				height: 2.44rem;
				
			}
		}
	}
</style>