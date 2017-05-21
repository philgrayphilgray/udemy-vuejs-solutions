<template lang="pug">
.component.card.alert-success
  h3 Edit the user details here
  p Options
  p User Age: {{ userAge }}
  button.btn.btn-primary(@click='editAge') Edit Age
</template>

<script>
import { eventBus } from '../main';
export default {
  props: ['userAge'],
  methods: {
    editAge(){
      this.userAge = 50;
      // this.$emit('ageWasEdited', this.userAge)
      // eventBus.$emit('ageWasEdited', this.userAge);
      eventBus.changeAge(this.userAge);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
