<template lang="pug">
.col-sm-6
  .card
    .card-content.quote
      slot
</template>

<script>
export default {
}
</script>

<style lang="scss">
.card{
  margin: .5em auto;
}
.card-content{
  font-family: cursive;
  font-size: 24px;
  color: #6e6e6e;
  padding: .5em;
}
.quote{
  cursor: pointer;
  &:hover{
    background-color: #ffefef;
  }
}
</style>
