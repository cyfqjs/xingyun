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
// import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import axios from "axios"
Vue.prototype.axios = axios;
import "./mock/index";
import qs from "qs";


// axios.interceptors.request.use((config)=>{
//     if(config.method == "post"){
//             config.data = qs.stringify(config.data)
//     }
//             return config;
// })

// axios.interceptors.response.use((res)=>{
//         if(res.status){
//                 return res.data
//         }
//})
// Vue.use(MintUI);

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
