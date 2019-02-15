<template>
    <div id="footer">
        <p @click="handlePush_zjy"><img src="@/assets/community/img/fx_zjy.png" alt="">分享</p>
        <p><img src="@/assets/community/img/pl_zjy.png" alt="">评论<input type="text" @click="handlePl_zjy"></p>
        <p><img src="@/assets/community/img/dz_zjy.png" alt="">喜欢</p>
    </div>
</template>
<script>
import Vuex from "vuex";
export default {
    created(){
        // 接受到的某条动态的具体数据
        // this.Observer.$on("handleDetails_zjy",val=>{
        //     // this.details_zjy=val;
        //     console.log(val)
        // })
    },
    data(){
        return {
            // 评论框是否显示
            flagPl_zjy:false,
            // 接受到的某条动态的具体数据
            details_zjy:"",
        }
    },
   methods:{
        handlePush_zjy(){
            // 转发
            this.$store.dispatch("Community/handlePush_zjy");
        },
        //评论
        handlePl_zjy(){
            this.flagPl_zjy=!this.flagPl_zjy
            this.Observer.$emit("handlePl_zjy",{flag:this.flagPl_zjy,con:3})
        },
        //点赞
        // ...Vuex.mapActions({
        //     handleAddDz_zjy:"Community/handleAddDz_zjy",
        // })
        // 将接收到的某条动态的具体数据传递出去
        // handleAddDz_zjy(){
        //     console.log(this.details_zjy)
           
        // }
   },
   watch:{
       details_zjy(newVal,oldVal){
           console.log(newVal,oldVal,22222)
       }
   } 
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
        p{
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
        p:nth-child(2){
            input{
                width:.1rem;
                height:.1rem;
                background:#2F284B; 
                border:none;
            }
        }
        p:nth-child(3){
            border-right:none;
        }
        
    }
</style>