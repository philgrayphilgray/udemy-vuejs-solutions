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
      transition(:name='alertAnimation', appear, mode='out-in')
        .alert.alert-info(v-if='show', key='info') This is some Info
        .alert.alert-warning(v-else, key='warning') This is a warning
      hr
      button.btn.btn-primary(@click='load = !load') Load / Remove Element
      br
      br
      transition(@before-enter='beforeEnter', @enter='enter', @after-enter='afterEnter', @enter-cancelled='enterCancelled', @before-leave='beforeLeave', @leave='leave', @after-leave='afterLeave', @leave-cancelled='leaveCancelled', :css='false')
        div(style='width:300px; height: 100px; background-color: lightgreen', v-if='load')
      hr
      button.btn.btn-primary(@click='selectedComponent == "app-success-alert" ? selectedComponent = "app-danger-alert" : selectedComponent = "app-success-alert"') Toggle Components
      br
      br
      transition(name='fade', mode='out-in')
        component(:is='selectedComponent')
      hr
      button.btn.btn-primary(@click='addItem') Add Item
      br
      br
      ul.list-group
        transition-group(name='slide')
          li.list-group-item(v-for='(number, index) in numbers', @click='removeItem(index)', style='cursor:pointer;', :key='number') {{ number }}
</template>

<script>
import DangerAlert from './DangerAlert.vue';
import SuccessAlert from './SuccessAlert.vue';
export default {
  data(){
    return {
      show: false,
      alertAnimation: 'fade',
      elementWidth: 100,
      load: true,
      selectedComponent: 'app-success-alert',
      numbers: [1, 2, 3, 4, 5]
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  },
  methods: {
    addItem(){
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index){
      this.numbers.splice(index, 1);
    },
    beforeEnter(el){
      console.log('beforeEnter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done){
      console.log('enter');
      let round= 1;
      const interval = setInterval(()=>{
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el){
      console.log('after enter');
    },
    enterCancelled(el){
      console.log('enter cancelled');
    },
    beforeLeave(el){
      console.log('before leave');
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done){
      console.log('leave');
      let round= 1;
      const interval = setInterval(()=>{
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el){
      console.log('afterleave');

    },
    leaveCancelled(el){
      console.log('leave cancelled');
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
  position: absolute;
}
.slide-move{
  transition: transform 1s;
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
