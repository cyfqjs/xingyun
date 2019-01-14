<template>
    <div class="app">
        <div class="nav">
        <ul>
			<li v-for="(item,index) in navs" @click="handleTo(index)" :class="activeindex==index?'active':''">{{item}}</li>
		</ul>
        </div>
        <keep-alive>
             <component :is="conName"></component>
             
        </keep-alive>
       
    </div>
</template>
<script>
import Hot from "./hot";
import Wonderful from "./wonderful"
export default {
    components:{
        "hot-com":Hot,
        "wonderful-com":Wonderful
    },
    data(){
        return{
            navs:["热门话题","精彩文章"],
            activeindex:0,
            conName:"hot-com"
        }
       
    },
    methods:{
      handleTo(index){
          if(index == 0){
            this.conName="hot-com";

          }else if(index == 1){
             this.conName="wonderful-com";
          }
        this.activeindex=index
      }
    }
}
</script>
<style scoped >
    .app .nav{
        width: 90%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        background:#2f284a;
        align-items: center;
        margin: 8px auto;
        
    }
    .app .nav ul{
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        background:#2f284a;
        align-items: center;
        margin: 8px auto;
        
    }
    .app .nav ul li{
        width:50%;
        height: 44px;
        background:#2f284a;
        line-height: 44px;
       color: white;
        font-size: 14px;
        text-align: center;
    }
    .app .nav ul .active{
         background: #3E326B;
     }
</style>
