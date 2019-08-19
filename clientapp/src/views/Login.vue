<template>
  <v-container class="pa-5">
    <v-row>
      <h2 class="mb-3 display-2">Login</h2>
    </v-row>
     <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-text-field outlined clearable v-model="email" label="Email" required></v-text-field>
      </v-row>
      <v-row>
        <v-text-field outlined clearable v-model="password" label="Password" type="password" required></v-text-field>
      </v-row>
      <v-btn color="success" class="mr-4" @click="goToRegister">Register</v-btn>
      <v-btn color="warning" class="mr-4" @click="attemptLogin">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>

import router from '../router';
import store from '../store';

export default {
  data(){
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    goToRegister(){
      router.push("/");
    },
    attemptLogin(){
      store.commit('logIn', { email: this.email.trim(), password: this.password });
    }
  }
}
</script>