import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'baseLayout',
      component: () => import(/* webpackChunkName: "baseLayout" */ './layout/BaseLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
        },
        {
          path: '/article/detail/:id',
          name: 'articleDetail',
          component: () => import(/* webpackChunkName: "articleDetail" */ './views/ArticleDetail.vue'),
        },
      ],
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
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue'),
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
          component: () => import(/* webpackChunkName: "password" */ './views/Password.vue'),
        },
        {
          path: 'changeLog',
          name: 'changeLog',
          component: () => import(/* webpackChunkName: "changeLog" */ './views/ChangeLog.vue'),
        },
      ],
    },
  ],
});
