import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: {},
  },
  mutations: {
    logIn() {
      this.state.isLoggedIn = true;
    },
    logOut() {
      this.state.isLoggedIn = false;
    },
  },
  actions: {

  },
});
