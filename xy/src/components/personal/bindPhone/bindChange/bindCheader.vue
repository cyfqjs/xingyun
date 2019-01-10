<template>
  <div class="bindoko">
    <div class="bindoko2">
      <span >
        <img src="@/assets/set/back@2x.png" @click="handleP">
      </span>
      <div>账号绑定</div>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
    handleP(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
    .bindoko {
  width: 100%;
  height: 1.29rem;
  background: rgba(47, 40, 75, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .bindoko2 {
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