<template>
  <div id="fortune">
    <div class="fCon">
      <p class="proverb">记忆残缺的只剩思念，流年撕碎骄傲的容颜。</p>
      <div class="fMain">
        <h2 class="tit">今日运势</h2>
        <span class="nowTime"><i class="lLiner"></i>12.25.2018<i class="rLiner"></i></span>
        <span class="nowConstellation">
          水瓶座
          <i class="timeSlot">01.20-02.18</i>
        </span>
        <div class="doSome">
          <div class="suitable">
            <h2>适合</h2>
            <p>
              <span class="moneyPic"></span>努力赚钱
            </p>
            <p>
              <span class="workPic"></span>认真工作
            </p>
          </div>
          <div class="avoid">
            <h2>注意</h2>
            <div class="thing">
              <span class="leftLiner"></span>
              <span class="rightLiner"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#fortune {
  background: #6f637e;
  width: 100%;
  height: 4.52rem;
  overflow: hidden;
  .fCon {
    width: 7.1rem;
    height: 4.12rem;
    border: 0.01rem solid #fff;
    margin: 0.2rem auto;
    .proverb {
      height: 0.6rem;
      width: 100%;
      text-align: center;
      line-height: 0.6rem;
      color: #fff;
    }
    .fMain {
      width: 100%;
      height: 3.52rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      background: rgba(255, 255, 255, 0.5);
      .tit {
        color: #fff;
        font-weight: normal;
        font-size: 0.3rem;
        margin: 0.16rem 0;
      }
      .nowTime {
        display: block;
        color: #fff;
        display: flex;
        align-items: center;
        .lLiner{
            display: block;
            width:1.1rem;
            height:.01rem;
            border-bottom:.01rem solid rgba(255,255,255,1);
            margin-right: .1rem;
        }
        .rLiner{
            display: block;
            width:1.1rem;
            height:.01rem;
            border-bottom:.01rem solid rgba(255,255,255,1);
            margin-left: .1rem;
        }
      }
      .nowConstellation {
        display: block;
        color: #fff;
        margin-top: 0.16rem;
        .timeSlot {
          display: block;
          font-size: 0.12rem;
        }
      }
      .doSome {
        width: 100%;
        height: 1.73rem;
        display: flex;
        justify-content: space-between;
        .suitable {
          width: 2.97rem;
          height: 100%;
          border-top: 0.01rem solid #fff;
          margin: 0.36rem 0.2rem 0;
          h2 {
            font-weight: normal;
            font-size: 0.3rem;
            margin: 0.2rem;
            color: #fff;
          }
          p {
            color: #fff;
            margin-bottom: 0.1rem;
            font-size: 0.26rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            .moneyPic {
              display: inline-block;
              width: 0.27rem;
              height: 0.27rem;
              margin-right: 0.35rem;
              background: url(../../../assets\recommend\icon1-rl@2x.png)
                no-repeat;
              background-size: 100% 100%;
            }
            .workPic {
              display: inline-block;
              width: 0.27rem;
              height: 0.27rem;
              margin-right: 0.35rem;
              background: url(../../../assets\recommend\icon2-rl@2x.png)
                no-repeat;
              background-size: 100% 100%;
            }
          }
        }
        .avoid {
          width: 2.97rem;
          height: 100%;
          border-top: 0.01rem solid #fff;
          margin: 0.36rem 0.2rem 0;
          h2 {
            font-weight: normal;
            font-size: 0.3rem;
            margin: 0.2rem;
            color: #fff;
          }
          .thing {
            margin-top: 0.56rem;
            display: flex;
            .leftLiner {
              display: block;
              width: 0.49rem;
              height: 0.03rem;
              background: rgba(255, 255, 255, 1);
              margin-right: 0.16rem;
              margin-left: 0.94rem;
            }
            .rightLiner {
              display: block;
              width: 0.49rem;
              height: 0.03rem;
              background: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }
  }
}
</style>
