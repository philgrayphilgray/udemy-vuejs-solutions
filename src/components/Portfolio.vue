<template lang="pug">
div
  .row
    .col-xs-12.col-md-6.mb-3(v-for='myStock in $store.state.myStocks')
      .card
        .card-title.alert-info
          .card-block
            h4.float-left {{ myStock.name }}
            span &nbsp;(Price: {{ myStock.price }})
        .card-block
          .card-content
            .row
              .col-xs-12.col-md-6
                input.form-control(type='number', placeholder='Quantity', v-model='myStock.quantity')
              .col-xs-12.col-md-6
                button.btn.btn-danger.float-right Sell
</template>

<script>
/**
to do's
@click handler for selling
send payload (input value) with vuex

validate input: if input value > quantity, disable input and display message "You only own 3 shares of this stock."

recalculate currentFunds
currentFunds += stock.quantity * stock.price

**/
export default {
}
</script>

<style lang="css">
</style>
