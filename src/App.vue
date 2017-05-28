<template lang="pug">
.container
  .row
    .col-sm-12
      h1 Filters & Mixins
      p {{ text | toUppercase | to-lowercase }}
      button(@click='fruits.push("Straweberries")') Add New Item
      input(v-model='filterText')
      ul
        li(v-for='fruit in searchFruits') {{ fruit }}
      hr
      app-list
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin'
export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: 'Hello!'
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  components: {
    appList : List
  }
}
</script>

<style lang="scss">

</style>
