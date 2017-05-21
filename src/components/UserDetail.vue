<template lang="pug">
.component.card.alert-warning
  h3 View the user details here
  p Details
  p User Name: {{ switchName() }}
  p User Age: {{ userAge }}
  button(@click='resetName') Reset
  button(@click='resetFn()') Reset
</template>

<script>
import { eventBus } from '../main';
export default {
  props: {
    name: {
      type: String,
      default: 'your name'
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.name.split('').reverse().join('');
    },
    resetName(){
      this.name = 'Phil Gray';
      this.$emit('nameWasReset', this.name);
    }
  },
  created(){
    eventBus.$on('ageWasEdited', (age)=> {
      this.userAge = age;
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
