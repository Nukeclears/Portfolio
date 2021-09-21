import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/Home")
    },
    {
      path: '/products',
      name: 'products',
      component: () => import("../views/Products")
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import("../views/Cart")
    }
  ],
  
})