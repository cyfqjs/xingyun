import Vue from 'vue'
import Router from 'vue-router'

import Footer from "../components/footer/index.vue";
import Err from "../components/error/error.vue";

import Login from "../components/login/login.vue";
import Regone from "../components/register/pageone";
import Regtwo from "../components/register/pagetwo";

import Recommend from "../components/recommend";

import Spot from "../components/spot";
import Topiccontent from "@/components/spot/components/topiccontent";

import Plus from "../components/plus";
import Pushpic from "../components/plus/pic";
import Pushbook from "../components/plus/book";
import Pushlanguge from "../components/plus/languge";

import Community from "../components/community";

import Personal from "../components/personal/main/index";
import pushSet from "../components/personal/set/pushSet/index.vue";
import BindP from "../components/personal/bindPhone/index.vue";
import BindOne from "../components/personal/bindPhone/bindPhoneOne/index.vue";
import Seth from "../components/personal/set/index.vue";
import Fans from "../components/personal/main/fans";
import Fansindex from "../components/personal/main/fansindex";
import Foucson from "../components/personal/main/foucson";
import Redact from "../components/personal/main/redact";
import Proberbs from "../components/personal/main/proberbs";


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/recommend",
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: '/regone',
      name: "regone",
      component: Regone
    },
    {
      path: '/regtwo',
      name: "regtwo",
      component: Regtwo
    },
    {
      path: "/recommend",
      name: "recommend",
      component: Recommend,
      meta: {
        flag: true,
      }
    },
    {
      path: "/spot",
      name: "spot",
      component: Spot,
      meta: {
        flag: true,
      },
      children: [
        {
          path: "/topiccontent/:topicid/:backimg",
          component: Topiccontent,
        },
        {
          path: "",
          name: "topiccontent",
          component: Topiccontent,
          path: "/",
          redirect: "/recommend"
        },
      ]
    },
    {
      path: "/plus",
      name: "plus",
      component: Plus,
      meta: {
        flag: true,
      }
    },
    {
      path: "/plus/pic",
      name: "pic",
      component: Pushpic,
      meta: {
        flag: false,
      }
    },
    {
      path: "/plus/book",
      name: "book",
      component: Pushbook,
      meta: {
        flag: false,
      }
    },
    {
      path: "/plus/languge",
      name: "languge",
      component: Pushlanguge,
      meta: {
        flag: false,
      }
    },
    {
      path: "/community",
      name: "community",
      component: Community,
      meta: {
        flag: true,
      }
    },
    //个人中心
    {
      path: "/personal",
      name: "personal",
      component: Personal,
      meta: {
        flag: true,
      }
    },
    //设置
    {
      path: "/set/index",
      name: "set",
      component: Seth,
      meta: {
        flag: false,
      }
    },
    //绑定手机
    {
      path: "/bindPhone/index",
      name: "indexPhone",
      component: BindP,
      meta: {
        flag: false,
      }
    },
    //绑定手机界面
    {
      path: "/bindPhone/bindPhoneOne",
      name: "bindPhoneOne",
      component: BindOne,
      meta: {
        flag: false,
      }
    },
    //推送设置
    {
      path: "/set/pushSet/index",
      name: "pushSet",
      component: pushSet,
      meta: {
        flag: false
      }
    },
    {  //粉丝列表
      path: "/fans",
      name: "fans",
      component: Fans,
      meta: {
        falg: false
      }
    },
    {  //粉丝主页
      path: "fansindex",
      name: "fansindex",
      component: Fansindex,
      meta: {
        flag: false
      }
    },
    {  //我关注的
      path: "foucson",
      name: "foucson",
      component: Foucson,
      meta: {
        flag: false
      }
    },
    { //资料编辑
      path: "redact",
      name: "redact",
      component: Redact,
      meta: {
        flag: false
      }
    },
    {  //个人箴言
      path: "proberbs",
      name: "proberbs",
      component: Proberbs,
      meta: {
        flag: false
      }
    },
    {
      path: "/footer",
      name: "footer",
      component: Footer,
      meta: {
        flag: true,
      }
      //    meta:{
      ////    	tab栏的显示
      //    	flag:true,
      ////    	路由守卫
      //      requireAuth:true
      //    }
    },
    {
      path: "**",
      component: Err,
      meta: {
        flag: true,
      }
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   if(to.meta.requireAuth){
//     //用户是否登陆成功
//     if(false){
//       //工作当中这里面需要做token的验证
//       next();
//     }else{
//       next("/login")
//     }
//   }else{
//     next();
//   }
// })

export default router;