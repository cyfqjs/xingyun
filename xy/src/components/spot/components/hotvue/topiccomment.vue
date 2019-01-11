<template>
    <div class="app">
        <div class="title">发表的观点</div>
        <ul>
            <li v-for="(item,index) in navs">
                <div class="left">
                    <div class="headerphoto"><img src="" /></div>
                </div>
                <div class="right">
                    <div class="uname"></span>{{item.uname}}</span><span>{{item.data}}</span></div>
                    <div class="sex">{{item.sex}}{{item.xz}}</div>
                    <div class="vote">投票给:{{item.votecontent}}</div>
                    <div class="viewpoint">{{item.viewpoints}}</div>
                    <div class="zandpl">
                        <img src="@/assets/spot/icon_axq_hf.png" class="z" @click="dz()"><span>{{item.praisecount}}</span>
                        <img src="@/assets/spot/icon_pl_dt.png" class="pl" @click=""><span>回复</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            navs:[
                {
                    uname:"星座达人9527",
                    data:"12-7-3",
                    sex:"n",
                    xz:"水瓶座",
                    votecontent:"伤的太深，做不s到体面",
                    viewpoints:"ffaggggggaaaa",
                    praisecount:"85",

                },
                {
                    uname:"zhangsan",
                    data:"12-7-3",
                    sex:"n",
                    xz:"水瓶座",
                    votecontent:"伤的太深，做不到体面",
                    votecontent:"ffaggggggaaaa",
                }
            ],
        
                floag:true,
        }
    },
    methods:{
        dz(){
           
        }
    }
}
</script>
<style lang="scss" scoped>
.app{
    width: 100%;
    .title{
        width: 90%;
        margin: 0 auto;
        font-size: .28rem;
        color: white;
        padding-bottom: .24rem;
        opacity: 0.8;
        border-bottom: .01rem #fff solid;
        font-family: 'PingFang-SC-Regular';
    }
    ul{
        width: 7.34rem;
        margin: 0 auto;
        li{
            width:100%;
            min-height: 2.14rem;
            display: flex;
            padding-top:.24rem; 
            border-bottom: .01rem solid rgba(235, 232, 249, 0.39);
            .left{
                width: .78rem;
                height: 100%;
                .headerphoto{
                    width: .48rem;
                    height: .48rem;
                    border-radius: 50%;
                    background: #000;
                    margin:0 auto;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }
            .right{
                width: 7.13rem;
                height: 100%;
                padding-right: .16rem;
                font-size: .26rem;
                color: #fff;
                font-family: 'Courier New', Courier, monospace;
                opacity: .9;
                
                .uname{
                    width:100%;
                    font-size: .28rem;
                    display: flex;
                    justify-content: space-between;
                    
                }
                .sex{
                    color: #999;
                }
                .vote{
                    color: #DC7725;
                }
                .viewpoint{
                    color: #EBE8F9;
                }
                .zandpl{
                    display: flex;
                    margin-top: .15rem;
                    span{
                        color: white;
                        font-size: .24rem;
                    }
                    .pl{
                        margin-left: 1rem;
                    }
                    
                }

            }
        }
        
    }
    
}
</style>
