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
</template>
<script>
import Counter from './components/Counter.vue';
import Result from './components/Result.vue';
import AnotherResult from './components/AnotherResult.vue';

export default {
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult
  }
}
</script>

<style lang="scss">

</style>
