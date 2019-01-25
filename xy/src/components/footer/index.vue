<template>
	<div id="footer">
		<ul >
			<li v-for="(item,index) in navs" :key="{item,index}"  @click="handletog(index)" ref="footbs">
               <router-link :to="{name:item.name}">
                    <div class="icon"><img :src="item.img" alt=""></div>
               		<span @click="open(index)">{{item.title}}</span>
               </router-link>
            </li>
            
		</ul>
	</div>
</template>

<script>
    import Vuex from "vuex"

    export default {
        created() {
            this.handletog(0);
        },
        data() {
            return {
                navs: [{
                        name: "recommend",
                        img: require("@/assets/footer/icon_tj_sq@2x.png"),
                        imgto: require("@/assets/footer/icon1-sy@2x.png"),
                        imgsrc: require("@/assets/footer/icon_tj_sq@2x.png"),

                        title: "推荐"
                    }, {
                        name: "spot",
                        img: require("@/assets/footer/icon_kd_sq@2x.png"),
                        imgto: require("@/assets/footer/icon2-kd@2x.png"),
                        imgsrc: require("@/assets/footer/icon_kd_sq@2x.png"),
                        title: "看点"
                    }, {
                        name: "plus",
                        img: require("@/assets/footer/icon_+_sq@2x.png"),
                        imgto: require("@/assets/footer/icon_tj_sq@2x.png"),
                        imgsrc: require("@/assets/footer/icon_+_sq@2x.png"),
                        title: " "
                    }, {
                        name: "community",
                        img: require("@/assets/footer/icon_sq_sq@2x.png"),
                        imgto: require("@/assets/footer/icon2_sq_sq@2x.png"),
                        imgsrc: require("@/assets/footer/icon_sq_sq@2x.png"),
                        title: "社区"
                    }, {
                        name: "personal",
                        img: require("@/assets/footer/icon_wd_sq@2x.png"),
                        imgto: require("@/assets/footer/icon_grzx@2x.png"),
                        imgsrc: require("@/assets/footer/icon_wd_sq@2x.png"),
                        title: "个人中心"
                    }

                ]
            }
        },
        methods: {
            ...Vuex.mapMutations({
                open: "plus/handleopen"
            }),
            handletog(index) {
                if (index != 2) {
                    for (var i = 0; i < 5; i++) {
                        this.navs[i].img = this.navs[i].imgsrc;
                    }
                    this.navs[index].img = this.navs[index].imgto;
                }
            }
        },
    }
</script>

<style>
    a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    
    #footer {
        width: 100%;
        height: .98rem;
        background: rgba(47, 40, 75, 1);
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 5;
    }
    
    #footer>ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    #footer>ul>li {
        width: 100%;
        height: 100%;
    }
    
    #footer>ul>li>a {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 49px;
        color: #fff;
        padding: 5px 0;
    }
    
    #footer>ul>li>a>span {
        font-size: 10px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(254, 254, 254, 1);
        height: 10px;
        line-height: 10px;
        margin-top: 5px;
    }
    
    #footer>ul>li>a>.icon {
        width: .5rem;
        height: .5rem;
    }
    
    #footer>ul>li>a>.icon>img {
        width: 100%;
        height: 100%;
    }
    
    #footer>ul>li:nth-of-type(3)>a {
        position: relative;
    }
    
    #footer>ul>li:nth-of-type(3)>a>.icon {
        position: absolute;
        width: .82rem;
        height: .82rem;
        top: -0.23rem;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(47, 40, 75, 1);
        border-radius: 44px 44px 0 0;
    }
</style>