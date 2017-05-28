<template lang="pug">
.container
  h1 Custom Directives
  .card
    .card-block
      .card-title
        h2 Highlight directive with bind hook
      .card-text
        p(v-local-highlight.delayed.blink='{mainColor: "red", secondColor: "green", delay: 500}') test
</template>

<script>
export default {
  data: function(){
    return {

    }
  },
  directives: {
    'local-highlight': {
      bind(el, binding, vnode){
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value;
        let delay = 0;
        if(binding.modifiers['delayed']){
          delay = 3000;
        }
        if(binding.modifiers['blink']){
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if(binding.arg == 'background'){
                el.style.backgroundColor = currentColor;
              }
              else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);

          }, delay);
        }
        else{
          setTimeout(() => {
            if(binding.arg == 'background'){
              el.style.backgroundColor = binding.value.mainColor;
            }
            else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }


      }
    }
  }
}
</script>

<style lang="scss">

</style>
