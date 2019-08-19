<template>
  <v-app class="application">
    <NavBar></NavBar>    
    <v-content>
      <router-view/>
    </v-content>
    <v-footer>
      
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="css" scoped>

  .application {
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    font-size: 20px;
    background: rgb(218, 216, 216);
  }


  button {
    margin-right: 10px;
  }


</style>
