<template lang="pug">
div.bg-blue
  .row
    .col-xs-12.col-md-12
      .component.text-center
        h1 The User Component
        p {{ name }}
        button.btn.btn-primary(@click='changeName') Change Name
  hr
  .row
    .col-xs-12.col-sm-6
      app-user-detail(:name='name', @nameWasReset='name = $event', :resetFn='resetName', :userAge='age')
    .col-xs-12.col-sm-6
      app-user-edit(:userAge='age', @ageWasEdited='age = $event')
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';
export default {
  data: function(){
    return {
      name: 'Phil Gray',
      age: 30
    };
  },
  methods: {
    changeName(){
      this.name = 'different name';
    },
    resetName(){
      this.name = 'Phil Gray';
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style lang="scss" scoped>
  .bg-blue{
    background: lightblue;
  }
  .card{
    text-align: center;
  }
</style>
