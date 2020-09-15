<template>
  <section
  v-if="block"
  class="block-banner"
  :class="[
    `bannerStyle-${bannerStyle}`
  ]"
  >
    <component
    :is="bannerStyle=='Full'?'DIV':'DIV'"
    :to="bannerStyle=='Full'&&block.fields.callToAction.fields.path?block.fields.callToAction.fields.path:undefined"
    class="block-banner-header"
    >
      <h2 v-if="block.fields.heading">{{block.fields.heading}}</h2>
      <h4 v-if="block.fields.subheading">{{block.fields.subheading}}</h4>
      <callToAction v-if="block.fields.callToAction && bannerStyle=='Default'" :callToAction="block.fields.callToAction"/>
    </component>
    <div class="block-banner-media">
      <lazy-image
        class="block-banner-media-image"
        v-if="block.fields.imageAsset && block.fields.imageAsset[0]"
        :src="block.fields.imageAsset[0].fields.file.url"
        :w="2000"
        />
    </div>
  </section>
</template>

<script>
export default {
  props: ['block'],
  // components: { ComponentCallToAction }
  computed: {
    bannerStyle () {
      return this.block && this.block.fields.bannerStyle || 'Default'
    },
  }
}
</script>

<style lang="scss" scoped>
section {
  @apply px-6 py-16;
  @media (min-width: 1024px) {
    @apply pt-16 pb-4;
  }

  @apply relative;

  &.bannerStyle-Default,
  &.bannerStyle-Reverse {
    @apply flex flex-wrap;
    .block-banner-header,
    .block-banner-media {
      @apply w-full;
      @media (min-width: 1024px) {
        @apply w-1/2;
      }
    }
  }

  &.bannerStyle-Reverse {
    @apply p-0;
    @media (min-width: 1024px) {
      @apply p-0;
    }

    @media (min-width: 1024px) {
      .block-banner-header {
        @apply order-2;
      }
      .block-banner-media {
        @apply order-1;
      }
    }
  }

  &.bannerStyle-Full {
    @apply overflow-hidden;
    @apply p-0 py-0  pb-0;
    @media (min-width: 1024px) {
      @apply p-0 py-0 pb-0;
    }

    .block-banner-header {
      @apply bg-green bg-opacity-100 text-opacity-100 transition-all duration-300;
      @apply px-6 py-16 mb-0;
      mix-blend-mode: multiply;

      @media (min-width: 1024px) {
        @apply pt-16 pb-16;
        min-height: 500px;
      }

      &:hover {
        @apply bg-opacity-25 text-opacity-0;

        + .block-banner-media {
          filter: blur(0);
        }
      }
    }

    .block-banner-media {
      @apply absolute z-0 inset-0;
      filter: blur(30px);

      .block-banner-media-image {
        @apply w-full h-full object-cover object-center;
      }
    }
  }
}

.block-banner-header {
  @apply block mb-12 relative z-10;

  h2 {
    @apply max-w-3xl;
  }
  h4 {
    @apply max-w-3xl;
  }
}
</style>
