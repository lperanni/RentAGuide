<template>
  <nav>
    <v-app-bar app class="blue white--text">
      <v-app-bar-nav-icon dark @click="drawer = ! drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">Rent a Guide</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text dark @click="attemptAuth">
        <span>{{ navButton[active].text}}</span>
        <v-icon right>{{ navButton[active].icon}}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app class="primary" v-model="drawer">
      <v-avatar size="100">
        <img src="../assets/images/avatar.jpeg" class="text-lg-center" alt="a picture">
      </v-avatar>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
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
import store from '../store';

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
        { icon: 'mdi-account', text: 'Profile', route: '/profile'},
        { icon: 'mdi-contact-mail', text: 'Contact', route: '/contact'},
      ],
      navButton: [
        { icon: 'mdi-application-import', text:'Login', method: 'logIn'},
        { icon: 'mdi-application-export', text:'Sign out', method: 'logOut'}
      ],
      active: 0,
    }
  },
  methods: {
    attemptAuth(){
      store.commit(this.navButton[this.active].method);
      if (store.state.isLoggedIn == true){
        this.active = 1;
      }else{
        this.active = 0;
      }
    }
  }
  
}
</script>

<style  scoped>

</style>