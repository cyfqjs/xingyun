<template>
        <div id="star">
          <div id="bg">
              <img src="@/assets/plus/icon_xk_fb@2x.png" alt="">
          </div>
          <div id="icon">
              <img src="@/assets/plus/icon_xz_fb@2x.png" alt="">
          </div>
          <div id="content">
              <p>{{arr[0].p1}}</p>
              <p>{{arr[0].p2}}</p>
              <p>{{arr[0].p3}}</p>
              <p>{{arr[0].p4}}</p>
          </div>
         
        </div>
    </template>
<script>
    export default {
        data() {
            return {
                arr: [{
                    "p1": "白羊座",
                    "p2": "黄道十二星座之第一宫",
                    "p3": "出生日期为3月21日~4月20日",
                    "p4": "位于双鱼座之东 金牛座之西"
                }, {
                    "p1": "金牛座",
                    "p2": "黄道十二宫的第二宫",
                    "p3": "出生日期为4月21日~5月20日",
                    "p4": "位于白羊座之东"
                }, {
                    "p1": "双子座",
                    "p2": "黄道十二宫里的第三宫",
                    "p3": "出生日期为5月21日~6月21日",
                    "p4": "位于金牛座之东 巨蟹座之西"
                }, {
                    "p1": "巨蟹座",
                    "p2": "黄道十二宫里的第四宫",
                    "p3": "出生日期为6月22日~7月22日",
                    "p4": "位于双子座之东 狮子座之西"
                }, {
                    "p1": "处女座",
                    "p2": "黄道十二宫里的第六宫",
                    "p3": "出生日期为8月23日~9月22日",
                    "p4": "位于狮子座之东 天秤座之西"
                }, {
                    "p1": "天秤座",
                    "p2": "黄道十二宫里的第七宫",
                    "p3": "出生日期为9月23日~10月23日",
                    "p4": "位于处女座之东 天蝎座之西"
                }, {
                    "p1": "天蝎座",
                    "p2": "黄道十二宫里的第八宫",
                    "p3": "出生,日期为10月24日~11月22日",
                    "p4": "位于天秤座之东 射手座之西"
                }, {
                    "p1": "射手座",
                    "p2": "黄道十二宫之第九宫",
                    "p3": "出生时间是11月23日~12月21日",
                    "p4": "位于天蝎座之东 摩羯座之西"
                }, {
                    "p1": "摩羯座",
                    "p2": "黄道十二宫的第十宫",
                    "p3": "出生日期为12月22日~1月19日",
                    "p4": "位于射手座之东 水瓶座之西"
                }, {
                    "p1": "水瓶座",
                    "p2": "黄道星座之第十一宫",
                    "p3": "出生日期为1月20日~2月18日",
                    "p4": "位于摩羯座之东 双鱼座之西"
                }, {
                    "p1": "双鱼座",
                    "p2": "黄道星座之第十二宫",
                    "p3": "出生日期为2月19日~3月20日",
                    "p4": "位于水瓶座之东 白羊座之西"
                }]
            }
        }
    }
</script>
<style scoped lang="scss">
    #star {
        height: 7.26rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        #bg {
            height: 2.43rem;
            width: 100%;
        }
        img {
            height: 100%;
            width: 100%;
        }
        #icon {
            height: 2.67rem;
            width: 2.15rem;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 1.33rem;
        }
        #content {
            margin-top: 2.09rem;
            height: 1.43rem;
            text-align: center;
            font-size: 24px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(254, 254, 254, 1);
            line-height: 40px;
            text-shadow: 0px 4px 0px rgba(123, 14, 161, 0.49);
        }
    }
</style>