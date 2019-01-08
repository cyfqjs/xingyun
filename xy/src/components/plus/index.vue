<template>
	<div id="index" v-show="flag">
		<Title-com></Title-com>
		<Star-com></Star-com>
		<Push-com></Push-com>
	</div>
</template>

<script>
    import Title from "./components/title"
    import Star from "./components/star"
    import Push from "./components/push"
    export default {
        data() {
            return {}
        },
        methods: {},
        components: {
            "Title-com": Title,
            "Star-com": Star,
            "Push-com": Push
        }
    }
</script>

<style lang="scss">
    #index {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: rgba(47, 40, 75, 1);
    }
</style>