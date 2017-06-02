<template lang="pug">
div
  p Counter is {{ doubleCounter }}
  p Number of clicks: {{ stringCounter }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:
{    ...mapGetters([
      'doubleCounter',
      'stringCounter'
    ])}

}
</script>

<style lang="css">
</style>
