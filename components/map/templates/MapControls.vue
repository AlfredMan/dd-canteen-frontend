<template lang="html">
  <div class="map-controls">
    <div class="map-controls-wrapper">
      <nuxt-link
      class="map-control text-xl"
      :to="{ query: {
        building: ''
      } }">
        +
      </nuxt-link>
      <nuxt-link
      class="map-control"
      :to="{ query: {
        building: ''
      } }">
        —
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.map-controls {
  @apply absolute top-0 left-0 m-2;
  z-index: 99;

  .map-controls-wrapper {
    @apply absolute top-0 left-0 m-4;
  }

  .map-control {
    @apply mb-4 block rounded-full shadow-md px-2 py-2 w-10 h-10 text-center leading-tight font-medium;
    white-space: nowrap;
  }
}
</style>
