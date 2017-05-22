<template lang="pug">
div
  ul.list-group
    app-server(v-for='server in servers' :server='server')
</template>

<script>
//create an array of server objects, data should be a function here
//pass the id of each server to each component
//when you click a server, load it in the server details, where we have a button to switch the server status which should also be be managed in the data property here
// start by setting up this object
import Server from './Server.vue';
export default {
  data: function(){
    return {
      servers: [
        { id: 1, status: 'Normal'},
        { id: 2, status: 'Critical'},
        { id: 3, status: 'Unknown'},
        { id: 4, status: 'Normal'},
      ]
    }
  },
  components: {
    appServer: Server
  }
}
</script>

<style lang="css">
</style>
