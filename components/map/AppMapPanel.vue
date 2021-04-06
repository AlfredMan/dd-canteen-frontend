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
  <div class="app-map-panel" ref="appMapPanel" style="transform:none!important">
    <!-- force disabled as below dragging is triggered by unknown reasons -->

    <div
      v-if="isMobilePortrait"
      class="sticky z-30 top-0 panel-draggable-handle-container w-full  bg-opacity-0 bg-gray-200 flex justify-center "
      v-bind:class="{
        'h-full': isDraggableInfoPanelCollapsed,
        'h-14': !isDraggableInfoPanelCollapsed
      }"
      @touchstart="dragTriggerTouchStart"
      @touchend="dragTriggerTouchEnd"
      @mousedown="dragTriggerTouchStart"
      @mouseup="dragTriggerTouchEnd"
    >
      <div class="absolute top-2 w-1/4 rounded-full h-1 bg-gray-800"></div>
      <!-- <div v-if="canGoBack" class="absolute left-0 h-8 flex items-center ml-2">
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
      </div> -->
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
      class="absolute inset-0 top-8 z-10 p-4 bg-white"
      v-if="!building || true"
      :key="'site'"
    />
    <AppMapPanelBuilding
      class="absolute inset-0 top-8 z-20 p-4 bg-white"
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
    scrollTo(y) {
      // console.log(id)
      if (process.client) {
        // gsap.to(window, { duration: 0.5, scrollTo: { y: id, offsetY } });
        gsap.to(window, { duration: 0.5, scrollTo: { y } });
      }
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
      // this.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
      //   isCollapsed: false
      // });
      // setTimeout(() => {
      this.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
        isCollapsed: true
      });
      // setTimeout(() => {
      //   this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
      //     isDisabled: true
      //   });
      // });
      // }, 0);
    }
    // expandDraggablePanel() {
    //   this.$store.dispatch("map/setIsDraggableInfoPanelExpanded", {
    //     isExpanded: false
    //   });
    //   setTimeout(() => {
    //     this.$store.dispatch("map/setIsDraggableInfoPanelExpanded", {
    //       isExpanded: true
    //     });
    //   }, 0);
    //   // setTimeout(() => {
    //   //   this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
    //   //     isDisabled: true
    //   //   });
    //   // });
    // }
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
  },
  watch: {
    isDraggableInfoPanelCollapsed(newVal, oldVal) {
      console.log("new is collapsed", newVal, "old is collapsed", oldVal);
      if (newVal === true) {
        // this.resetPanelHeightAndBound(0);
        // gsap.to(".app-map-panel", { y: 0, duration: 0.3 });
        // // this.draggable[0].enable();
        // this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
        //   isDisabled: false
        // });
        // this.scrollTo('.map-content',0)
        // this.scrollTo(0)
        // document.querySelector('.map-content').scrollTop=0
        gsap.to(".map-content", { scrollTop: 0 });
      } else {
        // this.resetPanelHeightAndBound(-this.initialPanelHeight);
        // gsap.to(".app-map-panel", {
        //   y: -this.initialPanelHeight,
        //   duration: 0.3
        // });
        // this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
        //   isDisabled: true
        // });
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
