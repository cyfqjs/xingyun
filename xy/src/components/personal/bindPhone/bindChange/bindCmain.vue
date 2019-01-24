<template>
  <div class="bindokt">
    <ul class="listHui">
      <li>
        <p class="mp1">
          <img src="@/assets/set/icon_dx@2x.png">
          绑定微博 :
          <span>{{id}}</span>
        </p>
      </li>
    </ul>
    <router-link :to="{name:'bindPhoneOne'}">
    <button class="bindBtnHui">切换账号</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    let {id} = this.$route.query;
    this.id = id
  }
};
</script>
<style lang="scss">
.bindokt {
  width: 100%;
  height: 12.25rem;
  .listHui {
    display: flex;
    height: 1rem;
    li {
      width: 100%;
      height: 1rem;
      background: rgba(47, 40, 75, 1);
      opacity: 0.5;
      margin-top: 0.2rem;
      display: flex;
      align-items: center;
      .mp1 {
        display: flex;
        width: 5rem;
        height: 0.29rem;
        font-size: 0.3rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-left: 0.2rem;
        img {
          width: 0.19rem;
          height: 0.27rem;
          margin-right: 0.2rem;
          margin-top: 0.08rem;
        }
      }
    }
  }
  .bindBtnHui {
    width: 6.24rem;
    height: 0.9rem;
    background: rgba(68,61,108,1);
    opacity: 0.3;
    border-radius: 0.44rem;
    margin-top: 4.52rem;
    font-size: 0.42rem;
    margin-left: 0.62rem;
    color:rgba(255,255,255,1);
  }
}
</style>