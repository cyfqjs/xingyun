import Vue from 'vue'
import Router from 'vue-router'

import Community from "../components/community.vue";
import Footer from "../components/footer.vue";
import Personal from "../components/personal.vue";
import Plus from "../components/plus.vue";
import Recommend from "../components/recommend.vue";
import Spot from "../components/spot.vue";
import Error from "../components/error.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/recommend"
    },
    {
      path:"/footer",
      component:Footer
    },
    {
      path:"/community",
      component:Community
    },
    {
      path:"/personal",
      component:Personal
    },
    {
      path:"/plus",
      component:Plus
    },
    {
      path:"/recommend",
      component:Recommend
    },
    {
      path:"/spot",
      component:Spot
    },
    {
      path:"**",
      component:Error
    }
  ]
})
