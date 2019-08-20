<template>
  <v-container v-if="!loggedIn" class="mt-5">
    <Welcome></Welcome>
  </v-container>
  <v-container v-else class="mt-5">
    <Dashboard></Dashboard>
  </v-container>
</template>

<script>

import Welcome from '../components/Welcome.vue';
import Dashboard from '../components/Dashboard.vue';

export default {
  components: {
    Welcome, Dashboard,
  },
  computed: {
    loggedIn() {
      if (this.$store.state.isLoggedIn === true) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>

  h1{
    text-align: center;
    font-size: 400%;
    font-weight: 300;
    margin-top: 50px;
  }

</style>
