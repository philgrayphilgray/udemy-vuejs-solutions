<template lang="pug">
.container
  .row
    .col-sm-12
      button.btn.btn-primary(@click='selectedComponent="appQuote"') Quote
      button.btn.btn-primary(@click='selectedComponent="appAuthor"') Author
      button.btn.btn-primary(@click='selectedComponent="appNew"') New
      p {{ selectedComponent }}
      component(:is='selectedComponent')
        h2 Default content
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';
export default {
  data: function(){
    return{
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style lang="scss">

</style>
