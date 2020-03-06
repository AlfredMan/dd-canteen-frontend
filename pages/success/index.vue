<template lang="html">
  <div class="">
    <div class="container pb-5  pt-5">
      <div class="row">
        <div class="my-5 py-5" />
      </div>
      <div class="row">
        <div class="col-12 col-md-7">
          <h3>Thank you for your&nbsp;interest!</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12">
          <p>We'll be in touch soon. Meanwhile, follow our <a href="https://www.instagram.com/designdistrictlondon/" target="_blank" rel="noreferrer">Instagram</a> for more news and updates.</p>
        </div>
      </div>
      <div class="row">
        <div class="my-5 py-5" />
      </div>
    </div>
  </div>
</template>

<script>
import EnquireForm from '../../components/forms/Enquire.vue'
import NewsletterForm from '../../components/forms/Newsletter.vue'
import { studios, validStudios } from '~/common/architecture'
export default {
  head () {
    return {
      title: 'Success',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Thank you for your interest! We\'ll be in touch soon.' }
      ]
    }
  },
  components: {
    EnquireForm,
    NewsletterForm
  },
  computed: {
    studios () {
      return studios
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  max-width: 100%
}
</style>
