<template>
  <v-container>
    <v-row class="mb-6">
        <v-col cols="12"><p class="subtitle-1 grey--text">{{ this.item.charAt(0).toUpperCase() + this.item.slice(1) }}</p></v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
            v-model="search"
            append-icon="mdi-search"
            label="Search"
            single-line
            hide-details
            outlined
            clearable
          ></v-text-field>
      </v-col>
      <v-col cols="12">
         <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        :search="search"
        class="elevation-1"
      >
      </v-data-table>
      </v-col>

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
      search: '',
      items: [],
      height: 900,
      headers: [
        {
          text: 'First Name',
          align: 'left',
          sortable: false,
          value: 'first_name',
        },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Email', value: 'email' },
        { text: 'Phone number', value: 'phone_number' },
        { text: 'Joined', value: 'joined' },
      ],
    };
  },
  methods: {

  },
  mounted() {
    axios.get(`http://localhost:5000/api/${this.item}`)
      .then(response => this.items = response.data)
      .catch((err) => {
        alert('Not Found');
        this.$router.push('/');
      });
  },

};
</script>
