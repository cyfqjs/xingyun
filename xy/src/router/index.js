import Vue from 'vue'
import Router from 'vue-router'

import Community from "../components/community";
import Footer from "../components/footer/index.vue";
import Personal from "../components/personal";
import Plus from "../components/plus";
import Recommend from "../components/recommend";
import Spot from "../components/spot";
import Err from "../components/error/error.vue";
import Login from "../components/login/login.vue"
import Set from "../components/personal/set/index.vue"

Vue.use(Router)

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
    {
      path:"/community",
      name:"community",
      component:Community
    },
    {
      path:"/personal",
      name:"personal",
      component:Personal,
      children:[
        {
          path:"/set/index",
          component:Set
        }
      ]
    },
    {
      path:"/plus",
      name:"plus",
      component:Plus
    },
    {
      path:"/recommend",
      name:"recommend",
      component:Recommend,
    },
    {
      path:"/spot",
      name:"spot",
      component:Spot
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
