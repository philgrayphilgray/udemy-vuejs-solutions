import Vue from 'vue'
import App from './App.vue'

Vue.filter('append-char-count', function(value){
  let charCount = value.length;
  if(charCount > 0){
    return `${value} (${charCount})`;
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
