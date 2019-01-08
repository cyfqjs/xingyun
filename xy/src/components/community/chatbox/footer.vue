<template>
    <div id="footer">
        <div class="send"><p>发送</p></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #footer{
        width:100%;
        height:.98rem;
        background:#2F284B;
        position: fixed;
        left:0;
        bottom:0;
        z-index:5;
    }
    .send{
        width:7.1rem;
        height:.71rem;
        background:rgba(34,29,59,1);
        border:1px solid rgba(161,151,213,1);
        border-radius:.1rem;
        margin:.13rem auto;
    }
    .send>p{
        width:.58rem;
        height:.28rem;
        font-size:.28rem;
        color:rgba(254,254,254,1);
        float:right;
        margin:.15rem;
    }
</style>