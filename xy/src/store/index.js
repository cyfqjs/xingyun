import Vue from "vue";
import Vuex from "vuex";
import Community from "./community"
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        Community,
    }
})

export default store;