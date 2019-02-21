<template>
  <div id="proberbs">
    <div id="proberbsTop">
      <router-link :to="{name:'redact'}">
        <img src="@/assets/personImg/left.png">
      </router-link>
      <span>个人箴言</span>
      <button @click="handleFinish()">完成</button>
    </div>
    <div id="proberbsBottom">
      <textarea cols="102" rows="5" ref="area">{{personIndex.brief}}</textarea>
      <p>请输入不超过14字的个人箴言</p>
      <!-- <div>{{areaVal}}</div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import vuex from "vuex";
import vue from "vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      areaVal: "",
      t: ""
    };
  },
  created() {
    this.handleIndex();
  },
  methods: {
    ...vuex.mapActions({
      handleIndex: "Main/handleIndex"
    }),
    handleFinish() {
      var val = this.$refs.area.value;
      this.areaVal = val;

      let t = sessionStorage.getItem("token");
      this.t = t;

      axios({
        method: "post",
        url: "http://39.96.91.169/StarOfSea/user/updateBrief",
        headers: {
          accessToken: this.t
        },
        data: {
          brief: this.areaVal
        }
      }).then(data => {
          if(data.code=="1"){
              Toast({
                message: "修改成功",
                iconClass: "icon icon-success",
              });
          }
      });

    }
  },
  computed: {
    ...vuex.mapState({
      personIndex: state => state.Main.personIndex
    })
  }
};
</script>

<style lang="scss" scoped>
#proberbsTop {
  width: 7.5rem;
  height: 1.28rem;
  line-height: 1.28rem;
  background: rgba(47, 40, 75, 1);
  display: flex;
  justify-content: space-around;
  a:nth-child(1) > img {
    width: 0.5rem;
    height: 0.5rem;
    display: inline-block;
    position: fixed;
    top: 0.4rem;
    left: 0.4rem;
  }
  .finish {
    font-size: 0.3rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
  span {
    display: inline-block;
    width: 3rem;
    font-size: 0.38rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
  button {
    width: 0.8rem;
    height: 1.28rem;
    font-size: 0.24rem;
    color: rgba(255, 255, 255, 1);
    background: rgba(47, 40, 75, 1);
    border: 0;
  }
}
#proberbsBottom {
  width: 7.5rem;
  height: 80rem;
  background: rgba(34, 29, 59, 1);
  textarea {
    display: block;
    margin: 0 auto;
    background: rgba(242, 242, 242, 1);
  }
  p {
    padding: 0.2rem;
    font-size: 0.3rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(196, 196, 196, 1);
  }
}
</style>

      