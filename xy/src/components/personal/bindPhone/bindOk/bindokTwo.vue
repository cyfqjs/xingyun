<template>
  <div class="bindokt">
    <ul class="listHui">
      <li>
        <p class="p1">
          <img src="@/assets/set/icon_dx@2x.png">
          绑定手机
        </p>
        <div class="boxHui">
          <router-link :to="{name:'bindCh'}">
          <span class="p2">13988888888</span>
          <img src="@/assets/set/矢量智能对象@2x(1).png">
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
};
</script>
<style lang="scss">
.bindokt {
  width: 100%;
  height: 12.25rem;
  .listHui {
    width: 100%;
    height: 12.25rem;
    li {
      width: 100%;
      height: 1rem;
      background: rgba(47, 40, 75, 1);
      opacity: 0.5;
      margin-top: 0.2rem;
      display: flex;
      align-items: center;
      .p1 {
        width: 1.6rem;
        height: 0.29rem;
        font-size: 0.3rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-left: 0.2rem;
        flex-shrink: 0;
        display: flex;
        img {
          width: 0.19rem;
          height: 0.27rem;
          margin-right: 0.2rem;
          margin-top: 0.08rem;
        }
      }
      .boxHui {
        margin-left: 3.3rem;
        .p2 {
          font-size: 0.3rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color:rgba(255,255,255,1);
          margin-top: 0.1rem;
        }
        img {
          width: 0.16rem;
          height: 0.28rem;
          margin-top: -0.3rem;
          margin-left: 2rem;
        }
      }
    }
  }
}
</style>