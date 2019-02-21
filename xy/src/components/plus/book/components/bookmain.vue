<template>
        <div id="bookmain">
         <input type="text" id="booktitle" placeholder="请输入您要发表的文章标题！！！" :value="bktitle" @change="handtitle($event)">
         <textarea  id="booktxt" placeholder="请输入您要发表的文章内容" :value="bkmain" @change="handmain($event)"></textarea>
        </div>
    </template>
<script>
    import vue from "vue"
    import Vuex from "vuex";
    export default {
        computed: {
            ...Vuex.mapState({
                bktitle: state => state.plus.bktitle,
                bkmain: state => state.plus.bkmain,
            })
        },
        methods: {
            ...Vuex.mapMutations({
                handtitle: "plus/handtitle",
                handmain: "plus/handmain"
            }),
        }
    }
</script>
<style lang="scss" scoped>
    input,
    button,
    select,
    textarea {
        outline: none
    }
    
    #bookmain {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    
    #booktitle {
        width: 100%;
        padding: 0 .1rem;
        height: .9rem;
        border: .01rem solid #ccc;
        font-size: .4rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(184, 184, 184, 1);
        text-align: center;
        border: 0;
        border-bottom: .01rem solid #ccc;
    }
    
    #booktxt {
        width: 100%;
        flex: 1;
        font-size: .32rem !important;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(184, 184, 184, 1);
        padding: .21rem;
        border: 0;
        resize: none;
    }
</style>