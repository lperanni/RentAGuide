<template>
  
</template>

<script>
export default {
  mounted(){
    if (this.$store.state.isLoggedIn == false) {
      this.$router.push("/");
    }
  }
}
</script>