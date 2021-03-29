<template lang="html">
  <section class="app-fivepound">
    <div class="flex flex-wrap cap-max-w px-3">
      <div class="w-full lg:w-5/12 mb-8 lg:mb-0">
        <h2>Enquire Now</h2>
      </div>
      <div class="w-full lg:w-7/12">
        <h4>Whether you’re a team of 50 or a first-time founder, there’s space for you at Design District. Register your interest to become a tenant. Tell us about your requirements, and we’ll be in touch</h4>
        <callToAction :callToAction="{fields:{path:'/enquire',label:'Get in touch &rarr;'}}" theme="black"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
section {
  @apply px-0 py-12;
  @apply bg-orange;

  @media (min-width: 1024px) {
    // @apply px-4;
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
