<template>
    <div id="speak">
        <textarea  placeholder="写评论..."></textarea>
        <p>发送</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    #speak{
        width:100%;
        height:2.09rem;
        background: #CACACA;
        position: fixed;
        left:0;
        bottom:5.79rem;
        z-index:3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem;
        textarea{
            display: block;
            width: 5.8rem;
            height:1.69rem;
            border:1px dashed #000;
            text-align: left;
            font-size:.25rem;
        }
        p{
            width:.8rem;
            font-size:.3rem;
            font-family:PingFang-SC-Regular;
        }
    }
</style>