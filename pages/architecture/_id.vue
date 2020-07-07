<template>
  <div class="mt-5">
    <div class="-container-fluid">
      <div class="row- px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid">
          <div class="row d-flex align-items-baseline">
            <div class="col-12 col-md-6">
              <h2>{{ studioData.title }}</h2>
              <!-- <h4>{{studioData.buildings}}</h4> -->
            </div>
            <div class="col-12 col-md-3 mt-5">
              <h5 v-if="studioData.buildings == 'Landscape'" class="mt-2">
                The landscape
              </h5>
              <h5 v-else class="mt-2">
                The buildings
              </h5>
              <p>
                {{ studioData.buildingsCopy }}
              </p>
            </div>

            <div class="col-12 col-md-3 mt-5">
              <h5 class="mt-2">The practice</h5>
              <p>
                {{ studioData.practiceCopy }}
              </p>
            </div>

            <div class="col-12" />

            <!-- <div class="col-12 col-md-3">
              <h5>The buildings</h5>
              <p>
                {{studioData.buildingsCopy}}
              </p>
            </div>

            <div class="col-12 col-md-3">
              <h5>The practice</h5>
              <p>
                {{studioData.practiceCopy}}
              </p>
            </div> -->

            <!-- <div class="col-12" /> -->

            <div class="col-12 col-md-12 mt-md-n5 mt-5">
              <div class="row d-flex align-items-end justify-content-end">
                <div v-for="img in studioData.images" :key="img.url" class="col-12 mb-3" :class="[`col-md-${img.size}`]">
                  <img class="lazyload" :data-src="img.url" :alt="img.alt">
                </div>
                <div v-for="img in studioData.imagesPractice" :key="img.url" class="col-12 mb-3" :class="[`col-md-${img.size}`]">
                  <img class="lazyload" :data-src="img.url" :alt="img.alt">
                </div>
              </div>
            </div>

            <!-- <div class="col-12" />

            <div class="col-12 col-md-12">
              <div class="row d-flex align-items-start justify-content-end">
                <div class="col-12 mb-3" :class="[`col-md-${img.size}`]" v-for="img in studioData.images" :key="img.url">
                  <img :src="img.url" :alt="img.alt">
                </div>
              </div>
            </div> -->

            <div class="col-12" />

            <!-- <div class="col-12 mb-3" :class="[`col-md-${img.size}`]" v-for="img in studioData.imagesPractice" :key="img.url">
              <img :src="img.url" :alt="img.alt">
            </div> -->

            <!-- <div class="col-12 col-md-12">
              <div class="row d-flex align-items-start justify-content-end">
                <div class="col-12 mb-3" :class="[`col-md-${img.size}`]" v-for="img in studioData.imagesPractice" :key="img.url">
                  <img :src="img.url" :alt="img.alt">
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <block-architecture />

    <div class="-container-fluid" v-if="false">
      <div class="-row bg-dark text-light px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid pt-5-">
          <div class="row">
            <div class="col-12 col-md-6">
              <h3>Architecture</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-5">
              <!-- <router-link to="/about-us/#architecture" class="text-primary"> -->
              <router-link to="/architecture" class="text-primary">
                <strong>
                View all architects &rarr;
                </strong>
              </router-link>
            </div>
          </div>

          <div class="row d-flex align-items-end mt-5 pt-5">
            <div v-for="nextStudio in nextFour" :key="nextStudio.slug" class="col-12 col-md-6 col-lg-3 mb-5">
              <!-- <nuxt-link :to="`/architecture/${nextStudio.slug}`" @click.native="setTransitionSource">
                <img class="lazyload transition-source" :data-src="nextStudio.imagesPractice[0].url" alt="">
                <h5>{{ nextStudio.title }}</h5>
              </nuxt-link> -->
              <!-- <a :href="`/architecture/${nextStudio.slug}`" @click.prevent="setTransitionSource(`/architecture/${nextStudio.slug}`, $event)">
                <img class="lazyload transition-source" :data-src="nextStudio.imagesPractice[0].url" alt="">
                <h5>{{ nextStudio.title }}</h5>
              </a> -->
              <transition-link :to="`/architecture/${nextStudio.slug}`">
                <!-- <img class="lazyload transition-source" :data-src="nextStudio.imagesPractice[0].url" alt=""> -->
                <lazy-image
                class="transition-source"
                :src="nextStudio.imagesPractice[0].url"
                :w="2000"
                :h="2000"
                />
                <h5>{{ nextStudio.title }}</h5>
              </transition-link>
            </div>

            <!-- <div class="col-12 col-md-6 col-lg-3 mb-5">
              <router-link to="/architecture/hnna">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/4H7LD6UdKbLKXTBqYH7wv3/cb9c690b567f1a7768158e9c80def96b/ASSEMBLAGE-Architect000.jpg?w=1000&h=1200&fm=jpg&q=80" alt="">
                <h5>HNNA</h5>
              </router-link>
            </div>

            <div class="col-12 col-md-6 col-lg-3 mb-5">
              <router-link to="/architecture/6a-architects">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/4PPO5LoteF6CWrT30TUBKO/6fc95dbe5e49e0f81e1fc748ef11fb09/6aArchictects-2A-Architect.jpg?w=1000&h=1200&fm=jpg&q=80" alt="">
                <h5>6A Architects</h5>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-5">
              <router-link to="/architecture/adam-khan-architects">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/5Qu2qJOxKsVJyq14IByYXQ/eb84ad1acc0500e3946e6bea0f905bd1/AdamKahn-1A-Architect.jpg?w=1000&h=1000&fm=jpg&q=80&fit=thumb" alt="">
                <h5>Adam Khan Architects</h5>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-5">
              <router-link to="/architecture/barozzi-veiga">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/3HiQG1XaJ2pfkYLLq6Yyyi/b0b5d7f11232fe4a0fdcbe97557e33ed/Barozzi-Veiga-1A-Architect.jpg?w=1000&h=1200&fm=jpg&q=80" alt="">
                <h5>Barozzi Veiga</h5>
              </router-link>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import BlockArchitecture from '~/components/blocks/BlockArchitecture.vue'
