<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="subtitle-1 grey--text">Profile</p>
      </v-col>
    </v-row>
    <v-card class="pa-5 hover">
    <v-row>
      <v-col cols="12">
        <h1 class="display-3">{{ user.first_name + " " + user.last_name }}</h1>
      </v-col>
      <v-col cols="12">
        <p class="title">Email: {{ user.email }}</p>
      </v-col>
    </v-row>
    </v-card>
  </v-container>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
     
    };
  },
  computed: {
    user(){
      return this.$store.state.user;
    },
  },
  mounted() {
    if (this.$store.state.isLoggedIn === false) {
      this.$router.push('/');
    }
  },
};
</script>
