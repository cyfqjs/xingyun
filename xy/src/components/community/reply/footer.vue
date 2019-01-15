<template>
    <div id="footer">
        <input type="text" placeholder="回复评论..." class="send" />
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #footer{
        width:100%;
        height:.7rem;
        background:#2F284B;
        position: fixed;
        left:0;
        bottom:0;
        z-index:5;
    }
    .send{
        width:7.1rem;
        height:.48rem;
        background:#fff;
        border-radius:.1rem;
        margin:.1rem .2rem;
        font-size:.2rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#B8B8B8;
        padding-left:.2rem ;
    }
</style>