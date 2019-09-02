<template>
  <v-container>
    <v-row>
      <v-col cols=12><p class="subtitle-1 grey--text">Fire</p></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
           <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th>
              <th class="text-left">Joined</th>
              <th class="text-left">Phone Number</th>
              <th class="text-left">Fire?</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in guides" :key="item.id">
              <td>{{ item.first_name + " " + item.last_name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.joined }}</td>
              <td>{{ item.phone_number }}</td>
              <td><v-btn class="error" @click="fireGuide(item.id)">Get out</v-btn></td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-col cols=12>
        <v-alert v-model="show" dismissible class="success">
          Successfully fired!
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      guides: [],
      show: false,
    };
  },
  methods: {
    fireGuide(id) {
      axios.delete(`${process.env.VUE_APP_BASE_URL}/guide/${id}`)
        .then(() => this.show = true)
        .catch(err => console.log(`Couldnt fire guide ${err}`));
    },
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_BASE_URL}/guide`)
      .then(response => this.guides = response.data)
      .catch(err => console.log(err));
  },
};
</script>
