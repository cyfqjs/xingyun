<template>
    <div id="push">
            <router-link :to="{name:'pic'}"><div class="pic"></div></router-link>
            <router-link :to="{name:'book'}"><div class="book"></div></router-link>
            <router-link :to="{name:'languge'}"> <div class="languge"></div></router-link>
        <div id="close" @click.stop="close()"></div>
    </div>
</template>
<script>
    import Vuex from "vuex";
    export default {
        methods: {
            ...Vuex.mapMutations({
                close: "plus/handleclose"
            })
        },
    }
</script>
<style lang="scss">
    #push {
        flex: 1;
        padding: 0 1.44rem;
        display: flex;
        justify-content: space-between;
        position: relative;
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
</style>