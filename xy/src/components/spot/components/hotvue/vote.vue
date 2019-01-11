<template>
    <div class="app">
        <div class="title">请选择您的观点</div>
        <div class="vote">
            <div class="agree" @click="yes()">可以</div>
            <div class="oppose" @click="no()">不可以</div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        yes(){
        },
        }

}
</script>
<style lang="scss" scoped>
 .app{
    width: 75%;
    margin:0 auto;
    margin-top: 0.61rem;
    .title{
        width: 100%;
        text-align:center;
        // margin-top:.62rem;
        height: .28rem;
        font-size: .28rem;
        color: white;
        font-family: 'PingFang-SC-Regular';

    }
    .vote{
        width: 100%;
        height: 2.13rem;
        margin-top:1.03rem;
        display: flex;
        justify-content: space-around;
        .agree,.oppose{
            width: 2.13rem;
            height: 2.13rem;
            background: #ccc;
            background: url('../../../../assets/spot/icon1-ht.png') no-repeat;
            text-align: center;
            line-height: 1.9rem;
            font-size: .28rem;
            color: white;
        }
        .oppose{
            background: url('../../../../assets/spot/icon2-ht.png') no-repeat;
        }
    }

    }
</style>
