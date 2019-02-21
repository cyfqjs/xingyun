<template>
    <div id="box">
         <div >
                <transition-group id="push" appear enter-active-class="animated rollIn" leave-active-class="animated zoomInLeft" appear-active-class="animated zoomInUp">
                        <router-link key="1" :to="{name:'pic'}"><div class="pic" ></div></router-link>
                        <router-link key="2" :to="{name:'book'}"><div class="book" ></div></router-link>
                        <router-link key="3" :to="{name:'languge'}"> <div class="languge"></div></router-link>
                </transition-group>
        </div>
         <router-link :to="{name:linkto}"><span id="close"></span></router-link>
    </div>
   
</template>
<script>
    import Vuex from "vuex";
    export default {
        computed: {
            ...Vuex.mapState({
                linkto: state => state.plus.linkto,
            })
        }
    }
</script>
<style lang="scss" scoped>
    #box {
        position: relative;
        flex: 1;
        #close {
            position: absolute;
            bottom: .81rem;
            left: 50%;
            transform: translateX(-50%);
            width: .66rem;
            height: .66rem;
            background: url(../../../assets/plus/icon_cw_fb@2x.png)no-repeat;
            background-size: 100% 100%;
        }
    }
    
    #push {
        flex: 1;
        padding: 0 1.44rem;
        display: flex;
        justify-content: space-around;
        div,
        a {
            width: 1.28rem;
            height: 1.28rem;
        }
        .pic {
            background: url(../../../assets/plus/icon_xt_fb@2x.png)no-repeat;
            background-size: 100% 100%;
        }
        .book {
            background: url(../../../assets/plus/icon_xs_fb@2x.png)no-repeat;
            background-size: 100% 100%;
        }
        .languge {
            background: url(../../../assets/plus/icon_xy_fb@2x.png)no-repeat;
            background-size: 100% 100%;
        }
    }
</style>