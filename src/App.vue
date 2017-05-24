<template lang="pug">
.container
  .row
    .col-sm-12
      app-quote
        h2 The Quote
        p A wonderful Quote
</template>

<script>
import Quote from './components/Quote.vue';
export default {
  components: {
    appQuote: Quote
  }
}
</script>

<style lang="scss">

</style>
