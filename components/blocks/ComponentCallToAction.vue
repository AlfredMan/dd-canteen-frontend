<template lang="html">
  <nuxt-link
  class="cta"
  :class="{
    'theme-default': theme=='default',
    'theme-black': theme=='black',
    'format-button': format=='button',
    'format-inline': format=='inline'
    }"
  v-if="callToAction && callToAction.fields.path && callToAction.fields.label"
  :to="callToAction.fields.path"
  >
    <span class="label" v-html="callToAction.fields.label"></span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    callToAction: {
      type: Object
    },
    // 'text-color': {
    //   type: String,
    //   default: 'black'
    // },
    // 'bg-color': {
    //   type: String,
    //   default: 'black'
    // }
    theme: {
      type: String,
      default: 'default'
    },
    format: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    ctaClass () {
      return `theme-${this.theme}`, `format-${this.format}`
    }
  }
}
</script>

<style lang="scss" scoped>
.cta {
  @apply inline-block text-black transition duration-300 font-medium;
  span.label {
    @apply uppercase;
  }

  @apply mt-4 px-4 py-3 rounded-sm;
  @apply text-white;
  &:hover {
    @apply text-green;
  }
}
.theme-default {
  @apply text-white;
  &:hover {
    @apply text-green;
  }
}

.theme-black {
  @apply text-white;
  &:hover {
    @apply text-green;
  }
}

.format-inline {
  @apply mt-0 px-0 py-0 rounded-none;
}

.format-button {
  @apply mt-4 px-4 py-3 rounded-sm;

  &.theme-default {
    @apply bg-green text-white;
    &:hover {
      @apply bg-green-darker;
    }
  }

  &.theme-black {
    @apply bg-black text-white;
    &:hover {
      @apply bg-black text-green;
    }
  }
}
</style>
