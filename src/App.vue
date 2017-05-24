<template lang="pug">
.container
  .row
    .col-sm-12
      br
      button.btn.btn-primary(@click='selectedComponent="appBlue"') Load Blue template
      button.btn.btn-success(@click='selectedComponent="appGreen"') Load Green template
      button.btn.btn-danger(@click='selectedComponent="appRed"') Load Red Template
      hr
      component(:is='selectedComponent')
        h2 {{ selectedComponent }}
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';
export default {
  data: function(){
      return{
            selectedComponent: ''
      }
    },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
}
</script>

<style lang="scss">

</style>
