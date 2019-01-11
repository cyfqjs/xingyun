<template>
  <div class="app">
    <div class="content">
      <div class="user">
        <div class="headphoto">
          <img src="@/assets/spot/icon_axq_hf.png">
        </div>
        <div class="uname">
          <div class="name">{{name}}</div>
          <div class="personality">{{personality}}</div>
        </div>
        <div class="follow">+ 关注</div>
      </div>
      <div class="title">{{title}}</div>
      <p>{{content}}</p>
      <div class="foot">
          <div class="browse">阅读：{{browse}}</div>
          <div class="like"><img src="@/assets/spot/icon_axq_hf.png"/></div>
          <div class="likecount">喜欢 （{{like}}）</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            
                name:"最美天蝎小姐姐",
                personality:"我的夜晚比你的白天更美",
                title:"我的夜晚比你的白天更美",
                content:"天蝎座来到2019年后，其实整体运势都挺不错的，至少能够过个富足有盈余的年份。2019年的天蝎座总是保持着元气满满的状态，做事也是干劲十足，勤奋的你们一刻都不允许自己偷懒。这样的天蝎，这年求财的欲望特别强烈，再加上运势在线，所以在钱财方面的收入会相对过去的一年要好得多。除了会有加薪机会外，也可能是跳槽有了更高薪的工作。另外，天蝎座这一年对自己的物质生活有较大的追求，在赚到钱的同时也会享受花钱换来的优质生活条件。虽然这一年的花销也比较多，不过基于你们进账收入增幅更大的关系，只要不是过度挥霍，基本上都是挺富足的年份。不过，要提醒天蝎座朋友们，这一年签合同的运势不大好，容易因看走眼而惹上麻烦，或是损失，所以不建议买卖房屋，以及签订重要合同。",
                browse:"10090",
                like:"773",
        }
    }
}
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: 10.45rem;
  background: url("../../../../assets/spot/sybj2.png");
  background-position: right -3.5rem bottom 0;
  background-size: cover;

  padding-top: 0.2rem;
  .content {
      position: relative;
    width: 7.1rem;
    height: 10.25rem;
    margin: 0 auto;
    background: #221d3b;
    opacity: 0.8;
    padding-top: 0.15rem;
    .user {
      width: 100%;
      height: 0.98rem;
      background: #221d3b;
      display: flex;
      .headphoto {
        width: 0.98rem;
        height: 0.98rem;
        margin-left: 0.08rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .uname {
        width: 4.41rem;
        height: auto;
        .name {
          width: 100%;
          height: 0.31rem;
          color: #fbf9f9;
          font-size: 0.31rem;
          margin-top: 0.22rem;
        }
        .personality {
          font-size: 0.25rem;
          margin-top: 0.14rem;
          color: #e0d7fa;
        }
      }
      .follow {
        width: 1.27rem;
        height: 0.59rem;
        background: rgba(230, 209, 249, 0.3);
        margin-right: 0.17rem;
        margin-top: 0.27rem;
        text-align: center;
        line-height: 0.59rem;
        color: white;
        font-size: 0.24rem;
      }
    }
    .title {
      width: 100%;
      margin-top: 0.43rem;
      text-align: center;
      font-size: 0.34rem;
      color: #fff;
    }
    p {
      width: 6.33rem;
      margin: 0 auto;
      margin-top: 0.5rem;
      font-size: 0.25rem;
      color: #e0d7fa;
      letter-spacing: .04rem;
      line-height:.35rem; 
      
    }
    .foot{
        width: 100%;
        height: .4rem;
        display: flex;
        position: absolute;
        bottom: .36rem;
        padding-left: .15rem;
        padding-right: .15rem;
        line-height: .4rem;
        .browse{
            width: 1.67rem;
            height: .4rem;
            border-radius: .05rem;
            background: rgba($color: #fff, $alpha: 0.6);
            font-size: .24rem;
            color: #27103C;
            // font-family: "PingFang-SC-Regular";
            line-height: .4rem;
            text-align: center;
        }
        .like{
            width: .33rem;
            height: .3rem;
            position: absolute;
            right: 2.1rem;
            top: .05rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .likecount{
            width: 1.76rem;
            height: .4rem;
            border-radius: .05rem;
            background: rgba($color: #fff, $alpha: 0.6);
            color: #27103C;
            font-size: .24rem;
            font-family: "PingFang-SC-Regular";
            line-height: .4rem;
            text-align: center;
            position: absolute;
            right: .14rem;
        }
    }
  }
}
</style>
