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
  props: ["block", "stickerId", "parentRef", "index"],
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
  },
  computed: {
    sticker() {
      return this.stickerWithId(this.stickerId);
    }
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
  },
  methods: {

    attributesAtIndex(i) {
      switch (i) {
        case 0:
          return {
            positionClass:
              "top-0 -right-10 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12"
          };
        case 1:
          return {
            positionClass:
              "bottom-0 -left-9 transform -translate-x-1/2 translate-y-1/2 scale-125 -rotate-30"
          };
        case 2:
          return {
            positionClass:
              "top-1/20 -right-5 transform -translate-x-1/2 translate-y-1/2 scale-125 -rotate-6"
          };
        case 3:
          return {
            positionClass:
              "bottom-2/3 -left-10 transform -translate-x-1/2 translate-y-1/2 scale-125"
          };
        case 4:
          return {
            positionClass:
              "bottom-1/10 -right-0 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12",
            sizeClass: "w-24",
            uri: "/images/stickers/sticker5.svg"
          };
        case 5:
          return {
            positionClass:
              "bottom-1/3 -right-12 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-0"
          };
        case 6:
          return {
            positionClass:
              "-top-10 -left-16 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-6"
          };
        case 7:
          return {
            positionClass:
              "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125",
            sizeClass: "w-20",
            uri: "/images/stickers/sticker8.svg"
          };
        case 8:
          return {
            positionClass:
              "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125"
          };
        case 9:
          return {
            positionClass:
              "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125"
          };
        case 10:
          return {
            positionClass:
              "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125"
          };
        case 11:
          return {
            positionClass:
              "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-30"
          };
        default:
          return {
            positionClass:
              "top-0 -right-10 transform -translate-x-1/2 translate-y-1/2 scale-125 rotate-12"
          };
      }
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
    },
  }
};
</script>

<style lang="css"></style>
