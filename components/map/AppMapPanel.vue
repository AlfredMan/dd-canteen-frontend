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
  <div class="app-map-panel shadow-lg lg:shadow-none" ref="appMapPanel" style="transform:none!important">
    <!-- force disabled as below dragging is triggered by unknown reasons -->

    <!-- 'h-14': !isDraggableInfoPanelCollapsed -->
        <!-- 'h-8': !isDraggableInfoPanelCollapsed -->
    <div
      v-if="isMobilePortrait"
      class="sticky z-30 top-0 panel-draggable-handle-container w-full  bg-opacity-0 bg-gray-200 flex justify-center "
      v-bind:class="{
        'h-full': isDraggableInfoPanelCollapsed,
        'h-32': !isDraggableInfoPanelCollapsed
      }"
      @touchstart="dragTriggerTouchStart"
      @touchend="dragTriggerTouchEnd"
      @mousedown="dragTriggerTouchStart"
      @mouseup="dragTriggerTouchEnd"
    >
      <div class="absolute top-2 w-1/5 rounded-full h-1 bg-gray-500 pt-1"></div>

      <div v-if="isMobilePortrait && canGoBack" class="absolute top-1 right-1">
        <button
          class="back z-50 block absolute top-0 right-0 text-center text-3xl m-4 font-200 w-8 h-8 text-gray-700 text-center bg-gray-100 rounded-full block"
          style="line-height:0"
          @click="toSite()"
        >
          <div class="" style="margin-top:-1px;">
            &times;
          </div>
        </button>
      </div>
    </div>

    <!-- force disabled as above dragging is triggered by unknown reasons -->

    <!-- <div
      class="absolute top-0 right-0 z-20 p-4 text-pink-500"
      >
      isDraggableInfoPanelDisabled:
      {{ isDraggableInfoPanelDisabled ? "true" : "false" }}
    </div> -->

    <!-- <div>is mobile portrait: {{ isMobilePortrait ? "true" : "false" }}</div>
    -->
    <!-- <div>
      isDraggableInfoPanelCollapsed:
      {{ isDraggableInfoPanelCollapsed ? "true" : "false" }}
    </div> -->
    <AppMapPanelSite
      class="absolute inset-0 top-0 z-10 p-4 bg-white"
      v-if="!building || true"
      :key="'site'"
    />
    <AppMapPanelBuilding
      class="absolute inset-0 top-0 z-20 p-4 bg-white"
      v-if="building"
      :key="building.id"
    />
  </div>
</template>

<script>
import _ from "lodash";
import AppMapPanelSite from "~/components/map/AppMapPanelSite";
import AppMapPanelBuilding from "~/components/map/AppMapPanelBuilding";
import IconX from "~/components/icons/IconX.vue";
import IconAngleUp from "~/components/icons/IconAngleUp.vue";
import IconAngleDown from "~/components/icons/IconAngleDown.vue";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

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
    toSite() {
      this.$router.push({ query: null });
    },
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
      this.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
        isCollapsed: true
      });
    }
  },
  watch: {
    isDraggableInfoPanelCollapsed(newVal, oldVal) {
      console.log("new is collapsed", newVal, "old is collapsed", oldVal);
      if (newVal === true) {
        gsap.to(".map-content", { scrollTop: 0 });
      } else {
      }
    }
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
