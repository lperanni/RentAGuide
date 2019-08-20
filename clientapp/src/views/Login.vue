<template>
  <v-container class="pa-5 mt-5">
    <v-row>
      <h1 class="my-5 display-2">Login</h1>
    </v-row>
     <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-text-field outlined clearable v-model="email" label="Email" required></v-text-field>
      </v-row>
      <v-row>
        <v-text-field outlined clearable v-model="password" label="Password" type="password" @keyup.enter="attemptLogin" required></v-text-field>
      </v-row>
      <p class="subtitle-1 mt-4">Forgot your <router-link to="change">password?</router-link></p>
      <v-btn color="success" class="mr-4" @click="goToRegister">Register</v-btn>
      <v-btn color="warning" class="mr-4" @click="attemptLogin">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    goToRegister() {
      this.$router.push('/');
    },
    attemptLogin() {
      this.$store.commit('logIn', { email: this.email.trim(), password: this.password });
    },
  },
};
</script>
