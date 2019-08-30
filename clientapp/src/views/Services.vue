<template>
  <v-container class="mt-5">
    <v-row>
      <p class="subtitle-1 grey--text">Services</p>
    </v-row>
    <v-row>
      <v-col v-for="service in services" :key="service.id" cols="12">
        <v-card>
          <v-card-title>{{ service.service_name }}</v-card-title>
          <v-card-text>{{ service.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      services: [],
    }
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_BASE_URL}/service`)
      .then(response => this.services = response.data);
  }
}
</script>