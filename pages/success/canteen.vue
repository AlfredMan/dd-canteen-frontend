<template lang="html">
  <div class=""
  :class="{
    'guideline-canteen':true
    }"
  >
    <div class="cap-max-w px-3 pt-32 pb-32 lg:py-64">
      <div class="w-full lg:w-7/12">
        <h2>Thank you for your&nbsp;interest!</h2>
      </div>
      <div class="w-full">
        <p class="text-xl guideline-canteen">
          We'll be in touch soon. Meanwhile, follow our <a href="https://www.instagram.com/designdistrictcanteen/" target="_blank" rel="noreferrer">Instagram</a> for more news and updates.</p>
      </div>
    </div>
  </div>
</template>

<script>
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
  data () {
    return {
      source: 'canteen',
      log: []
    }
  },
  mounted () {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
p {
  max-width: 100%
}
</style>
