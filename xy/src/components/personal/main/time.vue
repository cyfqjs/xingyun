<template>
    <div class="wrapper personWrapper" id="personBottom" ref="personWrapper">
        <ul class="content" id="content" >
            <div id="zhou">
                <p id="time">2019/1/1</p>
                <li v-for="(item,index) in personTime.data" >
                    <!-- :style={background-image=url("{item.img}")} -->
                    <div class="swiper-container" ref="swiperContainer" >
                        <div class="swiper-wrapper" >
                            <div class="swiper-slide">
                               <div class="title">{{item.title}}</div>
                               <div class="content">{{item.content}}</div>
                            </div>
                            <div class="swiper-slide">
                              <div class="title">{{item.title}}</div>
                               <div class="content">{{item.content}}</div> 
                            </div>
                            <div class="swiper-slide">
                               <div class="title">{{item.title}}</div>
                               <div class="content">{{item.content}}</div>
                            </div>    
                        </div>
                    </div>
                </li>
            </div>
        </ul>
	</div>
</template>

<script>
import BScroll from 'better-scroll';
import Swiper from 'swiper';
import vuex from "vuex";
export default {
    mounted() {
          if(!this.scroll){
              this.scroll = new BScroll(this.$refs.personWrapper,{
                  scrollY:true,
                  click:true
              })
             // console.log(this.scroll);
           }
           var mySwiper3 = new Swiper(this.$refs.swiperContainer,{
                effect : 'coverflow',
                // slidesPerView: 3,
                centeredSlides: true,
                loop:true, //无缝轮播
                autoplay: {
                   disableOnInteraction: false,   //拖拽后仍可轮播
                },
                // preventClicks : false, //点击事件默认true不可跳转
            }) 

    },
    methods: {
        ...vuex.mapActions({
            handleTime:"Main/handleTime"
        })
    },
    created() {
        this.handleTime();
        console.log(this.personTime.data)
    },
    computed: {
        ...vuex.mapState({
            personTime:state=>state.Main.personTime
        })
    },

}
</script>

<style lang="scss">
#personBottom{
  width:7.5rem;
  height:7rem;
  overflow: hidden;
    #content { 
      width:7.5rem;
      height: 100rem;
      #zhou {
        width: 0.08rem;
        height:100%;
        background: rgba(255, 255, 255, 1);
        opacity: 0.5;
        margin-left: 1.28rem;
        padding-top:1rem;
        #time{
            width:1.92rem;
            height:.29rem;
            line-height:.31rem;
            font-size:.3rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            margin:0 .6rem .6rem;
        }
        li{
          width:6rem;
          height:3.23rem;
          border-radius:.1rem;
          background:rgb(135, 160, 135);
          position:relative;
          margin-left:-.8rem;
          margin-bottom:1rem;
           .swiper-container{
               width:100%;
               height:100%;
           }
        };
        li:before{
            content:"";
            display: inline-block;
            width:.4rem;
            height:.4rem;
            border-radius: 50%;
            background:rgb(255, 255, 255);
            position:absolute;
            top:-1rem;
            left:.65rem;
        }
      }
    }
}

</style>
