<template lang="pug">
.container
  h2 Signup Now
  hr
  form(v-if='!submitted')
    .row
      app-full-name(v-model='userData.fullName')
    .row
      .col-sm-12
        .form-group
          label(for='email') Email
          input#email.form-control(v-model='userData.email')
      .col-sm-12
        .form-group
          label(for='password') Password
          input#password.form-control(type='password', v-model='userData.password')
      .col-sm-12
        label(for='storeInDb') Store in DB?
        .form-check#storeInDb
          label.form-check-label(for='yes')
            input#yes(type='radio', v-model='storeInDb', value='true')
          |  Yes
          label.form-check-label(for='no')
            input#no(type='radio', v-model='storeInDb', value='false')
          |  No
    hr
    .row
      .col-sm-12
        button.btn.btn-primary(@click.prevent='submitted="true"') Submit
  hr
  .row(v-if='submitted')
    .col-sm-12
      .card
        .card-block
          .card-title
            h4 Your Data
          .card-text
            p Full Name: {{ userData.fullName }}
            p Email: {{ userData.email }}
            p Password: {{ userData.password }}
            p Store in Database?: {{ storeInDb }}
//- exercise 1
//- create a signup form where you retrieve the following information
//- full name (first name + last name)
//- email
//- password
// store data? yes/no
//- exercise 2
//- only diplay the form if it has been submitted
//- display the data summary once the form has been submitted
//- exercise 3
//- edit the example from above and create a custom 'full name' control
//- which still holds the first name and last name input field
</template>

<script>
import FullName from './FullName.vue';
export default {
  data(){
    return{
      userData: {
        fullName: '',
        email: '',
        password: ''
      },
      storeInDb: false,
      submitted: false
    }
  },
  components: {
    appFullName: FullName
  }
}
</script>

<style lang="scss">

</style>
