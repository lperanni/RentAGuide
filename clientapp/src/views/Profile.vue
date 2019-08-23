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
    user() {
      const { id } = Object.values(this.$store.state.user)[0][0];
      axios.get(`http://localhost:5000/api/guide/${id}`)
        .then(res => console.log(Object.values(res)[0]))
        .catch(err => console.log(err));
    },
  },
  mounted() {
    if (this.$store.state.isLoggedIn === false) {
      this.$router.push('/');
    }
  },
};
</script>
