<template>
  <section
  v-if="block"
  class="block-banner"
  :class="{
    'bannerStyle-Default': bannerStyle=='Default' || !bannerStyle,
    'bannerStyle-Reverse': bannerStyle=='Reversed',
    'bannerStyle-Full': bannerStyle=='Full',
    'bannerStyle-Text': bannerStyle=='Text',
    'theme-plain': !hasBackground,
    'theme-Default': bannerTheme=='Default' || !bannerTheme,
    'theme-Black': bannerTheme=='Black',
    'theme-Orange': bannerTheme=='Orange',
    'theme-Green': bannerTheme=='Green',
    'theme-White': bannerTheme=='White',
    'theme-Yellow': bannerTheme=='Yellow',
  }"
  >
    <div class="block-banner-header-content-container w-full relative">
      <component
      :is="bannerStyle=='Full'?'DIV':'DIV'"
      :to="bannerTo"
      @click="bannerStaticClick"
      class="block-banner-header"
      :class="{
        'has-popup': hasPopup
      }"
      >
        <div class="cap-max-w w-full">
          <div class="block-banner-header-content" v-if="bannerStyle=='Text'">
            <div class="block-banner-header-content-heading">
              <h2 v-if="block.fields.heading">{{block.fields.heading}}</h2>
            </div>
            <div class="block-banner-header-content-text">
              <h4 v-if="block.fields.subheading">{{block.fields.subheading}}</h4>
              <callToAction
              v-if="block.fields.callToAction"
              :callToAction="block.fields.callToAction"
              />
            </div>
          </div>
          <div class="block-banner-header-content" v-else>
            <h2 v-if="block.fields.heading">{{block.fields.heading}}</h2>
            <h4 v-if="block.fields.subheading">{{block.fields.subheading}}</h4>
            <callToAction
            v-if="block.fields.callToAction && (bannerStyle=='Default')"
            :callToAction="block.fields.callToAction"
            />
          </div>
        </div>
      </component>

      <div class="block-banner-media">
        <div class="popup-trigger" v-if="hasPopup">
          <div class="icon" v-if="popUpOption == 'play'">
            <div class="play-icon">

            </div>
          </div>
        </div>
        <div class="block-banner-media-screen">

        </div>
        <lazy-image
          class="block-banner-media-image"
          v-if="block.fields.imageAsset && block.fields.imageAsset[0]"
          :src="block.fields.imageAsset[0].fields.file.url"
          :w="2000"
          :custom="`fit=thumb`"
          :fit="`cover`"
          />
      </div>

      <div class="block-banner--popup" v-if="hasPopup && openPopup" @click="openPopup = false">
        <div class="block-banner--popup-close" @click="openPopup = false">
          &times;
        </div>
        <div class="block-banner--popup-content">
          <div class="block-banner--popup-video">
            <div class="ratio-container">
              <div class="iframe-wrapper" v-html="popupValue">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['block'],

  data () {
    return {
      openPopup: false
    }
  },

  computed: {
    bannerStyle () {
      return this.block && this.block.fields.bannerStyle || 'Default'
    },
    bannerTheme () {
      return this.block && this.block.fields.theme || `Default`
    },
    hasBackground () {
      return this.block && this.block.fields.imageAsset && this.block.fields.imageAsset[0]
    },
    hasPopup () {
      if (
        this.block.fields.popUpOption
        && this.block.fields.popUpOption == ("Play Video" || "Play")
        && this.block.fields.popUp.fields.embedCode
        && this.block.fields.popUp.fields.embedCode.content[0]
        && this.block.fields.popUp.fields.embedCode.content[0].content[0]
        && this.block.fields.popUp.fields.embedCode.content[0].content[0].value.length > 0
      ) {
        return true
      }
      return false
    },
    bannerTo () {
      if (this.hasPopup) {
        return undefined
      }
      if (this.bannerStyle=='Full') {
        if (this.block.fields.callToAction && this.block.fields.callToAction.fields.path) {
          return this.block.fields.callToAction.fields.path
        }
      }
      return undefined
    },
    popUpOption () {
      if (this.hasPopup) {
        if (this.block.fields.popUpOption == ("Play Video" || "Play")) {
          return 'play'
        }
      }
      return false
    },
    popupValue () {
      if (this.hasPopup) {
        return this.block.fields.popUp.fields.embedCode.content[0].content[0].value
      }
      return ''
    }
  },

  methods: {
    bannerStaticClick () {
      if (this.hasPopup) {
        this.openPopup = true
      }
      return null
    }
  }

}
</script>

