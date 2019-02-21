<template>
    <textarea  id="langtxt" placeholder="分享新鲜事..." value="langtxt" @change="handlang($event)"></textarea>

</template>
<script>
    import vue from "vue"
    import Vuex from "vuex";
    export default {
        computed: {
            ...Vuex.mapState({
                langtxt: state => state.plus.langmain,
            })
        },
        methods: {
            ...Vuex.mapMutations({
                handlang: "plus/handlang",
            })
        }
    }
</script>
<style lang="scss" scoped>
    #langtxt {
        flex: 1;
        padding: .05rem;
        font-size: .32rem;
        width: 100%;
    }
</style>