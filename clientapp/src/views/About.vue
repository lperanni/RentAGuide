<template>
  <v-container class="mt-5 pa-7">
      <v-row class="mb-6">
        <v-col cols="12"><p class="subtitle-1 grey--text">About</p></v-col>
      </v-row>
      <v-row>
        <v-col lg="6" sm=12>
          <v-row v-for="p in paragraphs" :key="p.title">
            <v-col cols=12>
              <h2 class="display-1">{{ p.title }}</h2>
            </v-col>
            <v-col cols=12>
              <p class="subtitle-1">{{ p.text }}</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="6" sm=12>
          <v-img src="../assets/images/company.jpeg" height="400"></v-img>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      paragraphs: [
        {
          title: 'Who are we?',
          text: 'We are a 25 man firm whose main focus is to provide Tourists with an easy way of getting guided Tours in all of Dalmatia.',
        },
        {
          title: 'Where are we?',
          text: 'You can find us in the beautiful City of Split, Croatia where our Headquarters are situated',
        },
        {
          title: 'How can you contact us?',
          text: "If you have an account don't hesitate to use our contact form to send us a message and you will hear from us as soon as possible",
        },

      ],
    };
  },
};
</script>
