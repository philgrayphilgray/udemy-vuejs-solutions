<template lang="pug">
div
  button.btn.btn-primary(@click='increment(50)') Increment
  hr
  button.btn.btn-primary(@click='decrement(50)') Decrement
  hr
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style lang="css">
</style>
