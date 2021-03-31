<template lang="html">
  <!-- <div class="app-map-panel" ref="appMapPanel" v-on:scroll="onWindowScroll($event)"> -->
  <!-- <div class="app-map-panel" ref="appMapPanel" onScroll="onWindowScroll()" > -->
  <!-- <div class="app-map-panel" ref="appMapPanel" v-on:scroll="onWindowScroll($event)" > -->
  <div class="app-map-panel" ref="appMapPanel" v-on:scroll="onWindowScroll">
    <!-- <div>is disabled: {{isDraggableInfoPanelDisabled()}}</div>-->
    <div>is mobile portrait: {{ isMobilePortrait ? "true" : "false" }}</div>
    <div>isDraggableInfoPanelDisabled: {{ isDraggableInfoPanelDisabled ? "treu" : "false" }}</div>
    <AppMapPanelSite v-if="!building" :key="'site'" />
    <AppMapPanelBuilding v-if="building" :key="building.id" />
  </div>
</template>

<script>
import _ from "lodash";
import AppMapPanelSite from "~/components/map/AppMapPanelSite";
import AppMapPanelBuilding from "~/components/map/AppMapPanelBuilding";
export default {
  data() {
    return {
      lastPanelScrollTop: 0
    };
  },
  components: {
    AppMapPanelSite,
    AppMapPanelBuilding
  },
  computed: {
    buildingSlug() {
      return this.$route.params.building || this.$route.query.building;
    },
    building() {
      return (
        this.$route.query.building &&
        this.$store.getters.getBuildingBySlug(this.buildingSlug)
      );
    },
    isDraggableInfoPanelDisabled() {
      return this.$store.state.map.isDraggableInfoPanelDisabled;
    },
    isMobilePortrait() {
      return this.$store.state.map.isMobilePortrait;
    }
  },
  // mounted() {
  //   this.bindEvents();
  // },
  // beforeDestroy() {
  //   this.unbindEvents();
  // },
  methods: {
    // bindEvents() {
    //   if (process.client) {
    //     const self = this;
    //     window.addEventListener("scroll", self.onWindowScroll, false);
    //   }
    // },
    // unbindEvents() {
    //   if (process.client) {
    //     const self = this;
    //     window.removeEventListener("scroll", self.onWindowScroll, false);
    //   }
    // },
    onWindowScroll(event) {
      if (process.client) {
        const self = this;
        let y = window.scrollY;
        console.log(y);
        if (
          this.isDraggableInfoPanelDisabled &&
          this.lastPanelScrollTop === 0 &&
          y === 0
        ) {
          self.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
            isDisabled: false
          });
        }
        const scrollTop = this.$refs.appMapPanel.scrollTop;
        console.log(scrollTop);
        this.lastPanelScrollTop = scrollTop;
      }
    }
  },
  watch: {
    // isDraggableInfoPanelDisabled(newVal, oldVal) {
    //   console.log("newVal", newVal, "oldVal", oldVal);
    // }
  }
};
</script>

<style lang="scss" scoped>
// .app-map-panel {
//   @apply fixed top-0 left-0 bottom-0 overflow-y-auto w-96 p-4;
//   z-index: 999;
// }
</style>
