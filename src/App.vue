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
          input#password.form-control(type='password', v-model.lazy='userData.password')
        .form-group
          label(for='age') Age
          input#age.form-control(type='number', v-model.number='userData.age')
    .row
      .col-sm-12.form-group
        label(for='message') Message
        textarea#message.form-control(rows='5', v-model='message')
    .row
      .col-sm-12
        .form-group
          .form-check
            label.form-check-label(for='sendmail')
              input#sendmail.form-check-input(type='checkbox', value='SendMail', v-model='sendMail')
            |  Send Mail
            label.form-check-label(for='sendInfomail')
              input#sendInfomail.form-check-input(type='checkbox', value='SendInfoMail', v-model='sendMail')
            |  Send Infomail
    .row
      .col-sm-12.form-group
        .form-check
          label.form-check-label(for='male')
            input#male(type='radio', value='Male', v-model='userData.gender')
          |  Male
          label.form-check-label(for='female')
            input#female(type='radio', value='Female', v-model='userData.gender')
          |  Female
          label.form-check-label(for='other')
            input#female(type='radio', value='Other', v-model='userData.gender')
          |  Other
    .row
      .col-sm-12.form-group
        label(for='priority') Priority
        select#priority.form-control(v-model='selectedPriority')
          option(v-for='priority in priorities') {{ priority }}
    .row
      .col-sm-12
        app-switch(v-model='dataSwitch')
    hr
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
            p(style='white-space: pre-wrap;') Message:
              br
              | {{ message }}
            p
              strong
                | Send Mail?
            ul
              li(v-for='item in sendMail') {{ item }}
            p Gender: {{ userData.gender }}
            p Priority: {{ selectedPriority }}
            p Switched {{ dataSwitch }}
</template>

<script>
import Switch from './Switch.vue';
export default {
  data(){
    return{
      userData: {
        email: '',
        password: '',
        age: '',
        gender: 'Other'
      },
      message: '',
      sendMail: [],
      priorities: ['High', 'Medium', 'Low'],
      selectedPriority: 'High',
      dataSwitch: true
    }
  },
  components: {
    appSwitch: Switch
  }
}
</script>

<style lang="scss">

</style>
