<template lang="pug">
.alert.alert-success.text-center
  h1 That's correct!
  hr
  button.btn.btn-primary(@click='onNextQuestion') Next Question
</template>

<script>
export default {
methods: {
  onNextQuestion(){
    this.$emit('confirmed');
  }
}
}
</script>

<style lang="css">
</style>
