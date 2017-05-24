<template lang="pug">
div.card
  .card-title
    slot(name='title')
    span(name='subtitle') The Subtitle
  .card-content
    slot
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card{
  text-align: center;
  padding: 1em;
}

</style>
