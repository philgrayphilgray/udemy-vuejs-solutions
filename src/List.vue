<template lang="pug">
div
  input(v-model='filterText')
  ul
    li(v-for='fruit in searchFruits') {{ fruit }}
</template>

<script>
import { fruitMixin } from './fruitMixin';
export default {
  mixins: [fruitMixin],
  created() {
    console.log('inside list created hook')
  }
}
</script>

<style lang="scss">

</style>
