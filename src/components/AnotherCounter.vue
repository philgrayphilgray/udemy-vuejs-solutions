<template lang="pug">
div
  button.btn.btn-primary(@click='asyncIncrement({by: 50, duration: 500})') Increment
  hr
  button.btn.btn-primary(@click='asyncDecrement({by: 50, duration: 500})') Decrement
  hr
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions([
      'asyncIncrement',
      'asyncDecrement'
    ])
  }
}
</script>

<style lang="css">
</style>
