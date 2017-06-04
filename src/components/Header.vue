<template lang="pug">
nav.navbar.navbar-toggleable-md.navbar-light.bg-faded
  button.navbar-toggler.navbar-toggler-right(type='button', data-toggle='collapse', data-target='#navbarNavDropdown', aria-controls='navbarNavDropdown', aria-expanded='false', aria-label='Toggle navigation')
    span.navbar-toggler-icon
  a.navbar-brand(href='#') Stock Trader
  .collapse.navbar-collapse#navbarNavDropdown
    ul.navbar-nav
      li.nav-item.active
        a.nav-link(href='#') Portfolio
      li.nav-item
        a.nav-link(href='#') Stocks
    ul.navbar-nav.ml-auto
      li.nav-item
        a.nav-link(href='#') End day
      li.nav-item.dropdown
        a.nav-link.dropdown-toggle#navbarDropdownMenuLink(href='#', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false') Save & Load
        .dropdown-menu(aria-labelledby='navbarDropdownMenuLink')
          a.dropdown-item(href='#') Save Data
          a.dropdown-item(href='#') Load Data
      li.nav-item
        span.navbar-text Funds: $10,000
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
