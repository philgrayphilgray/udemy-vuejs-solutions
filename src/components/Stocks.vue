<template lang="pug">
div
  .row
    .col-xs-12.col-md-6.mb-3
      .card
        .card-title.alert-success
          .card-block
            h4.float-left BMW
            span &nbsp;(Price: 110)
        .card-block
          .card-content
            .row
              .col-xs-12.col-md-6
                input.form-control(type='number', placeholder='Quantity')
              .col-xs-12.col-md-6
                button.btn.btn-success.float-right Buy
    .col-xs-12.col-md-6.mb-3
      .card
        .card-title.alert-success
          .card-block
            h4.float-left Google
            span &nbsp;(Price: 200)
        .card-block
          .card-content
            .row
              .col-xs-12.col-md-6
                input.form-control(type='number', placeholder='Quantity')
              .col-xs-12.col-md-6
                button.btn.btn-success.float-right Buy
  .row
    .col-xs-12.col-md-6.mb-3
      .card
        .card-title.alert-success
          .card-block
            h4.float-left Apple
            span &nbsp;(Price: 250)
        .card-block
          .card-content
            .row
              .col-xs-12.col-md-6
                input.form-control(type='number', placeholder='Quantity')
              .col-xs-12.col-md-6
                button.btn.btn-success.float-right Buy
    .col-xs-12.col-md-6.mb-3
      .card
        .card-title.alert-success
          .card-block
            h4.float-left Twitter
            span &nbsp;(Price: 8)
        .card-block
          .card-content
            .row
              .col-xs-12.col-md-6
                input.form-control(type='number', placeholder='Quantity')
              .col-xs-12.col-md-6
                button.btn.btn-success.float-right Buy

</template>

<script>
export default {
}
</script>

<style lang="scss">

</style>
