<template>
  <v-container class="mt-5 pa-5">
    <v-row>
      <p class="subtitle-1 grey--text">Gallery</p>
    </v-row>
    <v-row class="mt-4">
      <v-carousel>
        <v-carousel-item 
          v-for="location in locations"
          :key="location.id"
          :src="'../assets/images/locations/' + location.img_name"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      locations: [],
    };
  },
  mounted() {
    axios.get('http://localhost:5000/api/location')
      .then(response => this.locations = response.data)
      .catch(err => console.log(err));
  },

};
</script>
