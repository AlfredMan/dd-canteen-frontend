<template>
  <div class="helper-typography">

    <div class="container">
      <h1>{{h1}}</h1>
      <h2>{{h2}}</h2>
      <h3>{{h3}}</h3>
      <h4>{{h4}}</h4>
      <h5>{{h5}}</h5>
      <h6>{{h6}}</h6>
      <p>{{p}}</p>
    </div>

    <hr>
    <div class="bg-light">
      <div class="container mt-10">
        <enquire-form></enquire-form>
      </div>
    </div>

    <hr>
    <div class="bg-light">
      <div class="container mt-10">
        <newsletter-form></newsletter-form>
      </div>
    </div>

  </div>
</template>

<script>
import EnquireForm from '../components/forms/Enquire.vue'
import NewsletterForm from '../components/forms/Newsletter.vue'

export default {
  name: 'helper-typography',
  components: {
    EnquireForm,
    NewsletterForm
  },
  data () {
    return {
      h1: 'Join Design District',
      h2: 'Keep London Creative',
      h3: 'Our community is made up of  members and people from creative industries who work together in spaces that are designed to inspire.',
      h4: 'A new district dedicated to creativity, bringing together 1,800 creatives from all industries. Affordable rents, flexible spaces, a place for ideas to breathe and grow.',
      h5: 'Fill in your details below to tell us what type of space you are after and the commercial opportunities at the Design District.',
      h6: 'Thanks for signing up to Design District. Based on your sign up, we would love to keep you posted with product news and tips for getting the most of InVision. You can opt out at any time. See our Privacy Policy for more information.',
      p: 'Ground floor open workshops provide a glimpse of creative processes. Through picture windows see making spill out onto working courtyards. Precision hand-craft. The noise and dirt of heavy machinery. Works in progress. A rare insight into artists’ lives. An exhilarating, glorious mess.'
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus">
// .helper-typography
</style>
