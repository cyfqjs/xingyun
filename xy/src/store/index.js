import Vue from "vue";
import Vuex from "vuex";
import plus from "./plus";
import Main from "./main";
import loginBlock from './loginBlock';
import registerBlock from './registerBlock';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        plus,
        Main,
        loginBlock,
        registerBlock
    }
})

export default store;