<template>
  <div class="topHui">
    <div class="topHui1"></div>
    <div class="topHui2">
      <a href="personal#/personal">
        <img src="../../../assets/set/back@2x.png">
      </a>
      <div>设置</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.topHui {
  width: 100%;
  height: 1.29rem;
  background: rgba(47, 40, 75, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .topHui2 {
    width: 100%;
    height: 0.98rem;
    display: flex;
    align-items: center;
    a {
      margin-left: 0.2rem;
      
    }
    img{
      width: 0.2rem;
      height: 0.34rem;
    }
    div {
      display: flex;
      width: 0.83rem;
      height: 0.34rem;
      font-size: 0.38rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-left: 3rem;
      margin-top: -0.18rem;
    }
  }
}
</style>


