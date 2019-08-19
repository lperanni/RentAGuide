import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: {},
  },
  mutations: {
    logIn(state, body) {
      axios.post('http://localhost:5000/api/user/auth/login', {
        email: body.email,
        password: body.password,
      })
        .then(() => {
          state.isLoggedIn = true;
          state.user = body;
          router.push('/');
        })
        .catch(err => console.log(err));
    },
    logOut(state) {
      axios.delete('http://localhost:5000/api/user/auth/logout')
        .then(() => {
          console.log('Successfully logged out');
          state.isLoggedIn = false;
        })
        .catch(err => console.log(`Unable to log out: ${err}`));
    },
  },
  actions: {

  },
});
