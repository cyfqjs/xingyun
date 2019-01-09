<template>
    <div id="header">
        <!-- <mt-header fixed title="固定在顶部"></mt-header> -->
        <div class="back" @click="handleT">
            &lt;
        </div>
        <span>动态正文</span>
        <div class="intransit" @click="handlePush_zjy">
            <img src="@/assets/community/img/fx_zjy.png" alt="">
        </div>
    </div>
</template>
<script>
// import Vue from "vue";
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
import Vuex from "vuex"
export default {
   
    methods:{
        ...Vuex.mapActions({
            handlePush_zjy:"Community/handlePush_zjy"
        }),
        handleT(){
            this.$router.back();
        }
    }
}
</script>
<style lang="scss" scoped>
     #header{
        width: 100%;
        height:.88rem;
        background:#2F284B;
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding: 0 .2rem;
        font-size:.3rem;
        color:#fff;
        position: fixed;
        z-index:5;
    }
     #header>.back{
         width:.2rem;
         height:.34rem;

         font-weight:bold;
         font-size:.4rem;
     }
     #header>span{
        font-size:.38rem;
        font-weight:400; 
     }
     #header>.intransit{
         width:.33rem;
         height:.33rem;
     }
     .intransit>img{
         width:100%;
         height:100%;
     }
</style>