<template lang="html">
  <div class="tool">
    <style>
      h1, .h1 {
        font-size: {{h1_font}};
        background-color: {{h1_highlight}} !important;
      }
      h2, .h2 {
        font-size: {{h2_font}};
        background-color: {{h2_highlight}} !important;
      }
      h3, .h3 {
        font-size: {{h3_font}};
        background-color: {{h3_highlight}} !important;
      }
      h4, .h4 {
        font-size: {{h4_font}};
        background-color: {{h4_highlight}} !important;
      }
      h5, .h5 {
        font-size: {{h5_font}};
        background-color: {{h5_highlight}} !important;
      }
      p, .p {
        font-size: {{p_font}};
        background-color: {{p_highlight}} !important;
      }
    </style>
    <div class="">
      <div class="d-flex align-items-baseline"
        @mouseenter="h1_highlight = highlightColor"
        @mouseleave="h1_highlight = ''">
        <label for="h1 mr-2">h1</label> <input id="h1" type="number" step="0.5" name="" value="" v-model="h1_fontsize" @input="h1_fontsize = $event.target.value">
        <select v-model="h1_fontsizeunit" @change="h1_fontsizeunit = $event.target.value"><option value="px">px</option><option value="rem">rem</option><option value="vw">vw</option></select>
        <input id="h1_check" type="checkbox" v-model="h1_active" /><label for="h1_check" >override</label>
      </div>
      <div class="d-flex align-items-baseline"
        @mouseenter="h2_highlight = highlightColor"
        @mouseleave="h2_highlight = ''">
        <label for="h2 mr-2">h2</label> <input id="h2" type="number" step="0.5" name="" value="" v-model="h2_fontsize" @input="h2_fontsize = $event.target.value">
        <select v-model="h2_fontsizeunit" @change="h2_fontsizeunit = $event.target.value"><option value="px">px</option><option value="rem">rem</option><option value="vw">vw</option></select>
        <input id="h2_check" type="checkbox" v-model="h2_active" /><label for="h2_check" >override</label>
      </div>
      <div class="d-flex align-items-baseline"
        @mouseenter="h3_highlight = highlightColor"
        @mouseleave="h3_highlight = ''">
        <label for="h3 mr-2">h3</label> <input id="h3" type="number" step="0.5" name="" value="" v-model="h3_fontsize" @input="h3_fontsize = $event.target.value">
        <select v-model="h3_fontsizeunit" @change="h3_fontsizeunit = $event.target.value"><option value="px">px</option><option value="rem">rem</option><option value="vw">vw</option></select>
        <input id="h3_check" type="checkbox" v-model="h3_active" /><label for="h3_check" >override</label>
      </div>
      <div class="d-flex align-items-baseline"
        @mouseenter="h4_highlight = highlightColor"
        @mouseleave="h4_highlight = ''">
        <label for="h4 mr-2">h4</label> <input id="h4" type="number" step="0.5" name="" value="" v-model="h4_fontsize" @input="h4_fontsize = $event.target.value">
        <select v-model="h4_fontsizeunit" @change="h4_fontsizeunit = $event.target.value"><option value="px">px</option><option value="rem">rem</option><option value="vw">vw</option></select>
        <input id="h4_check" type="checkbox" v-model="h4_active" /><label for="h4_check" >override</label>
      </div>
      <div class="d-flex align-items-baseline"
        @mouseenter="h5_highlight = highlightColor"
        @mouseleave="h5_highlight = ''">
        <label for="h5 mr-2">h5</label> <input id="h5" type="number" step="0.5" name="" value="" v-model="h5_fontsize" @input="h5_fontsize = $event.target.value">
        <select v-model="h5_fontsizeunit" @change="h5_fontsizeunit = $event.target.value"><option value="px">px</option><option value="rem">rem</option><option value="vw">vw</option></select>
        <input id="h5_check" type="checkbox" v-model="h5_active" /><label for="h5_check" >override</label>
      </div>
      <div class="d-flex align-items-baseline"
        @mouseenter="p_highlight = highlightColor"
        @mouseleave="p_highlight = ''">
        <label for="p mr-2">p</label> <input id="p" type="number" step="0.5" name="" value="" v-model="p_fontsize" @input="p_fontsize = $event.target.value">
        <select v-model="p_fontsizeunit" @change="p_fontsizeunit = $event.target.value"><option value="px">px</option><option value="rem">rem</option><option value="vw">vw</option></select>
        <input id="p_check" type="checkbox" v-model="p_active" /><label for="p_check" >override</label>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  data () {
    return {
      h1_fontsize: '',
      h2_fontsize: '',
      h3_fontsize: '',
      h4_fontsize: '',
      h5_fontsize: '',
      p_fontsize: '',
      h1_highlight: '',
      h2_highlight: '',
      h3_highlight: '',
      h4_highlight: '',
      h5_highlight: '',
      p_highlight: '',
      h1_fontsizeunit: 'px',
      h2_fontsizeunit: 'px',
      h3_fontsizeunit: 'px',
      h4_fontsizeunit: 'px',
      h5_fontsizeunit: 'px',
      p_fontsizeunit: 'px',
      highlightColor: 'rgba(255,0,0,0.2)',
      h1_active: true,
      h2_active: true,
      h3_active: true,
      h4_active: true,
      h5_active: true,
      p_active: true
    }
  },
  watch: {
  },
  computed: {
    h1_font () {
      return this.h1_active ? `${this.h1_fontsize}${this.h1_fontsizeunit} !important` : ''
    },
    h2_font () {
      return this.h2_active ? `${this.h2_fontsize}${this.h2_fontsizeunit} !important` : ''
    },
    h3_font () {
      return this.h3_active ? `${this.h3_fontsize}${this.h3_fontsizeunit} !important` : ''
    },
    h4_font () {
      return this.h4_active ? `${this.h4_fontsize}${this.h4_fontsizeunit} !important` : ''
    },
    h5_font () {
      return this.h5_active ? `${this.h5_fontsize}${this.h5_fontsizeunit} !important` : ''
    },
    p_font () {
      return this.p_active ? `${this.p_fontsize}${this.p_fontsizeunit} !important` : ''
    }
  },
  mounted () {
    this.init()
    // this.tl.pause()
  },
  methods: {
    init () {
      /* window.onbeforeunload = function(evt) {
        var message = 'Tool values will not be saved. Sure you want to leave?';
        if (typeof evt == 'undefined') {
            evt = window.event;
        }
        if (evt) {
            evt.returnValue = message;
        }
        return message;
      } */
    }
  }
}
</script>

<style lang="scss" scoped>
.tool {
  background: white;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  padding: 1rem;
  white-space: nowrap;

  label {
    display: block;
    min-width: 2rem;
  }

  input[type=text],
  input[type=number],
  select {
    font-size: 1rem;
    padding: 0;
    margin-left: 1rem;
    max-width: 3rem;
    width: 3rem;
    height: 1.5rem;
    line-height: 1.5rem;
    margin: 0 1rem 0 0;
  }
}
</style>
