<template>
  <v-container class="pa-7 ml-5">
    <v-card class="pa-6">
      <v-row cols=12>
        <v-col cols=12>
          <h2>{{guide.first_name + ' ' + guide.last_name}}</h2>
        </v-col>
        <v-col cols=12>
          <p>Email: {{ guide.email }}</p>
        </v-col>
        <v-col cols=12>
          <p>Phone Number: {{ guide.phone_number }}</p>
        </v-col>
        <v-col cols=12>
          <p>Joined: {{ guide.joined }}</p>
        </v-col>
        <v-row cols=12>
          <h4 class="pl-7">Known Languages</h4>
          <v-col cols="12" class="pl-7" v-for="language in languages" :key="language.id">
            {{ language.language_name}}
          </v-col>
        </v-row>
        <v-row cols=12>
          <h4 class="pl-7">Known Services</h4>
          <v-col cols="12" class="pl-7" v-for="service in services" :key="service.id">
            {{ service.Service.service_name}}; Price: {{ service.price}} HRK
          </v-col>
        </v-row>
        <v-col cols=12>
          <v-btn width="200" class="success mt-7" @click="dialog = true">Rate</v-btn>
        </v-col>
        <v-dialog v-model="dialog" max-width="290">
          <v-card class="pa-5">
          <v-card-title class="headline">Rate your Guide</v-card-title>
          <v-card-text>
            Use the stars to add your rating
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col>
                <v-rating v-model="rating"></v-rating>
              </v-col>
              <v-col>
                <v-btn class="success" @click="submitRating" block>Submit</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
        </v-dialog>
        <v-alert class="error" dismissible v-model="showError">Rating already submitted</v-alert>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      guide: {},
      languages: [],
      services: [],
      rating: 0,
      dialog: false,
      showError: false,
    };
  },
  methods: {
    submitRating() {
      axios.post(`${process.env.VUE_APP_BASE_URL}/user/${this.$store.state.user.id}/rating`, {
        id: this.guide.id,
        rating: this.rating,
      }).then(() => this.dialog = false)
        .catch(() => {
          this.showError = true;
          this.dialog = false;
        });
    },
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_BASE_URL}/guide/${this.$route.query.id}`)
      .then(response => this.guide = response.data[0])
      .catch(err => console.log(err));

    axios.get(`${process.env.VUE_APP_BASE_URL}/guide/${this.$route.query.id}/language`)
      .then(response => this.languages = response.data.map(item => item.Language))
      .catch(err => console.log(err));

    axios.get(`${process.env.VUE_APP_BASE_URL}/guide/${this.$route.query.id}/service`)
      .then(response => this.services = response.data)
      .catch(err => console.log(err));
  },

};
</script>
