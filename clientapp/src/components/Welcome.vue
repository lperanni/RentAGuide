<template>
  <v-container>
     <v-row class="mb-5">
        <v-col><h1 class="display-3" >Welcome to Rent a Guide</h1></v-col>
      </v-row>
      <v-row>
        <v-col><p>Join us Today and experience Croatia like never before</p></v-col>
      </v-row>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-text-field outlined clearable v-model="first_name" label="First Name" required></v-text-field>
      </v-row>
      <v-row>
        <v-text-field outlined clearable v-model="last_name" label="Last Name" required></v-text-field>
      </v-row>
      <v-row>
        <v-text-field outlined clearable v-model="email" label="Email" required></v-text-field>
      </v-row>
      <v-row>
        <v-text-field outlined clearable v-model="password" label="Password" required type="password"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field outlined clearable v-model="passwordCompare" label="Enter Password again" required></v-text-field>
      </v-row>
      <v-btn color="success" class="mr-4" :disabled="!valid" @click="registerUser">Register</v-btn>
      <v-btn color="warning" class="mr-4" @click="goToLogin">Login</v-btn>
    </v-form>
    <p class="subtitle-1 mt-4">Want to know more about <router-link to="about">us?</router-link></p>
  </v-container>
</template>

<script>

import router from '../router';
import axios from 'axios';
import store from '../store';


export default {
  data(){
    return{
      valid: true,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      passwordCompare: ''
    }
  },
  methods: {

    goToLogin(){
      router.push("/login");
    },
    registerUser(){
      axios.post('http://localhost:5000/api/user/auth/register' ,{
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password
      }).then(res => store.commmit('logIn', { email: this.email.trim(), password: this.password }))
        .catch(err => console.log(err));
    }

  }
  
}
</script>

<style scoped>



</style>