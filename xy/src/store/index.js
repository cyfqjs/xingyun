import Vue from "vue";
import Vuex from "vuex";
import Community from "./community"        
import plus from "./plus";
import Main from "./main";
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        Community,
        plus,
        Main
    }
})

export default store;