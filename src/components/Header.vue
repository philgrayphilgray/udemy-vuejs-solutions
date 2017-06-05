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
        button.btn.btn-danger(@click='updateStocks') End day
      li.nav-item.dropdown
        a.nav-link.dropdown-toggle#navbarDropdownMenuLink(href='#', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false') Save & Load
        .dropdown-menu(aria-labelledby='navbarDropdownMenuLink')
          a.dropdown-item(@click='saveData') Save Data
          a.dropdown-item(@click='loadData') Load Data
      li.nav-item
        span.navbar-text Funds: {{ getCurrentFunds | currency('$', 0) }}
</template>

<script>
/** to do

@click end day, generate random +/- numbers to add to the price of each stock

(later, update object with realtime stock values)

@click save to send data to firebase with vue-resource

@click load to get data from firebase with vue-resource

**/
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'getCurrentFunds'
    ])
  },
  methods: {
    ...mapActions([
      'updateStocks'
    ]),
    saveData(){
            this.$http.put('https://stocktrader-proj.firebaseio.com/data.json', this.$store.state);
    },
    loadData(){
      this.$http.get('https://stocktrader-proj.firebaseio.com/data.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.$store.replaceState(data);
      });
    }
  }
}
</script>

<style lang="css">
</style>
