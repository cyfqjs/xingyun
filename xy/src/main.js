// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import "./common/css/reset.css";
import "./common/js/flexble";
import "./common/css/animate.css"
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "../node_modules/swiper/dist/css/swiper.min.css";
Vue.use(MintUI);

Vue.config.productionTip = false
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