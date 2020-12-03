<template>
  <section
  v-if="block"
  class="block-list"
  :class="[blockThemeClass]"
  :id="blockId"
  >
    <div
    v-if="block.fields.heading || block.fields.subheading"
    class="block-list-header"
    :class="{
      'headingDisplay--Right': headingDisplay=='Right',
      'flex flex-wrap items-baseline':headingDisplay=='Right'
      }"
    >
      <div v-if="block.fields.heading" :class="{'w-full lg:w-5/12':headingDisplay=='Right'}">
        <h2>
          {{block.fields.heading}}
        </h2>
      </div>
      <div v-if="block.fields.subheading" :class="{'w-full lg:w-7/12':headingDisplay=='Right'}">
        <h4 class="font-medium max-w-3xl">
          {{block.fields.subheading}}
        </h4>
        <callToAction v-if="block.fields.callToAction" :callToAction="block.fields.callToAction"/>
      </div>
    </div>

    <div
    class="block-list--contentList"
    :class="{
      'flex flex-wrap': contentDisplay=='4-column'
    }"
    >
      <div
      v-for="content in block.fields.contentList"
      :key="content.sys.id"
      class="block-list--contentList--content"
      :class="[
      `contentDisplay-${contentDisplay}`,
      {
        'w-full lg:w-1/4 xl:w-1/4': contentDisplay=='4-column'
      },
      {
        'w-full lg:w-1/3 xl:w-1/3': contentDisplay=='3-column'
      },
      {
        'w-full lg:w-1/2 xl:w-1/2': contentDisplay=='2-column'
      }]"
      >

        <template v-if="content.fields.imageAsset && content.fields.imageAsset[0]">

          <transition-link
          v-if="content.fields.callToAction && content.fields.callToAction.fields.path"
          class="block-list--contentList--content--image"
          :to="content.fields.callToAction.fields.path">
            <lazy-image
            class="transition-source"
            :src="content.fields.imageAsset[0].fields.file.url"
            :w="1000"
            />
          </transition-link>

          <div class="block-list--contentList--content--image" v-else>
            <lazy-image
            :src="content.fields.imageAsset[0].fields.file.url"
            :w="1000"
            />
          </div>

        </template>

        <template v-if="content.fields.callToAction && content.fields.callToAction.fields.path">
          <nuxt-link :to="content.fields.callToAction.fields.path">
            <h4 v-if="content.fields.heading" class="">
              {{content.fields.heading}}
            </h4>
          </nuxt-link>
        </template>
        <template v-else>
          <h4 v-if="content.fields.heading" class="">
            {{content.fields.heading}}
          </h4>
        </template>

        <div v-if="content.fields.description" class="content-fields-description" v-html="markdown(content.fields.description)">
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import _ from 'lodash'
export default {
  props: ['block'],

  computed: {
    headingDisplay () {
      return this.block && this.block.fields.headingDisplay || 'Default'
    },
    contentDisplay () {
      return this.block && this.block.fields.columns || '4-column'
    },
    blockTheme () {
      return this.block && _.lowerCase(this.block.fields.theme) || 'default'
    },
    blockThemeClass () {
      return `theme-${this.blockTheme}`
    },
    blockId() {
      return this.block.fields.heading ? _.kebabCase(this.block.fields.heading) : ''
    }
  }
}
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

  h2 {
    @apply max-w-2xl
  }
  h4 {
    @apply max-w-3xl font-thin;
  }

  h2, h4 {
    .theme-dark & {
      @apply text-white;
    }
  }

}

.block-list--contentList {
  @apply flex flex-wrap items-baseline;
  @apply mb-4;
  @apply -mx-2;
  @apply px-3;
  @apply cap-max-w;

  .block-list--contentList--content {
    @apply mb-8 pr-0;
    @screen lg {
      @apply px-2;
    }

    .block-list--contentList--content--image {
      @apply mb-4
    }

    h4 {
      @apply uppercase mb-2 font-normal max-w-2xl;
    }
    a:hover h4 {
      @apply text-green;
    }

    .content-fields-description {
      // white-space: pre;
      @apply my-2 max-w-2xl;
      p {
        // @apply my-2 max-w-2xl;
      }
    }
  }
}
</style>
