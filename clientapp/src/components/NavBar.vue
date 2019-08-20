<template>
  <nav>
    <v-app-bar app class="blue white--text">
      <v-app-bar-nav-icon dark @click="drawer = ! drawer"></v-app-bar-nav-icon>
      <v-toolbar-title ><span class="black--text bold">Rent</span> a Guide</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text dark @click="completeAuth">
        <span>{{ navButton[active].text}}</span>
        <v-icon right>{{ navButton[active].icon}}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app class="primary" v-model="drawer">
      <v-container class="text-center mt-5">
        <v-avatar size="150">
          <img src="../assets/images/avatar.jpeg" class="text-lg-center" alt="a picture" @click="goToProfile">
        </v-avatar>
        <p class="white--text mt-3 subtitle-1">{{ username }}</p>
      </v-container>
      <v-list class="mx-2">
        <v-list-item class="list-item" v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Home', route: '/' },
        { icon: 'mdi-account', text: 'Profile', route: '/profile' },
        { icon: 'mdi-contact-mail', text: 'Contact', route: '/contact' },
        { icon: 'mdi-credit-card-outline', text: 'Order Tour', route: '/order' },
      ],
      navButton: [
        { icon: 'mdi-application-import', text: 'Login', method: 'logIn' },
        { icon: 'mdi-application-export', text: 'Sign out', method: 'logOut' },
      ],
    };
  },
  methods: {
    completeAuth() {
      if (this.active == 0) {
        this.$router.push('/login');
      } else {
        this.$store.commit('logOut');
      }
    },
    goToProfile() {
      router.push('/profile');
    },
  },
  computed: {
    active() {
      if (this.$store.state.isLoggedIn == true) {
        return 1;
      }
      return 0;
    },
    username() {
      const user = this.$store.getters.getUser;
      return (user != null) ? user.data.first_name : "Not logged in";
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
