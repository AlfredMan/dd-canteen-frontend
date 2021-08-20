<template lang="html">
  <section class="app-newsletter-canteen guideline-canteen">
    <span class="anchor" id="newsletter"></span>
    <div class="flex flex-wrap cap-max-w px-3 items-baseline">
      <div class="w-full lg:w-5/12">
        <h2>Newsletter</h2>
      </div>

      <div class="w-full lg:w-7/12">
        <h4 v-if="!signupSuccess">Offers, events and tasty treats — sign-up for all the latest from Canteen.</h4>
        <!-- <NewsletterCanteenMailchimp v-if="$route.query.form&&$route.query.form=='canteen'" class="NewsletterFormCanteen" @success="onSuccess" /> -->
        <!-- <NewsletterCanteenFirebase v-if="$route.query.form&&$route.query.form=='canteen'" class="NewsletterFormCanteen" @success="onSuccess" />
        <NewsletterCanteen v-else class="NewsletterFormCanteen" /> -->
        <!-- <NewsletterCanteenMailchimp v-if="$route.query.form&&$route.query.form=='canteen'" @success="onSuccess"/> -->
        <!-- <NewsletterCanteenFirebase v-if="$route.query.form&&$route.query.form=='canteen'" @success="onSuccess"/> -->
        <!-- <NewsletterCanteen v-else />       -->
        <NewsletterCanteenFirebase  class="NewsletterFormCanteen" @success="onSuccess"/>
      </div>
    </div>
  </section>
</template>

<script>
// import NewsletterCanteenMailchimp from '../components/forms/NewsletterCanteenMailchimp'
import NewsletterCanteenFirebase from '../components/forms/NewsletterCanteenFirebase'
import NewsletterCanteen from '../components/forms/NewsletterCanteen'
export default {
  components: {
    NewsletterCanteen,
    // NewsletterCanteenMailchimp,
    NewsletterCanteenFirebase
  },

  data () {
    return {
      signupSuccess: false
      // userHasSignedUp: false
    }
  },

  methods: {
    onSuccess () {
      this.signupSuccess = true
    }
  }
}

</script>

<style lang="scss" scoped>
section {
  @apply px-0 py-8;
  // @apply bg-green;
  @apply overflow-hidden;
  background: #C7F7C7;

  @media (min-width: 1024px) {

  }

  h2 {
    @apply max-w-2xl;
  }
  h4 {
    @apply max-w-3xl;
  }

  .NewsletterFormCanteen {
    @apply mt-16
  }
}
</style>
