<template lang="html">
  <div class="app-map-panel">
    <AppMapPanelSite v-if="!building" :key="'site'" />
    <AppMapPanelBuilding v-if="building" :key="building.id" />
  </div>
</template>

<script>
import _ from 'lodash'
import AppMapPanelSite from '~/components/map/AppMapPanelSite'
import AppMapPanelBuilding from '~/components/map/AppMapPanelBuilding'
export default {
  components: {
    AppMapPanelSite,
    AppMapPanelBuilding,
  },
  computed: {
    buildingSlug () {
      return this.$route.query.building
    },
    building () {
      return this.$route.query.building && this.$store.getters.getBuildingBySlug(this.buildingSlug)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-map-panel {
  @apply fixed top-0 left-0 bottom-0 overflow-y-auto w-96 p-4;
  z-index: 999;
}
</style>