// import { studios, validStudios } from '~/common/architecture'

export default {
  components: {
    BlockArchitecture
  },

  middleware ({ store, redirect }) {
    // If the user is not authenticated
    // if (!store.state.authenticated) {
    // return redirect('/about-us#architecture')
    // }
  },

  // validate ({ params: { id } }) {
  //   return validStudios.includes(id)
  // },

  data () {
    return {
    }
  },

  computed: {
    slug () {
      return this.$route.params.id
    },
    studios () {
      return this.$store.getters.getAllStudios()
    },
    studioData () {
      // return studios[this.studio]
      return this.$store.getters.getStudioBySlug(this.slug) || null
    },
    nextFour () {
      const studioArray = _.toArray(this.studios)
      const studiosstudios = _.concat(studioArray, studioArray)
      const currentStudioIndex = _.indexOf(studioArray, this.studioData)
      console.log('currentStudioIndex', currentStudioIndex)
      return _.takeRight(_.take(studiosstudios, currentStudioIndex + 5), 4)
    }
  },

  head () {
    return {
      title: this.studioData ? this.studioData.title : ''
    }
  },

  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },

  mounted () {
    // this.pageChanged(this.page)
  },

  methods: {
    // setTransitionSource (path, ev) {
    //   console.log('setTransitionSource +++++++++++++ 1', ev)
    //   if (ev.srcElement.classList.contains('transition-source')) {
    //     console.log('setTransitionSource +++++++++++++ 2', ev.srcElement)
    //     this.$store.dispatch('setRouteTransitionSource', { sourceElement: ev.srcElement })
    //     this.$store.dispatch('setRouteTransitionSourceRect', { boundingClientRect: ev.srcElement.getBoundingClientRect() })
    //   }
    //   this.$router.push({path: path})
    // }
    // pageChanged (to, from = -1) {
    //   if (to <= 0 || to > this.maxPage) {
    //     this.$router.replace(`/${this.feed}/1`)
    //     return
    //   }
    //
    //   // Prefetch next page
    //   this.$store
    //     .dispatch('FETCH_FEED', {
    //       feed: this.feed,
    //       page: this.page + 1,
    //       prefetch: true
    //     })
    //     .catch(() => {})
    //
    //   this.transition =
    //     from === -1 ? null : to > from ? 'slide-left' : 'slide-right'
    //
    //   this.displayedPage = to
    // }
  }
}
</script>

<style lang="stylus">
</style>
