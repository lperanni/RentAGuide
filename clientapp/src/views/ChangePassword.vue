<template>
  <v-container class="pa-5 mt-5">
    <v-row>
      <h1 class="my-5 display-2">Change Password</h1>
    </v-row>
    <v-row>
        <v-text-field outlined clearable v-model="email" label="Email" required></v-text-field>
    </v-row>
    <v-row>
        <v-text-field outlined clearable v-model="newPassword" label="New password" required></v-text-field>
    </v-row>
      <v-btn color="success" class="mr-4" @click="compareAndSend">Send</v-btn>
  </v-container>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      newPassword: '',
    };
  },
  methods: {
    compareAndSend() {
      axios.patch('http://localhost:5000/api/user/password', {
        email: this.email,
        password: this.newPassword,
      });
    },
  },
};
</script>
