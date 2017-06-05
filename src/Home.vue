<template lang="pug">
.card
  .card-block
    .card-title
      h1 Trade or View your Portfolio
    .card-content
      p You may Save & Load your data.
      p Click on 'End Day' to begin a new day!
      hr
      h4 Your Funds: {{ getCurrentFunds | currency('$', 0) }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'getCurrentFunds'
    ])
  }
}
</script>

<style lang="css">
</style>
