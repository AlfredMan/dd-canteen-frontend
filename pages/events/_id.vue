<template>
  <div class="event" :class="getContentClass(entry.fields.contentType)">
    <!-- <pre>{{entry}}</pre> -->
    <div class="-overflow-x-hidden" v-if="entry" :key="entry.sys.id">

      <header class="event-header mb-5 py-8 pt-16 lg:pt-24"
      :style="{
        backgroundColor: entry.fields.colour ? entry.fields.colour : 'none'
        }"
      >
        <div class="event-info container">
          <div class="row row-flex justify-content-between ">
            <div class="col-12 col-md-6 order-2 order-md-1">
              <div class="event-title order-sm-3">

                <h1 class="mt-2 mb-3 pl-0 h2" v-if="entry.fields.title">
                  {{entry.fields.title}}
                </h1>
                <h5 class="text-orange mb-1 mt-1" v-if="entry.fields.creditText">
                  {{entry.fields.creditText}}
                </h5>
                <h5 class="--event-secondary-info mb-1 mt-1" v-if="entry.fields.date">{{getDataTime(entry.fields.date, entry.fields.endDate)}}<br></h5>
                <h5 class="--event-secondary-info mb-1 mt-1" v-if="entry.fields.locationTitle">
                  {{entry.fields.locationTitle}}
                </h5>

                <!-- <h3 class="mb-4" v-if="entry.fields.date">

                </h3> -->

                <!-- <div class="d-flex- mb-5 d-none">
                  <h6 class="text-uppercase my-0 mr-2" v-if="entry.fields.contentType">
                    {{entry.fields.contentType}}
                  </h6>
                  <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">
                    by {{entry.fields.author[0].fields.name}}
                  </h6>
                  <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">
                  </h6>
                </div> -->
              </div>

              <!-- <div class="event-summary my-3"> -->
                <!-- <div class="new-meta d-flex mb-3 flex-wrap" v-if="entry.fields.creditText">
                  <p class="-text-uppercase my-0 mr-3" v-if="entry.fields.creditText">
                    {{entry.fields.creditText}}
                  </p>
                </div> -->
                <!-- <div class="summary" v-if="entry.fields.summary" v-html="getRichText(entry.fields.summary)"></div> -->
              <!-- </div> -->
              <div class="event-action my-4">
                <div class="" v-if="entry.fields.actionLabel && entry.fields.actionUrl">
                  <!-- <div class="">
                    <div class="event-action-title">{{entry.fields.actionTitle}}</div>
                    <div class="event-action-info">{{entry.fields.actionInfo}}</div>
                  </div>
                  <div class="mt-3 mt-lg-0 ml-lg-auto">
                    <a target="_blank" class="btn btn-lg btn-secondary" :href="entry.fields.actionUrl">{{entry.fields.actionLabel}}</a>
                  </div> -->
                  <a target="_blank" class="btn btn-lg btn-secondary" :href="entry.fields.actionUrl">{{entry.fields.actionLabel}}</a>
                </div>
              </div>
            </div>

            <div
              class="col-12 col-md-6 order-1 order-md-2 mb-4 mb-lg-0 lg:pt-6"
              v-if="entry.fields.mainImage && entry.fields.mainImage.fields && entry.fields.mainImage.fields.file"
              >
              <lazy-image
              :src="entry.fields.mainImage.fields.file.url"
              :w="2000"
              :h="2000"
              />
            </div>
          </div>
        </div>
        <!-- <img class="event-image" :src="entry.fields.mainImage.fields.file.url" alt="" v-if="entry.fields.mainImage"> -->
      </header>

    </div>

    <div class="-overflow-x-hidden pt-0 lg:pt-4" v-if="entry">

      <article class="content container mt-0" v-if="entry.fields.contentReferences">

        <aside class="order-1 order-md-2 lg:sticky top-0 lg:pt-0">
          <div id="sidebar" class="">
            <div class="">
              <div class="" v-if="entry.fields.actionLabel && entry.fields.actionUrl">
                <div class="">
                  <a target="_blank" class="btn btn-lg btn-secondary uppercase" :href="entry.fields.actionUrl">{{entry.fields.actionLabel}}</a>
                </div>
                <div class="">
                  <a target="_blank" class="btn btn-lg btn-share uppercase" @click="showCalendarOptions">Add to calendar &rarr;</a>
                </div>
                <div class="">
                  <a target="_blank" class="btn btn-lg btn-share uppercase" @click="showShareOptions">Share event &rarr;</a>
                </div>
              </div>

              <!-- <div class="my-4">
                <h4>{{entry.fields.title}}</h4>
                <h6 class="organiser" v-if="entry.fields.creditText">
                  {{entry.fields.creditText}}
                </h6>
              </div> -->

              <div class="my-4">
                <h6 class="text-sm mb-0">Date and time</h6>
                <h5 class="mt-0 font-500" v-if="entry.fields.date">{{getDataTime(entry.fields.date, entry.fields.endDate)}}<br></h5>
              </div>

              <div class="my-4">
                <h6 class="text-sm mb-0">Location</h6>
                <h5 class="mt-0 font-500" v-if="entry.fields.locationTitle">
                  <a v-if="entry.fields.locationUrl" :href="entry.fields.locationUrl">{{entry.fields.locationTitle}}</a>
                  <span v-else>{{entry.fields.locationTitle}}</span>
                </h5>
              </div>

            </div>
          </div>
        </aside>

        <!-- <RichTextRenderer :document="entry.fields.richText" /> -->
        <div class="blocks-container order-2 order-md-1 px-3 pt-12">
          <div class="row row-flex justify-content-center" v-for="content in entry.fields.contentReferences">

            <!-- text -->
            <div class="col-12  type-text">
              <div class="container ">
                <div class="row justify-content-start">
                  <div class="col-12---col-md-10 mb-4 -px-lg-5" v-if="content && content.sys && content.sys.contentType && content.sys.contentType.sys.id === 'text'" v-html="getRichText(content.fields.text)">
                  </div>
                </div>
              </div>
            </div>

            <!-- embed -->
            <div class="col-12 type-embed">
              <div class="container ">
                <div class="row justify-content-start">
                  <div class="col-12---col-md-10 my-5 -px-lg-5" v-if="content && content.sys && content.sys.contentType && content.sys.contentType.sys.id === 'embed'">
                    <div class=""  v-html="content.fields.embedCode.content[0].content[0].value">

                    </div>
                    <div class="">
                      {{ content.fields.description}}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- gallery -->
            <div
            class="col-12---col-md-10 my-5 px-5 px-lg-0 type-gallery"
            v-if="content && content.sys && content.sys.contentType && content.sys.contentType.sys.id === 'gallery'"
            >
              <div class="row row-flex flex-wrap justify-content-start align-items-center gallery">
                <div
                class="gallery-item mb-4"
                v-for="image in content.fields.image"
                :class="getGalleryImageClass(content.fields.image)"
                :style="getGalleryImageStyle(content.fields.image)"
                >
                  <!-- <img :src="image.fields.file.url" alt="" class="image"> -->
                  <lazy-image
                  v-if="image.fields && image.fields.file"
                  :src="image.fields.file.url"
                  :w="2000"
                  :h="3000"
                  />
                  <div class="caption" v-if="image.fields.description">
                    {{image.fields.description}}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </article>

      <footer class="mt-5 mb-5 py-5 container" v-if="entry.fields.author">
        <div class="row justify-content-center">

          <div class="col-10 col-md-6 p-5 author" v-for="author in entry.fields.author">
            <div class="row align-items-center no-gutters px-2">
              <!-- <div class="col-3">
                <div class="thumb">
                  <img :src="author.fields.profilePicture.fields.file.url" alt="">
                </div>
              </div> -->
              <div class="col-12">

                <h6>About the <span v-if="!author.fields.role">author</span><span v-if="author.fields.role">{{author.fields.role}}</span></h6>

                <h4 class="name mb-5">
                  {{author.fields.name}}
                </h4>
                <div class="bio" v-html="getRichText(author.fields.bio)"></div>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>

    <BlockEvents />

    <!-- <div class="container-fluid" v-if="entries">
      <div class="row bg-grey text-black pb-5-pt-3">
        <div class="container py-5">
          <div class="row">
            <div class="col-12 col-md-6">
              <h2>Journal</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-5">
              <router-link :to="{ path:'/journal' }" class="h5 text-black">
                View all &rarr;
              </router-link>
            </div>
          </div>

          <div v-if="entries" class="row d-flex align-items-start mt-5 pt-5">
            <div
            v-for="ent in entries"
            v-if="ent && ent.sys.id !== entry.sys.id"
            :key="ent.sys.id"
            class="news-card col-12 col-md-6 col-lg-4 mb-6 lg:mb-6">

              <news-card :entry="ent"></news-card>

            </div>
          </div>

        </div>
      </div>
    </div> -->

    <!-- render data of the person -->
    <!-- <h1 v-if="person">
      {{ person }}
    </h1> -->
    <!-- <pre>
      {{entries}}
    </pre> -->
    <!-- render blog posts -->
    <!-- <ul v-if="entries" class="d-flex flex-wrap">
      <li v-for="entry in entries" class="col-2">
        <a :href="`${entry.fields.file.url}?w=2000&h=2000&fm=jpg&q=80`" target="_blank">
          <img :src="`${entry.fields.file.url}?w=200&h=200&fm=jpg&q=70`" alt="">
          {{ entry.fields.title }}
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
// import BlockJournal from '~/components/blocks/BlockJournal'
import BlockEvents from '~/components/blocks/BlockEvents'
import { createClient } from '~/plugins/contentful.js'
// import RichTextRenderer from 'contentful-rich-text-vue-renderer'

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
if (process.client) {
  gsap.registerPlugin(ScrollToPlugin)
  gsap.registerPlugin(ScrollTrigger);
}
// how to rich text

