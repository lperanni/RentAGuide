<template>
  <v-container v-if="!loggedIn" class="mt-5">
    <Welcome></Welcome>
  </v-container>
  <v-container v-else class="mt-5">
    Different
  </v-container>
</template>

<script>

import Welcome from '../components/Welcome';
import Dashboard from '../components/Dashboard';
import store from '../store';

export default {
  components: {
   Welcome
  },
  computed: {
    loggedIn(){
      if(store.state.isLoggedIn === true){
        return true;
      }else{
        return false;
      }
    }
  },
  mounted(){
    this.loggedIn;
  }
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
