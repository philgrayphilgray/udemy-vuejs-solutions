<template lang="pug">
div
  h1 New
  button.btn.btn-primary(@click='counter++') increase
  p {{ counter }}

</template>

<script>
export default {
  data: function(){
    return {
      counter: 0
    };
  },
  destroyed(){
    console.log('destroyed');
  },
  deactivated(){
    console.log('deactivated');
  },
  activated(){
    console.log('activated');
  }
}
</script>

<style lang="css">
</style>
