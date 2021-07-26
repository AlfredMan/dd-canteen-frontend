<template>
  <section
    ref="stickerRef"
    v-if="stickerId && block"
    :class="[`block-sticker absolute z-50 ${sticker.positionClass}`]"
  >
    <!-- :style="{'tansform':""}" -->
    <!-- <lazy-image :src="stickerUrl(stickerId)" :w="50" width="50px" /> -->
    <img :src="sticker.uri" :class="[`${sticker.sizeClass}  `]" />
  </section>
</template>

<script>
// https://greensock.com/forums/topic/26104-nuxt-gsapdraggable-cannot-use-import-statement-outside-a-module/

// import gsap from 'gsap'
// import { Draggable } from 'gsap/dist/Draggable.js'
// gsap.registerPlugin(Draggable)
// import Draggable from "gsap/Draggable";
// if (process.client) {
//   require("~/assets/vendor/ThrowPropsPlugin");
// }
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

if (process.client) {
  gsap.registerPlugin(Draggable);
}
export default {
  name: "BlockSticker",
  props: [
    "block",
    "stickerId",
    "parentRef",
    "index",
    "spreadAcross",
    "stickersPosition"
  ],
  mounted() {
    // if (process.browser) {
    //   const DraggableModule = require("gsap/Draggable");

    //   DraggableModule.Draggable.create(this.$refs.stickerRef, {
    //     type: "x,y",
    //     bounds: ".page-component",

    //   });
    // }
    Draggable.create(this.$refs.stickerRef, {
      type: "x,y",
      bounds: ".page-component"
    });
    console.log("position:", this.stickersPosition);
  },
  computed: {
    sticker() {
      return this.stickerWithId(this.stickerId);
    },
    // positionClass() {
    //   switch (this.index) {
    //     case 0:
    //       return `top-0 right-0`;
    //     case 1:
    //       return `bottom-0 left-0`;
    //     default:
    //       return `top-0 right-0`;
    //   }
    // }

    isStickerScatterAcross() {
      return !this.stickersPosition || this.stickersPosition === "AroundHeader";
    },
    isStickerTopLeft(position) {
      return this.stickersPosition === "TopLeft";
    },
    isStickerTopCenter(position) {
      return this.stickersPosition === "TopCenter";
    },
    isStickerTopRight(position) {
      return this.stickersPosition === "TopRight";
    },
    isStickerCenterRight(position) {
      return this.stickersPosition === "CenterRight";
    },
    isStickerBottomRight(position) {
      return this.stickersPosition === "BottomRight";
    },
    isStickerBottomCenter(position) {
      return this.stickersPosition === "BottomCenter";
    },
    isStickerBottomLeft(position) {
      return this.stickersPosition === "BottomLeft";
    },
    isStickerCenterLeft(position) {
      return this.stickersPosition === "CenterLeft";
    }
  },

  methods: {
    attributesAtIndexPositionTopLeft(i) {
      switch (i) {
        case 0:
          return {
            positionClass:
              "p-0 -top-10 -left-10 transform -translate-x-1/2 -translate-y-0 scale-125 rotate-12"
          };
        case 1:
          return {
            positionClass:
              "p-0 -top-16 -left-16 transform -translate-x-1/2 -translate-y-1/2 scale-125 rotate-30"
          };
        case 2:
          return {
            positionClass:
              "p-0 -top-12 -left-12 transform -translate-x-1/2 translate-y-0 scale-125 rotate-6"
          };
        default:
          return {
            positionClass:
              "p-0 -top-10 -left-10 transform -translate-x-1/2 translate-y-0 scale-125 rotate-12"
          };
      }
    },
    attributesAtIndexPositionCenterLeft(i) {
      switch (i) {
        case 0:
          return {
            positionClass:
              "p-0 top-1/2 -left-10 transform -translate-x-1/2 -translate-y-1/2 scale-125 rotate-12"
          };
        case 1:
          return {
            positionClass:
              "p-0 top-1/2 -left-16 transform -translate-x-1/2 translate-y-0 scale-125 rotate-30"
          };
        case 2:
          return {
            positionClass:
              "p-0 top-1/2 -left-12 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-6"
          };
        default:
          return {
            positionClass:
              "p-0 top-1/2 -left-10 transform -translate-x-1/2 translate-y-0 scale-125 rotate-12"
          };
      }
    },
    attributesAtIndexPositionBottomCenter(i) {
      switch (i) {
        case 0:
          return {
            positionClass:
              "p-0 -bottom-0 right-1/2 transform -translate-x-0 translate-y-1/2 scale-125 rotate-12"
          };
        case 1:
          return {
            positionClass:
              "p-0 bottom-0 right-1/2 transform -translate-x-1/2 translate-y-1/3 scale-125 rotate-30"
          };
        case 2:
          return {
            positionClass:
              "p-0 bottom-0 right-1/2 transform translate-x-1/2 translate-y-0 scale-125 rotate-6"
          };
        default:
          return {
            positionClass:
              "p-0 -bottom-0 right-1/2 transform -translate-x-0 translate-y-0 scale-125 rotate-12"
          };
      }
    },
    attributesAtIndexPositionTopCenter(i) {
      switch (i) {
        case 0:
          return {
            positionClass:
              "p-0 -top-12 right-1/2 transform -translate-x-0 translate-y-0 scale-125 rotate-12"
          };
        case 1:
          return {
            positionClass:
              "p-0 top-016 right-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 rotate-30"
          };
        case 2:
          return {
            positionClass:
              "p-0 -top-10 right-1/2 transform translate-x-1/2 translate-y-1/2 scale-125 rotate-6"
          };
        default:
          return {
            positionClass:
              "p-0 -top-12 right-1/2 transform -translate-x-0 translate-y-0 scale-125 rotate-12"
          };
      }
    },
    attributesAtIndexPositionTopRight(i) {
      switch (i) {
        case 0:
          return {
            positionClass:
              "p-0 -top-12 -right-10 transform -translate-x-1/2 translate-y-0 scale-125 rotate-12"
          };
        case 1:
          return {
            positionClass:
              "p-0 -top-16 -right-16 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-30"
          };
        case 2:
          return {
            positionClass:
              "p-0 -top-10 -right-12 transform -translate-x-1/2 -translate-y-1/2 scale-125 rotate-6"
          };
        default:
          return {
            positionClass:
              "p-0 -top-12 r-ight-10 transform -translate-x-1/2 translate-y-0 scale-125 rotate-12"
          };
      }
    },
    attributesAtIndexPositionCenterRight(i) {
      switch (i) {
        case 0:
          return {
            positionClass:
              "p-0 top-1/2 -right-10 transform -translate-x-1/2 -translate-y-1/2 scale-125 rotate-12"
          };
        case 1:
          return {
            positionClass:
              "p-0 top-1/2 -right-16 transform -translate-x-1/2 translate-y-0 scale-125 rotate-30"
          };
        case 2:
          return {
            positionClass:
              "p-0 top-1/2 -right-12 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-6"
          };
        default:
          return {
            positionClass:
              "p-0 top-1/2 -right-10 transform -translate-x-1/2 translate-y-0 scale-125 rotate-12"
          };
      }
    },
    attributesAtIndexPositionBottomRight(i) {
      switch (i) {
        case 0:
          return {
            positionClass:
              "p-0 bottom-0 -right-10 transform -translate-x-1/2 -translate-y-0 scale-125 rotate-12"
          };
        case 1:
          return {
            positionClass:
              "p-0 bottom-0 -right-16 transform -translate-x-1/2 -translate-y-1/2 scale-125 rotate-30"
          };
        case 2:
          return {
            positionClass:
              "p-0 bottom-0 -right-12 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-6"
          };
        default:
          return {
            positionClass:
              "p-0 bottom-0 -right-10 transform -translate-x-1/2 translate-y-0 scale-125 rotate-12"
          };
      }
    },
    attributesAtIndexPositionScatterAcross(i) {
      switch (i) {
        case 0:
          return {
            positionClass: this.spreadAcross
              ? "-top-10 left-10 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12"
              : "-top-10 -right-10 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12"
          };
        case 1:
          return {
            positionClass: this.spreadAcross
              ? "top-1/20 left-1/4 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-30"
              : "bottom-0 -left-9 transform -translate-x-1/2 translate-y-1/2 scale-125 -rotate-30"
          };
        case 2:
          return {
            positionClass: this.spreadAcross
              ? "top-1/5 left-1/3 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-6"
              : "top-1/20 -right-5 transform -translate-x-1/2 translate-y-1/2 scale-125 -rotate-6"
          };
        case 3:
          return {
            positionClass: this.spreadAcross
              ? "top-1/10 left-1/2 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-0"
              : "bottom-2/3 -left-10 transform -translate-x-1/2 translate-y-1/2 scale-125"
          };
        case 4:
          return {
            positionClass: this.spreadAcross
              ? "top-1/5 right-10 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12"
              : "bottom-1/10 -right-0 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12",
            sizeClass: "w-24",
            uri: "/images/stickers/sticker5.svg"
          };
        case 5:
          return {
            positionClass: this.spreadAcross
              ? "top-1/20 right-1/4 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-0"
              : "bottom-1/3 -right-12 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-0"
          };
        case 6:
          return {
            positionClass: this.spreadAcross
              ? "bottom-1/10 -left-1/4 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-6"
              : "-top-10 -left-16 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-6"
          };
        case 7:
          return {
            positionClass: this.spreadAcross
              ? "bottom-1/2 left-1/10 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-125"
              : "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125",
            sizeClass: "w-20",
            uri: "/images/stickers/sticker8.svg"
          };
        case 8:
          return {
            positionClass: this.spreadAcross
              ? "bottom-1/3 left-1/3 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-125"
              : "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125"
          };
        case 9:
          return {
            positionClass: this.spreadAcross
              ? "bottom-1/2 right-1/3 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12"
              : "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-12"
          };
        case 10:
          return {
            positionClass: this.spreadAcross
              ? "bottom-1/4 right-1/4 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-30"
              : "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125"
          };
        case 11:
          return {
            positionClass: this.spreadAcross
              ? "bottom-1/5 right-1/10 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-30"
              : "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-30"
          };
        default:
          return {
            positionClass: this.spreadAcross
              ? "-top-10 left-10 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12"
              : "top-0 -right-10 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12"
          };
      }
    },
    attributesAtIndex(i) {
      if (this.isStickerCenterRight) {
        return this.attributesAtIndexPositionCenterRight(i);
      } else if (this.isStickerTopRight) {
        return this.attributesAtIndexPositionTopRight(i);
      } else if (this.isStickerBottomRight) {
        return this.attributesAtIndexPositionBottomRight(i);
      } else if (this.isStickerTopCenter) {
        return this.attributesAtIndexPositionTopCenter(i);
      } else if (this.isStickerBottomCenter) {
        return this.attributesAtIndexPositionBottomCenter(i);
      } else if (this.isStickerCenterLeft) {
        return this.attributesAtIndexPositionCenterLeft(i);
      } else if (this.isStickerTopLeft) {
        return this.attributesAtIndexPositionTopLeft(i);
      }
      return this.attributesAtIndexPositionScatterAcross(i);
    },
    stickerWithId(stickerId) {
      switch (this.stickerId) {
        case "sticker1":
          return {
            // positionClass:
            // "top-0 -right-10 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-20",
            uri: "/images/stickers/sticker1.svg"
          };
        case "sticker2":
          return {
            // positionClass:
            // "bottom-0 -left-9 transform -translate-x-1/2 translate-y-1/2 scale-125 -rotate-30",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-28",
            uri: "/images/stickers/sticker2.svg"
          };
        case "sticker3":
          return {
            // positionClass:
            // "top-1/20 -right-5 transform -translate-x-1/2 translate-y-1/2 scale-125 -rotate-6",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-24",
            uri: "/images/stickers/sticker3.svg"
          };
        case "sticker4":
          return {
            // positionClass:
            // "bottom-2/3 -left-10 transform -translate-x-1/2 translate-y-1/2 scale-125",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-20",
            uri: "/images/stickers/sticker4.svg"
          };
        case "sticker5":
          return {
            // positionClass:
            // "bottom-1/10 -right-0 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-24",
            uri: "/images/stickers/sticker5.svg"
          };
        case "sticker6":
          return {
            // positionClass:
            // "bottom-1/3 -right-12 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-0",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-11",
            uri: "/images/stickers/sticker6.svg"
          };
        case "sticker7":
          return {
            // positionClass:
            // "-top-10 -left-16 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-6",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-24",
            uri: "/images/stickers/sticker7.svg"
          };
        case "sticker8":
          return {
            // positionClass:
            // "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-20",
            uri: "/images/stickers/sticker8.svg"
          };
        case "sticker9":
          return {
            // positionClass:
            // "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-24",
            uri: "/images/stickers/sticker9.svg"
          };
        case "sticker10":
          return {
            // positionClass:
            // "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-24",
            uri: "/images/stickers/sticker10.svg"
          };
        case "sticker11":
          return {
            // positionClass:
            // "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-16",
            uri: "/images/stickers/sticker11.svg"
          };
        case "sticker12":
          return {
            // positionClass:
            // "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-30",
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-24",
            uri: "/images/stickers/sticker12.svg"
          };
        default:
          return {
            positionClass: this.attributesAtIndex(this.index).positionClass,
            sizeClass: "w-24",
            uri: "/images/stickers/sticker1.svg"
          };
      }
    }
  }
};
</script>

<style lang="css"></style>
