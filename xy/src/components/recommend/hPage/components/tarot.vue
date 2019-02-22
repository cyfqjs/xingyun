<template>
  <div id="tarot">
    <div class="tCon">
      <div class="tLeft">
        <div class="pBlock">
          <span class="pName">牌名</span>
          <span class="gName" v-show="flagx" v-text="brandx"></span>
        </div>
        <div class="yBlock">
          <span class="ele">元素</span>
          <span class="gEle" v-show="flagx" v-text="elementaryx"></span>
        </div>
      </div>
      <div class="tCenter">
        <div class="cBefore" v-show="!flagx">
          <h2 class="everyDay">每日塔罗</h2>
          <p class="noti">今日的专属塔罗提示</p>
          <span class="cGet" @click="fnTarot(flagx)">点解获取</span>
        </div>
        <div class="cAfter" v-show="flagx">
          <img :src = "img_pathx" />
        </div>
      </div>
      <div class="tRight">
        <span class="details" @click="toDpage()">查看详情</span>
        <div class="xBlock">
          <span class="constellation">星座</span>
          <span class="gConstellation" v-show="flagx" v-text="constellatx"></span>
        </div>
        <div class="gBlock">
          <span class="kWord">关键词</span>
          <span class="gKword" v-show="flagx" v-text="keywordx"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
export default {
  data() {
    return {
    	flag:true
    };
  },
  computed: {
    ...Vuex.mapState({
      flagx: state => state.recommendBlock.flag,
      brandx: state => state.recommendBlock.brand,
      elementaryx: state => state.recommendBlock.elementary,
      constellatx: state => state.recommendBlock.constellat,
      keywordx: state => state.recommendBlock.keyword,
      img_pathx: state => state.recommendBlock.img_path
    })
  },
  methods: {
    ...Vuex.mapActions({
      fnTarot: "recommendBlock/fnTarot",
    }),
    toDpage() {
      this.$router.push("../../dPage");
    },
  }
};
</script>


<style lang="scss">
#tarot {
  width: 100%;
  height: 4.42rem;
  background: #1e1a34;
  overflow: hidden;
  .tCon {
    display: flex;
    justify-content: space-between;
    width: 7.1rem;
    height: 4.22rem;
    background: #242957;
    margin: 0.1rem auto;
    border-radius: 0.12rem;
    box-shadow: -0.2rem 0 0.4rem 0 #3b438d inset,
      0.2rem 0 0.4rem 0 #3b438d inset;
    .tLeft {
      color: #fff;
      display: flex;
      height: 100%;
      width: 2.27rem;
      flex-direction: column;
      align-items: center;
      // justify-content: center;
      .pBlock {
        margin-top: 0.72rem;
        .pName {
          display: block;
          font-size: 0.28rem;
          text-align: center;
        }
        .gName {
          display: block;
          margin-top: 0.37rem;
          font-size: 0.24rem;
          text-align: center;
        }
      }
      .yBlock {
        margin-top: 1rem;
        .ele {
          display: block;
          font-size: 0.28rem;
          text-align: center;
        }
        .gEle {
          display: block;
          margin-top: 0.37rem;
          font-size: 0.24rem;
          text-align: center;
        }
      }
    }

    .tCenter {
      width: 2.54rem;
      height: 100%;
      color: #fff;
      text-align: center;
      background:url("../../../../assets/recommend/背面.jpg") no-repeat center;
      background-size: 100%;
      .cAfter{
        img{
          display: block;
          width:2.54rem;
        // height: 9.08rem;
        }
      }
      .everyDay {
        margin-top: 0.63rem;
      }
      .noti {
        margin-top: 0.21rem;
      }
      .cGet {
        display: block;
        margin-top: 1.62rem;
        color: #fff;
      }
    }
    .tRight {
      color: #fff;
      height: 100%;
      width: 2.27rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .details {
        display: block;
        color: #eb5ae9;
        font-size: 0.2rem;
        text-align: right;
        margin-left: 0.8rem;
        margin-top: 0.2rem;
      }
      .xBlock {
        margin-top: 0.24rem;
        .constellation {
          text-align: center;
          display: block;
          font-size: 0.28rem;
        }
        .gConstellation {
          display: block;
          margin-top: 0.37rem;
          font-size: 0.24rem;
          text-align: center;
        }
      }
      .gBlock {
        margin-top: 1rem;
        .kWord {
          display: block;
          font-size: 0.28rem;
          text-align: center;
        }
        .gKword {
          display: block;
          margin-top: 0.37rem;
          text-align: center;
          font-size: 0.24rem;
        }
      }
    }
  }
}
</style>

