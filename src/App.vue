<template lang="pug">
.container
  .row
    .col-xs-12
      header
        h1 Server Status
  hr
  .row
    .col-xs-12.col-sm-6
      app-server-listing
    .col-xs-12.col-sm-6
      app-server-details
  hr
  .row
    .col-xs-12
      footer
        p All servers are managed here
</template>

<script>
import ServerListing from './components/ServerListing.vue'
import ServerDetails from './components/ServerDetails.vue'
export default {
  components: {
    'app-server-listing': ServerListing,
    'app-server-details': ServerDetails
  }
}
</script>

<style lang="scss">

</style>
