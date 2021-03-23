<template lang="html">
  <AppMap id="map"/>
</template>

<script>
import AppMap from '~/components/map/AppMap'
export default {
  components: { AppMap },
  layout: 'map-layout'
}
</script>

<style lang="scss" scoped>
#map {
  @apply fixed inset-0;
}
</style>
