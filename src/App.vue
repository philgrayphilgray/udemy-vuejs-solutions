<template lang="pug">
.container
  .row
    .col-sm-12
      h1 Routing
      hr
      app-header
      br
      transition(name='slide', mode='out-in')
        router-view
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss">
.btn{
  cursor: pointer;
}

.slide-leave-active{
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}
.slide-leave{
  opacity: 1;
  transform: translateX(0);
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
from{
  transform: translateY(0);
}
to{
  transform: translateY(-30px);
}
}
@keyframes slide-in {
from{
  transform: translateY(-30px);
}
to{
  transform: translateY(0);
}
}
</style>
