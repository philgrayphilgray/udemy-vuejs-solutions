<template lang="pug">
div
  h3 User Details
  p User loaded has ID: {{ $route.params.id }}
  router-link.btn.btn-primary(tag='button', :to='link')
    i.fa.fa-pencil-square-o
    |  Edit User
</template>

<script>
export default {
  data(){
    return{
      link: {
        name: "userEdit",
        params: {
          id: this.$route.params.id }
          // query: {
          //   locale: "en",
          //   q: 100 },
          // hash: '#data'
        }
    }
  },
  beforeRouteEnter(to, from, next){
    if (true){
    next();
    }
    else {
      next(false)
    }
  }
}
</script>

<style lang="css">
</style>
