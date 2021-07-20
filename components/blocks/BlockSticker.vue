<template>
  <section
    v-if="stickerId && block"
    :class="[
      `block-sticker absolute ${
        +index === 0 ? 'top-0 right-0' : 'bottom-0 left-0'
      }`
    ]"
  >
    <!-- <lazy-image :src="stickerUrl(stickerId)" :w="50" width="50px" /> -->
    <img :src="stickerUrl(stickerId)" class="w-32"/>
  </section>
</template>

<script>
export default {
  name: "BlockSticker",
  props: ["block", "stickerId", "parentRef","index"],
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
