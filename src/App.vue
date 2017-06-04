<template lang="pug">
.container
  app-header
  home
  hr
  app-stocks
  hr
  app-portfolio
</template>

<script>
import Home from './Home.vue';
import Header from './components/Header.vue';
import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stocks.vue';
export default {
components: {
  Home,
  appHeader: Header,
  appPortfolio: Portfolio,
  appStocks: Stocks
}
}
</script>

<style lang="scss">

</style>
