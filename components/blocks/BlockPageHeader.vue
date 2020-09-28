<template>
  <section class="block-page-header" v-if="block">
    <div
    class="cap-max-w px-3 flex flex-wrap"
    :class="{ 'block-page-header-has-image': block.fields.imageAsset && block.fields.imageAsset[0] }"
    >

      <div
      class="block-page-header-text"
      >
        <h1 v-if="block.fields.heading">{{block.fields.heading}}</h1>
        <div class="flex flex-wrap items-baseline">
          <h4 class="" v-if="block.fields.subheading">{{block.fields.subheading}}</h4>
          <h5 class="" v-if="block.fields.minorSubheading">{{block.fields.minorSubheading}}</h5>
        </div>
        <callToAction v-if="block.fields.callToAction" :callToAction="block.fields.callToAction"/>
      </div>
      <div
      class="block-page-header-image"
      >
        <lazy-image
          class="block-banner-media-image"
          v-if="block.fields.imageAsset && block.fields.imageAsset[0]"
          :src="block.fields.imageAsset[0].fields.file.url"
          :w="2000"
          />
      </div>

    </div>
  </section>
</template>

<script>
// import ComponentCallToAction from '~/components/blocks/ComponentCallToAction'
export default {
  props: ['block'],
  // components: { ComponentCallToAction }
}
</script>

<style lang="scss" scoped>
section {
  overflow-x: hidden;
  @apply p-4 mt-24;
}
.block-page-header-text {
  // @apply flex flex-wrap;
  @apply w-full;

  .block-page-header-has-image & {
    @apply w-full;
    @screen lg {
      @apply w-7/12
    };
    @screen mobile {
      @apply mb-8
    }
  }
}
.block-page-header-image {
  .block-page-header-has-image & {
    @apply w-full;
    @screen lg {
      @apply w-5/12
    };
    @screen mobile {
      @apply mb-8
    }
  }
}
h4 {
  @apply max-w-2xl w-full mt-0 pr-0 font-light;

  @screen lg {
    @apply w-5/12 pr-6 #{!important};

    .block-page-header-has-image & {
      @apply w-full #{!important};
    }
  }
}
h5 {
  @apply max-w-2xl w-full mt-0 pr-0 font-light leading-7;

  @screen lg {
    @apply w-5/12 pr-6 #{!important};
    .block-page-header-has-image & {
      @apply w-full #{!important};
    }
  }
}
</style>
