<template>
  <v-container class="mt-5 px-4">
    <v-row>
      <v-col cols=12><p class="subtitle-1 grey--text">Order</p></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {

  },
  mounted() {
    if (this.$store.state.isLoggedIn == false) {
      this.$router.push('/');
    }
  },
};
</script>
