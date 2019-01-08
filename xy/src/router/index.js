import Vue from 'vue'
import Router from 'vue-router'

import Community from "../components/community";
import Footer from "../components/footer/index.vue";
import Personal from "../components/personal";
import Plus from "../components/plus";
import Recommend from "../components/recommend";
import Spot from "../components/spot";
import Err from "../components/error/error.vue";
import Login from "../components/login/login.vue";
import pushSet from "../components/personal/set/pushSet/index.vue";
import Seth from "../components/personal/set/index.vue";
import BindP from "../components/personal/bindPhone/index.vue";
import BindOne from "../components/personal/bindPhone/bindPhoneOne/index.vue";


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/recommend",
      meta:{
        flag:true,
      }
    },
    {
      path:"/footer",
      name:"footer",
      component:Footer,
      meta:{
        flag:true,
      }
//    meta:{
////    	tab栏的显示
//    	flag:true,
////    	路由守卫
//      requireAuth:true
//    }
    },
    {
      path:"/community",
      name:"community",
      component:Community,
      meta:{
        flag:true,
      }
    },
    //个人中心
    {
      path:"/personal",
      name:"personal",
      component:Personal,
      meta:{
        flag:true,
      }
    },
    //设置
    {
      path:"/set/index",
      name:"set",
      component:Seth,
      meta:{
        flag:false,
      }
    },
    //绑定手机
    {
      path:"/bindPhone/index",
      name:"indexPhone",
      component:BindP,
      meta:{
        flag:false,
      }
    },
    //绑定手机界面
    {
      path:"/bindPhone/bindPhoneOne",
      name:"bindPhoneOne",
      component:BindOne,
      meta:{
        flag:false,
      }
    },
    //推送设置
    {
      path:"/set/pushSet/index",
      name:"pushSet",
      component:pushSet,
      meta:{
        flag:false
      }
    },
    {
      path:"/plus",
      name:"plus",
      component:Plus,
      meta:{
        flag:true,
      }
    },
    {
      path:"/recommend",
      name:"recommend",
      component:Recommend,
      meta:{
        flag:true,
      }
    },
    {
      path:"/spot",
      name:"spot",
      component:Spot,
      meta:{
        flag:true,
      }
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"**",
      component:Err
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
