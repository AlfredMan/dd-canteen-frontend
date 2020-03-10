<template lang="html">
  <a :href="mailtoAddress">
    {{displayAddress}}
  </a>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      mailtoAddressHolder: '',
      displayAddressHolder: ''
    }
  },
  props: {
    address: {
      type: String,
      default: ''
    }
  },
  computed: {
    mailtoAddress () {
      return `mailto:${this.mailtoAddressHolder}`
    },
    displayAddress () {
      return `${this.displayAddressHolder}`
    }
  },
  mounted () {
    setTimeout(() => {
      this.setEmailAddress()
    }, 500)
  },
  methods: {
    setEmailAddress () {
      this.mailtoAddressHolder = this.address
      this.displayAddressHolder = this.address
    }
  }
}
</script>

<style lang="css">
</style>
