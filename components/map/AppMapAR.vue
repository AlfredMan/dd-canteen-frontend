<template>
  <div class="ar">

    <div class="" v-if="isAREnabled && !isInAppBrowser">
      <a rel="ar" href="https://design-district-map.s3.eu-west-2.amazonaws.com/usdz/designdistrict_v1.usdz">
        <div class="flex items-center px-3 py-2 bg-gray-100 rounded-full m-4 shadow-sm hover:bg-gray-300">
          <img src="/images/arkit.png" class="h-6 w-auto mr-2 opacity-80"> View in AR
        </div>
      </a>
    </div>
    <div class="" v-else>
      <!-- <div class="flex items-center px-3 py-2 bg-gray-100 rounded-full m-4 opacity-50">
        AR not available
      </div> -->
    </div>

    <!-- Use it like any other HTML element -->

    <!-- <div class="absolute left-0 top-0 text-red-600 z-50">
      View the sculpture in AR
    </div> -->
    <!-- <div class="text-3xl md:text-2xl border-2-border-red-600 uppercase px-4 py-2 mt-1 pointer-events-none absolute top-0 left-0 z-50 text-black">
      AR
    </div> -->

    <!-- <div class="close-view fixed right-4 top-4 z-50">
      <router-link :to="{ name: 'Home', params: {} }" class="w-8 h-8 block group">
        <div class="absolute top-1/2 right-0 transform rotate-45 h-0.5 w-8 bg-black group-hover:bg-red-600"></div>
        <div class="absolute top-1/2 right-0 transform -rotate-45 h-0.5 w-8 bg-black group-hover:bg-red-600"></div>
      </router-link>
    </div> -->

    <!-- <model-viewer
    ref="mv"
    class="absolute inset-0 w-full h-full"
    src="modelDraco.gltf"
    ios-src="ar.usdz"
    alt=""
    ar ar-modes="quick-look"
    ar-scale="auto"
    auto-rotate
    >
      <a
      slot="ar-button"
      :class="{
        'opacity-25': !isTouch || isInAppBrowser,
        'pointer-events-none': !isTouch || isInAppBrowser
        }"
      class="text-xl md:text-2xl text-red-600 border-2 border-red-600 uppercase px-2 py-1 mt-1 cursor-pointer pointer-events-auto hover:border-red-600 hover:text-red-600 absolute bottom-4 left-4 right-4 text-center">
        Start
      </a>
    </model-viewer> -->

    <!-- <div class="fixed inset-0 pointer-events-none z-50 text-black flex items-end justify-center p-4 text-red-600 pointer-events-none text-xl text-center">
      <div class="pb-0 mb-2 max-w-screen-sm" v-if="!isTouch">
        Visit  on your mobile to launch AR
      </div>
      <div class="pb-12 mb-2" v-if="isTouch&&!isInAppBrowser">
        Record your experience
      </div>
      <div class="pb-12 mb-2" v-if="isTouch&&isInAppBrowser">
        Please open this page on <span v-if="OperatingSystem=='iOS'">Safari</span><span v-else>Chrome</span> for AR experience
      </div>
    </div> -->

  </div>
</template>

<script>
// import mdFile from '@/markdown/about.md'
// @ is an alias to /src
// import '@google/model-viewer';

export default {
  name: 'AR',
  data () {
    return {
      text: ''
    }
  },

  // mounted () {
  //   const ModelViewerElement = this.$refs.mv
  //   ModelViewerElement.dracoDecoderLocation = '/draco/';
  // },

  computed: {
    isAREnabled () {
      if (process.client) {
        if (window) {
          const a = window.document.createElement("a");
          if (a.relList.supports("ar")) {
            // AR is available.
            return true
          } else {
            return false
          }
        }
      }
    },
    stage () {
      return this.$store.state.stage
    },
    isTouch () {
      if (process.client) {
        if (window) {
    		  return (('ontouchstart' in window) ||
    		     (navigator.maxTouchPoints > 0) ||
    		     (navigator.msMaxTouchPoints > 0));
         }
       }
    },
    isInAppBrowser () {
      // return true
      if (process.client) {
        if (window) {
          let ua = navigator.userAgent || navigator.vendor || window.opera;
          let isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;
          let isFacebook = (ua.indexOf('Facebook') > -1) ? true : false;
          let isMessenger = (ua.indexOf('Messenger') > -1) ? true : false;
          // if (document.documentElement.classList){
          // 	if (isInstagram||isFacebook||isMessenger) {
          // 		// window.document.body.classList.add('instagram-browser');
          //     return true
          // 	} else {
          //     return false
          //   }
          // }
          // return true
          return (isInstagram||isFacebook||isMessenger) ? true : false
        }
      }
    },
    OperatingSystem () {
      if (process.client) {
        if (window) {
          let userAgent = navigator.userAgent || navigator.vendor || window.opera;
            // Windows Phone must come first because its UA also contains "Android"
          if (/windows phone/i.test(userAgent)) {
              return "Windows Phone";
          }

          if (/android/i.test(userAgent)) {
              return "Android";
          }

          // iOS detection from: http://stackoverflow.com/a/9039885/177710
          if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
              return "iOS";
          }

          return "unknown";
        }
      }
    }
    // md () {
    //   return mdFile
    // }
  }
}
</script>

<style lang="scss" scoped>
// .view {
//   pointer-events: auto;
//   @apply fixed inset-0 bg-white z-10;
// }
</style>
