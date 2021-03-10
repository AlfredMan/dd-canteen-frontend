<template>
  <section
  v-if="block"
  class="block-page-header"
  :class="[blockThemeClass]"
  >

    <div
    class="block-page-header-content">

      <div
      class="cap-max-w-px-3 flex flex-wrap"
      :class="{
        'block-page-header-has-image': (block.fields.imageAsset && block.fields.imageAsset[0]) || (block.fields.embedAsset && block.fields.embedAsset[0])
        }"
      >

        <div
        class="block-page-header-text"
        >
          <h1 class="hyphens" v-if="block.fields.heading">{{formattedHeading}}</h1>
          <div class="flex flex-wrap items-baseline">
            <h4 class="" v-if="block.fields.subheading">{{block.fields.subheading}}</h4>
            <h5 class="" v-if="block.fields.minorSubheading">{{block.fields.minorSubheading}}</h5>
            <h6 class="mt-0" v-if="block.fields.disclaimer">{{block.fields.disclaimer}}</h6>
          </div>
          <callToAction
          v-if="block.fields.callToAction"
          :callToAction="block.fields.callToAction"
          :theme="ctaTheme"
          />
        </div>

        <div
        class="block-page-header-image"
        >

          <div class="" v-if="block.fields.embedAsset && block.fields.embedAsset[0]">
            <div class="block-page-header-embed-code">
              <div class="ratio-container">
                <div class="iframe-wrapper" v-html="getEmbedCode">
                </div>
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

    </div>

  </section>
</template>

<script>
// import ComponentCallToAction from '~/components/blocks/ComponentCallToAction'
import _ from 'lodash'
export default {
  props: ['block'],

  mounted () {
    // console.log('this.block: ', this.block)
    // console.log('this.blockTheme: ', this.blockTheme)
  },

  computed: {
    formattedHeading () {
      if (!this.block) return;
      let heading = this.block && this.block.fields.heading
      // if (heading=='Architecture') {
      //   if (process.client) {
      //     if (window.innerWidth < 400) {
      //       return 'Architect-ure'
      //     }
      //   }
      // }
      return heading
    },
    blockTheme () {
      return this.block && _.lowerCase(this.block.fields.theme) || 'default'
    },
    blockThemeClass () {
      return `theme-${this.blockTheme}`
    },
    ctaTheme () {
      if (this.block) {
        switch (this.blockTheme) {
          case 'yellow':
          case 'green':
          case 'orange':
            return 'black'
          default:
            return 'default'
        }
      }
      return 'default'
    },
    getEmbedCode( ) {
      if (this.block
        && this.block.fields.embedAsset
        && this.block.fields.embedAsset[0]
        && this.block.fields.embedAsset[0].fields.embedCode
        && this.block.fields.embedAsset[0].fields.embedCode.content[0].content[0].value
      ) {
        return this.block.fields.embedAsset[0].fields.embedCode.content[0].content[0].value
      }
      return ''
    }
  }
  // components: { ComponentCallToAction }
}
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
    @apply bg-yellow;
    background: hsl(54, 100%, 50%);
  }
  .block-page-header-content {
    @apply px-4 pt-24 pb-12;
    @screen lg {
      @apply pb-12;
      @apply cap-max-w px-4 ;
      overflow-x: hidden;
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
      @apply mt-0;
      @apply w-5/12
    };
    @screen mobile {
      @apply mt-8;
      @apply mb-8
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
