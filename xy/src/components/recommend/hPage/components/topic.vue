<template>
  <div id="topic">
    <div class="tCon">
      <div class="tTop">
        <div class="tTit">热门话题</div>
        <div class="tAll" @click="tospot">查看全部</div>
      </div>
      <div class="wrapper" ref="listWrapper">
        <ul class="list content" >
        <li @click="tospotfirst">
          <h2>{{content}}</h2>
          <div class="lCon">
            <div class="con"></div>
            <div class="lFot">
              <div class="portraits">
                <div class="p1"></div>
                <div class="p2"></div>
                <div class="p3"></div>
              </div>
              <div class="numBlock">
                <span class="num">{{times}}</span>人
              </div>
            </div>
          </div>
        </li>
        <li>
          <h2>{{content1}}</h2>
          <div class="lCon">
            <div class="con"></div>
            <div class="lFot">
              <div class="portraits">
                <div class="p1"></div>
                <div class="p2"></div>
                <div class="p3"></div>
              </div>
              <div class="numBlock">
                <span class="num">{{times1}}</span>人
              </div>
            </div>
          </div>
        </li>
        <li>
          <h2>分手可以体面吗</h2>
          <div class="lCon">
            <div class="con"></div>
            <div class="lFot">
              <div class="portraits">
                <div class="p1"></div>
                <div class="p2"></div>
                <div class="p3"></div>
              </div>
              <div class="numBlock">
                <span class="num">1210</span>人
              </div>
            </div>
          </div>
        </li>
      </ul>
      </div>
      
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default {
    data(){
      return{
        content:"",
        times:"",
        content1:"",
        times1:"",
        t:""
      }
    },
    created(){
      let t = sessionStorage.getItem("token");
console.log(t);
this.t = t
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.listWrapper, {
          scrollX:true
          });
        // console.log(this.scroll);
      })
      ,
      axios({
        url:"http://39.96.91.169/StarOfSea/focus/getCurlycues",
        method:"post",
        headers:{
          accessToken:this.t
        }
      }).then(data=>{
        this.content = data.curlycues[1].content;
        this.times = data.curlycues[1].times;
        this.content1 = data.curlycues[0].content;
        this.times1 = data.curlycues[0].times;
      })
    },
    methods:{
      tospot(){
        this.$router.push("../../../spot")
      },
      tospotfirst(){
        this.$router.push("../../../spot")
      }
    }
  }
</script>

<style lang="scss">
#topic {
    width: 100%;
    height: 2.98rem;
    .tCon{
        height: 100%;
        width: 7.1rem;
        background: #392F61;
        margin: .1rem auto;
        .tTop{
            width: 100%;
            height: .6rem;
            background: #2F284B;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .tTit{
                color: #fff;
                font-size: .3rem;
                margin-left: .14rem;
            }
            .tAll{
              cursor: pointer;
                color: #7585FF;
                font-size: .2rem;
                margin-right: .37rem;
            }
        }
        .wrapper{
          width: 100%;
          height: 2.38rem;
          // flex-shrink: 1;
          overflow: hidden;
          .list{
            width:max-content;
            height: 2.38rem;
            display: flex;
            li{
                width: 4.3rem;
                height: 2.03rem;
                background: #9A85B9;
                border-radius: .12rem;
                margin-left: .15rem;
                margin-right: .15rem;
                h2{
                  width: 100%;
                  height: .53rem;
                  line-height: .53rem;
                  color: #fff;
                  font-weight: normal;
                  text-align: center;
                  font-size: .28rem;
                  background: #8671A7;
                }
                .lCon{
                  .con{
                    height: .76rem;
                  }
                  .lFot{
                    display: flex;
                    justify-content: space-between;
                    .portraits{
                      display: flex;
                      padding-top: .1rem;
                      .p1{
                          width: .48rem;
                          height:.48rem;
                          background: url(../../../../assets/recommend/jiatou2.png) no-repeat;
                          background-size: 100% 100%;
                          margin-left: .14rem;
                      }
                      .p2{
                          width: .48rem;
                          height:.48rem;
                          background: url(../../../../assets/recommend/jiatou3.png) no-repeat;
                          background-size: 100% 100%;
                          margin-left: .14rem;

                      }
                      .p3{
                          width: .48rem;
                          height:.48rem;
                          background: url(../../../../assets/recommend/jiatou4.png) no-repeat;
                          background-size: 100% 100%;
                          margin-left: .14rem;

                      }
                    }
                    .numBlock{
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin-top: .2rem;
                      margin-right: .2rem;
                    }
                  }
                }
            }
        }
        }
        
    }
}
</style>

