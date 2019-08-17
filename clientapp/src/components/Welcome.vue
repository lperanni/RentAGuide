<template>
  <v-container class="mt-5">
  <h1 class="display-3">Order your first Tour today</h1>
  <v-card class="my-5 pa-3">
    <v-form>
     <v-form-base :value="values" :schema="schema" />
   </v-form>
  </v-card>
  </v-container>
</template>

<script>

import VFormBase from 'vuetify-form-base'; 

export default {
  components: { VFormBase },
  data(){
    return{
      values: {
        name: '',
        email: '',
        password: ''
      },
      schema: {
        name: { type: 'text', label: 'Name' },
        password: { type: 'password', label: 'Password' },
        email: { type: 'email', label: 'Email' }
      }
    }
  }
}
</script>

<style scoped>



</style>