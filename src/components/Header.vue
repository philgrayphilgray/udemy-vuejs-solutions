<template lang="pug">
ul.nav.nav-pills.nav-fill
  li.nav-item(role='presentation')
    router-link.nav-link(to='/', active-class='active', exact)
      i.fa.fa-home
      |  Home
  li.nav-item(role='presentation')
    router-link.nav-link(to='/user', active-class='active')
      i.fa.fa-user
      |  User
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
