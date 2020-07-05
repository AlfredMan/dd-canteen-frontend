<template lang="html">
  <div class="tool">
    <style>
      h1 {
        font-size: {{h1_fontsize}};
      }
      h2 {
        font-size: {{h2_fontsize}};
      }
      h3 {
        font-size: {{h3_fontsize}};
      }
      h4 {
        font-size: {{h4_fontsize}};
      }
      h5 {
        font-size: {{h5_fontsize}};
      }
    </style>
    <div class="">
      <input type="text" name="" value="" v-model="h1" @input="update($event, 'h1_fontsize')">
      <input type="text" name="" value="" v-model="h2" @input="update($event, 'h2_fontsize')">
      <input type="text" name="" value="" v-model="h3" @input="update($event, 'h3_fontsize')">
      <input type="text" name="" value="" v-model="h4" @input="update($event, 'h4_fontsize')">
      <input type="text" name="" value="" v-model="h5" @input="update($event, 'h5_fontsize')">
      <input type="text" name="" value="" v-model="h6" @input="update($event, 'h6_fontsize')">
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  data () {
    return {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
    }
  },
  watch: {
  },
  computed: {
    h1_fontsize () {
      return `${this.$route.query.h1_fontsize} !important`
    },
    h2_fontsize () {
      return `${this.$route.query.h2_fontsize} !important`
    },
    h3_fontsize () {
      return `${this.$route.query.h3_fontsize} !important`
    },
    h4_fontsize () {
      return `${this.$route.query.h4_fontsize} !important`
    },
    h5_fontsize () {
      return `${this.$route.query.h5_fontsize} !important`
    },
    h6_fontsize () {
      return `${this.$route.query.h6_fontsize} !important`
    }
  },
  mounted () {
    this.init()
    // this.tl.pause()
  },
  methods: {
    init () {
    },
    update (ev, target) {
      this.$router.replace({
        query: {
          target: ev.target.value
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tool {
  position: fixed;
  left: 0;
  bottom: 0;
  // opacity: 0.5;
  z-index: 9999;
}
</style>
