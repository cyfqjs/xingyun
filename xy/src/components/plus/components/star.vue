<template>
        <div id="star">
          <div id="bg">
              <img src="@/assets/plus/icon_xk_fb@2x.png" alt="">
          </div>
          <div id="icon">
              <img :src="starpic" alt="">
          </div>
          <div id="content">
              <p>{{starname}}</p>
              <p>{{starg}}</p>
              <p>{{stardata}}</p>
              <p>{{starplace}}</p>
          </div>
         
        </div>
    </template>
<script>
    export default {
        created() {
            var st = "白羊";
            switch (st) {
                case "白羊":
                    this.starname = this.arr[0].p1;
                    this.starg = this.arr[0].p2,
                        this.stardata = this.arr[0].p3,
                        this.starplace = this.arr[0].p4,
                        this.starpic = this.arr[0].p5;
                    break;
                case "金牛":
                    this.starname = this.arr[1].p1;
                    this.starg = this.arr[1].p2,
                        this.stardata = this.arr[1].p3,
                        this.starplace = this.arr[1].p4,
                        this.starpic = this.arr[1].p5;
                    break;
                case "双子":
                    this.starname = this.arr[2].p1;
                    this.starg = this.arr[2].p2,
                        this.stardata = this.arr[2].p3,
                        this.starplace = this.arr[2].p4,
                        this.starpic = this.arr[2].p5;
                    break;
                case "巨蟹":
                    this.starname = this.arr[3].p1;
                    this.starg = this.arr[3].p2,
                        this.stardata = this.arr[3].p3,
                        this.starplace = this.arr[3].p4,
                        this.starpic = this.arr[3].p5;
                    break;
                case "狮子":
                    this.starname = this.arr[4].p1;
                    this.starg = this.arr[4].p2,
                        this.stardata = this.arr[4].p3,
                        this.starplace = this.arr[4].p4,
                        this.starpic = this.arr[4].p5;
                    break;
                case "处女":
                    this.starname = this.arr[5].p1;
                    this.starg = this.arr[5].p2,
                        this.stardata = this.arr[5].p3,
                        this.starplace = this.arr[5].p4,
                        this.starpic = this.arr[5].p5;
                    break;
                case "天秤":
                    this.starname = this.arr[6].p1;
                    this.starg = this.arr[6].p2,
                        this.stardata = this.arr[6].p3,
                        this.starplace = this.arr[6].p4,
                        this.starpic = this.arr[6].p5;
                    break;
                case "天蝎":
                    this.starname = this.arr[7].p1;
                    this.starg = this.arr[7].p2,
                        this.stardata = this.arr[7].p3,
                        this.starplace = this.arr[7].p4,
                        this.starpic = this.arr[7].p5;
                    break;
                case "射手":
                    this.starname = this.arr[8].p1;
                    this.starg = this.arr[8].p2,
                        this.stardata = this.arr[8].p3,
                        this.starplace = this.arr[8].p4,
                        this.starpic = this.arr[8].p5;
                    break;
                case "摩羯":
                    this.starname = this.arr[9].p1;
                    this.starg = this.arr[9].p2,
                        this.stardata = this.arr[9].p3,
                        this.starplace = this.arr[9].p4,
                        this.starpic = this.arr[9].p5;
                    break;
                case "水瓶":
                    this.starname = this.arr[10].p1;
                    this.starg = this.arr[10].p2,
                        this.stardata = this.arr[10].p3,
                        this.starplace = this.arr[10].p4,
                        this.starpic = this.arr[10].p5;
                    break;
                case "双鱼":
                    this.starname = this.arr[11].p1;
                    this.starg = this.arr[11].p2,
                        this.stardata = this.arr[11].p3,
                        this.starplace = this.arr[11].p4,
                        this.starpic = this.arr[11].p5;
                    break;

            }
            this.getMyDate(156155148965)
        },
        data() {
            return {
                starname: "",
                starg: "",
                stardata: "",
                starplace: "",
                starpic: "",
                arr: [{
                    "p1": "白羊座",
                    "p2": "黄道十二星座之第一宫",
                    "p3": "出生日期为3月21日~4月20日",
                    "p4": "位于双鱼座之东 金牛座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group.png"),
                }, {
                    "p1": "金牛座",
                    "p2": "黄道十二宫的第二宫",
                    "p3": "出生日期为4月21日~5月20日",
                    "p4": "位于白羊座之东",
                    "p5": require("@/assets/plus/reactview_images_guide_group2.png"),
                }, {
                    "p1": "双子座",
                    "p2": "黄道十二宫里的第三宫",
                    "p3": "出生日期为5月21日~6月21日",
                    "p4": "位于金牛座之东 巨蟹座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group3.png"),
                }, {
                    "p1": "巨蟹座",
                    "p2": "黄道十二宫里的第四宫",
                    "p3": "出生日期为6月22日~7月22日",
                    "p4": "位于双子座之东 狮子座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group4.png"),
                }, {
                    "p1": " 狮子座",
                    "p2": "黄道十二宫之第五宫",
                    "p3": "出生日期为7月23日~8月22日",
                    "p4": "位于巨蟹座之东 处女座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group5.png"),
                }, {
                    "p1": "处女座",
                    "p2": "黄道十二宫里的第六宫",
                    "p3": "出生日期为8月23日~9月22日",
                    "p4": "位于狮子座之东 天秤座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group6.png"),
                }, {
                    "p1": "天秤座",
                    "p2": "黄道十二宫里的第七宫",
                    "p3": "出生日期为9月23日~10月23日",
                    "p4": "位于处女座之东 天蝎座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group7.png"),
                }, {
                    "p1": "天蝎座",
                    "p2": "黄道十二宫里的第八宫",
                    "p3": "出生,日期为10月24日~11月22日",
                    "p4": "位于天秤座之东 射手座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group8.png"),
                }, {
                    "p1": "射手座",
                    "p2": "黄道十二宫之第九宫",
                    "p3": "出生时间是11月23日~12月21日",
                    "p4": "位于天蝎座之东 摩羯座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group9.png"),
                }, {
                    "p1": "摩羯座",
                    "p2": "黄道十二宫的第十宫",
                    "p3": "出生日期为12月22日~1月19日",
                    "p4": "位于射手座之东 水瓶座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group10.png"),
                }, {
                    "p1": "水瓶座",
                    "p2": "黄道星座之第十一宫",
                    "p3": "出生日期为1月20日~2月18日",
                    "p4": "位于摩羯座之东 双鱼座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group11.png"),
                }, {
                    "p1": "双鱼座",
                    "p2": "黄道星座之第十二宫",
                    "p3": "出生日期为2月19日~3月20日",
                    "p4": "位于水瓶座之东 白羊座之西",
                    "p5": require("@/assets/plus/reactview_images_guide_group12.png"),
                }]
            }
        },
        methods: {
            getConstellation(m, d) {
                var s = "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
                var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
                return s.substr(m * 2 - (d < arr[m - 1] ? 2 : 0), 2);
            },
              getMyDate(time){ 
                 var unixTimestamp = new Date(time) ;
                 const monthtime = Number(unixTimestamp.toLocaleString().split("/")[1])+1>12 ?Number(unixTimestamp.toLocaleString().split("/")[1])+1-12:Number(unixTimestamp.toLocaleString().split("/")[1])+1>12;
                 const daytime = parseInt(unixTimestamp.toLocaleString().split("/")[2]);
                 console.log(unixTimestamp,monthtime,daytime)
                 return {
                     month:monthtime,
                     day:daytime
                 }
           }
          
        }}
</script>
<style scoped lang="scss" scoped>
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
            font-size: .24rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(254, 254, 254, 1);
            line-height: .4rem;
            text-shadow: 0px 4px 0px rgba(123, 14, 161, 0.49);
        }
    }
</style>