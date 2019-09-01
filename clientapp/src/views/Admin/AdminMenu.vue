<template>
  <v-container class="mt-5 px-7">
    <v-row class="pa-5">
      <p class="subtitle-1 grey--text">Admin Menu</p>
    </v-row>
    <v-row class="mt-7">
      <v-col lg="4" sm="12" v-for="item in menuItems" :key="item.title">
        <v-card min-height="250" min-width="200" class="pa-5" hover>
          <v-card-title class="mb-3">{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
          <v-card-actions>
            <v-btn left class="success" router :to="item.link">{{ item.btn }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      menuItems: [
        {
          title: 'Add Guide',
          text: 'Menu for registering new guides',
          btn: 'Enter info',
          link: '/admin/guide'
        },
        {
          title: 'Fire Guide',
          text: 'Menu for firing bad guides',
          btn: 'Do it',
          link: '/admin/fire'
        },
        {
          title: 'Add Service',
          text: 'Menu for adding new Services',
          btn: 'Add',
          link: '/admin/service'
        },
      ]
    }
  },
  mounted(){
    if(!this.$store.state.user.admin){
      this.$router.push("/");
    }
  }
}
</script>