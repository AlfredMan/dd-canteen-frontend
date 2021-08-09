<template>

  <div
    class="block-list--contentList--content relative"
    :class="[
      `contentDisplay-${contentDisplay}`,
      {
        'w-full lg:w-1/4 xl:w-1/4': contentDisplay == '4-column'
      },
      {
        'w-full lg:w-1/3 xl:w-1/3': contentDisplay == '3-column'
      },
      {
        'w-full lg:w-1/2 xl:w-1/2': contentDisplay == '2-column'
      }
    ]"
  >

    <!-- <div v-if="content.fields.callToAction&&content.fields.callToAction.fields.path">{{content.fields.callToAction.fields.path}}</div> -->
    <template
      v-if="content.fields.imageAsset && content.fields.imageAsset[0]"
    >
      <transition-link
        v-if="content.fields.callToAction && content.fields.callToAction.fields.path"
        class="block-list--contentList--content--image mb-1 relative"
        :to="content.fields.callToAction.fields.path"
      >
        <lazy-image
          class="transition-source"
          :src="content.fields.imageAsset[0].fields.file.url"
          :w="1000"
        />
        <span class="absolute inset-0 sticker-group" 
        v-if="content.fields.stickers"
        >
          <BlockStickers
            v-for="(sticker) in content.fields.stickers"
            :key="sticker.sys.id"
            :sticker="sticker"
          />
        </span>
      </transition-link>

      <div class="block-list--contentList--content--image mb-1 relative" v-else>
        <lazy-image
          :src="content.fields.imageAsset[0].fields.file.url"
          :w="1000"
        />
        <span class="hidden lg:block absolute inset-0 sticker-group" 
        v-if="content.fields.stickers"
        >
          <BlockStickers
            v-for="(sticker) in content.fields.stickers"
            :key="sticker.sys.id"
            :sticker="sticker"
          />
        </span>
      </div>
    </template>

    <template
      v-if="content.fields.callToAction && content.fields.callToAction.fields.path"
    >
      <nuxt-link :to="content.fields.callToAction.fields.path">
        <h4 v-if="content.fields.heading" class="uppercase mb-3 font-normal max-w-2xl">
          {{ content.fields.heading }}
        </h4>
      </nuxt-link>
    </template>
    <template v-else>
      <h4 v-if="content.fields.heading" class="uppercase mb-3 font-normal max-w-2xl">
        {{ content.fields.heading }}
      </h4>
    </template>

    <div
      v-if="content.fields.description"
      class="content-fields-description my-2 max-w-2xl"
      v-html="markdown(content.fields.description)"
    ></div>
  </div>

</template>

<script>
import _ from "lodash";
import BlockStickers from "~/components/blocks/BlockStickers";
export default {
  props: ["content", "contentDisplay"],
  components: { BlockStickers },
  methods: {
    contentStickersPosition(content) {
      return content?.fields?.stickersPosition ?? "AroundHeader";
    }
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>
.block-list--contentList--content {
  // @apply mb-8 pr-0;
  // @screen lg {
  //   @apply px-2;
  // }

  // .block-list--contentList--content--image {
  //   // @apply mb-4;
  // }

  h4 {
    // @apply uppercase mb-2 font-normal max-w-2xl;
  }
  a:hover h4 {
    @apply text-green;
  }

  // .content-fields-description {
  //   // white-space: pre;
  //   @apply my-2 max-w-2xl;
  //   p {
  //     // @apply my-2 max-w-2xl;
  //   }
  // }
}
</style>
