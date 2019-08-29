<template>
  <v-content>
    <router-view/>
  </v-content>
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