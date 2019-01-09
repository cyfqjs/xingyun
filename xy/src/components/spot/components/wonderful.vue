<template>
    <div class="wonderful">
        <keep-alive>
        <ul>
            <li>
                
                <div class="logo"></div>
                <div class="logoright">
                    <span class="title">dshshyr</span>
                    <span class="glanceover">1234人看过</span>
                </div>
                
            </li>
            <li>
                <router-link :to="'spot/essaycontent'">
                <div class="logo"></div>
                <div class="logoright">
                    <span class="title">dshshyr</span>
                    <span class="glanceover">1234人看过</span>
                </div>
                </router-link>
            </li>
        </ul>
        </keep-alive>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
  .wonderful{
    width: 100%;
    margin: 0 auto;
  }
    .wonderful ul{
    width: 6.24rem;
    margin: 0 auto;
}
  .wonderful ul li{
      width: 6.24rem;
      height: 1.6rem;
      margin-top: .2rem;
      border-radius: .1rem;
      color: white;
      display: flex;
      background: rgba(255, 255, 255, 0.19);
   }
   .wonderful ul li a{
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        border-radius: .1rem;
        color: white;
   }
   .wonderful ul li .logo{
       width: 1.74rem;
       height: 1.58rem;
       border-radius: .1rem;
       background: url('../../../assets/spot/hotjiatu-kd.png');
   }
   .wonderful ul li .logoright{
       width: 4.52rem;
       height: 1.58rem;
   }
   .wonderful ul li .logoright .title{
       display: block;
       width: 3.1rem;
       height: .28rem;
       font-size: .28rem;
       margin-left: .56rem;
       margin-top: .18rem;
   }
   .wonderful ul li .logoright .glanceover{
       display: block;
       height: .24rem;
       margin-left: 2.6rem;
       margin-top: .58rem;
       font-size: .24rem
   }
</style>
