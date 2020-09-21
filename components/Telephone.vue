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
    telephone: {
      type: String,
      default: ''
    }
  },
  computed: {
    mailtoAddress () {
      return `tel:${this.mailtoAddressHolder}`
    },
    displayAddress () {
      return `${this.displayAddressHolder}`
    }
  },
  mounted () {
    setTimeout(() => {
      this.setTelephone()
    }, 500)
  },
  methods: {
    setTelephone () {
      this.mailtoAddressHolder = this.telephone
      this.displayAddressHolder = this.telephone
    }
  }
}
</script>

<style lang="css">
</style>
