<template lang="pug">
div
  button.btn.btn-primary(@click='increment') Increment
  hr
  button.btn.btn-primary(@click='decrement') Decrement
  hr
</template>

<script>
export default {
  methods: {
    increment(){
      this.$store.state.counter++;
    },
    decrement(){
      this.$store.state.counter--;
    }
  }
}
</script>

<style lang="css">
</style>
