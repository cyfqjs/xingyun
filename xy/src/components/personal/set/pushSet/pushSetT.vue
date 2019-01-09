<template>
  <div class="pushSHui">
    <ul class="pushList">
      <li>
        <p class="p1">推送设置</p>
        <p class="p2">不会与每一条重要通知内容擦肩而过</p>

      </li>
      <div class="clickHui"></div>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.pushSHui {
  width: 100%;
  height: 12.25rem;
  .pushList {
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
        margin-top: -0.4rem;
      }
      .p2 {
        display: flex;
        width: 3.9rem;
        height: 0.21rem;
        font-size: 0.22rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-left: -1.6rem;
        margin-top: 0.3rem;
      }
    }
    .clickHui{
        width: 1rem;
        height: 0.5rem;
        background:rgba(117,80,169,1);
        border-radius:10px;
        position: fixed;
        top: 1.75rem;
        right: 0.2rem;
    }
  }
}
</style>