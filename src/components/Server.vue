<template lang="pug">
li.list-group-item(@click='serverSelected', style='cursor:pointer', :class='{"alert-success": server.status == "Normal", "alert-warning": server.status == "Unknown", "alert-danger": server.status == "Critical"}') Server #{'#'}{{ server.id }}
</template>

<script>
//
import { serverBus } from '../main';
export default {
  props: ['server'],
  methods: {
    serverSelected(){
      serverBus.$emit('serverSelected', this.server);
    }
  }
}
</script>

<style lang="css">
</style>
