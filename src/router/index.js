import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Header from "../components/Header.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/block1',
      name: 'block1',
      component: Home
    },
    {
      path: '/block2',
      name: 'block2',
      component: About
    }
  ]
})