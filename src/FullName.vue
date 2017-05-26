<template lang="pug">
div
  .col-sm-12
    .form-group
      label(for='fname') First Name
      input#fname.form-control(v-model='value')
  .col-sm-12
    .form-group
      label(for='lname') Last Name
      input#lname.form-control(v-model='value')
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="css">
</style>
