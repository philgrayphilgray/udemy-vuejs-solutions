<template lang="pug">
div
  p(v-if='!server') Please select a server
  p(v-else) Server #{'#'}{{ server.id }} selected, Status: {{ server.status }}
  hr
  button.btn(@click='resetStatus') Reset
</template>

<script>
import { serverBus } from '../main';
export default {
  data: function(){
    return {
      server: null
    }
  },
  methods: {
    resetStatus(){
      this.server.status = 'Normal';
    }
  },
  created(){
    serverBus.$on('serverSelected', (server) => {
      this.server = server
    });
  }
}
</script>

<style lang="scss" scoped>
div {
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.2);
  padding: 1em;
}
</style>
