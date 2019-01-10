<template>
    <div id="header">
        <div class="back_zjy" @click="handleBack_zjy">
            <img src="@/assets/community/img/back.png" alt="">
        </div>
        <h2>75条回复</h2>
    </div>
</template>
<script>
export default {
    methods:{
        handleBack_zjy(){
            this.$router.back();
        }
    }
}
</script>
<style lang="scss" scoped>
    #header{
        width: 100%;
        height:.88rem;
        display: flex;
        align-items: center;
        padding: 0 .2rem;
        color:#fff;
        position: fixed;
        z-index:5;
        background: #2F284B;
        .back_zjy{
            width:.37rem;
            height:.28rem;
            img{
                width:100%;
                height:100%;
            }
        }
        h2{
            width:100%;
            font-size:.38rem;
            text-align: center;
        }
    }
</style>