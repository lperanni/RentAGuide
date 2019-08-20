<template>
  <v-app class="application">
    <NavBar></NavBar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer class="grey darken-3 py-1">
        <v-row>
          <v-col cols="8">
            <span class="white--text pl-5">Copyright© by Luciano Peranni</span>
          </v-col>
          <v-col cols="4" class="footer-list">
              <v-icon class="white--text">mdi-facebook-box</v-icon>
              <v-icon class="white--text">mdi-github-box</v-icon>
              <v-icon class="white--text">mdi-twitter-box</v-icon>
          </v-col>
        </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="css" scoped>

  .application {
    font-family: 'Lato', sans-serif;
    background: rgb(218, 216, 216);
  }

  .footer-list{
    display: flex;
    justify-content: flex-end;
  }

  button {
    margin-right: 10px;
  }


</style>
