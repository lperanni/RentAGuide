<template>
 <v-container class="mt-5">
  <v-row>
    <p class="subtitle-1 grey--text">Add Guide</p>
  </v-row>
  <v-row>
   <v-col cols="12">
    <v-form lazy-validation>
      <v-row>
        <v-col lg=6 sm=12 class="pa-6">
          <v-row>
            <v-text-field outlined clearable v-model="first_name" label="First Name" required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field outlined clearable v-model="last_name" label="Last Name" required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field outlined clearable v-model="email" label="Email" required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field outlined clearable v-model="phone_number" label="Phone" required></v-text-field>
          </v-row>
        </v-col>
        <v-col lg="6" sm="12">
          <v-row>
            <v-col cols="12">
              <h3>Languages</h3>
            </v-col>
              <v-checkbox 
                v-for="language in languages" 
                v-model="selectLang"
                :key="language.id" 
                :label="language.language_name" 
                :value="language.id" 
                >
              </v-checkbox>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h3>Services</h3>
              </v-col>
              <v-checkbox 
                v-for="service in services" 
                v-model="selectServ"
                :key="service.id" 
                :label="service.service_name" 
                :value="service.id" 
                >
              </v-checkbox>
            </v-row>
        </v-col>
      </v-row>
      <v-btn color="success" class="mr-4" block @click="registerGuide">Save</v-btn>
    </v-form>
   </v-col>
  </v-row>
 </v-container>
</template>

<script>

import axios from 'axios';

export default {
  data(){
    return{
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      languages: [],
      services: [],
      prices: [],
      selectLang: [],
      selectServ: [],
    }
  },
  methods: {

  },
  created(){
    axios.get(`${process.env.VUE_APP_BASE_URL}/language`)
      .then(response => this.languages = response.data)

    axios.get(`${process.env.VUE_APP_BASE_URL}/service`)
      .then(response => this.services = response.data)
  }
}
</script>