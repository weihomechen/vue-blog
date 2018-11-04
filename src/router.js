import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/personCenter',
      name: 'personCenter',
      component: () => import(/* webpackChunkName: "personCenter" */ './layout/SiderLayout.vue'),
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
        },
        {
          path: 'password',
          name: 'password',
          component: () => import(/* webpackChunkName: "password" */ './views/password.vue'),
        },
      ],
    },
  ],
});
