<template>
  <div class="aboutZ">
    <div class="aboutLogo">
      <img src="@/assets/set/logo@2x.png">
      <p>版本号：1.0</p>
      <ul class="aboutList">
        <li v-for="(item,index) in obj" :key="{item,index}">
          <img :src="item.img">
          <span>{{item.list}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            obj:[
                {
                    img:require('@/assets/set/icon5-sz.png'),
                    list:"微信：搜索“星圈”"
                },
                {
                    img:require('@/assets/set/icon6-sz.png'),
                    list:"邮箱：xingquan@163.com"
                },
                {
                    img:require('@/assets/set/icon7-sz.png'),
                    list:"微博：xingquan星圈"
                },
                {
                    img:require('@/assets/set/icon8-sz.png'),
                    list:"QQ群：988888888"
                },
            ]
            
        }
    }
};
</script>
<style lang="scss">
.aboutZ {
  width: 100%;
  height: 10.91rem;
  display: flex;
  justify-content: center;
  .aboutLogo {
    width: 1.65rem;
    margin-top: 1rem;
    img {
      width: 100%;
      height: 1.65rem;
    }
    p {
      width: 1.65rem;
      height: 0.28rem;
      font-size: 0.3rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-top: 0.5rem;
    }
    .aboutList {
        margin-top: 1.21rem;
      li {
        width: 3rem;
        display: flex;
        margin-left: -0.9rem;
        margin-top: 0.4rem;
        img {
          width: 0.36rem;
          height: 0.28rem;
        }
        span {
          font-size: 0.27rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-left: 0.2rem;
          flex-shrink: 0;
        }
      }
    }
  }
}
</style>