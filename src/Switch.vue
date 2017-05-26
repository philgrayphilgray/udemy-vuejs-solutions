<template lang="pug">
div
  div#on(@click='switched(true)', :class='{active: value}') On
  div#off(@click='switched(false)', :class='{active: !value}') Off
</template>

<script>
export default {
  props: ['value'],
  methods:{
    switched(isOn){
      this.$emit('input', isOn);
    }
  }
}
</script>

<style lang="scss" scoped>
#on, #off{
  width: 40px;
  height: 20px;
  background: lightgray;
  padding: .5em;
  display: inline-block;
  margin: 10px 2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover, #on.active{
  background-color: lightgreen;
}
#off:hover, #off.active{
  background-color: lightcoral;
}
</style>
