import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
    // {
    //   path: '*',
    //   name: 'Error404',
    //   component: 'Error404'
    // }
  ]
});
