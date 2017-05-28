<template lang="pug">
.container
  .row
    .col-sm-12
      h1 Animations
      hr
      .form-group
        select.form-control(v-model='alertAnimation')
          option(value='fade') Fade
          option(value='slide') Slide
      br
      button.btn.btn-primary(@click='show = !show') Show Alert
      hr
      transition(:name='alertAnimation', appear)
        .alert.alert-info(v-if='show') This is some Info
      transition(:name='alertAnimation', appear)
        .alert.alert-info(v-if='show') This is some Info
      transition(appear, enter-active-class='animated bounce', leave-active-class='animated shake')
        .alert.alert-info(v-if='show') This is some Info
</template>

<script>
export default {
  data(){
    return {
      show: true,
      alertAnimation: 'fade'
    }
  }
}
</script>

<style lang="scss">
.fade-enter{
  opacity: 0;

}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-leave{

}
.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter{
opacity: 0;
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
.slide-leave{}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
@keyframes slide-in{
  from{
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out{
  from{
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
