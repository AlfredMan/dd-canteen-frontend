<template lang="html">
  <div>

    <a
    v-if="callToAction && isHash && callToAction.fields.path == '#popup-canteen'"
    class="cta"
    :class="{
      'theme-default': theme=='default',
      'theme-black': theme=='black',
      'format-button': format=='button',
      'format-inline': format=='inline'
      }"
    @click="openCanteenPopup"
    >
      <span class="label" v-html="callToAction.fields.label"></span>
    </a>

    <a
    v-else-if="callToAction && isHash"
    class="cta"
    :class="{
      'theme-default': theme=='default',
      'theme-black': theme=='black',
      'format-button': format=='button',
      'format-inline': format=='inline'
      }"
    :href="callToAction.fields.path"
    >
      <span class="label" v-html="callToAction.fields.label"></span>
    </a>

    <a
    v-else-if="callToAction && isMailto" 
    class="cta"
    :class="{
      'theme-default': theme=='default',
      'theme-black': theme=='black',
      'format-button': format=='button',
      'format-inline': format=='inline'
      }"
    :href="callToAction.fields.path"
    >
      <span class="label" v-html="callToAction.fields.label"></span>
    </a>

    <nuxt-link
    v-else-if="callToAction && callToAction.fields.path && callToAction.fields.label && isInternalLink"
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
import gsap from 'gsap'
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
    },
    isHash () {
      return this.callToAction && this.callToAction.fields.path && this.callToAction.fields.path.indexOf('#') == 0
    },
    isMailto () {
      return this.callToAction && this.callToAction.fields.path && this.callToAction.fields.path.indexOf('mailto') == 0
    }
  },

  methods: {
    openCanteenPopup () {
      gsap.to('#canteen-popup', {
        duration: 0.5,
        autoAlpha: 1,
        delay: 0.5,
        onStart: (el) => {
          console.log('onStart', el)
          if (document.getElementById('#canteen-popup')) {
            document.getElementById('#canteen-popup').classList.add('popup-has-triggered')
          }
          // popup.classList.add('popup-has-triggered')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cta {
  @apply inline-block text-black transition duration-300 font-medium cursor-pointer;
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
