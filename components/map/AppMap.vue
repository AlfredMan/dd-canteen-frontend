<template lang="html">
  <!-- <div > -->
  <div
    class="app-container fixed top-0 left-0 bottom-0 bg-red-200 h-full w-full"
    style="z-index:999;"
    ref="container"
  >
    <!-- <div
    class="app-container fixed top-0 left-0 bottom-0 bg-red-200 h-full w-full"
    style="z-index:999;"
    :class="{ 'mobile-portrait': isMobilePortrait() }"
  > -->
    <!-- <AppMapPanel class="app-map-panel" :class="{'mobile-portrait':isMobilePortrait()}"/> -->
    <AppMapRenderer
      class="app-map-renderer"
      :class="{ 'mobile-portrait': isMobilePortrait() }"
    />
    <AppMapPanel
      ref="infoPanel"
      class="app-map-panel shadow-lg"
      :class="{ 'mobile-portrait': isMobilePortrait() }"
    />
    <!-- <div class="app-map-panel flex flex-col">
      <div class="drag-handle w-full h-16 bg-pink-500"></div>
      <AppMapPanel :class="{ 'mobile-portrait': isMobilePortrait() }" />
    </div> -->

    <!-- <div class="box w-full h-48 w-64 bg-red-500">
      .BOX
    </div> -->
  </div>
</template>

<script>
import AppMapPanel from "~/components/map/AppMapPanel";
import AppMapRenderer from "~/components/map/AppMapRenderer";
import gsap from "gsap";
// import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { Draggable } from "gsap/dist/Draggable.js";

if (process.client) {
  // gsap.registerPlugin(ScrollToPlugin)
  // gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Draggable);
}

export default {
  components: {
    AppMapPanel,
    AppMapRenderer
  },
  data() {
    return {
      windowWidth: typeof window === "undefined" ? 0 : window.innerWidth,
      draggable: null
    };
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      this.txt = `it changed to ${newWidth} from ${oldWidth}`;
    }
  },

  mounted() {
    const self = this;
    this.$nextTick(() => {
      if (typeof window === "undefined") {
        return;
      }
      window.addEventListener("resize", this.onResize);
    });

    // function snapX(x) {
    //   return Math.round(x / cellWidth) * cellWidth;
    // }

    // function updateProgress() {
    //   // let newProg = this.x / wrapWidth;
    //   // newProg = newProg - Math.floor(newProg);
    //   // animation.progress(newProg);
    // }
    // var draggable = new Draggable(proxy, {
    //   allowContextMenu: true,
    //   type: "y",
    //   trigger: ".app-map-panel",
    //   inertia: true,
    //   onDrag: updateProgress,
    //   onThrowUpdate: updateProgress,
    //   // snap: {
    //   //   x: snapX
    //   // },
    //   onDragEnd: function() {
    //     // const i = wrapIndex((-this.endX / wrapWidth) * cells.length - 5);
    //     // console.log(i);
    //   }
    // });
    // Draggable.create(".app-map-panel", {
    //   type: "y",
    //   edgeResistance: 0.65,
    //   bounds: "#container",
    //   inertia: true
    // });

    const containerHeight = this.$refs.container.clientHeight;
    const containerWidth = this.$refs.container.clientWidth;
    const panelHeight = this.$refs.infoPanel.$el.clientHeight;
    console.log("container height", containerHeight);
    console.log("panel height", panelHeight);
    this.draggable = Draggable.create(".app-map-panel", {
      type: "y",
      // trigger: ".drag-handle  ",
      // bounds: ".app-container",
      // bounds: { top: 50, height: panelHeight },
      bounds: {
        top: 0,
        left: 0,
        width: containerWidth,
        height: containerHeight * 1.5
      },
      // allowNativeTouchScrolling: false,
      onDragStart: function() {},
      onDragEnd: function() {
        const currentY = this.y;
        console.log(currentY);

        if (currentY < 0) {
          self.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
            isCollapsed: false
          });
        }
        // if (currentY <= (-1 * containerHeight) / 2) {
        //   self.$store.dispatch("map/setIsDraggableInfoPanelExpanded", {
        //     isExpanded: true
        //   });
        // }
      },
      onDrag: function() {
        const currentY = this.y;
        console.log(currentY);

        const newInfoPanelHeight = containerHeight + currentY;
        // self.$refs.infoPanel.el$.height = newInfoPanelHeight;
        // if (currentY < 0) {
        //   self.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
        //     isCollapsed: false
        //   });
        // }
      }
      // autoScroll: 2
      // liveSnap: {
      //   // points: [{ x: containerWidth / 2, y: -(clientHeight / 2) }],
      //   points: [
      //     { x: containerWidth / 2, y: 0 },
      //     { x: containerWidth / 2, y: -containerHeight / 2 }
      //   ],
      //   radius: 250
      // }
    });
    // this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
    //   isDisabled: true
    // });
    // this.$store.dispatch("setAppMapDraggable", { draggable });
    this.$store.dispatch("map/setIsMobilePortrait", {
      isMobilePortrait: this.isMobilePortrait()
    });
    // edgeResistance: 0.65,
    // inertia: true,
    // bounds: ".app-container",
  },
  computed: {
    isDraggableInfoPanelDisabled() {
      return this.$store.state.map.isDraggableInfoPanelDisabled;
    },
    isDraggableInfoPanelCollapsed() {
      return this.$store.state.map.isDraggableInfoPanelCollapsed;
    }
  },

  watch: {
    isDraggableInfoPanelDisabled(newVal, oldVal) {
      // console.log('contentType', newVal, oldVal)
      console.log("newVal", newVal, "oldVal", oldVal);
      if (newVal === true) {
        this?.draggable[0].disable();
      } else {
        this?.draggable[0].enable();
      }
    },
    isDraggableInfoPanelCollapsed(newVal, oldVal) {
      console.log("new is collapsed", newVal, "old is collapsed", oldVal);
      if (newVal === true) {
        gsap.set(".app-map-panel", { y: 0 });
        // this.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
        //   isCollapsed: false
        // });
      }
    }
  },
  beforeDestroy() {
    if (typeof window === "undefined") {
      return;
    }
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      if (typeof window === "undefined") {
        return;
      }
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    },
    isMobilePortrait() {
      return this.windowWidth < 700;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-map-pane.mobile-portrait::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.app-map-pane.mobile-portrait {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.app-map-panel {
  @apply fixed top-0 left-0 bottom-0 overflow-y-auto w-full;
  @apply bg-white;
  z-index: 999;
}
.app-map-renderer {
  @apply fixed inset-0;
}

@screen md {
  .app-map-panel {
    @apply fixed top-0 left-0 bottom-0 overflow-y-auto w-96;
    z-index: 999;
  }
  .app-map-renderer {
    @apply fixed inset-0 pl-96;
  }
}

.app-container.mobile-portrait {
  height: 150vh;
}
.app-map-panel.mobile-portrait {
  @apply relative overflow-y-auto w-full h-screen;
  @apply bg-white;
  z-index: 999;
}
.app-map-renderer.mobile-portrait {
  @apply relative w-full h-1/2;
}
</style>
