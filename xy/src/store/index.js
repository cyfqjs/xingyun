import Vue from "vue";
import Vuex from "vuex";
import Community from "./community"        
import plus from "./plus";
import Main from "./main";
import loginBlock from './loginBlock';
import registerBlock from './registerBlock';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        Community,
        plus,
        Main,
        loginBlock,
        registerBlock
    }
})

export default store;