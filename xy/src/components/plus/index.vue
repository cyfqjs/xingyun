<template>
	<div id="index" v-show="flagshow">
        <Title-com></Title-com>
		<Star-com></Star-com>
		<Push-com></Push-com>
	</div>
</template>

<script>
    import Title from "./components/title"
    import Star from "./components/star"
    import Push from "./components/push"
    import Vuex from "vuex"
    export default {
        computed: {
            ...Vuex.mapState({
                flagshow: state => state.plus.flag
            })
        },
        components: {
            "Title-com": Title,
            "Star-com": Star,
            "Push-com": Push
        }
    }
</script>

<style lang="scss" scoped>
    #index {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: rgba(47, 40, 75, 1);
    }
</style>