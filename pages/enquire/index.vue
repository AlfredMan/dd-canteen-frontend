<template>
  <div class="">
  </div>
</template>

<script>
export default {

  middleware ({ store, redirect }) {
    return redirect('/contact#register-interest')
  },

  head () {
    return {
      title: 'Enquire',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Ask a question or book a viewing. Comment or collaborate. We want to hear from you.' }
      ]
    }
  },
}
</script>

<style lang="stylus">
</style>
