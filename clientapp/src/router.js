import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import About from './views/About.vue';
import ChangePassword from './views/ChangePassword.vue';
import Order from './views/Order.vue';
import Contact from './views/Contact.vue';
import Browse from './views/BrowseGuides.vue';
import Locations from './views/Locations.vue';
import Admin from './views/Admin/Admin.vue';
import AdminMenu from './views/Admin/AdminMenu.vue';
import AdminGuide from './views/Admin/AdminGuide.vue';
import Service from './views/Services.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [

        { path: 'menu', name: 'admin_menu', component: AdminMenu },
        { path: 'guide', name: 'admin_guide', component: AdminGuide },
      ],
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations,
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
    {
      path: '/service',
      name: 'service',
      component: Service,
    },
    {
      path: '/guide',
      name: 'guide',
      component: Browse,
      props: { item: 'guide' },
    },
  ],
});
