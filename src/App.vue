<template lang="pug">
.container
  .row
    .col-sm-12
      h1 Filters & Mixins
      p {{ text | toUppercase | to-lowercase }}
      input(v-model='filterText')
      ul
        li(v-for='fruit in searchFruits') {{ fruit }}
</template>

<script>
export default {
  data() {
    return {
      text: 'Hello!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  computed: {
    searchFruits(){
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    }
  }
}
</script>

<style lang="scss">

</style>
