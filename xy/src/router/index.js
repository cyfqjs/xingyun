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
import Register from "../components/register"


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
      meta:{
//    	tab栏的显示
      	flag:false,
//    	路由守卫
        requireAuth:true
      }
    },
    {
      path:"/community",
      name:"community",
      component:Community,
      meta:{
//    	tab栏的显示
      	flag:true,
//    	路由守卫
        requireAuth:true
      }
    },
    {
      path:"/personal",
      name:"personal",
      component:Personal,
      meta:{
//    	tab栏的显示
      	flag:true,
//    	路由守卫
        requireAuth:true
      }
    },
    {
      path:"/plus",
      name:"plus",
      component:Plus,
      meta:{
//    	tab栏的显示
      	flag:true,
//    	路由守卫
        requireAuth:true
      }
    },
    {
      path:"/recommend",
      name:"recommend",
      component:Recommend,
      meta:{
//    	tab栏的显示
      	flag:true,
//    	路由守卫
        requireAuth:true
      }
    },
    {
      path:"/spot",
      name:"spot",
      component:Spot,
      meta:{
//    	tab栏的显示
      	flag:true,
//    	路由守卫
        requireAuth:true
      }
    },
    {
      path:"/login",
      name:"login",
      component:Login,
      meta:{
//    	tab栏的显示
      	flag:false,
//    	路由守卫
        requireAuth:true
      }
    },
    {
      path:"/register",
      name:"register",
      component:Register,
      meta:{
//    	tab栏的显示
      	flag:false,
//    	路由守卫
        requireAuth:true
      }
    },
    {
      path:"**",
      component:Err
    }
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
