import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import { store } from './store/Store';
import Vue2Filters from 'vue2-filters';


Vue.use(VueRouter);
Vue.use(Vue2Filters);
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
