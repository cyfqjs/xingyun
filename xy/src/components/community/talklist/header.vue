<template>
    <div id="header">
        <div class="back_zjy">
            <img @click="handleBack_zjy" src="@/assets/community/img/back.png" alt="">
        </div>
        <h2>私信</h2>
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
<style scoped>
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
    }
    #header>.back_zjy{
        width:.37rem;
        height:.28rem;
    }
    #header>.back_zjy>img{
        width:100%;
        height:100%;
    }
    #header h2{
        font-size:.38rem;
        margin-left:2.8rem;
    }
</style>