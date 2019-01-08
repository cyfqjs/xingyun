<template>
    <div class="pushHui">
       <PushOne-com></PushOne-com>
       <PushTwo-com></PushTwo-com>
        <router-view></router-view>
    </div>
</template>

<script>
    import PushOne from "./pushSetOne";
    import PushTwo from "./pushSetT";
    import Vuex from "vuex";
export default {
    components: {
        "PushOne-com": PushOne,
        "PushTwo-com": PushTwo
    }
};
</script>
<style lang="scss">
    .pushHui{
        width: 100%;
		height: 13.34rem;
		background: rgba(34,29,59,1);
    }
</style>

