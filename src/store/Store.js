import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentFunds: 10000,
    stocks: [
      {name: 'BMW', price: 110},
      {name: 'Google', price: 200},
      {name: 'Apple', price: 250},
      {name: 'Twitter', price: 8}
    ],
    myStocks: [
            {name: 'BMW', price: 110, quantity: 3}
    ]
  }
});
