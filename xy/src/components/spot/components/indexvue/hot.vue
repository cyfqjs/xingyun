<template>
    <div class="hot">
        <keep-alive>
        <ul>
            <li v-for="(item,index) in topic">
                <router-link :to="'topiccontent'">
                <!-- +item.topicid+'/'+item.backimg -->
                    <div class="topic" >{{item.title}}</div>
                    <div class="praisecount">
                        <span>{{item.praisepeoplehead[0]}}</span>
                        <span>{{item.praisepeoplehead[1]}}</span>
                        <span>{{item.praisepeoplehead[2]}}</span>
                        <span>{{item.praisecount}}</span>
                    </div>
                </router-link>
            </li>
        </ul>
        </keep-alive>
    </div>
</template>

<script>
export default {
    data(){
        return{
            topic:[
                {
                    topicid:"1",
                    title:"分手可以体面吗",
                    praisecount:"",
                    praisepeoplehead:[],
                    backimg:"",
                },
                {
                    topicid:"2",
                    title:"分手可以体面吗",
                    praisecount:"",
                    praisepeoplehead:[],
                    backimg:"",
                },
                {
                    topicid:"3",
                    title:"分手可以体面吗",
                    praisecount:"",
                    praisepeoplehead:[],
                    backimg:"",
                },
                {
                    topicid:"4",
                    title:"分手可以体面吗",
                    praisecount:"",
                    praisepeoplehead:[],
                    backimg:"",
                }
            ]
        }
    },
    created(){
        
    }
}
</script>
<style scoped>
.hot{
    width: 100%;
}
.hot ul{
    width: 6.24rem;
    margin: 0 auto;
}
  .hot ul li{
      width: 6.24rem;
      height: 2.04rem;
      color: white;
      background: url('../../../../assets/spot/jiatu-kd.png');
      margin-top: .2rem;
      font-family: 'PingFang-SC-Regular';
   }
   .hot ul li .topic{
       width: 100%;
       height: .54rem;
       text-align: center;
       font-size: .26rem;
       color: white;
       line-height: .54rem;
      background: rgba(48, 16, 112, 0.3);
   }
   .hot ul li .praisecount{
       width: 100%;
       height: .54rem;
       margin-top:.98rem ;
       background: rgba(47, 14, 111, 0.3);
       display: flex;
       
       align-items: center;
   }
   .hot ul li .praisecount span{
       display: block;
       width: .48rem;
       height: .48rem;
       background: #fff;
       margin-left: .18rem;
       border-radius:50%; 
   }
   .hot ul li .praisecount a{
       color: white;
       margin-right: .15rem;
   }
</style>
