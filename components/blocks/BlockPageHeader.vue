<template>
  <section
    v-if="block"
    class="block-page-header"
    :class="[blockThemeClass, blockGuidelineClass]"
  >
    <div class="block-page-header-content relative">
      <div
        class="cap-max-w-px-3 flex flex-wrap"
        :class="{
          'block-page-header-has-image':
            (block.fields.imageAsset && block.fields.imageAsset[0]) ||
            (block.fields.embedAsset && block.fields.embedAsset[0])
        }"
      >
        <div class="block-page-header-text">
          <div class="header-sticker-group relative">
            <h1
              :class="[
                `hyphens inline-block relative`,
                {
                  'lg:w-10/12': isGuidelineDefault,
                  'lg:w-6/12': isGuidelineCanteen
                }
              ]"
              v-if="block.fields.heading"
            >
              <!-- force inject -->
              <span
                v-if="formattedHeading == 'Design District Canteen'"
                class="inline-block w-10/12 lg:w-8/12"
              >
                <LogoCanteen />
              </span>

              <span v-else>{{ formattedHeading }}</span>

              <div v-if="!stickerSpreadAcross" class="sticker-group">
                <BlockSticker
                  v-for="(stickerId, index) in stickers"
                  :key="stickerId"
                  :stickerId="stickerId"
                  :block="block"
                  :index="index"
                  :stickerSpreadAcross="stickerSpreadAcross"
                />
              </div>
            </h1>
          </div>
          <div class="flex flex-wrap items-baseline">
            <h4 class="" v-if="block.fields.subheading">
              {{ block.fields.subheading }}
            </h4>
            <h5 class="" v-if="block.fields.minorSubheading">
              {{ block.fields.minorSubheading }}
            </h5>
            <h6 class="mt-0" v-if="block.fields.disclaimer">
              {{ block.fields.disclaimer }}
            </h6>
          </div>
          <callToAction
            v-if="block.fields.callToAction"
            :callToAction="block.fields.callToAction"
            :theme="ctaTheme"
          />
        </div>

        <div class="block-page-header-image">
          <div
            class=""
            v-if="block.fields.embedAsset && block.fields.embedAsset[0]"
          >
            <div class="block-page-header-embed-code">
              <div class="ratio-container">
                <div class="iframe-wrapper" v-html="getEmbedCode"></div>
              </div>
            </div>
          </div>

          <lazy-image
            class="block-banner-media-image"
            v-else-if="block.fields.imageAsset && block.fields.imageAsset[0]"
            :src="block.fields.imageAsset[0].fields.file.url"
            :w="2000"
          />
        </div>
      </div>
      <div v-if="stickerSpreadAcross" class="sticker-group">
        <BlockSticker
          v-for="(stickerId, index) in stickers"
          :key="stickerId"
          :stickerId="stickerId"
          :block="block"
          :index="index"
          :spreadAcross="stickerSpreadAcross"
        />
      </div>
    </div>
  </section>
</template>

<script>
// import ComponentCallToAction from '~/components/blocks/ComponentCallToAction'
import BlockSticker from "~/components/blocks/BlockSticker";
import LogoCanteen from "~/components/logo/Canteen";
import _ from "lodash";

import { shuffleArray } from "~/common/utils";
export default {
  props: ["block"],

  mounted() {
    console.log("this.block: ", this.block);
    // console.log('this.blockTheme: ', this.blockTheme)
  },

  components: {
    BlockSticker,
    LogoCanteen
  },
  computed: {
    stickerSpreadAcross() {
      return this.block.fields?.stickerDisplay?.includes("SpreadAcross");
    },
    stickers() {
      if (!this.block) return [];
      return shuffleArray(this.block.fields?.stickers || []);
    },
    formattedHeading() {
      if (!this.block) return;
      let heading = this.block && this.block.fields.heading;
      // if (heading=='Architecture') {
      //   if (process.client) {
      //     if (window.innerWidth < 400) {
      //       return 'Architect-ure'
      //     }
      //   }
      // }
      return _.trim(heading);
    },
    blockTheme() {
      return (this.block && _.lowerCase(this.block.fields.theme)) || "default";
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
    ctaTheme() {
      if (this.block) {
        switch (this.blockTheme) {
          case "yellow":
          case "green":
          case "orange":
            return "black";
          default:
            return "default";
        }
      }
      return "default";
    },
    getEmbedCode() {
      if (
        this.block &&
        this.block.fields.embedAsset &&
        this.block.fields.embedAsset[0] &&
        this.block.fields.embedAsset[0].fields.embedCode &&
        this.block.fields.embedAsset[0].fields.embedCode.content[0].content[0]
          .value
      ) {
        return this.block.fields.embedAsset[0].fields.embedCode.content[0]
          .content[0].value;
      }
      return "";
    }
  }
  // components: { ComponentCallToAction }
};
</script>

<style lang="scss" scoped>
section {
  // @apply px-4 mt-24;
  // @screen lg {
  //   @apply pb-4;
  //   @apply cap-max-w px-4 ;
  //   overflow-x: hidden;
  // }
}
.block-page-header {
  &.theme-orange {
    @apply bg-orange;
  }
  &.theme-yellow {
    background: hsl(54, 100%, 50%);
  }
  .block-page-header-content {
    @apply px-4 pt-24 pb-12;
    @screen lg {
      @apply pb-12;
      @apply cap-max-w px-4;
      // overflow-x: hidden; // Jason: Alfred updated this to visible for Sticker
      overflow: visible;
    }
  }
}
// section {
//   overflow-x: hidden;
//   @apply p-4 mt-24;
// }
.block-page-header-text {
  // @apply flex flex-wrap;
  @apply w-full;

  .block-page-header-has-image & {
    @apply w-full;
    @screen lg {
      @apply w-7/12;
    }
    @screen mobile {
      @apply mb-8;
    }
  }
}
.block-page-header-image {
  .block-page-header-has-image & {
    @apply w-full;
    @screen lg {
      @apply mt-0;
      @apply w-5/12;
    }
    @screen mobile {
      @apply mt-8;
      @apply mb-8;
    }
  }
}

.block-page-header-embed-code {
  .ratio-container {
    width: 100%;
    padding-bottom: 66%;
    position: relative;
    // top: 50%;
    // transform: translateY(-50%);
  }
  .iframe-wrapper {
    display: block;
    @apply absolute inset-0;
    width: 100%;
    iframe {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

h1 {
  @apply -mt-4;
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
