<template lang="html">
  <div>
    <nuxt-link
    v-if="callToAction && callToAction.fields.path && callToAction.fields.label && isInternalLink"
    class="cta"
    :class="{
      'theme-default': theme=='default',
      'theme-black': theme=='black',
      'format-button': format=='button',
      'format-inline': format=='inline'
      }"
    :to="callToAction.fields.path"
    >
      <span class="label" v-html="callToAction.fields.label"></span>
    </nuxt-link>

    <a
    v-else
    class="cta"
    :class="{
      'theme-default': theme=='default',
      'theme-black': theme=='black',
      'format-button': format=='button',
      'format-inline': format=='inline'
      }"
    :href="callToAction.fields.path"
    target="_blank"
    >
      <span class="label" v-html="callToAction.fields.label"></span>
    </a>

  </div>
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
    },
    isInternalLink () {
      return this.callToAction && this.callToAction.fields.path && this.callToAction.fields.path.indexOf('http') < 0
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
    @apply text-white;
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
      @apply bg-black text-white;
    }
  }
}
</style>
