<template lang="html">
  <!-- <div > -->
  <div
    class="app-container fixed top-0 left-0 bottom-0 bg-white h-full w-full"
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
      class="app-map-panel shadow-sm"
      :class="{ 'mobile-portrait': isMobilePortrait() }"
    />
    <!-- <div class="absolute top-0 left-0">
      enabled: {{ draggable ? draggable[0].enabled() : false }} number:
      {{ draggable ? draggable.length : 0 }}
    </div>
    <div class="absolute top-10 left-0">
      collapsed: {{ isDraggableInfoPanelCollapsed }}
    </div> -->




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
      draggable: null,
      containerHeight: 0,
      containerWidth: 0,
      initialPanelHeight: 0,
      dragStartPos: 0
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
    // this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
    //   isDisabled: true
    // });
    // this.$store.dispatch("setAppMapDraggable", { draggable });
    this.detectDevice();
    if (this.isMobilePortrait()) {
      this.initDrag();
    }
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
    // isDraggableInfoPanelExpanded() {
    //   return this.$store.state.map.isDraggableInfoPanelExpanded;
    // }
  },

  watch: {
    isDraggableInfoPanelDisabled(newVal, oldVal) {
      // console.log('contentType', newVal, oldVal)
      console.log(
        "is Draggable info panel disabled?",
        "newVal",
        newVal,
        "oldVal",
        oldVal
      );
      if (newVal === true) {
        this?.draggable[0].disable();
      } else {
        this?.draggable[0].enable();
      }
    },
    isDraggableInfoPanelCollapsed(newVal, oldVal) {
      console.log("new is collapsed", newVal, "old is collapsed", oldVal);
      if (newVal === true) {
        this.resetPanelHeightAndBound(0);
        gsap.to(".app-map-panel", { y: 0, duration: 0.3 });
        // this.draggable[0].enable();
        this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
          isDisabled: false
        });
        // this.draggable[0].enable()
        // window.alert('collapsed')
        // this.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
        //   isCollapsed: false
        // });
      } else {
        this.resetPanelHeightAndBound(-this.initialPanelHeight);
        gsap.to(".app-map-panel", {
          y: -this.initialPanelHeight,
          duration: 0.3
        });
        this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
          isDisabled: true
        });
        // this.draggable[0].disable()
      }
    }
    // isDraggableInfoPanelExpanded(newVal, oldVal) {
    //   // console.log("new is expanded", newVal, "old is expanded", oldVal);
    //   if (newVal === true) {
    //     this.resetPanelHeightAndBound(-this.initialPanelHeight);
    //     gsap.to(".app-map-panel", {
    //       y: -this.initialPanelHeight,
    //       duration: 0.3
    //     });

    //     // this.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
    //     //   isCollapsed: false
    //     // });
    //   }
    // }
  },
  beforeDestroy() {
    if (typeof window === "undefined") {
      return;
    }
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    initDrag() {
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
      const self = this;

      self.containerHeight = this.$refs.container.clientHeight;
      self.containerWidth = this.$refs.container.clientWidth;
      self.initialPanelHeight = this.$refs.infoPanel.$el.clientHeight;
      console.log("container height", self.containerHeight);
      console.log("panel height", self.initialPanelHeight);
      this.draggable = Draggable.create(".app-map-panel", {
        type: "y",
        // trigger: ".drag-handle  ",
        // bounds: ".app-container",
        // bounds: { top: 50, height: initialPanelHeight },
        bounds: {
          top: 0,
          left: 0,
          width: self.containerWidth,
          // height: self.containerHeight * 1.5
          // height: self.containerHeight * 1,
          height: self.initialPanelHeight * 2
          // bottom:0,
        },
        // allowNativeTouchScrolling: false,
        onDragStart: function() {
          self.dragStartPos = this.y;
        },
        onDragEnd: function() {
          const currentY = this.y;
          console.log("dragEnd y", currentY);

          // if (currentY > -50) {
          //   self.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
          //     isCollapsed: true
          //   });
          // } else {
          //   self.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
          //     isCollapsed: false
          //   });
          // }
          // if (currentY > -1 * self.initialPanelHeight * 0.5) {
          if (self.dragStartPos > -1 * self.initialPanelHeight * 0.5) {
            // self.$store.dispatch("map/setIsDraggableInfoPanelExpanded", {
            //   isExpanded: true
            // });
            self.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
              isCollapsed: false
            });
            // self.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
            //   isDisabled: true
            // });
            // self.draggable[0].disable();
          } else {
            self.$store.dispatch("map/setIsDraggableInfoPanelCollapsed", {
              isCollapsed: true
            });
            // self.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
            //   isDisabled: false
            // });
            // self.draggable[0].enable();
            // self.$store.dispatch("map/setIsDraggableInfoPanelExpanded", {
            //   isExpanded: false
            // });
          }
        },
        onDrag: function() {
          self.resetPanelHeightAndBound(this.y);
        }
        // autoScroll: 2
        // liveSnap: {
        //   // points: [{ x: containerWidth / 2, y: -(clientHeight / 2) resetPanelHeightAndBound,
        //   points: [
        //     { x: containerWidth / 2, y: 0 },
        //     { x: containerWidth / 2, y: -self.containerHeight / 2 }
        //   ],
        //   radius: 250
        // }
      });
      // this.draggable[0].disable();
    },

    detectDevice() {
      this.$store.dispatch("map/setIsMobilePortrait", {
        isMobilePortrait: this.isMobilePortrait()
      });
    },

    onResize() {
      if (typeof window === "undefined") {
        return;
      }
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    },
    isMobilePortrait() {
      if (typeof window === "undefined" || typeof navigator === "undefined") {
        return false;
      }
      let check = false;
      (function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
      // return this.windowWidth < 700;
    },
    resetPanelHeightAndBound(currentPanelY) {
      // const currentY = this.y;
      console.log(currentPanelY);
      // // // this.draggable[0].bounds.height = newInfoPanelHeight * 2;
      // if (isDraggableInfoPanelCollapsed){
      // }else{

      // }

      const newInfoPanelHeight = this.initialPanelHeight - currentPanelY;
      // const newInfoPanelHeight =
      //   currentPanelY !== newInfoPanelHeight ||
      //   currentY !== newInfoPanelHeight * 2
      //     ? this.initialPanelHeight - currentPanelY
      //     : currentPanelY == newInfoPanelHeight
      //     ? newInfoPanelHeight
      //     : newInfoPanelHeight * 2;

      console.log("new info panel height", newInfoPanelHeight);
      // gsap.set(".app-map-panel", { height: newInfoPanelHeight });
      document.querySelector(
        ".app-map-panel"
      ).style.height = newInfoPanelHeight+'px';

      const newBounds = {
        top: 0,
        left: 0,
        width: self.containerWidth,
        height: newInfoPanelHeight * 2
      };

      const draggable = this.draggable[0];
      draggable.applyBounds(newBounds);
      if (this.isDraggableInfoPanelDisabled) {
        draggable.disable();
      } else {
        draggable.enable();
      }
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

// .app-container.mobile-portrait {
//   height: 150vh;
// }
.app-map-panel.mobile-portrait {
  // @apply relative overflow-y-auto w-full h-screen;
  @apply relative overflow-y-auto w-full h-1/2;
  @apply bg-white;
  z-index: 999;
}
.app-map-renderer.mobile-portrait {
  @apply relative w-full h-1/2;
}
</style>
