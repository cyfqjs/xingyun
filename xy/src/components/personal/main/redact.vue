<template>
    <div id="redact">
        <div id="redactTop">
           <router-link :to="{name:'personal'}"><img src="@/assets/personImg/left.png"></router-link>  
            <div id="tx">aa</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss">
    #redact{
        width:7.5rem;
        height:5rem;
        background:url("../../../assets/personImg/back.png");
        #redactTop{
            a{
                width:.5rem;
                height:.5rem;
                display:block;
                position:fixed;
                top:.4rem;
                left:.4rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            #tx{
                width:1.24rem;
                height:1.24rem;
                border-radius:50%;
                backgound:red;
            }
        }
    }
</style>

