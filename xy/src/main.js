// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from "axios";
import qs from "qs";
import "./common/css/reset.css";
import "./common/js/flexble";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "../node_modules/swiper/dist/css/swiper.min.css";

axios.interceptors.request.use((config)=>{
    if(config.method == "post"){
            config.data = qs.stringify(config.data)
    }
            return config;
})

// axios.interceptors.response.use((res)=>{
//         if(res.status){
//                 return res.data
//         }
//})
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
