<template lang="html">
  <div class="">
    <AppMapPanel />
    <AppMapRenderer />
  </div>
</template>

<script>
import AppMapPanel from '~/components/map/AppMapPanel'
import AppMapRenderer from '~/components/map/AppMapRenderer'
export default {
  components: {
    AppMapPanel,
    AppMapRenderer
  }
}
</script>

<style lang="css">
</style>
