import Vue from "vue";
import Vuex from "vuex";
import plus from "./plus"
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        plus
    }
})

export default store;