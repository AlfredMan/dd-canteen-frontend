<template lang="html">
  <section class="app-newsletter ">
    <span class="anchor" id="newsletter"></span>
    <div class="flex flex-wrap cap-max-w px-3">
      <div class="w-full xl:w-5/12">
        <h2>Newsletter</h2>
      </div>

      <div class="w-full xl:w-7/12">
        <h4>Creativity never stands still — keep up-to-date with what’s going on in our ever-evolving community.</h4>
        <h4>Sign-up for the latest Design District news, developments and events.</h4>
        <NewsletterForm class="NewsletterForm" />
      </div>
    </div>
  </section>
</template>

<script>
import NewsletterForm from '../components/forms/Newsletter'
export default {
  components: {
    NewsletterForm
  },
}
</script>

<style lang="scss" scoped>
section {
  @apply px-6 py-8;
  @apply bg-green;

  @media (min-width: 1024px) {

  }

  h2 {
    @apply max-w-2xl;
  }
  h4 {
    @apply max-w-3xl;
  }

  .NewsletterForm {
    @apply mt-16
  }
}
</style>
