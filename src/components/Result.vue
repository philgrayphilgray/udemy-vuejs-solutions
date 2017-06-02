<template lang="pug">
p Counter is {{ counter }}
</template>

<script>
export default {
  computed: {
    counter(){
    return this.$store.getters.doubleCounter;
  }
}
}
</script>

<style lang="css">
</style>
