<template lang="pug">
div.card
  .card-title
    slot(name='title')
  .card-content
    slot(name='content')
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
