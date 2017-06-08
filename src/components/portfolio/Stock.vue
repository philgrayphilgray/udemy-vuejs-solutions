<template lang="pug">
.col-sm-12.col-md-4
  .card.mb-3
    .card-title.alert-info
      h3 {{ stock.name }}
        small (Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})
    .card-block
      .form-group(:class='{"has-danger": insufficientQuantity}')
        input.form-control(type='number', min='1', v-model='quantity')
        .form-control-feedback(v-if='insufficientQuantity') You do not own enough shares.
        button.btn.btn-danger(@click='sellStock', :disabled='insufficientQuantity || quantity <= 0') Sell

</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['stock'],
  data(){
    return{
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity(){
      return Number(this.quantity) > Number(this.stock.quantity);
    }
  },
  methods: {
    ...mapActions(
  {  placeSellOrder: 'sellStock'}
  ),
    sellStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Number(this.quantity)
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
}
</script>

<style lang="scss">


</style>
