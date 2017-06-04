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
  },
  getters: {},
  mutations: {
    buy: (state, payload) => {
    function findStock(stock){
      return stock.name == payload.name;
    }
      if(state.myStocks.find(findStock)){
        state.myStocks.find(findStock).quantity ++;
      }
      else{
        let newStock = {
          name: payload.name,
          price: payload.price,
          quantity: 1
        };
        state.myStocks.push(newStock);
      }

    },
    sell: (state, payload) => {
      function findStock(stock){
        return stock.name == payload.name;
      }
      if(state.myStocks.find(findStock).quantity > 1){
        state.myStocks.find(findStock).quantity--;
      }
      else{
        let currentStock = state.myStocks.indexOf(state.myStocks.find(findStock));
        state.myStocks.splice(currentStock, 1);
      }
    },
    updateFunds: (state, payload) => {
      console.log('funds updated');
    }
  },
  actions: {
    buy: ({ commit }, payload) => {
      commit('buy', payload);
    },
    sell: ({ commit }, payload) => {
      commit('sell', payload);
    }
  }
});
