<template>
  <div class="bindP">
    <div class="bindP1"></div>
    <div class="bindP2">
      <span>
        <router-link :to="{name:'set'}">
        <img src="../../../assets/set/back@2x.png">
        </router-link>
      </span>
      <div>账号绑定</div>
    </div>
    
  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
    .bindP {
  width: 100%;
  height: 1.29rem;
  background: rgba(47, 40, 75, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .bindP2 {
    width: 100%;
    height: 0.98rem;
    display: flex;
    align-items: center;
    span {
      margin-left: 0.2rem;
      
    }
    img{
      width: 0.2rem;
      height: 0.34rem;
    }
    div {
      display: flex;
      width: 1.6rem;
      height: 0.35rem;
      font-size: 0.38rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-left: 2.7rem;
      margin-top: -0.18rem;
      flex-shrink: 0;
    }
  }
}
</style>