// https://github.com/contentful/rich-text/tree/master/packages/rich-text-html-renderer
// https://www.contentful.com/developers/docs/javascript/tutorials/rendering-contentful-rich-text-with-javascript/
// https://www.npmjs.com/package/contentful-rich-text-vue-renderer

// BLOCKS
  // DOCUMENT
  // PARAGRAPH
  // HEADING_1
  // HEADING_2
  // HEADING_3
  // HEADING_4
  // HEADING_5
  // HEADING_6
  // UL_LIST
  // OL_LIST
  // LIST_ITEM
  // QUOTE
  // HR
  // EMBEDDED_ENTRY
  // EMBEDDED_ASSET

// INLINES
//
  // EMBEDDED_ENTRY (this is different from the BLOCKS.EMBEDDED_ENTRY)
  // HYPERLINK
  // ENTRY_HYPERLINK
  // ASSET_HYPERLINK

// The markRenderers prop should be one of the following MARKS properties as defined in @contentful/rich-text-types:
//
  // BOLD
  // ITALIC
  // UNDERLINE
  // CODE

import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import EventsCard from '~/components/EventsCard'

const client = createClient()

const replaceLineBreak = (string) => {
  // return string
  return _.replace(string, /\n/g, "<br>")
}

const options = {
  renderMark: {
    [MARKS.BOLD]: text => `<b>${replaceLineBreak(text)}</b>`,
    [MARKS.ITALIC]: text => `<em>${replaceLineBreak(text)}</em>`,
    [MARKS.UNDERLINE]: text => `<u>${replaceLineBreak(text)}</u>`
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) =>
      `<p>${next(node.content)}</p>`,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, next) => {
      let origin = 'https://designdistrict.co.uk'
      if (process.client) {
        origin = window ? window.location.origin : 'https://designdistrict.co.uk'
      }
      return `<a href="${node.data.uri}"${node.data.uri.startsWith(origin) ? '' : ' target="_blank"'}>${next(node.content)}</a>`;
    }
  },
};

