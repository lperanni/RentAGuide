<template>
  <nav>
    <v-app-bar app class="blue white--text">
      <v-app-bar-nav-icon dark @click="openDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title ><span class="black--text bold">Rent</span> a Guide</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text dark @click="completeAuth">
        <span>{{ navButton[active].text}}</span>
        <v-icon right>{{ navButton[active].icon}}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app class="primary" v-model="drawer">
      <v-container class="text-center py-5 blue darken-3">
        <v-avatar size="150">
          <img src="../assets/images/avatar.jpeg" class="text-lg-center" alt="a picture" @click="goToProfile">
        </v-avatar>
        <p v-if="username" class="title my-5 white--text">Welcome, {{ username }}</p>
      </v-container>
      <v-list class="mx-2 my-5">
        <v-list-item class="list-item" v-for="link in links" :key="link.text" router :to="link.route" :item="link.props">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text title">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-container class="my-10 blue darken-3">
        <v-row >
          <v-col cols="12">
            <v-btn class="success" block @click="completeAuth">Log out</v-btn>
          </v-col>
           <v-col cols="12">
            <v-btn class="orange white--text" block>Send it to me</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-12">
        <p class="grey--text caption">Rent a Guide belongs to Luciano Peranni incorporated</p>
      </v-container>
    </v-navigation-drawer>
  </nav>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Home', route: '/' },
        { icon: 'mdi-account', text: 'Profile', route: '/profile' },
        { icon: 'mdi-contact-mail', text: 'Contact', route: '/contact' },
        { icon: 'mdi-credit-card-outline', text: 'Order Tour', route: '/order' },
        {
          icon: 'mdi-format-list-bulleted-square', text: 'See Guides', route: '/guide', props: 'guides',
        },
      ],
      navButton: [
        { icon: 'mdi-application-import', text: 'Login' },
        { icon: 'mdi-application-export', text: 'Sign out' },
      ],
    };
  },
  methods: {
    openDrawer() {
      if (this.$store.state.isLoggedIn) this.drawer = !this.drawer;
    },
    completeAuth() {
      if (this.active === 0) {
        this.$router.push('/login');
      } else {
        this.$store.dispatch('logout');
        this.drawer = false;
        this.$router.push("/");
      }
    },
    goToProfile() {
      router.push('/profile');
    },
  },
  computed: {
    ...mapGetters([
      'username',
    ]),
    active() {
      if (this.$store.state.isLoggedIn === true) {
        return 1;
      }
      return 0;
    },
  },

};
</script>

<style scoped>
  img:hover{
    cursor: pointer;
  }

  .list-item:hover{
    cursor: pointer;
    background: #7cb342;
  }

</style>
