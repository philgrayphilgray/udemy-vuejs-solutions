<template lang="pug">
div
  h2 User Area
  hr
  router-view
  br
  button.btn.btn-primary(@click='navigateToHome')
    i.fa.fa-train
    |  Go home
</template>

<script>
export default {
  methods: {
    navigateToHome(){
      this.$router.push({ name: 'home' });
    }
  }
}
</script>

<style lang="css">
</style>
