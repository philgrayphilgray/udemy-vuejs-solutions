<template lang="pug">
.container
  .row
    .col-sm-12
      h1 {{ title }}
      button.btn.btn-primary(v-myon:click='clicked') Click Me
      hr
      div(style='width:100px; height:100px; background-color: lightgreen', v-myon:mouseenter='mouseEnter', v-myon:mouseleave='mouseLeave')
        h2.boxText {{ coords }}
</template>

<script>
export default {
  data: function(){
    return {
       title: 'Directives Exercise',
       coords: '?'
    }
  },
  directives: {
    'myon': {
      bind(el, binding){
        // el.onclick = function(){
        //   binding.value();
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked(){
      this.title = 'Changed with a Custom Directive'
    },
    mouseEnter(){
      this.coords = event.clientY;
    },
    mouseLeave(){
      this.coords = event.clientY;
    }
  }
}
</script>

<style lang="scss">
.boxText{
  text-align: center;
  transform: translateY(100%);
}
</style>
