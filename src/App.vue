<template lang="pug">
.container
  app-header(:quoteCount='quotes.length', :maxQuotes='maxQuotes')
  app-new-quote(@quoteAdded='newQuote')
  app-quote-grid(:quotes='quotes' @quoteDeleted='deleteQuote')
  .row
    .col-sm-12.text-center
      .alert.alert-info Click on a quote to delete it.

</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';
export default {
  data: function(){
    return{
      quotes: [
        'Just a Quote to see something'
      ],
      maxQuotes: 10
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  },
  methods: {
    newQuote(quote){
      if(this.quotes.length >= this.maxQuotes){
        return alert('Please delete quotes first!');
      }
      this.quotes.push(quote);
    },
    deleteQuote(index){
      this.quotes.splice(index, 1);
    }
  }
}
</script>

<style lang="scss">

</style>
