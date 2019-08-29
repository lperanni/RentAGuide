<template>
  <v-container class="mt-5">
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
          title: 'Edit Guides',
          text: 'Menu for editing guide data',
          btn: 'Update info',
          link: '/admin/guide'
        },
        {
          title: 'Register Admin',
          text: 'Assign admin status to user',
          btn: 'Set Admins',
          link: '/admin/guide'
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