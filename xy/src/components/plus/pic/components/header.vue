<template>
        <div id="header">
       <router-link :to="{name:'plus'}"><div>取消</div></router-link> 
        <div class="title">星图发表</div>
        <div>发表</div>
        </div>
    </template>
<script>
    export default {

    }
</script>
<style lang="scss">
    #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: .95rem;
        padding: 0 20px;
        background: rgba(34, 29, 59, 1);
        align-items: center;
        .title {
            width: 1.6rem;
            height: .38rem;
            font-size: .38rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: PingFangSC-Regular;
            color: rgba(255, 255, 255, 1);
        }
        a>div {
            width: .6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            height: .29rem;
            font-size: .29rem;
            font-family: PingFang-SC-Regular;
            color: rgba(255, 255, 255, 1);
        }
        div:nth-of-type(2) {
            width: .8rem;
            height: .35rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ddd;
            padding: 2px;
            font-size: .29rem;
            font-family: PingFang-SC-Regular;
            color: rgba(255, 255, 255, 1);
        }
    }
</style>