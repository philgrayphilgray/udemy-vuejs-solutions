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
  getters: {
    getAvailableStocks: state =>{
        return state.stocks;
    },
    getMyStocks: state => {
      return state.myStocks;
    },
    getCurrentFunds: state => {
      return state.currentFunds;
    }

  },
  mutations: {
    buy: (state, payload) => {

    function findStock(stock){
      return stock.name == payload.name;
    }
    let currentStock = state.myStocks.find(findStock);
    let cost = payload.price * payload.quantity;
    if(cost){
    state.currentFunds -= Number(cost);

      if(currentStock){
        currentStock.quantity += Number(payload.quantity);
      }
      else{
        let newStock = {
          name: payload.name,
          price: payload.price,
          quantity: Number(payload.quantity)
        };
        state.myStocks.push(newStock);
      }
      }

    },
    sell: (state, payload) => {
      function findStock(stock){
        return stock.name == payload.name;
      }
      let currentStock = state.myStocks.find(findStock);
      if(currentStock.quantity > payload.quantity){
        currentStock.quantity -= Number(payload.quantity);
      }
      else{
        let currentStockIndex = state.myStocks.indexOf(currentStock);
        state.myStocks.splice(currentStockIndex, 1);
      }

      let cost = payload.price * ( payload.quantity > currentStock.quantity ? currentStock.quantity : payload.quantity);
      state.currentFunds += Number(cost);
    },
    updateStocks: (state, payload) => {
      console.log('stocks updated');
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      state.stocks.forEach((stock)=>{
let plusOrMinus = Math.random() < 0.5 ? 1 : -1;
let factor = Math.random();
let delta = getRandomIntInclusive(0, (stock.price * factor)/2);
let newValue = (plusOrMinus * delta) + 2;
stock.price += newValue;
state.myStocks.forEach((myStock)=>{
  if(stock.name == myStock.name){
  myStock.price = stock.price;  
  }
});
      })
    }
  },
  actions: {
    buy: ({ commit }, payload) => {
      commit('buy', payload);
    },
    sell: ({ commit }, payload) => {
      commit('sell', payload);
    },
    updateStocks: ({ commit }, payload) => {
      commit('updateStocks', payload);
    }
  }
});
