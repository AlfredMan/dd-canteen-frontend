<template lang="html">
  <section class="app-newsletter">
    <div class="flex flex-wrap cap-max-w px-3">
      <div class="w-full lg:w-5/12 mb-8 lg:mb-0">
        <!-- <h2>Contact our sales team</h2> -->
        <h2>Contact</h2>
      </div>

      <div class="w-full lg:w-7/12">
        <!-- <h4>Need help finding a work space for you and your team?</h4> -->
        <!-- <h4>Call on <a href="#" class="underline">+44 (0)20 3981 2426</a> or email us at <a href="#" class="underline">sales@designdistrict.co.uk</a></h4> -->
        <h4>Find a space and leasing model to suit your needs, register your interest, or arrange a tour. Alex and the team are on-site to show you around.</h4>
        <h4><email :address="'sales@designdistrict.co.uk'"></email><br><a href="#" class="underline">+44 (0)20 3981 2426</a></h4>
        <callToAction :callToAction="{fields:{path:'/enquire',label:'More ways to connect &rarr;'}}" theme="black"/>
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
  @apply px-0 py-12;
  @apply bg-green;

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
