<template lang="pug">
.row
  app-stock(v-for='stock in stocks' :stock='stock')

</template>

<script>
import Stock from './Stock.vue';

export default {
  components: {
    appStock: Stock
},
computed: {
  stocks(){
    return this.$store.getters.stocks;
  }
}
}
</script>

<style lang="scss">
.card{
  .btn{
    display: block;
margin: 1em auto;
width: 100%;
  }
  .card-title{
    padding: 1em;
    small{
      float: right;
      font-size: .5em;
    }

  } //card-title
}
</style>
