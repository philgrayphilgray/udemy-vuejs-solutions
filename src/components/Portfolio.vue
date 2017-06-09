<template lang="pug">
div
  .row
    .col-xs-12.col-md-6.mb-3(v-for='(myStock, i) in getMyStocks')
      .card
        .card-title.alert-info
          .card-block
            h4.float-left {{ myStock.name }}
            span &nbsp;(Price: {{ myStock.price }})
            .badge.badge-info.float-right Current Quantity: {{ myStock.quantity }}
            br
            .badge.badge-success.float-right Value: {{ myStock.quantity * myStock.price | currency}}
            br
        .card-block
          .card-content
            .row
              .col-xs-12.col-md-6
                input.form-control(type='number', placeholder='Quantity', v-model='quantities[i]', min='0')
              .col-xs-12.col-md-6
                button.btn.btn-danger.float-right(@click='sell({name: myStock.name, price: myStock.price, quantity: quantities[i]})', :disabled='quantities[i] > myStock.quantity ? true : false') Sell
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  data(){
    return{
      quantities: { 0: 0, 1: 0, 2: 0, 3: 0}
    }
  },
  computed: {
    ...mapGetters([
      'getMyStocks'
    ])
  },
  methods: {
    ...mapActions([
      'sell'
    ])
  }
}
</script>

<style lang="css">
</style>
