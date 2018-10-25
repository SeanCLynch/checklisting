import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import Ping from '@/components/Ping';
import List from '@/components/List';
import Admin from '@/components/Admin';
import Collection from '@/components/Collection';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/list/:id',
      name: 'List',
      component: List
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    }
  ]
});