export default {

  head () {
    return {
      title: this.seoTitle,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.seoDescription },
        { property: 'og:image', content: this.seoImage },
        { property: 'og:url', content: `https://designdistrict.co.uk/journal/${this.entry.fields.slug}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.seoTitle },
        { property: 'og:description', content: this.seoDescription },

        { name: 'twitter:title', content: this.seoTitle },
        { name: 'twitter:description', content: this.seoDescription },
        { name: 'twitter:image', content: this.seoImage },
      ]
    }
  },

  data () {
    return {
      entries: null,
      entry: null,
      tags: null,
      st: null,
    }
  },

  mounted () {
    console.log('mounted')
    this.initScrollTrigger()
    this.handleResize ()
  },

  updated () {
    if (process.client) {
      console.log('updated')
      // if (this.st) {
      //   this.st.kill()
      //   this.st=null
      //   this.initScrollTrigger()
      // }
      this.refreshTrigger()
    }
  },

  created () {
    if (process.client) {
      console.log('created')
      window.addEventListener('scroll', this.handleScroll, { capture: false, passive: true});
      window.addEventListener('resize', this.handleResize, { capture: false, passive: true});
    }
  },

  destroyed () {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
      if (this.st) {
        this.st.kill()
      }
    }
  },

  watch: {
    'contentType' (newVal, oldVal) {
      // console.log('contentType', newVal, oldVal)
      if (newVal == 'Video') {
        this.$store.dispatch('updateNavigationTheme', { theme: 'dark' })
      } else {
        this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
      }
    }
  },

  components: {
    EventsCard,
    BlockEvents
    // RichTextRenderer
  },

  computed: {
    contentType () {
      if (this.entry && this.entry.fields && this.entry.fields.contentType) {
        return this.entry.fields.contentType
      }
      return ''
    },
    seoTitle () {
      return this.entry && this.entry.fields.metaData && this.entry.fields.metaData.fields.seoTitle ? this.entry.fields.metaData.fields.seoTitle : this.seoDefault.title
    },
    seoDescription () {
      return this.entry && this.entry.fields.metaData && this.entry.fields.metaData.fields.seoDescription ? this.entry.fields.metaData.fields.seoDescription : this.seoDefault.description
    },
    seoImage () {
      return this.entry && this.entry.fields.metaData && this.entry.fields.metaData.fields.seoImage && this.entry.fields.metaData.fields.seoImage.fields.file ? `${this.entry.fields.metaData.fields.seoImage.fields.file.url}?w=2000&fm=jpg&q=80` : this.seoDefault.image
    },
    seoDefault () {
      return this.$store.state.seoDefault
    },
  },

  middleware ({ store, redirect }) {
    // if (process.env.NODE_ENV!=='development') {
      // return redirect('/')
    // }
  },

  // fetch ({ route }) {
  //   return Promise.all([
  //     // fetch the owner of the blog
  //     // client.getEntries({
  //     //   'sys.id': env.CTF_PERSON_ID
  //     // }),
  //     // fetch all blog posts sorted by creation date
  //     client.getEntries({
  //       'content_type': 'news',
  //       order: '-sys.createdAt'
  //     }),
  //
  //     client.getEntries({
  //       'content_type': 'news',
  //       'fields.slug': route.params.id
  //     })
  //
  //     // client.getAssets()
  //
  //   ]).then(([entries, entry]) => {
  //   // ]).then(([assets]) => {
  //     // return data that should be available
  //     // in the template
  //     console.log('fetch', [entries, entry])
  //
  //     return {
  //       // person: entries.items[0],
  //       entries: entries.items,
  //       entry: entry.items[0]
  //       // assets: _.filter(assets.items, (a)=>(a.fields.title.indexOf('KDN') >= 0 || a.fields.title.indexOf('-Architect') >= 0 || a.fields.title.indexOf('Building') >= 0 || a.fields.title.indexOf('Laneway') >= 0))
  //       // assets: assets.items
  //     }
  //   }).catch(console.error)
  // },
  // `env` is available in the context object
  asyncData ({ route, store }) {
    return Promise.all([
      // fetch the owner of the blog
      // client.getEntries({
      //   'sys.id': env.CTF_PERSON_ID
      // }),
      // fetch all blog posts sorted by creation date
      // client.getEntries({
      //   'content_type': 'news',
      //   order: '-sys.createdAt'
      // }),

      client.getEntries({
        'content_type': 'event',
        'fields.slug': route.params.id
      })

      // client.getAssets()

      ]).then(([entry]) => {
    // ]).then(([entries, entry]) => {
    // ]).then(([assets]) => {
      // return data that should be available
      // in the template
      // console.log('asyncData', [entries, entry])
      // if (entry.items && entry.items[0]) {
      //   if (entry.items[0].fields && entry.items[0].fields.contentReferences) {
      //     let cr = entry.items[0].fields.contentReferences
      //     for (let i = 0; i < cr.length; i++) {
      //       if (cr[i].fields && cr[i].fields.text && cr[i].fields.text.content && cr[i].fields.text.content) {
      //         cr[i].fields.text.content = _.map(cr[i].fields.text.content, (content) => {
      //           console.log(content, content.content)
      //           let formattedContent = _.map(content.content, (childrenContent) => {
      //             // childrenContent.value = replaceLineBreak(childrenContent.value)
      //             return childrenContent
      //           })
      //           content.content = formattedContent
      //           return content
      //         })
      //       }
      //     }
      //   }
      // }

      if (entry && entry.items[0] && entry.items[0].fields.contentType == 'Video') {
        store.dispatch('updateNavigationTheme', { theme: 'dark' })
      } else {
        store.dispatch('updateNavigationTheme', { theme: 'light' })
      }

      return {
        // person: entries.items[0],
        // entries: entries.items,
        entry: entry.items[0]
        // assets: _.filter(assets.items, (a)=>(a.fields.title.indexOf('KDN') >= 0 || a.fields.title.indexOf('-Architect') >= 0 || a.fields.title.indexOf('Building') >= 0 || a.fields.title.indexOf('Laneway') >= 0))
        // assets: assets.items
      }
    }).catch(console.error)
  },

  watch: {
    entry (newVal, oldVal) {
      if (newVal.fields.slug != oldVal.fields.slug || !oldVal.fields.slug) {
        this.refreshTrigger()
      }
    }
  },

  // beforeUpdate () {
  //   console.log('beforeUpdate')
  //   this.refreshTrigger()
  //   this.handleResize ()
  // },

  methods: {

    showCalendarOptions () {

    },

    showShareOptions () {

    },

    handleScroll () {
      this.refreshTrigger()
    },

    handleResize () {
      if (process.client) {
        if (window.innerWidth > 768) {
          if (this.st) {
            this.st.enable()
          } else {
            this.initScrollTrigger()
            this.st.enable()
          }
        } else {
          if (this.st) {
            this.st.disable()
          }
        }
      }
    },

    initScrollTrigger() {
      if (process.client) {
        this.st = ScrollTrigger.create({
          trigger: "#sidebar",
          start: "top top+=50px",
          pin: true,
          endTrigger: ".block-journal",
          end: "top 50%+=100px",
          onToggle: self => {
            // console.log("toggled, isActive:", self.isActive)
          },
          onUpdate: self => {
            // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
          }
        });
      }
    },

    refreshTrigger: _.throttle(function () {
      console.log('refreshTrigger')
      if (process.client) {
        window.dispatchEvent(new Event('resize'));
        // if (ScrollTrigger) {
        //   if (this.st) {
        //     this.st.refresh()
        //   }
        // }
        if (this.st) {
          this.st.refresh()
        }
      }
    }, 200),

    getImageRatio (image) {
      if (!image||!image.fields.file) return 1.5;
      let file = image.fields.file;
      if (file && file.details && file.details.image) {
        return file.details.image.width / file.details.image.height
      }
      return 1.5
    },
    // getEntryWithId (id) {
    //   client.getEntries({
    //     'content_type': 'news',
    //     'fields.id': id
    //   }).then((entry) => {
    //     return entry
    //   })
    // },

    getRichText (document) {
      return documentToHtmlString(document, options);
    },

    getDataTime (date, endDate) {
      // let default = '12:00:00'
      let format = 'dddd D MMM'
      // console.log(date)
      if (date && !endDate) {
        if (moment.parseZone(date).hours()>0) {
          format = 'dddd D MMM h:mma'
        }
        return `${moment.parseZone(date).format(format)}`
      } else
      if (!date && endDate) {
        if (moment.parseZone(endDate).hours()>0) {
          format = 'dddd D MMM h:mma'
        }
        return `${moment.parseZone(endDate).format(format)}`
      } else
      if (date && endDate) {

        let hasHour = moment.parseZone(date).hours()>0 || moment.parseZone(endDate).hours()>0
        let isSameDay = moment.parseZone(date).isSame(moment.parseZone(endDate), 'day')
        let isSameHour = moment.parseZone(date).isSame(moment.parseZone(endDate), 'hour')

        if (isSameDay && isSameHour) {
          format = 'dddd D MMM'
          return `${moment.parseZone(date).format(format)}`
        } else if (isSameDay) {
          format = 'dddd D MMM h:mma'
          return `${moment.parseZone(date).format(format)}—${moment.parseZone(endDate).format('h:mma')}`
        } else {
          format = 'dddd D MMM'
          return `${moment.parseZone(date).format(format)}—${moment.parseZone(endDate).format(format)}`
        }

      } else {
        return ``
      }
    },

    getGalleryImageClass (images) {
      if (!images || images.length < 1) return

      if (images.length == 1) {
        if (images[0] && this.getImageRatio(images[0]) <= 1.5) {
          return "col-12 col-md-6"
        } else {
          return "col-12"
        }
      } else if (images.length == 2) {
        return "col-12 col-md-6"
      } else if (images.length == 3) {
        return "col-12 col-md-4"
      } else if (images.length == 4) {
        return "col-12 col-md-3"
      } else if (images.length == 5) {
        return "col-12 col-md-4"
      } else if (images.length == 6) {
        return "col-12 col-md-3"
      } else {
        return "col-12 col-md-3"
      }
    },

    getGalleryImageStyle (images) {
      if (!images || images.length < 1) return
      if (images.length == 1) {
        if (images[0] && this.getImageRatio(images[0]) <= 1.5) {
          return {
            'max-width': '720px'
          }
        }
      }
    },

    getContentClass (type) {
      return `type-${_.lowerCase(type)}`
    }
  }
}
</script>

<style media="screen" scoped lang="sass">

  .container
    max-width: 1440px !important

  img
    display: block
    width: 100%
  ul
    li
      list-style: none

  .author
    background: #eee
    // box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.2)

    .thumb
      // float: right
      width: 8rem
      height: 8rem
      overflow: hidden
      border-radius: 10rem
      img
        object-fit: cover
        width: 100%
        height: 100%
    .name
    .bio

  .type-gallery
    max-width: 1800px
  .gallery
    .gallery-item
      .image

      .caption
        margin-top: .75rem
        font-size: .8rem

  header
    &.event-header
      position: relative
      // min-height: 80vh
      // display: flex
      // flex-direction: column
      // justify-content: space-between

      .event-title
        h1
          font-weight: normal
          text-transform: none
          padding-right: 1rem

      .event-info
        position: relative
        z-index: 9
        height: 100%

      .event-secondary-info
        display: block
        @media screen and (max-width: 768px)
          display: none

      .event-image
        // top: 0
        // left: 0
        // right: 0
        // bottom: 0
        // width: 100%
        // height: 100%
        // position: absolute
        // z-index: 1
        // object-fit: cover

      .event-action
        // position: absolute
        // right: 2rem
        // bottom: 2rem
        width: 30rem

        display: block
        @media screen and (max-width: 768px)
          display: none

        @media screen and (max-width: 768px)
          position: relative
          right: 0
          left: 0
          bottom: 0
          width: 100%
          // margin: 0 auto 2rem

        z-index: 9
        // background: black
        // padding: 1.5rem
        // color: white

        .event-action-title
          font-size: 1.25rem
          font-weight: bold
          line-height: 1.2
          margin-bottom: .5rem
        .event-action-info
          font-size: 1.25rem
        a
          text-decoration: none
          text-transform: uppercase
          // background: white
          // color: black

  article.content
    display: flex
    @media screen and (max-width: 768px)
      display: block

    aside

      #sidebar
        padding-top: 2rem
        .btn
          margin-bottom: .5rem
          min-width: 90%
          text-align: left

      width: 25%
      max-width: 20rem
      margin-left: auto

      @media screen and (max-width: 768px)
        width: 100%
        max-width: 100%

        #sidebar
          .btn
            margin-bottom: .5rem
            min-width: 100%

      h4
        font-weight: 400
        font-size: 1.75rem
        line-height: 1.2
        margin: 0 0 .2rem

      h5
        font-weight: 400

      .btn-share
        background-color: rgba(255, 93, 56, 0.05)
        color: black
        &:hover
          background-color: rgba(255, 93, 56, 0.4)

      a
        text-decoration: none

    .blocks-container
      width: 66%
      @media screen and (max-width: 768px)
        width: 100%
        margin-right: 0
        margin-left: 0
        .col-12, .container
          padding-left: 0
          padding-right: 0

  .organiser
    @apply text-orange text-lg font-medium
    font-weight: 400
    margin: .2rem 0 .2rem

</style>
