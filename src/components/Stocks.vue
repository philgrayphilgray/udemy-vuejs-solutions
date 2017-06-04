<template lang="pug">
div
  .row
    .col-xs-12.col-md-6.mb-3(v-for='stock in $store.state.stocks')
      .card
        .card-title.alert-success
          .card-block
            h4.float-left {{ stock.name }}
            span &nbsp;(Price: {{ stock.price }})
        .card-block
          .card-content
            .row
              .col-xs-12.col-md-6
                input.form-control(type='number', placeholder='Quantity')
              .col-xs-12.col-md-6
                button.btn.btn-success.float-right(@click='buy({name: stock.name, price: stock.price})') Buy
</template>

<script>
/** to do

@click method with vuex
check if stock exists in myStocks
(later check if there's enough money)
if not, push stock object to myStocks with quantity specified by input
if it exists,
update the myStock stock.quantity += the value specified by the input
recalculate currentFunds
currentFunds -= stock.quantity * stock.price

**/
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions([
      'buy'
    ])
  }
}
</script>

<style lang="scss">

</style>
