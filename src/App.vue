<template lang="pug">
.container
  .row
    .col-sm-12
      h1 Vuex
      app-result
      hr
      app-another-result
      hr
      app-counter
      app-another-counter
      hr
      input(type='text', v-model='value')
      p {{ value }}
</template>
<script>
import Counter from './components/Counter.vue';
import Result from './components/Result.vue';
import AnotherResult from './components/AnotherResult.vue';
import AnotherCounter from './components/AnotherCounter.vue';

export default {
  computed: {
    value: {
      get(){
      return this.$store.getters.value;
    },
    set(value){
    this.$store.dispatch('updateValue', value);
    }

    }
  },
  methods: {
    updateValue(event){
      this.$store.dispatch('updateValue', event.target.value);
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  }
}
</script>

<style lang="scss">

</style>
