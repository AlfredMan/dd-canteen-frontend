<template lang="html">
  <div class="">
    <AppMapPanel class="app-map-panel" />
    <AppMapRenderer class="app-map-renderer" />
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

<style lang="scss" scoped>

.app-map-panel {
  @apply fixed top-0 left-0 bottom-0 overflow-y-auto w-full p-4;
  @apply bg-white;
  z-index: 999;
}
.app-map-renderer {
  @apply fixed inset-0
}

@screen md {
  .app-map-panel {
    @apply fixed top-0 left-0 bottom-0 overflow-y-auto w-96 p-4;
    z-index: 999;
  }
  .app-map-renderer {
    @apply fixed inset-0 pl-96
  }
}
</style>
