<template>
  <v-container class="mt-5 pa-7">
    <v-row>
      <v-col cols=12><p class="subtitle-1 grey--text">Order</p></v-col>
    </v-row>
    <v-row>
      <v-form>
        <v-row>
          <v-col lg="4" sm="12">
            <v-row>
              <v-col lg="12">
                <v-date-picker v-model="date" block></v-date-picker>
              </v-col>
              <v-col cols="12">
                <v-btn class="success" width="290">Send</v-btn>
              </v-col>
            </v-row>
          </v-col>
            <v-col lg="8" md="12">
              <v-row>
                <v-col cols="12">
                  <v-select outlined clearable label="Location" v-model="location" :items="locationNames"></v-select>
                </v-col>
                <v-col cols="12">
                  <v-select outlined clearable label="Guides" v-model="guideName" :items="guideNames"></v-select>
                </v-col>
                <v-col cols="12">
                  <v-select outlined clearable label="Language" :items="languageNames" :disabled="guideChosen"></v-select>
                </v-col>
                <v-col cols="12">
                  <v-select outlined label="Begin" :items="hours" v-model="start_time" required></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field outlined clearable label="Email" required></v-text-field>
                </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';


export default {

  data() {
    return {
      date: null,
      start_time: '',
      languageID: '',
      serviceID: '',
      location: '',
      guideName: null,
      guides: [],
      possibleLocations: [],
      languages: [],
      hours: ['9','10','11','12','13','14','15','16','17','18','19','20','21','22'],
    };
  },
  computed: {
    userID() {
      return this.$store.state.user.id;
    },
    guideChosen() {
      if (this.guideID) {
        return false;
      }
      return true;
    },
    guideNames() {
      return this.guides.map(item => `${item.first_name} ${item.last_name}`);
    },
    locationNames() {
      return this.possibleLocations.map(item => item.location_name);
    },
    guideID() {
      if (this.guideName) {
        const guide = this.guides.find(guide => `${guide.first_name} ${guide.last_name}` === this.guideName);
        return Object.values(guide)[0];
      }
      return null;
    },
    languageNames() {
      return this.languages.map(lang => lang.Language.language_name);
    },
    end_time(){
      return Number(this.start_time) + 2;
    }
  },
  watch: {
    guideID() {
      axios.get(`http://localhost:5000/api/guide/${this.guideID}/language`)
        .then(response => this.languages = response.data);
    },
  },
  created() {
    axios.get('http://localhost:5000/api/guide')
      .then(response => this.guides = response.data);

    axios.get('http://localhost:5000/api/location')
      .then(response => this.possibleLocations = response.data);
  },
  mounted() {
    if (this.$store.state.isLoggedIn == false) {
      this.$router.push('/');
    }
  },
};
</script>
