// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Observer from "./observer"
Vue.prototype.Observer=Observer
import router from './router'
import store from './store'
import Mint from "mint-ui";
Vue.use(Mint);
import "./common/css/reset.css";
import "./common/js/flexble";
Vue.config.productionTip = false
/* eslint-disable no-new */
import "./common/css/animate.css"
import "../node_modules/swiper/dist/css/swiper.min.css";
import "mint-ui/lib/style.css";
import axios from "axios"
Vue.prototype.axios = axios;
import "./mock";
Vue.use(MintUI);

import { AlertPlugin, ToastPlugin, ConfirmPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})