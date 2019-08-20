import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';
import { LOG_IN, LOG_OUT } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: {},
  },
  mutations: {
    [LOG_IN](state, body) {
      axios.post('http://localhost:5000/api/user/auth/login', {
        email: body.email,
        password: body.password,
      })
        .then((res) => {
          state.isLoggedIn = true;
          state.user = res;
          router.push('/');
        })
        .catch(err => console.log(err));
    },
    [LOG_OUT](state) {
      axios.delete('http://localhost:5000/api/user/auth/logout')
        .then(() => {
          console.log('Successfully logged out');
          state.isLoggedIn = false;
        })
        .catch(err => console.log(`Unable to log out: ${err}`));
    },
  },
  actions: {
    attemptLogin(context, payload) {
      context.commit('logIn', { payload });
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
});
