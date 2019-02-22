<template>
	<div class="bootpage">
		<img src="../../assets/星圈logo.gif" alt="" />
	</div>
</template>

<script>
	export default {
		created() {
			this.goGrdoupRecor();
		},
		methods: {
			goGrdoupRecor() {
				const TIME_COUNT = 3;
				if(!this.timer) {
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
						if(this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
							//跳转的页面写在此处
							this.$router.push("../../login");
						}
					}, 1000)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bootpage {
		width: 100%;
		height: 100%;
		background: black;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			display: block;
			margin-top: -5.55rem;
			width: 3.34rem;
			height: 3.34rem;
		}
	}
</style>