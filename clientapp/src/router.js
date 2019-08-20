import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
import Login from './views/Login.vue';
import About from './views/About.vue';
import ChangePassword from './views/ChangePassword.vue';
import Order from './views/Order.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/change',
      name: 'change',
      component: ChangePassword,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
