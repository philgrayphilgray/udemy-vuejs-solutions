<template lang="pug">
.container
  .row
    .col-sm-12
      h1 Filters & Mixins
      .card
        .card-block
          .card-title
            h2 1. Reverse that shit with a local filter
            //- Local filter reverses text -//
          .card-text
            label(for='userInput') User Input:&nbsp;
            input#userInput(type='text', v-model='userInput')
            p Reversed: {{ userInput | reverseText }}
      .card
        .card-block
          .card-title
            h2 2. Count and append the length of a string with a global filter
          .card-text
            label(for='userInput2') Text:&nbsp;
            input#userInput2(type='text', v-model='userInput2')
            p Char count: {{ userInput2 | append-char-count }}
      .card
        .card-block
          .card-title
            h2 3. Reverse and append char count with computed properties
          .card-text
            label(for='userInput3') Text:&nbsp;
            input#userInput3(type='text', v-model='userInput3')
            p Reversed: {{ reverseStr }}
            p Char count: {{ appendChar }}
      .card
        .card-block
          .card-title
            h2 4. append char count with mixin
          .card-text
            label(for='userInput4') Text:&nbsp;
            input#userInput4(type='text', v-model='userInput4')
            p Char count: {{ appendCharMx }}
</template>

<script>
import { appendCharMixin } from './appendChar';
export default {
  mixins: [appendCharMixin],
  data(){
    return{
      userInput: '',
      userInput2: '',
      userInput3: ''
    }
  },
  filters: {
    reverseText(value){
      return value.split('').reverse().join('');
    }
  },
  computed: {
    reverseStr(){
      return this.userInput3.split('').reverse().join('');
    },
    appendChar(){
      let charCount = this.userInput3.length;
      if(charCount > 0){
        return `${this.userInput3} (${charCount})`;
      }
    }
  }
}
</script>

<style lang="scss">

</style>
