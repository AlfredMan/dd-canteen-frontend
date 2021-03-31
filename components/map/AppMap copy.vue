<template lang="html">
  <!-- <div > -->
  <div
    class="app-container fixed top-0 left-0 bottom-0 bg-red-200 h-full w-full"
    style="z-index:999;"
    :class="{ 'mobile-portrait': isMobilePortrait() }"
  >
    <!-- <AppMapPanel class="app-map-panel" :class="{'mobile-portrait':isMobilePortrait()}"/> -->
    <AppMapRenderer
      class="app-map-renderer"
      :class="{ 'mobile-portrait': isMobilePortrait() }"
    />
    <AppMapPanel
      class="app-map-panel"
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
      windowWidth: typeof window === "undefined" ? 0 : window.innerWidth
    };
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      this.txt = `it changed to ${newWidth} from ${oldWidth}`;
    }
  },

  mounted() {
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
    Draggable.create(".app-map-panel", {
      type: "y",
      // trigger: ".drag-handle  ",
      bounds: ".app-container",
      allowNativeTouchScrolling: false
    });
    // edgeResistance: 0.65,
    // inertia: true,
    // bounds: ".app-container",
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
  @apply fixed top-0 left-0 bottom-0 overflow-y-auto w-full p-4;
  @apply bg-white;
  z-index: 999;
}
.app-map-renderer {
  @apply fixed inset-0;
}

@screen md {
  .app-map-panel {
    @apply fixed top-0 left-0 bottom-0 overflow-y-auto w-96 p-4;
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
  @apply relative overflow-y-auto w-full h-screen p-4;
  @apply bg-white;
  z-index: 999;
}
.app-map-renderer.mobile-portrait {
  @apply relative w-full h-1/3;
}
</style>
