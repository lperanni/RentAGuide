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
         <v-simple-table>
           <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th>
              <th class="text-left">Joined</th>
              <th class="text-left">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.first_name + " " + item.last_name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.joined }}</td>
              <td>{{ item.phone_number }}</td>
            </tr>
          </tbody>
        </v-simple-table>
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
    axios.get(`${process.env.VUE_APP_BASE_URL}/${this.item}`)
      .then(response => this.items = response.data)
      .catch((err) => {
        alert('Not Found');
        this.$router.push('/');
      });
  },

};
</script>
