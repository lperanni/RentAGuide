import Vue from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import router from './router';
import store from './store/store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  VueCookies,
  render: h => h(App),
}).$mount('#app');
