import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import Login from '@/components/Login';
import Lists from '@/components/Lists';
import List from '@/components/List';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/lists',
      name: 'Lists',
      component: Lists,
    },
    {
      path: '/list/new',
      name: 'NewList',
      component: List,
      props: {
        default: true,
        creatingList: true
      }
    },
    {
      path: '/list/:id',
      name: 'List',
      component: List,
      props: {
        default: true,
        creatingList: false
      }
    }
  ]
});
