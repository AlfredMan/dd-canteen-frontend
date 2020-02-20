<template lang="html">
  <home />
</template>

<script>
export default {
}
</script>

<script>
// import { validFeeds } from '~/common/api'
import Home from './home/index.vue'

export default {
  // fetch ({ redirect }) {
  //   redirect('/' + validFeeds[0])
  // },
  components: {
    Home,
  }
}
</script>

<style lang="css" scoped>
</style>
