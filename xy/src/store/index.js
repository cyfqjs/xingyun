import Vue from "vue";
import Vuex from "vuex";
import plus from "./plus";
import Main from "./main";
import loginBlock from './loginBlock';
import registerBlock from './registerBlock';
import recommendBlock from './recommendBlock'
import Community from "./community"
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Community,
        plus,
        Main,
        loginBlock,
        registerBlock,
        recommendBlock
    }
})

export default store;