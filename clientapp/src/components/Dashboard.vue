<template>
  <v-container class="mt-5">
      <v-row>
        <p class="subtitle-1 grey--text">Dashboard</p>
      </v-row>
      <v-row>
        <v-col lg="4" sm="12" v-for="card in cardValues" :key="card.title">
          <v-card min-height="250" min-width="200" class="pa-5" hover>
            <v-card-title class="mb-3">{{ card.title }}</v-card-title>
            <v-card-text>{{ card.text }}</v-card-text>
            <v-card-actions>
              <v-btn left class="success" router :to="card.link">{{ card.btn }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cardValues: [
        {
          title: 'Order a new Tour',
          text: 'Book your personal Tour today and experience Splits History firsthand together with us and our wonderful guides',
          btn: 'Order now',
          link: '/order',
        },
        {
          title: 'Browse our Guides',
          text: '  Browse through our list of professional Guides with years of experience and find the one that suits you most',
          btn: 'Browse Guides',
          link: '/guide',
        },
        {
          title: 'Profile',
          text: 'See al information on your Profile since you joined and edit information',
          btn: 'See Profile',
          link: '/profile',
        },
        {
          title: 'Contact us',
          text: 'Have any questions about our provided Services? We are here for you 24/7 with any information you may need.',
          btn: 'Contact',
          link: '/contact',
        },
        {
          title: 'Rate your Guides',
          text: 'Were you happy with one of our Guides were you dissappointed with the Service? All feedback is appreciated',
          btn: 'Rate',
          link: '/order',
        },
        {
          title: 'About us',
          text: 'Interested in us? Read the story of how we became the largest provider of guided Tour services in Croatia.',
          btn: 'Read',
          link: '/about',
        },
      ],
    };
  },

};
</script>
