<template lang="html">
  <div class="">
    <div class="bg-primary px-0 px-sm-4 py-4 pb-5 py-sm-5">
      <span class="anchor" id="newsletter"></span>      
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h3>Newsletter</h3>
          </div>

          <div class="col-12" />
          <div class="col-12 col-sm-5 col-md-4 d-none d-sm-block">
            <p>The Design District is at the heart of Greenwich Peninsula, a new type of London created specifically for the creative community.</p>
            <p>From autumn 2020, Design District will offer a new permanent home for the creative industries in south east London. With flexible leases and purpose-designed workspaces to help creative businesses thrive.</p>
          </div>
          <div class="col-12 col-sm-1 col-md-1 d-none d-md-block" />
          <div class="col-12 col-sm-5 col-md-4">
            <newsletter-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsletterForm from '../components/forms/Newsletter'
export default {
  components: {
    NewsletterForm
  },
}
</script>

<style lang="css">
</style>