<style lang="scss" scoped>
section {
  @apply px-0;
  @media (min-width: 1024px) {
    // @apply pt-16 pb-4;
  }

  @apply relative;

  &.bannerStyle-Default,
  &.bannerStyle-Reverse,
  &.bannerStyle-Text {

    .block-banner-header-content-container {
      @extend .cap-max-w;
      @apply flex flex-wrap;
    }

    .block-banner-header {
      @apply w-full;
      // @media (min-width: 1024px) {
      //   @apply w-1/2;
      // }
    }

    // .block-banner-header,
    // .block-banner-media {
    //   @apply w-full;
    //   @media (min-width: 1024px) {
    //     @apply w-1/2;
    //   }
    // }
    // .block-banner-header-content,
    .block-banner-media {
      @apply w-full;
      @media (min-width: 1024px) {
        @apply w-1/2;
      }
    }

    .block-banner-header-content {
      @apply px-4 py-12 mb-0;

      @media (min-width: 1024px) {
        @apply pt-12 pb-16;
      }
    }
  }

  &.bannerStyle-Text {
    .block-banner-header-content {
      @media (min-width: 1024px) {
        @apply pt-8 pb-12;
      }
      @media (min-width: 1024px) {
        @apply flex flex-wrap w-full max-w-full;

        .block-banner-header-content-heading {
          @apply w-5/12;
        }
        .block-banner-header-content-text {
          @apply w-7/12;
        }
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
      // @apply bg-green bg-opacity-75 text-opacity-100 transition-all duration-300;
      @apply bg-black bg-opacity-50 text-opacity-100 transition-all duration-300;

      .block-banner-header-content {
        @apply px-4 py-12 mb-0;
        // @apply cursor-pointer;
        // mix-blend-mode: multiply;
        // backdrop-filter: blur(12px) contrast(0.8);

        h2, h4 {
          @apply transition duration-300;
        }

        @media (min-width: 1024px) {
          @apply pt-8 pb-16;
          min-height: 500px;
        }
      }


      &.has-popup {
        @apply cursor-pointer;

        &:hover {

          // backdrop-filter: blur(0px) contrast(0.8);
          // @apply bg-opacity-0;
          @apply bg-opacity-25;
          //
          // + .block-banner-media {
          //   filter: blur(0);
          // }
          // h2, h4 {
          //   @apply opacity-0;
          // }
        }
      }
    }

    .block-banner-media {
      @apply absolute z-0 inset-0;
      // filter: blur(12px) brightness(-30%);
      // backdrop-filter: blur(2px);
      // backdrop-filter: brightness(60%);
      // backdrop-filter: contrast(40%);

      .block-banner-media-screen {
        @apply absolute inset-0 z-50;
      }

      .block-banner-media-image {
        @apply absolute inset-0 m-auto;
        @apply w-full h-full object-cover object-center;
      }
    }
  }
}

.block-banner-header {
  @apply block relative z-10;

  h2 {
    @apply max-w-3xl;
  }
  h4 {
    @apply max-w-3xl;
  }

  .block-banner-header-content {

    max-width: 40rem;

    h2,
    h4 {
      @apply text-white;
      .theme-Yellow &,
      .theme-Orange &,
      .theme-plain & {
        @apply text-black;
      }
    }
  }
}

.popup-trigger {
  @apply absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.block-banner--popup {
  @apply bg-black bg-opacity-75;
  @apply fixed inset-0 cursor-pointer;
  z-index: 99999;

  // .block-banner--popup-close {
  //   @apply aboslute;
  // }

  .block-banner--popup-content {

    .block-banner--popup-video {
      .ratio-container {
        width: 90%;
        // padding-bottom: 56.25%;
        position: absolute;
        height: 50vw;
        max-height: 90vh;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        @media (min-aspect-ratio: 3/2) {
          height: 90vh;
          width: 160vh;
        }

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
  }
}

.icon {
  width: 8rem;
  height: 8rem;
  padding: 2rem;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
}
.play-icon {
  transform: translateX(10%) scaleX(0.9);
  box-sizing: border-box;
  width: 4rem;
  height: 4rem;
  border-width: 2rem 0px 2rem 4rem;
  border-width: 2rem 0px 2rem 4rem;
  border-color: transparent transparent transparent white;
}
</style>
