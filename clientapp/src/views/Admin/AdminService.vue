<template>
  <v-container>
    <v-row class="pa-5">
      <p class="subtitle-1 grey--text">Service Menu</p>
    </v-row>
    <v-form>
     <v-row>
        <v-col>
          <v-text-field outlined clearable v-model="service_name" label="Service Name"></v-text-field>
          <v-text-field outlined clearable v-model="description" label="Service Description"></v-text-field>
        </v-col>
        <v-col cols=12>
          <v-btn class="success" block @click="addService">Add</v-btn>
        </v-col>
        <v-col cols=12>
          <v-alert v-model="showSuccess" dismissible class="success">Service created</v-alert>
          <v-alert v-model="showFail" dismissible class="error">Service not created</v-alert>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      service_name: '',
      description: '',
      showSuccess: false,
      showFail: false,
    };
  },
  methods: {
    addService() {
      axios.post(`${process.env.VUE_APP_BASE_URL}/service`, {
        service_name: this.service_name,
        description: this.description,
      }).then(() => this.showSuccess = true)
        .catch(() => this.showFail = true);
    },
  },

};
</script>
