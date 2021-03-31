<template lang="html">
  <div class="">
    <div id="container" class="fixed top-0 left-0 bottom-0 bg-red-200 h-full w-full" style="z-index:999">
      #CONTAINER

      <AppMapPanel class="app-map-panel" />
      <AppMapRenderer class="app-map-renderer" />

      <div class="absolute box w-48 h-48 bg-red-500" style="z-index:999999">
        .BOX
      </div>
    </div>
  </div>
</template>

<script>
import AppMapPanel from "~/components/map/AppMapPanel";
import AppMapRenderer from "~/components/map/AppMapRenderer";

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { Draggable } from 'gsap/dist/Draggable.js'
if (process.client) {
  gsap.registerPlugin(ScrollToPlugin)
  gsap.registerPlugin(ScrollTrigger);
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
    Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:"#container", inertia:true});
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
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
