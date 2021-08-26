<template>
  <section
    v-if="block"
    class="block-list relative overflow-x-hidden overflow-y-visible"
    :class="[
      blockThemeClass, 
      blockGuidelineClass,
    ]"
    :id="blockId"
  >
    
    <div :class="[
        {
          'lg:flex cap-max-w': contentDisplay == 'vertical',
        }
      ]">

      <div
        v-if="block.fields.heading || block.fields.subheading"
        class="block-list-header relative"
        :class="{
          'headingDisplay--Right': headingDisplay == 'Right',
          'flex flex-wrap': headingDisplay == 'Right',
          'items-baseline': headingDisplay == 'Right' && (block.fields.heading && block.fields.heading.length < 30),
          'items-start': headingDisplay == 'Right' && !(block.fields.heading && block.fields.heading.length < 30),
          'lg:w-5/12': contentDisplay == 'vertical'
        }"
      >
        <span class="absolute block inset-x-16 inset-y-12 lg:inset-y-24 lg:inset-x-8 sticker-group" 
          v-if="block.fields.stickers"
          >
          <BlockStickers
            v-for="(sticker) in block.fields.stickers"
            :key="sticker.sys.id"
            :sticker="sticker"
          />
        </span>
        <div v-if="block.fields.stickers" class="block h-64 lg:hidden">

        </div>

        <div
          v-if="block.fields.heading"
          :class="{ 'w-full lg:w-5/12 lg:pr-4': headingDisplay == 'Right' }"
        >
          <h2 class="inline-block relative hyphen" lang="en" v-html="markdown(block.fields.heading, {renderInline:true})">
            <!-- {{ block.fields.heading }} -->
          </h2>
        </div>
        <div
          v-if="block.fields.subheading"
          :class="{ 
            'w-full lg:w-7/12': headingDisplay == 'Right',
            'lg:pr-8': contentDisplay == 'vertical',
            'lg:mt-20 lg:pt-2 xl:pt-5 xl:mt-20': headingDisplay == 'Right' && !(block.fields.heading && block.fields.heading.length < 30),
            }"
        >
          <h4 class="font-medium max-w-3xl hyphen" lang="en" v-html="markdown(block.fields.subheading, {renderInline:true})">
            <!-- {{ block.fields.subheading }} -->
          </h4>
          <callToAction
            v-if="block.fields.callToAction"
            :callToAction="block.fields.callToAction"
          />
        </div>
      </div>

      <div
        v-if="block.fields.contentList && block.fields.contentList.length > 0 && contentDisplay == 'carousel'" 
      >
        <div 
        class="row d-flex align-items-end pt-5">
          <image-slideshow 
          class="w-100 my-5 carousel"
          >
            <BlockListCard
              v-for="content in block.fields.contentList"
              :key="content.sys.id"
              :content="content"
              :contentDisplay="contentDisplay"
              :class="[`item my-8 lg:my-12 lg:px-3 w-8/12 lg:w-1/4`]"
            />
          </image-slideshow>
        </div>
      </div>
      <div
        v-else
        :class="[
          `block-list--contentList`,
          {
            'lg:w-7/12 lg:pt-0 xl:pt-0': contentDisplay == 'vertical',
          }
        ]"
      >
        <div class=" w-full">
          <div
          :class="[
          {
            'flex flex-wrap items-baseline lg:-mx-3': contentDisplay !== 'vertical',
            'lg:-mx-3': contentDisplay == 'vertical',
            'flex flex-wrap': contentDisplay == '4-column'
          }]"
          >
            <BlockListCard
            v-for="content in block.fields.contentList"
            :key="content.sys.id"
            :content="content"
            :contentDisplay="contentDisplay"
            :class="[`mb-12 lg:mb-12 lg:px-3`]"
          />
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import _ from "lodash";
import BlockStickers from "~/components/blocks/BlockStickers";
import BlockListCard from "~/components/blocks/BlockListCard"
export default {
  props: ["block"],
  components: { BlockStickers, BlockListCard },
  methods: {
    contentStickersPosition(content) {
      return content?.fields?.stickersPosition ?? "AroundHeader";
    }
  },
  computed: {
    stickerSpreadAcross() {
      return this.block.fields?.stickerDisplay?.includes("SpreadAcross");
    },
    stickersPosition() {
      return this.block.fields?.stickersPosition ?? "AroundHeader";
    },
    headingDisplay() {
      return (this.block && this.block.fields.headingDisplay) || "Default";
    },
    contentDisplay() {
      return (this.block && this.block.fields.columns) || "4-column";
    },
    blockTheme() {
      // return this.block && _.lowerCase(this.block.fields.theme) || 'default'
      return (
        (this.block && this.block?.fields?.theme?.toLowerCase()) || "default"
      );
    },
    blockThemeClass() {
      return `theme-${this.blockTheme} bg-${this.blockTheme}`;
    },
    blockGuideline() {
      return (
        (this.block && _.lowerCase(this.block.fields.guideline)) || "default"
      );
    },
    blockGuidelineClass() {
      return `guideline-${this.blockGuideline}`;
    },
    isGuidelineCanteen() {
      return this.blockGuideline && this.blockGuideline == "canteen";
    },
    isGuidelineDefault() {
      return (
        !this.blockGuideline ||
        this.blockGuideline == "default" ||
        this.blockGuideline == "designdistrict"
      );
    },
    blockId() {
      return this.block.fields.heading
        ? _.kebabCase(this.block.fields.heading)
        : "";
    },
    isStickerAroundHeadingWidthOnly() {
      return !this.stickersPosition || this.stickersPosition === "AroundHeader";
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  @apply px-1 py-8;
  @media (min-width: 1024px) {
    @apply pt-12 pb-4;
  }
}
.block-list {
  &.theme-light {
    @apply bg-gray-100;
  }
  &.theme-dark {
    @apply bg-black;
  }
}
.block-list-header {
  @apply mb-8;
  // @apply pb-4;
  @apply cap-max-w px-3;

  @apply overflow-x-visible;

  h2 {
    @apply max-w-4xl;
  }
  h4 {
    @apply max-w-4xl font-thin;
  }

  h2,
  h4 {
    .theme-dark & {
      @apply text-white;
    }
  }
}

.block-list--contentList {
  @apply mb-4;
  @apply px-3;
  @apply cap-max-w;
  // start: Jason:: Alfred added overflow-x-visible here for stickers to be visible around image parent container
  @apply overflow-x-visible;
  // @apply overflow-hidden;
  // end: Alfred added overflow-x-visible here for stickers to be visible around image parent container
  // @apply overflow-x-hidden;

  // .block-list--contentList--content {
  //   @apply mb-8 pr-0;
  //   @screen lg {
  //     @apply px-2;
  //   }

  //   .block-list--contentList--content--image {
  //     @apply mb-4;
  //   }

  //   h4 {
  //     @apply uppercase mb-2 font-normal max-w-2xl;
  //   }
  //   a:hover h4 {
  //     @apply text-green;
  //   }

  //   .content-fields-description {
  //     // white-space: pre;
  //     @apply my-2 max-w-2xl;
  //     p {
  //       // @apply my-2 max-w-2xl;
  //     }
  //   }
  // }
}
</style>
