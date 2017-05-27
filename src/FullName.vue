<template lang="pug">
div
  .col-sm-12
    .form-group
      label(for='fname') First Name
      input#fname.form-control(:value='firstName', @input='nameChanged(true, $event)')
  .col-sm-12
    .form-group
      label(for='lname') Last Name
      input#lname.form-control(:value='lastName', @input='nameChanged(false, $event)')
</template>

<script>
export default {
  props: ['value'],
  methods: {
    nameChanged(isFirst, event){
      let name = '';
      if(isFirst){
        name = event.target.value + ' ' + this.lastName;
      }
      else {
        name = this.firstName + ' ' + event.target.value;
      }
      this.value = name;
      this.$emit('input', this.value);
    }
  },
  computed: {
    firstName(){
      return this.value.split(' ')[0];
    },
    lastName(){
      return this.value.split(' ')[1];
    }
  }
}
</script>

<style lang="css">
</style>
