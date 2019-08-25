<template>
  <v-container class="mt-5 px-4">
    <v-row>
      <v-col cols=12><p class="subtitle-1 grey--text">Order</p></v-col>
    </v-row>
    <v-row>
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field outlined clearable label="Location" v-model="location" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select outlined clearable label="Guides" v-model="guideName" :items="guideNames"></v-select>
          </v-col>
          <v-col cols="12">
            <v-select outlined clearable label="Email" :items="items"></v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field outlined clearable label="Email" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field outlined clearable label="Email" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="success">Send</v-btn>
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
      date: '',
      start_time: '',
      end_time: '',
      languageID: '',
      serviceID: '',
      location: '',
      guideName: null,
      guides: [],
    }
  },
  computed: {
    userID() {
      return this.$store.state.user.id
    },
    isDisabled(){
      if(this.guideID){
        return false;
      }
      return true;
    },
    guideNames(){
      return this.guides.map(item => item.first_name + ' ' + item.last_name)
    },
    guideID(){
      if(guideName){
        const guide = this.guides.find(guide => guide.first_name + ' ' + guide.last_name === this.guideName);
        return Object.values(guide)[0];
      }
      return null;
    }
  },
  created() { 
    axios.get(`http://localhost:5000/api/guide`)
        .then(response => this.guides = response.data)
  },
  mounted() {
    if (this.$store.state.isLoggedIn == false) {
      this.$router.push('/');
    }
    

  },
};
</script>
