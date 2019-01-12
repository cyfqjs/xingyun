<template>
  <div class="mainHui">
    <ul class="listHui">
      <li>
        <a href="#">绑定账号</a>
        <span><router-link :to="{name:'indexPhone'}">
          <img src="../../../assets/set/矢量智能对象@2x(1).png">
          </router-link></span>
      </li>
      <li>
        <a href="#">通知设置</a>
        <span><router-link :to="{name:'pushSet'}">
          <img src="../../../assets/set/矢量智能对象@2x(1).png">
          </router-link></span>
      </li>
      <li>
        <a href="#">意见反馈</a>
        <span><router-link :to="{name:'idea'}">
          <img src="../../../assets/set/矢量智能对象@2x(1).png">
          </router-link></span>
      </li>
      <li>
        <a href="#">关于我们</a>
        <span><router-link :to="{name:'about'}">
          <img src="../../../assets/set/矢量智能对象@2x(1).png">
          </router-link></span>
      </li>
      <li class="listOut">
        <router-link :to="{name:'login'}">
        退出登录
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.mainHui {
  width: 100%;
  height: 12.25rem;
  .listHui {
    display: flex;
    flex-direction: column;
    li {
      width: 100%;
      height: 1rem;
      background: rgba(47, 40, 75, 1);
      opacity: 0.5;
      margin-top: 0.2rem;
      display: flex;
      align-items: center;
      a {
        width: 1.3rem;
        height: 0.29rem;
        font-size: 0.3rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-left: 0.2rem;
      }
      span{
       margin-left: 5.34rem;
       img{
         width: 0.16rem;
       height: 0.28rem;
       }
       
      }
    }
    .listOut {
      margin-top: 1.4rem;
      background: rgba(68, 61, 108, 1);
      opacity: 0.4;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: block;
        width: 1.3rem;
        height: 0.3rem;
        font-size: 0.3rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>