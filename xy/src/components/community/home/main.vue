<template>
    <div id="main">
        <ul>
            <li>
            <p class="photo_zjy"><img src="@/assets/community/img/tx.jpeg" alt=""></p>
            <p class="name_zjy">行走的呆萌天才<span>08-19 17:50</span></p>
            <p class=" Concern_zjy"><router-link to="">+关注</router-link></p>
            <p class="content_zjy">
                随时查看大大阿达大大大大大大的撒旦撒大大是的撒大大说打算大的萨达
            </p>
            <p class="fdp_zjy">
                <router-link to=""><img src="@/assets/community/img/fx_zjy.png" alt=""><span>2012</span></router-link>
                <router-link to=""><img src="@/assets/community/img/pl_zjy.png" alt=""><span>2012</span></router-link>
                <router-link to=""><img src="@/assets/community/img/dz_zjy.png" alt=""><span>2012</span></router-link>
            </p>
            </li>
            <li>
            <p class="photo_zjy"><img src="@/assets/community/img/tx.jpeg" alt=""></p>
            <p class="name_zjy">行走的呆萌天才<span>08-19 17:50</span></p>
            <p class=" Concern_zjy"><router-link to="">+关注</router-link></p>
            <p class="content_zjy">
                随时查看大大阿达大大大大大大的撒旦撒大大是的撒大大说打算大的萨达
            </p>
            <p class="pic_zjy">
                <img src="@/assets/community/img/tx.jpeg"  alt="">
                <img src="@/assets/community/img/tx.jpeg"  alt="">
                <img src="@/assets/community/img/tx.jpeg"  alt="">
                <img src="@/assets/community/img/tx.jpeg"  alt="">
            </p>
            <p class="fdp_zjy">
                <router-link to=""><img src="@/assets/community/img/fx_zjy.png" alt=""><span>2012</span></router-link>
                <router-link to=""><img src="@/assets/community/img/pl_zjy.png" alt=""><span>2012</span></router-link>
                <router-link to=""><img src="@/assets/community/img/dz_zjy.png" alt=""><span>2012</span></router-link>
            </p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #main{
        width:100%;
        height:100%;
        min-height:1000rem;
        background: #221D3B;
        color:#fff;
        padding:0 .2rem;
    }
    #main>Ul{
        width:100%;
        height:100%;
    }
    #main>Ul>li{
        width:100%;
        height:auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-top:.3rem;
    }
     #main>Ul>li>.photo_zjy{
         width:1.08rem;
         height:1.08rem;
     }
     #main>Ul>li>.photo_zjy>img{
         width:100%;
         height:100%;
         border-radius:50%;

     }
     #main .name_zjy{
         width:2.08rem;
         height:.5rem;
         font-size:.25rem;
         line-height: .32rem;
         margin-left:-2.2rem;
     }
     #main .name_zjy>span{
         font-size:.22rem;
         color:#ccc;
         display: block;
     }
     #main .Concern_zjy{
         width:.9rem;
         height:.48rem;
     }
     #main .Concern_zjy>a{
         widows: 100%;
         height:100%;
         display: block;
         color:#9B51E2;
         text-align: center;
         line-height: .48rem;
         font-size:.22rem;
         border:.01rem dashed 
     }
     #main .content_zjy{
         width:100%;
         height:auto;
         font-size:.24rem;
         margin:.8rem 0 .55rem ;
     }
      #main .fdp_zjy{
          width:100%;
          height:.5rem;
          display:flex;
          justify-content: space-between;
          align-items: center;
          border-top:.01rem solid #2C254B;
          margin-top:.2rem;
      }
      #main .fdp_zjy>a{
          display: inline-block;
          width:33%;
          line-height:.5rem;
          display:flex;
          align-items:center;
      }
      .fdp_zjy>a>img{
          width:.33rem;
          height:.29rem;
          margin:0 .1rem 0 .7rem;
      }
      #main .pic_zjy{
          width:100%;
          height:auto;
          display: flex;
          flex-wrap:wrap;
      }
      #main .pic_zjy>img{
          width:49%;
          height:50%;
      }
</style>