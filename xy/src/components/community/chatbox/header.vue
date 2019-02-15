<template>
    <div id="header">
        <div class="back" @click="handleTalklist_zjy">
            <img src="@/assets/community/img/zjj.png" alt="">
            
        </div>
        <span>{{name}}</span>
    </div>
</template>
<script>
import Vuex from "vuex" 
import qs from "qs"
export default {
    methods:{
        // 点击返回私信列表
        handleTalklist_zjy(){
            this.Observer.$emit("handleChat_zjy",0)
        }
    },
    data(){
        return {
            name:""
        }
    },
    computed: {
        // ...Vuex.mapState({
        //     name:state=>{
        //         //  if(state.Community.friend.name===""){
        //             // let name=JSON.parse(sessionStorage.getItem("friend")).name
        //             // state.Community.friend.name=name
        //         //   }
        //         console.log(JSON.parse(sessionStorage.getItem("friend")))
        //         return state.Community.friend.name
        //     }
        // })
    },
    activated() {
        let val=JSON.parse(localStorage.getItem("friend")).name
        this.name=val
    },
}
</script>
<style scoped>
    #header{
        width: 100%;
        height:.88rem;
        background: #2F284B;
        display: flex;
        align-items:center;
        padding: 0 .2rem;
        font-size:.3rem;
        color:#595959;
        position: fixed;
        left:0;
        top:0;
        z-index:5;
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