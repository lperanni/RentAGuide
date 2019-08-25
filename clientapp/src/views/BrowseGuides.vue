<template>
  <v-container>
    <v-row class="mb-6">
        <v-col cols="12"><p class="subtitle-1 grey--text">{{ this.item.charAt(0).toUpperCase() + this.item.slice(1) }}</p></v-col>
    </v-row>
    <v-row>
      <v-simple-table
        :dense="dense"
        :fixed-header="fixedHeader"
        :height="height"
        class="table"
      >
        <thead>
          <tr>
            <th class="text-left">First Name</th>
            <th class="text-left">Last Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Phone Number</th>
            <th class="text-left">Joined</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone_number }}</td>
            <td>{{ item.joined }}</td>
          </tr>
        </tbody>
      </v-simple-table>

    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';
import humanize from 'humanize';

export default {
  props: ['item'],
  data() {
    return {
      items: {},
      height: 2500,
    };
  },
  methods: {

  },
  mounted() {
    axios.get(`http://localhost:5000/api/${this.item}`)
    .then(response => this.items = response.data)
    .catch(err => {
      alert('Not Found');
      this.$router.push("/")
    })
  },

};
</script>

<style scoped>
  .table{
    font-size: 450%;
  }
</style>
