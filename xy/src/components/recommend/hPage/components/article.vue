<template>
  <div id="article">
    <div class="aCon">
      <div class="aTop">
        <div class="aTit">精彩文章</div>
        <div class="aAll" @click="tospot">查看全部</div>
      </div>
      <div class="alist">
          <div class="l1" @click="tospotarticle">
              <div class="t1"><img src="../../../../assets/recommend/t1.jpg" alt=""></div>
              <div class="lc">
                  <p>{{r1}}</p>
                  <div class="pNum"><span>{{t1}}</span>人看过</div>
              </div>
          </div>
          <div class="l2">
              <div class="t2"><img src="../../../../assets/recommend/t1.jpg" alt=""></div>
              <div class="lc">
                  <p>{{r2}}</p>
                  <div class="pNum"><span>{{t2}}</span>人看过</div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
    data(){
        return{
            r1:"",
            r2:"",
            t1:"",
            t2:"",
            t:""
        }
    },
    created(){
      let t = sessionStorage.getItem("token");
// console.log(t);
this.t = t
    },
    mounted(){
        axios({
            url:"http://39.96.91.169/StarOfSea/index/getRecommend",
            method:"post",
             headers:{
          accessToken:this.t
        }
        }).then(data=>{
            // console.log(data);
            this.r1 = data.articles[0].title;
            this.r2 = data.articles[1].title;

            this.t1 = data.articles[0].times;
            this.t2 = data.articles[1].times;

        })
    },
    methods:{
        tospot(){
            this.$router.push("../../../spot")
        },
        tospotarticle(){
            this.$router.push("../../../spot")

        }
    }
}
</script>


<style lang="scss">
    #article{
        width: 100%;
    
    .aCon{
        height: 100%;
        width: 7.1rem;
        background: #392F61;
        margin: .1rem auto;
        .aTop{
            width: 100%;
            height: .6rem;
            background: #2F284B;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .aTit{
                color: #fff;
                font-size: .3rem;
                margin-left: .14rem;
            }
            .aAll{
                color: #7585FF;
                font-size: .2rem;
                margin-right: .37rem;
            }
        }
        .alist{
            width: 100%;
           .l1{
               width: 6.85rem;
               height: 1.59rem;
               border-radius: .1rem;
               background: #453A6C;
               margin: .1rem auto;
               display: flex;
               .t1{
                   img{
                       display: block;
                       height: 1.59rem;
                       border-radius: .1rem;
                   }
               }
               .lc{
                   color: #fff;
                   p{
                       font-size: .28rem;
                       margin-left: .4rem;
                       margin-top: .2rem;
                   }
                   .pNum{
                       margin-top: .58rem;
                       margin-left: 2.66rem;
                   }
               }
           }
           .l2{
               width: 6.85rem;
               height: 1.59rem;
               border-radius: .1rem;
               background: #453A6C;
               margin: .1rem auto;
               display: flex;
               .t2{
                   img{
                       display: block;
                       height: 1.59rem;
                       border-radius: .1rem;
                   }
               }
               .lc{
                   color: #fff;
                   p{
                       font-size: .28rem;
                       margin-left: .4rem;
                       margin-top: .2rem;
                   }
                   .pNum{
                       margin-top: .58rem;
                       margin-left: 2.66rem;
                   }
               }
           }  
        }
    }
    }
</style>

