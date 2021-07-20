<template>
  <section
    ref="stickerRef"
    v-if="stickerId && block"
    :class="[
      `block-sticker absolute ${
        +index === 0 ? 'top-0 right-0 ' : '-bottom-16 -left-16'
      }`
    ]"
  >
    <!-- <lazy-image :src="stickerUrl(stickerId)" :w="50" width="50px" /> -->
    <img :src="stickerUrl(stickerId)" :class="[`w-32  ${positionClass}`]" />
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
    positionClass() {
      switch (this.index) {
        case 0:
          return `top-0 right-0`;
        case 1:
          return `bottom-0 left-0`;
        default:
          return `top-0 right-0`;
      }
    }
  },
  methods: {
    stickerUrl(stickerId) {
      switch (this.stickerId) {
        case "sticker1":
          return "/images/stickers/sticker1.svg";
        case "sticker2":
          return "/images/stickers/sticker2.svg";
        case "sticker3":
          return "/images/stickers/sticker3.svg";
        case "sticker4":
          return "/images/stickers/sticker4.svg";
        case "sticker5":
          return "/images/stickers/sticker5.svg";
        case "sticker6":
          return "/images/stickers/sticker6.svg";
        case "sticker7":
          return "/images/stickers/sticker7.svg";
        case "sticker8":
          return "/images/stickers/sticker8.svg";
        case "sticker9":
          return "/images/stickers/sticker9.svg";
        case "sticker10":
          return "/images/stickers/sticker10.svg";
        case "sticker11":
          return "/images/stickers/sticker11.svg";
        case "sticker12":
          return "/images/stickers/sticker12.svg";
        default:
          return "";
      }
    }
  }
};
</script>

<style lang="css"></style>
