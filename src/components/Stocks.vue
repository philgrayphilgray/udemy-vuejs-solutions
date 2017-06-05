<template lang="pug">
div
  .row
    .col-xs-12.col-md-6.mb-3(v-for='(stock, i) in getAvailableStocks')
      .card
        .card-title.alert-success
          .card-block
            h4.float-left {{ stock.name }}
            span &nbsp;(Price: {{ stock.price }})
        .card-block
          .card-content
            .row
              .col-xs-12.col-md-6
                input.form-control(type='number', placeholder='Quantity', v-model='quantities[i]', min='1')
              .col-xs-12.col-md-6
                button.btn.btn-success.float-right(@click='buy({name: stock.name, price: stock.price, quantity: quantities[i]})') Buy
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  data(){
    return{
      quantities: {}
    }
  },
  computed: {
    ...mapGetters([
      'getAvailableStocks',
      'getCurrentFunds'
    ])
  },
  methods: {
    ...mapActions([
      'buy'
    ])
  }
}
</script>

<style lang="scss">

</style>
