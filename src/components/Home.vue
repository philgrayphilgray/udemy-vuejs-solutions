<template lang="pug">
div
  h1 Trade or View your Portfolio
  h6 You may Save & Load Your Data
  h6 Click on 'End Day' to Begin a New Day!
  hr
  p Your Funds: {{ funds | currency }}

</template>

<script>
export default {
  computed: {
    funds(){
      return this.$store.getters.funds;
    }
  }
}
</script>

<style lang="css">
</style>
