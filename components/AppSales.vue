<template lang="html">
  <section class="app-newsletter">
    <div class="flex flex-wrap cap-max-w px-3">
      <div class="w-full xl:w-5/12">
        <h2>Contact our sales team</h2>
      </div>

      <div class="w-full xl:w-7/12">
        <h4>Need help finding a work space for you and your team?</h4>
        <h4>Call on <a href="#" class="underline">+44 (0)20 3981 2426</a> or email us at <a href="#" class="underline">sales@designdistrict.co.uk</a></h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
}
</script>

<style lang="scss" scoped>
section {
  @apply px-8 py-12;
  @apply bg-green;

  @media (min-width: 1024px) {

  }

  h2 {
    @apply max-w-2xl;
    &:last-child {
       @apply mb-0
    }
  }
  h4 {
    @apply max-w-3xl mb-6;
    &:last-child {
       @apply mb-0
    }
  }

  .NewsletterForm {
    @apply mt-16
  }
}
</style>
