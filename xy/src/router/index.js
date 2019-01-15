import Vue from 'vue'
import Router from 'vue-router'

import Community from "../components/community/home/index.vue";
import TalkList from "../components/community/talklist/index.vue"
import Chatbox from "../components/community/chatbox/index.vue"
import Details from "../components/community/details/index.vue"
import Reply from "../components/community/reply/index.vue"
import Footer from "../components/footer/index.vue";
import Err from "../components/error/error.vue";
import Login from "../components/login/login.vue";
import Regone from "../components/register/pageone";
import Regtwo from "../components/register/pagetwo";
import Regthree from "../components/register/pagethree";
import Recommend from "../components/recommend";
import Spot from "../components/spot";
import Topiccontent from "@/components/spot/components/topiccontent";

import Plus from "../components/plus";
import Pushpic from "../components/plus/pic";
import Pushbook from "../components/plus/book";
import Pushlanguge from "../components/plus/languge";

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

//意见反馈
import Idea from "../components/personal/set/idea/index.vue"
//关于我们
import About from "../components/personal/set/aboutMe/index.vue"



Vue.use(Router);

const router = new Router({

    routes: [{
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
            path: '/regthree',
            name: "regthree",
            component: Regthree
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
            children: [{
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
                flag: false,
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
        //意见反馈
        {
            path: "/set/idea/index",
            name: "idea",
            component: Idea,
            meta: {
                flag: false
            }
        },
        //关于我们
        {
            path: "/set/aboutMe/index",
            name: "about",
            component: About,
            meta: {
                flag: false
            }
        },
        { //粉丝列表
            path: "/fans",
            name: "fans",
            component: Fans,
            meta: {
                falg: false
            }
        },
        { //粉丝主页
            path: "fansindex",
            name: "fansindex",
            component: Fansindex,
            meta: {
                flag: false
            }
        },
        { //我关注的
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
        { //个人箴言
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