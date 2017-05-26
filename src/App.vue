<template lang="pug">
.container
  form
    .row
      .col-sm-12
        h1 File a Complaint
        hr
        .form-group
          label(for='email') Email
          input#email.form-control(type='text', v-model='userData.email')
        .form-group
          label(for='password') Password
          input#password.form-control(type='password', v-model='userData.password')
        .form-group
          label(for='age') Age
          input#age.form-control(type='number', v-model='userData.age')
    .row
      .col-sm-12.form-group
        label(for='message') Message
        textarea#message.form-control(rows='5', v-model='userData.message')
    .row
      .col-sm-12
        .form-group
          .form-check
            label.form-check-label(for='sendmail')
              input#sendmail.form-check-input(type='checkbox', value='SendMail')
            |  Send Mail
          .form-check
            label.form-check-label(for='sendInfomail')
              input#sendInfomail.form-check-input(type='checkbox', value='SendInfoMail')
            |  Send Infomail
    .row
      .col-sm-12.form-group
        .form-check
          label.form-check-label(for='male')
            input#male(type='radio', value='Male')
          |  Male
        .form-check
          label.form-check-label(for='female')
            input#female(type='radio', value='Female')
          |  Female
    .row
      .col-sm-12.form-group
        label(for='priority') Priority
        select#priority.form-control
          option
    .row
      .col-sm-12
        button.btn.btn-primary Submit
  hr
  .row
    .col-sm-12
      .card
        .card-block
          .card-title
            h4 Your Data
          .card-text
            p Email: {{ userData.email }}
            p Password: {{ userData.password }}
            p Age: {{ userData.age }}
            p Message: {{ userData.message }}
            p
              strong
                | Send Mail?
            ul
              li
            p Gender:
            p Priority:
            p Switched:
</template>

<script>
export default {
  data(){
    return{
      userData: {
        email: '',
        password: '',
        age: '',
        message: ''
      }
    }
  }
}
</script>

<style lang="scss">

</style>
