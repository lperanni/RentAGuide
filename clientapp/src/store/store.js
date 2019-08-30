import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';
import { LOG_IN, LOG_OUT, LOG_IN_SUCCESS } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
    pending: false,
    user: JSON.parse(localStorage.getItem('token')),
  },
  mutations: {
    [LOG_IN](state) {
      state.pending = true;
    },
    [LOG_IN_SUCCESS](state, res) {
      state.isLoggedIn = true;
      state.user = { ...res.data[0] };
      state.pending = false;
      router.push('/');
    },
    [LOG_OUT](state) {
      axios.delete(`${process.env.VUE_APP_BASE_URL}/user/auth/logout`)
        .then(() => {
          console.log('Successfully logged out');
          state.isLoggedIn = false;
        })
        .catch(err => console.log(`Unable to log out: ${err}`));
    },
  },
  actions: {
    login({ commit }, body) {
      commit(LOG_IN);
      axios.post(`${process.env.VUE_APP_BASE_URL}/user/auth/login`, {
        email: body.email,
        password: body.password,
      }).then((res) => {
        const payload = JSON.stringify(res.data[0]);
        localStorage.setItem('token', payload);
        commit(LOG_IN_SUCCESS, res);
      })
        .catch(err => console.log(err));
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      commit(LOG_OUT);
    },
  },
  getters: {
    username(state) {
      if (state.user) {
        return state.user.first_name;
      }
      return 'User';
    },
  },
});
