<template lang="pug">
.container
  .row
    .col-sm-12
      app-quote
        h2 {{ quoteTitle }}
        p A wonderful Quote
</template>

<script>
import Quote from './components/Quote.vue';
export default {
  data: function(){
    return{
      quoteTitle: 'The Quote'
    }
  },
  components: {
    appQuote: Quote
  }
}
</script>

<style lang="scss">

</style>
