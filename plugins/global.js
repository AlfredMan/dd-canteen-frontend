import Vue from 'vue'
import LazyImage from '~/components/image/LazyImage.vue'
import ImageSlideshow from '~/components/image/ImageSlideshow.vue'
import TransitionLink from '~/components/link/TransitionLink.vue'
import Email from '~/components/Email.vue'

import CallToAction from '~/components/blocks/ComponentCallToAction.vue'

// import ResponsiveLine from '~/components/visual/ResponsiveLine.vue'
// import BlockPageBanner from '~/components/blocks/BlockPageBanner.vue'

Vue.component('lazyImage', LazyImage)
Vue.component('imageSlideshow', ImageSlideshow)
Vue.component('transitionLink', TransitionLink)
Vue.component('email', Email)
Vue.component('callToAction', CallToAction)

// Vue.component('responsiveLine', ResponsiveLine)
// Vue.component('blockPageBanner', BlockPageBanner)
