<template>
  <section class="block-list" v-if="block">
    <div class="block-list-header"
    :class="{
      'headingDisplay--Right': headingDisplay=='Right',
      'flex flex-wrap items-baseline':headingDisplay=='Right'
      }"
    >
      <div :class="{'w-full xl:w-5/12':headingDisplay=='Right'}">
        <h2 v-if="block.fields.heading">
          {{block.fields.heading}}
        </h2>
      </div>
      <div :class="{'w-full xl:w-7/12':headingDisplay=='Right'}">
        <h4 class="font-medium max-w-3xl" v-if="block.fields.subheading">
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
        <div class="" v-if="content.fields.imageAsset && content.fields.imageAsset[0]">
          <!-- {{content.fields.imageAsset}} -->
          <lazy-image
          :src="content.fields.imageAsset[0].fields.file.url"
          :w="1000"
          />
        </div>
        <h4 class="">
          {{content.fields.heading}}
        </h4>
        <p class="">
          {{content.fields.description}}
        </p>

        <callToAction
        v-if="content.fields.callToAction"
        :callToAction="content.fields.callToAction"
        :theme="'default'"
        :format="'inline'"
        />

      </div>
    </div>

    <!-- <pre>{{block.fields}}</pre> -->

  </section>
</template>

<script>

export default {
  props: ['block'],

  computed: {
    headingDisplay () {
      return this.block && this.block.fields.headingDisplay || 'Default'
    },
    contentDisplay () {
      return this.block && this.block.fields.columns || '4-column'
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  @apply px-6 py-16;
  @media (min-width: 1024px) {
    @apply pt-16 pb-4;
  }
}
.block-list-header {
  @apply mb-12;

  h2 {
    @apply max-w-2xl
  }
  h4 {
    @apply max-w-3xl
  }

}

.block-list--contentList {
  @apply flex flex-wrap items-baseline;
  @apply mt-12;
  @apply -mx-2;

  .block-list--contentList--content {
    @apply px-2 mb-6;

    h4 {
      @apply uppercase mt-4 mb-2 font-medium;
    }
    p {
      @apply my-2 font-medium;
    }
  }
}
</style>
