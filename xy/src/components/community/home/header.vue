<template>
    <div id="header_zjy">
        <p>社区</p>
        <div class="wx_zjy"><router-link to="/talklist"><img src="@/assets/community/img/wx_zjy.png" alt=""></router-link></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #header_zjy{
        width:100%;
        height:.88rem;
        background:#2F284B; 
        display: flex;
        justify-content: space-between;
        align-items: center ;
        color:#fff; 
        font-size:.35rem;
        padding: 0 .2rem;  
        position:fixed;
        z-index:5; 
    }
    .wx_zjy{
        width:.53rem;
        height:.39rem;
    }
    .wx_zjy img{
        width:100%;
        height:100%;
    }
</style>
