<template lang="pug">
.row
  .col-sm-12.form-group
    label
    textarea.form-control(rows='3', v-model='quote')
  .col-sm-12.form-group
    button.btn.btn-primary(@click.prevent='createNew') Add Quote
</template>

<script>
export default {
  data: function(){
    return {
      quote: ''
    }
  },
  methods: {
    createNew(){
      this.$emit('quoteAdded', this.quote);
      this.quote='';
    }
  }
}
</script>

<style lang="css">
</style>
