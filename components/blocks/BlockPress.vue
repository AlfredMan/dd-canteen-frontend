<template>
  <section class="block-press"
  v-if="block"
  >
    <div
    v-if="block.fields.heading || block.fields.subheading"
    class="block-press-header"
    >
      <div v-if="block.fields.heading">
        <h2>
          {{block.fields.heading}}
        </h2>
      </div>
    </div>
    <div
    class="block-press--contentList"
    >
      <component
      v-for="press in block.fields.press"
      :key="press.sys.id"
      :is="press.fields.link?'A':'DIV'"
      :href="press.fields.link?press.fields.link:undefined"
      :target="press.fields.link?'_blank':undefined"
      class="block-press--contentList--content"
      >
        <h4 v-if="press.fields.source" class="source">
          {{press.fields.source}}
        </h4>
        <h4 v-if="press.fields.title" class="title">
          {{press.fields.title}}
        </h4>
        <h4 v-if="press.fields.date" class="date">
          {{formatDate(press.fields.date)}}
        </h4>

      </component>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
export default {
  props: ['block'],
  methods: {
    formatDate (date) {
      return moment(date).format('D MMMM YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  @apply px-6 py-16;
  @media (min-width: 1024px) {
    @apply pt-12 pb-4;
  }
}
.block-press-header {
  @apply mb-8 px-3;
  // @apply pb-4;
  @apply cap-max-w;

  h2 {
    @apply max-w-2xl
  }
  h4 {
    @apply max-w-3xl font-thin;
  }

}

.block-press--contentList {
  @apply flex flex-wrap items-baseline;
  @apply mb-8;
  @apply -mx-2;
  @apply px-2;
  @apply cap-max-w;

  .block-press--contentList--content {
    @apply px-2 w-full flex flex-wrap justify-between;

    &:hover {
      @apply text-green;
    }

    @apply border-t border-black py-4;
    // &:last-child {
    //   @apply border-b;
    // }

    h4 {
      @apply font-normal max-w-2xl my-0;
    }

    .source {
      @apply text-2xl;
      @apply uppercase;
      @apply w-full;
      @screen md {
        @apply w-3/12;
      };
      overflow: hidden;
    }
    .title {
      @apply text-2xl;
      @apply w-full;
      @screen md {
        @apply w-7/12;
      };
      overflow: hidden;
    }
    .date {
      @apply text-2xl;
      @apply uppercase;
      @apply w-full;
      @screen md {
        @apply w-2/12;
      };
      overflow: hidden;
    }
  }
}
</style>
