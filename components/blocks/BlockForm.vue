<template>
  <section class="block-video"
  v-if="block && block.fields"
  >
    <div class="" v-if="form=='shesays'">
      <SheSaysForm class="SheSaysForm" :block="block"/>
    </div>
    <div class="" v-else>
      <NewsletterForm class="NewsletterForm" :block="block"/>
    </div>
  </section>
</template>

<script>
// import _ from 'lodash'
import NewsletterForm from '~/components/forms/Newsletter'
import SheSaysForm from '~/components/forms/SheSays'
export default {
  props: ['block'],

  components: {
    NewsletterForm,
    SheSaysForm
  },

  computed: {
    form () {
      return this.block && this.block.fields.form || ''
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
