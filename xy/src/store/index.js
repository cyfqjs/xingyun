import Vue from "vue";
import Vuex from "vuex";
import plus from "./plus";
import Main from "./main";
Vue.use(Vuex);

Vue.prototype.$proto=new Vue();
const store = new Vuex.Store({
    modules: {
        plus,
        Main
    }
})

export default store;