<template lang="pug">
.container
  .row
    .col-sm-12
      h1.text-center The Super Quiz
      hr
  .row
    .col-sm-12
      transition(name='flip', mode='out-in')
        component(:is='mode', @answered='answered($event)', @confirmed='mode = "app-question"')

</template>

<script>
import Question from './Question.vue';
import Answer from './Answer.vue';
export default {
  data(){
    return{
      mode: 'app-question'
    }
  },
  methods: {
    answered(isCorrect){
      if(isCorrect){
        this.mode='app-answer';
      }
      else{
        this.mode='app-question';
        alert('wrong. try again!');
      }
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer
  }
}
</script>

<style lang="scss">
.card-title{
  text-align: center;
}
.flip-enter{

}
.flip-enter-active{
  animation: flip-in 3s ease-out forwards;
}
.flip-leave{

}
.flip-leave-active{
  aniation: flip-out 3s ease-out forwards;
}
@keyframes flip-out{
  from{
    transform: rotateY(0deg);
  }
  to{
    transform: rotateY(90deg);
  }
}
@keyframes flip-in{
  from{
    transform: rotateY(90deg);
  }
  to{
    transform: rotateY(0deg);
  }
}
</style>
