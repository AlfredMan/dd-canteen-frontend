<template lang="html">
  <!-- <div class="app-map-panel" ref="appMapPanel" v-on:scroll="onWindowScroll($event)"> -->
  <!-- <div class="app-map-panel" ref="appMapPanel" onScroll="onWindowScroll()" > -->
  <!-- <div class="app-map-panel" ref="appMapPanel" v-on:scroll="onWindowScroll($event)" > -->
  <!-- <div
    class="app-map-panel"
    ref="appMapPanel"
    v-on:scroll="onWindowScroll"
    @touchstart="dragTriggerTouchStart"
    @touchend="dragTriggerTouchEnd"
  > -->
  <!-- <div class="app-map-panel" ref="appMapPanel" v-on:scroll="onWindowScroll"> -->
  <div class="app-map-panel" ref="appMapPanel">
    <div
      v-if="isMobilePortrait"
      class="sticky top-0 panel-draggable-handle-container w-full h-8 bg-gray-200 flex justify-center items-center"
      @touchstart="dragTriggerTouchStart"
      @touchend="dragTriggerTouchEnd"
    >
      <div class="w-1/4 rounded-full h-1 bg-gray-800"></div>
      <div v-if="canGoBack" class="absolute left-0 h-8 flex items-center ml-2">
        <nuxt-link class="back" :to="{ query: null }">&larr; Back</nuxt-link>
      </div>
      <div
        v-if="!isDraggableInfoPanelCollapsed"
        class="absolute right-0 h-8 flex items-center mr-2"
        @touchstart="collapseDraggablePanel"
      >
        <IconAngleDown />
      </div>
      <div
        v-if="isDraggableInfoPanelCollapsed"
        class="absolute right-0 h-8 flex items-center mr-2"
        @touchstart="expandDraggablePanel"
      >
        <IconAngleUp />
      </div>
    </div>
    <!-- <div>is mobile portrait: {{ isMobilePortrait ? "true" : "false" }}</div>
    <div>
      isDraggableInfoPanelDisabled:
      {{ isDraggableInfoPanelDisabled ? "true" : "false" }}
    </div> -->
    <!-- <div>
      isDraggableInfoPanelCollapsed:
      {{ isDraggableInfoPanelCollapsed ? "true" : "false" }}
    </div> -->
    <AppMapPanelSite class="p-4" v-if="!building" :key="'site'" />
    <AppMapPanelBuilding class="p-4" v-if="building" :key="building.id" />
  </div>
</template>

<script>
import _ from "lodash";
import AppMapPanelSite from "~/components/map/AppMapPanelSite";
import AppMapPanelBuilding from "~/components/map/AppMapPanelBuilding";
import IconX from "~/components/icons/IconX.vue";
import IconAngleUp from "~/components/icons/IconAngleUp.vue";
import IconAngleDown from "~/components/icons/IconAngleDown.vue";
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
    isDraggableInfoPanelCollapsed() {
      return this.$store.state.map.isDraggableInfoPanelCollapsed;
    },
    isMobilePortrait() {
      return this.$store.state.map.isMobilePortrait;
    },
    canGoBack() {
      return !!this.$route.query.building;
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
    dragTriggerTouchStart() {
      this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
        isDisabled: false
      });
    },
    dragTriggerTouchEnd() {
      this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
        isDisabled: true
      });
    },
    collapseDraggablePanel() {
      // this.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
      //   isCollapsed: false
      // });
      // setTimeout(() => {
      this.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
        isCollapsed: true
      });
      // }, 0);
    },
    expandDraggablePanel() {
      // setTimeout(() => {
      this.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
        isCollapsed: false
      });
      // }, 0);
    }
    // onWindowScroll(event) {
    //   if (process.client) {
    //     const self = this;
    //     let y = window.scrollY;
    //     console.log(y);
    //     if (y > 0) {
    //       this.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
    //         isCollapsed: false
    //       });
    //     }
    //     // if (
    //     //   this.isDraggableInfoPanelDisabled &&
    //     //   this.lastPanelScrollTop === 0 &&
    //     //   y === 0
    //     // ) {
    //     //   // self.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
    //     //   //   isDisabled: false
    //     //   // });
    //     // }
    //     const scrollTop = this.$refs.appMapPanel.scrollTop;
    //     console.log(scrollTop);
    //     this.lastPanelScrollTop = scrollTop;
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
// .app-map-panel {
//   @apply fixed top-0 left-0 bottom-0 overflow-y-auto w-96 p-4;
//   z-index: 999;
// }
.map-content {
  @apply overflow-y-auto;
}
</style>
