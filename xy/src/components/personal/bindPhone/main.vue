<template>
  <div class="mainHui">
    <ul class="listHui">
      <li>
        <p class="p1">
          <img src="../../../assets/set/icon_dx@2x.png">
          绑定手机
        </p>
        <div class="boxHui">
          <router-link :to="{name:'bindPhoneOne'}">
          <p class="p2">未绑定</p>
          <img src="../../../assets/set/矢量智能对象@2x(1).png">
          </router-link>
        </div>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
};
</script>
<style lang="scss">
.mainHui {
  width: 100%;
  height: 12.25rem;
  .listHui {
    display: flex;
    li {
      width: 100%;
      height: 1rem;
      background: rgba(47, 40, 75, 1);
      opacity: 0.5;
      margin-top: 0.2rem;
      display: flex;
      align-items: center;
      .p1 {
        display: flex;
        width: 1.6rem;
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
      .boxHui {
        width: 1.2rem;
        height: 100%;
        margin-left: 4.2rem;
        display: flex;
        align-items: center;
        img {
          width: 0.16rem;
          height: 0.28rem;
          margin-top: -0.2rem;
          margin-left: 1rem;
        }
        .p2 {
          width: 1rem;
          height: 0.28rem;
          font-size: 0.3rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-top: -0.1rem;
        }
      }
    }
  }
}
</style>