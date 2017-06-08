<template lang="pug">
nav.navbar.navbar-toggleable-md.navbar-light.bg-faded
  button.navbar-toggler.navbar-toggler-right(type='button', data-toggle='collapse', data-target='#navbarNavDropdown', aria-controls='navbarNavDropdown', aria-expanded='false', aria-label='Toggle navigation')
    span.navbar-toggler-icon
  router-link.navbar-brand(to='/', active-class='active', exact) Stock Trader
  .collapse.navbar-collapse#navbarNavDropdown
    ul.navbar-nav
      router-link.nav-item(to='portfolio', tag='li', active-class='active')
        a.nav-link Portfolio
      router-link.nav-item(to='stocks', tag='li', active-class='active')
        a.nav-link Stocks
    ul.navbar-nav.ml-auto
      li.nav-item
        button.btn.btn-danger(@click='endDay') End day
      li.nav-item.dropdown(href='#', :class='{show: isDropdownOpen}', @click='isDropdownOpen = !isDropdownOpen')
        a.nav-link.dropdown-toggle#navbarDropdownMenuLink(href='#', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false') Save & Load
        .dropdown-menu(aria-labelledby='navbarDropdownMenuLink')
          a.dropdown-item(@click='saveData') Save Data
          a.dropdown-item(@click='loadData') Load Data
      li.nav-item
        span.navbar-text Funds: {{ funds | currency }}
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return{
      isDropdownOpen: false
    }
  },

  computed: {
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(
{      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'}
    ),
    endDay(){
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loadData(){
      this.fetchData();
    }
  }
}
</script>

<style lang="css">
</style>
