<template>
    <div id="header">
        <div class="back" @click="handleTalklist_zjy">
            <img src="@/assets/community/img/zjj.png" alt="">
            
        </div>
        <span>最美天蝎小姐姐</span>
    </div>
</template>
<script>
export default {
    methods:{
        handleTalklist_zjy(){
            this.$router.back();
        }
    }
}
</script>
<style scoped>
    #header{
        widows: 100%;
        height:.88rem;
        background: #2F284B;
        display: flex;
        align-items:center;
        padding: 0 .2rem;
        font-size:.3rem;
        color:#595959;
    }
     #header>.back{
         width:.2rem;
         height:.34rem;
         color:#fff;
         font-weight:bold;
         font-size:.4rem;
     }

     #header>.back>img{
         width:100%;
         height:100%;
     }
     #header>span{
         display: block;
         width:100%;
         text-align: center;
     }
</style>