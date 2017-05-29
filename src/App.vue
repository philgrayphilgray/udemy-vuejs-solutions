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
      input.form-control(type='text', v-model='node')
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
      users: [],
      resource: {},
      node: 'data'
    }
  },
  methods: {
    submit(){
      // console.log(this.user);
      // this.$http.post('data.json', this.user)
      //   .then(response => {
      //     console.log(response);
      //   }, error => {
      //     console.log(error);
      //   });
      // this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },
    fetchData(){
      // this.$http.get('data.json')
      // .then(response => {
      //   return response.json();
      // }, error => {
      //   console.log(error);
      // })
      // .then(data => {
      //   const resultArray= [];
      //   for( let key in data){
      //     resultArray.push(data[key]);
      //   }
      //   this.users = resultArray;
      // });
      this.resource.getData({node: this.node})
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray= [];
          for( let key in data){
            resultArray.push(data[key]);
          }
          this.users = resultArray;
      });
  }
},
created(){
  const customActions = {
    saveAlt: {method: 'POST', url: 'alternative.json'},
    getData: {method: 'GET'}
  };
  this.resource = this.$resource('{node}.json', {}, customActions);

}
}
</script>

<style lang="scss">

</style>
