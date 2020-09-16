<template>
  <div class="mt-5 pb-5">
    <div class="-container-fluid">
      <div class="-row px-0 px-md-4 py-0 py-md-2">
        <div class="container-fluid py-5">
          <div class="row">
            <div class="col-12 col-md-6 mb-3 h-100 d-flex flex-column">
              <h1>Hartley Cycles</h1>
              <h4>Caren Hartley is the founder of Hartley Cycles, an award-winning bespoke bicycle company in South London. </h4>
              <div class="mt-5">
                <div class="bg-light col-sm-8 p-4 address">
                  <h3 class="my-0">A301</h3>
                  <p>Design District<br>
                  Delta Wharf, Tunnel Ave,<br>
                  Greenwich, London SE10 0QE</p>
                  <p>Monday–Friday 10am–6pm<br>
                  hartleycycles.com<br>
                  +44 (0) 20 778 6694 04</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-5 col-lg-4 ml-0 ml-sm-auto text-right">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/22w4CLfcQCe1mdF3zH64Dy/89f59d445e25ae91085e0aa8e5b8bbd0/Design-District-Matthew-Thompson-2226-LOW-RES.jpg'"
              :w="1000"
              :h="1000"
              />
            </div>

            <div class="col-12" />

            <div class="col-12 col-md-12 mt-md-n5 mt-5">
              <div class="row d-flex align-items-end justify-content-end">

              </div>
            </div>

            <div class="col-12" />

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import _ from 'lodash'
import { studios, validStudios } from '~/common/architecture'

export default {
  components: {
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
    studio () {
      return this.$route.params.id
    },
    studioData () {
      return studios[this.studio]
    }
  },

  head () {
    return {
      title: 'Business Name'
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
