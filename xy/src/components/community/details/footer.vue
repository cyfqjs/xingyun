<template>
    <div id="footer">
        <p><img src="@/assets/community/img/fx_zjy.png" alt="">分享</p>
        <p><img src="@/assets/community/img/pl_zjy.png" alt="">评论</p>
        <p><img src="@/assets/community/img/dz_zjy.png" alt="">喜欢</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    #footer{
        width:100%;
        height:.68rem;
        display: flex;
        align-items:center;
        background: #2F284B;
        padding: .1rem 0;
        position: fixed;
        left:0;
        bottom:0;
        z-index:5;
        P{
            width:33%;
            height:100%;
            border-right:1px solid #fff;
            font-size:.22rem;
            font-family:PingFang-SC-Regular;
            color:#fff;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width:.28rem;
                height:.28rem;
                margin-right:.1rem;
            }
        }
    }
</style>