<template lang="pug">
.container
  h1 Custom Directives
  .card
    .card-block
      .card-title
        h2 Highlight directive with bind hook
      .card-text
        p(v-highlight.delayed='"red"') test
</template>

<script>
export default {
  data: function(){
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
