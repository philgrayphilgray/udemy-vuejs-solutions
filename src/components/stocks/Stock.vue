<template lang="pug">
.col-sm-12.col-md-4
  .card.mb-3
    .card-title.alert-success
      h3 {{ stock.name }}
        small (Price: {{ stock.price  | currency }})
    .card-block
      .form-group(:class='{"has-danger": insufficientFunds}')
        input.form-control(type='number', min='1', v-model='quantity', :class='{ "form-control-danger": insufficientFunds}')
        .form-control-feedback(v-if='insufficientFunds') Insufficient Funds.
        button.btn.btn-success(@click='buyStock', :disabled='insufficientFunds || quantity <= 0 || !Number.isInteger(Number(quantity))', :class='{ "btn-danger": insufficientFunds}') Buy

</template>

<script>
export default {
  props: ['stock'],
  data(){
    return{
      quantity: 0
    }
  },
  computed: {
    funds(){
      return this.$store.getters.funds;
        },
    insufficientFunds(){
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Number(this.quantity)
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  }
}
</script>

<style lang="scss">


</style>
