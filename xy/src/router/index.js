import Vue from 'vue'
import Router from 'vue-router'

import Community from "../components/community";
import Footer from "../components/footer/index.vue";
import Personal from "../components/personal/main/index";
import Plus from "../components/plus";
import Recommend from "../components/recommend";
import Spot from "../components/spot";
import Err from "../components/error/error.vue";
import Login from "../components/login/login.vue";
import Set from "../components/personal/set/index.vue";
import Fans from "../components/personal/main/fans";
import Fansindex from "../components/personal/main/fansindex";
import Foucson from "../components/personal/main/foucson";
import Redact from "../components/personal/main/redact";
import Proberbs from "../components/personal/main/proberbs";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/recommend"
    },
    {
      path:"/footer",
      name:"footer",
      component:Footer,
//    meta:{
////    	tab栏的显示
//    	flag:true,
////    	路由守卫
//      requireAuth:true
//    }
    },
    {  //社区
      path:"/community",
      name:"community",
      component:Community,
      meta:{
        flag:true
      }
    },
    { //个人中心
      path:"/personal",
      name:"personal",
      component:Personal,
      meta:{
        flag:true
      }
    },
    { //设置
      path:"/set",
      component:Set,
      name:"set",
      meta:{
        flag:false
      }
    },
    {  //粉丝列表
      path:"/fans",
      name:"fans",
      component:Fans,
      meta:{
        falg:false
      }
    },
    {  //粉丝主页
        path:"fansindex",
        name:"fansindex",
        component:Fansindex,
        meta:{
          flag:false
        }
    },
    {  //我关注的
      path:"foucson",
      name:"foucson",
      component:Foucson,
      meta:{
        flag:false
      }
    },
    { //资料编辑
      path:"redact",
      name:"redact",
      component:Redact,
      meta:{
        flag:false
      }
    },
    {  //个人箴言
      path:"proberbs",
      name:"proberbs",
      component:Proberbs,
      meta:{
        flag:false
      }
    },
    { // +
      path:"/plus",
      name:"plus",
      component:Plus,
      meta:{
        flag:true
      }
    },
    { //推荐
      path:"/recommend",
      name:"recommend",
      component:Recommend,
      meta:{
        flag:true
      }
    },
    { //看点
      path:"/spot",
      name:"spot",
      component:Spot,
      meta:{
        flag:true
      }
    },
    {  //注册
      path:"/login",
      name:"login",
      component:Login,
      meta:{
        flag:true
      }
    },
    {
      path:"**",
      component:Err,
      meta:{
        flag:true
      }
    },
    // {
    //   path:"/set",
    //   component:
    // }
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
