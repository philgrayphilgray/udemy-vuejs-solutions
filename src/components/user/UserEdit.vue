<template lang="pug">
div
  h3 User {{ $route.params.id }} Edit
  p Locale: {{ $route.query.locale }}
  p Analytics: {{ $route.query.q }}
  hr
  button.btn.btn-primary(@click='confirmed=true') Confirm
  hr
  .card
    .card-block
      .card-content
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.

        p#data Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
export default {
  data(){
    return{
        confirmed: false
    }
  },
  beforeRouteLeave(to, from, next){
    if(this.confirmed){
      next();
    }
    else{
      if(confirm('Are you sure you want to leave?')){
        next();
      } else{
        next(false);
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
