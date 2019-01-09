<template>
        <div id="header">
        <div>取消</div>
        <div class="title">星书发表</div>
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
            line-height: .38rem;
            font-family: PingFangSC-Regular;
            color: rgba(255, 255, 255, 1);
        }
        div:nth-of-type(1) {
            width: .6rem;
            height: .29rem;
            font-size: .29rem;
            font-family: PingFang-SC-Regular;
            color: rgba(255, 255, 255, 1);
        }
        div:nth-of-type(3) {
            width: .7rem;
            height: .35rem;
            text-align: center;
            line-height: .35rem;
            border: 1px solid #ddd;
            font-size: .29rem;
            font-family: PingFang-SC-Regular;
            color: rgba(255, 255, 255, 1);
        }
    }
</style>