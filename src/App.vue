<template lang="pug">
.container
  .row
    .col-sm-12
      h1 Http
      div.form-group
        label Username
        input.form-control(type='text', v-model='user.username')
      div.form-group
        label Email
        input.form-control(type='email', v-model='user.email')
      button.btn.btn-primary(@click='submit') Submit
      hr
      button.btn.btn-primary(@click='fetchData') Get Data
      br
      br
      ul.list-group
        li.list-group-item(v-for='u in users') {{ u.username}} - {{ u.email }}
</template>

<script>
export default {
  data(){
    return {
      user: {
        username: '',
        email: ''
      },
      users: []
    }
  },
  methods: {
    submit(){
      console.log(this.user);
      this.$http.post('', this.user)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
    },
    fetchData(){
      this.$http.get('')
      .then(response => {
        return response.json();
      }, error => {
        console.log(error);
      })
      .then(data => {
        const resultArray= [];
        for( let key in data){
          resultArray.push(data[key]);
        }
        this.users = resultArray;
      });
  }
}
}
</script>

<style lang="scss">

</style>
