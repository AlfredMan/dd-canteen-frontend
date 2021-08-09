<template>
  <div
    ref="stickerRef"
    v-if="sticker"
    :class="[
      `block-sticker absolute z-50 transform -translate-x-1/2 -translate-y-1/2`,
      `right-[762px]___right-10___right-10/100___right-4___p-1`,
      `top-[${!!sticker.fields.topMobile&&Number(sticker.fields.topMobile)}%]`,
      `left-[${!!sticker.fields.leftMobile&&Number(sticker.fields.leftMobile)}%]`,
      `lg:top-[${!!sticker.fields.top&&Number(sticker.fields.top)}%]`,
      `lg:left-[${!!sticker.fields.left&&Number(sticker.fields.left)}%]`,
    ]"
    :style="[
      {
        top: !!sticker.fields.top&&`${Number(sticker.fields.top)}%` || `0%`,
        left: !!sticker.fields.left&&`${Number(sticker.fields.left)}%` || `0%`,
      }
    ]"
  >
    
    <div
      class="transform transition duration-500 hover:rotate-30"
    >
      <lazy-image :src="stickerUrl(sticker)" 
      :w="200" 
      :effect="'none'"
      :style="[
        {
          width: `180px`,
          transform: `rotate(${!!sticker.fields.rotation&&Number(sticker.fields.rotation)||0}deg) scale(${!!sticker.fields.scale&&Number(sticker.fields.scale)/100||1})`,
        }  
      ]"
      />
    </div>
  </div>
</template>

<script>
// https://greensock.com/forums/topic/26104-nuxt-gsapdraggable-cannot-use-import-statement-outside-a-module/
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

if (process.client) {
  gsap.registerPlugin(Draggable);
}
export default {
  name: "BlockStickers",
  props: [
    'sticker'
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
  },

  methods: {
    stickerUrl (sticker) {
      let url = !!sticker && sticker.fields.assets[0].fields.file.url || ''
      return url
    }
  }
};
</script>

<style lang="css"></style>
