<template>
  <div id="article">
    <div class="aCon">
      <div class="aTop">
        <div class="aTit">精彩文章</div>
        <div class="aAll">查看全部</div>
      </div>
      <div class="alist">
          <div class="l1">
              <div class="t1"><img src="../../../assets/recommend/t1.jpg" alt=""></div>
              <div class="lc">
                  <p>2019年十二星座财运大揭秘</p>
                  <div class="pNum"><span>1210</span>人看过</div>
              </div>
          </div>
          <div class="l2">
              <div class="t2"><img src="../../../assets/recommend/t1.jpg" alt=""></div>
              <div class="lc">
                  <p>2019年十二星座爱情大揭秘</p>
                  <div class="pNum"><span>1210</span>人看过</div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

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

