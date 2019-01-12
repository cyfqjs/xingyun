import Vue from 'vue'
import Router from 'vue-router'

import Community from "../components/community/home/index.vue";
import TalkList from "../components/community/talklist/index.vue"
import Chatbox from "../components/community/chatbox/index.vue"
import Details from "../components/community/details/index.vue"
import Reply from "../components/community/reply/index.vue"

import Footer from "../components/footer/index.vue";
import Personal from "../components/personal/main/index";
import Plus from "../components/plus";
import Recommend from "../components/recommend";
import Spot from "../components/spot";
import Err from "../components/error/error.vue";
import Login from "../components/login/login.vue";

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
        flag:true,
      }
    },
 
    {//私信列表
      path:"/talklist",
      name:"talklist",
      component:TalkList,
      meta:{
        flag:false,
      }
    },
    {//聊天框
      path:"/chat",
      name:"chat",
      component:Chatbox,
      meta:{
        flag:false,
      }
    },
    {//评论详情
      path:"/details",
      name:"details",
      component:Details,
      props:true,
      meta:{
        flag:false,
      },
      children:[
        {
      //评论列表
          path:"/details/reply",
          name:"reply",
          component:Reply,
          meta:{
            flag:false,
          }
    },
      ]
    },
    
   { //个人中心
      path:"/personal",
      name:"personal",
      component:Personal,
      meta:{
        flag:true,
      }
    },
    { // +
      path:"/plus",
      name:"plus",
      component:Plus,
      meta:{
        flag:true,
      }
    },
    { //推荐
      path:"/recommend",
      name:"recommend",
      component:Recommend,
      meta:{
        flag:true,
      }
    },
    { //看点
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
      component:Login,
      meta:{
        flag:false,
      }
    },
    {
      path:"**",
      component:Err,
      meta:{
        flag:true,
      }
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
