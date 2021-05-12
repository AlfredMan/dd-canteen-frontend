<template>
  <div class="news" :class="getContentClass(entry.fields.contentType)">
    <!-- <pre>{{entry}}</pre> -->
    <div class="overflow-x-hidden" v-if="entry" :key="entry.sys.id">

      <!-- <header class="event-header" v-if="entry.fields.contentType === 'Event'">
        <div class="event-info p-5">
          <div class="d-flex flex-column justify-content-between ">
            <div class="event-title">
              <h1 class=" mt-2 mb-4 pl-0 h2 col-12 col-md-6" v-if="entry.fields.title">
                {{entry.fields.title}}
              </h1>
              <h3 class="mb-4" v-if="entry.fields.date">
                {{getDataTime(entry.fields.date, entry.fields.endDate)}}
              </h3>
              <div class="d-flex- mb-5 d-none">
                <h6 class="text-uppercase my-0 mr-2" v-if="entry.fields.contentType">
                  {{entry.fields.contentType}}
                </h6>
                <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">
                  by {{entry.fields.author[0].fields.name}}
                </h6>
                <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">

                </h6>
              </div>
            </div>
          </div>
          </div>
          <div class="event-action">
            <div class="d-flex flex-column flex-lg-row justify-content-around" v-if="entry.fields.actionLabel && entry.fields.actionUrl">
              <div class="">
                <div class="event-action-title">{{entry.fields.actionTitle}}</div>
                <div class="event-action-info">{{entry.fields.actionInfo}}</div>
              </div>
              <div class="mt-3 mt-lg-0 ml-lg-auto">
                <a target="_blank" class="btn btn-lg btn-secondary" :href="entry.fields.actionUrl">{{entry.fields.actionLabel}}</a>
              </div>
            </div>
        </div>
        <img class="event-image" :src="entry.fields.mainImage.fields.file.url" alt="" v-if="entry.fields.mainImage">
      </header> -->

      <header class="container event-header my-3 mb-5 pt-5" v-if="entry.fields.contentType === 'Event'">
        <div class="event-info">
          <div class="row row-flex justify-content-between ">
            <div class="col-12 col-md-6 order-2 order-lg-1">
              <div class="event-title order-sm-3">
                <h1 class="mt-2 mb-4 pl-0 h2" v-if="entry.fields.title">
                  {{entry.fields.title}}
                </h1>
                <h3 class="mb-4" v-if="entry.fields.date">
                  {{getDataTime(entry.fields.date, entry.fields.endDate)}}
                </h3>
                <div class="d-flex- mb-5 d-none">
                  <h6 class="text-uppercase my-0 mr-2" v-if="entry.fields.contentType">
                    {{entry.fields.contentType}}
                  </h6>
                  <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author && entry.fields.author[0] && entry.fields.author[0].fields && entry.fields.author[0].fields.name">
                    by {{entry.fields.author[0].fields.name}}
                  </h6>
                  <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author && entry.fields.author[0] && entry.fields.author[0].fields && entry.fields.author[0].fields.name">
                  </h6>
                </div>
              </div>
              <div class="event-summary my-3">
                <div class="new-meta d-flex mb-3 flex-wrap" v-if="entry.fields.creditText">
                  <p class="-text-uppercase my-0 mr-3" v-if="entry.fields.creditText">
                    {{entry.fields.creditText}}
                  </p>
                </div>
                <div class="summary" v-if="entry.fields.summary" v-html="getRichText(entry.fields.summary)"></div>
              </div>
              <div class="event-action bg-light my-3">
                <div class="d-flex flex-column flex-lg-row justify-content-around" v-if="entry.fields.actionLabel && entry.fields.actionUrl">
                  <div class="">
                    <div class="event-action-title">{{entry.fields.actionTitle}}</div>
                    <div class="event-action-info">{{entry.fields.actionInfo}}</div>
                  </div>
                  <div class="mt-3 mt-lg-0 ml-lg-auto">
                    <a target="_blank" class="btn btn-lg btn-secondary" :href="entry.fields.actionUrl">{{entry.fields.actionLabel}}</a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-12 col-md-6 order-1 order-lg-2 mb-4 mb-lg-0"
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

      <header class="container my-3 mt-4 pt-5" v-else-if="entry.fields.contentType === 'Podcast'">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-6 mb-4  order-2 order-lg-1">
            <h1 class=" mt-2 mb-4 h2" v-if="entry.fields.title">
              {{entry.fields.title}}
            </h1>
            <h3 class="mb-4" v-if="entry.fields.date">
              {{getDataTime(entry.fields.date, entry.fields.endDate)}}
            </h3>
            <div class="my-3">
              <div class="new-meta d-flex mb-3 flex-wrap" v-if="entry.fields.creditText">
                <p class="-text-uppercase my-0 mr-3" v-if="entry.fields.creditText">
                  {{entry.fields.creditText}}
                </p>
              </div>
              <div class="summary" v-if="entry.fields.summary" v-html="getRichText(entry.fields.summary)"></div>
            </div>
            <div class="d-flex- mb-5 d-none">
              <h6 class="text-uppercase my-0 mr-2" v-if="entry.fields.contentType">
                {{entry.fields.contentType}}
              </h6>
              <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">
                by {{entry.fields.author[0].fields.name}}
              </h6>
              <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">

              </h6>
            </div>
          </div>
          <div class="col-12 col-md-6 order-1 order-lg-2 mb-4"  v-if="entry.fields.mainImage && entry.fields.mainImage.fields && entry.fields.mainImage.fields.file">
            <!-- <img :src="entry.fields.mainImage.fields.file.url" alt=""> -->
            <lazy-image
              :src="entry.fields.mainImage.fields.file.url"
              :w="2000"
              :h="2000"
              />
          </div>
          <div class="col-12 d-flex px-5 pt-2 order-3 order-lg-3 text-black-50"  v-if="entry.fields.embedContent" :class="{'col-md-6 bg-grey': !entry.fields.mainImage, 'col-md-8': entry.fields.mainImage}">
            <div class="">

            </div>
            <div class="d-flex flex-column justify-content-center w-100 py-5"
            v-for="content in entry.fields.embedContent"
            v-if="content && content.sys && content.sys.contentType && content.sys.contentType.sys.id === 'embed'">
                <div class=""  v-html="content.fields.embedCode.content[0].content[0].value">
                </div>
                <div class="">
                  {{ content.fields.description}}
                </div>
            </div>
          </div>
        </div>
      </header>

      <header class="container-fluid mb-0 mt-0 py-5 bg-dark text-white" v-else-if="entry.fields.contentType === 'Video'">
        <div class="row d-flex justify-content-start pt-5">
          <div class="container mb-5">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="mb-4">
                  <h1 class=" mt-2 mb-4 h2 col-12 col-lg-8 px-0" v-if="entry.fields.title">
                    {{entry.fields.title}}
                  </h1>
                  <h3 class="mb-4" v-if="entry.fields.date">
                    {{getDataTime(entry.fields.date, entry.fields.endDate)}}
                  </h3>
                  <div class="d-flex- mb-5 d-none">
                    <h6 class="text-uppercase my-0 mr-2" v-if="entry.fields.contentType">
                      {{entry.fields.contentType}}
                    </h6>
                    <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">
                      by {{entry.fields.author[0].fields.name}}
                    </h6>
                  </div>
                </div>
                <div class="new-meta d-flex mb-3 flex-wrap" v-if="entry.fields.creditText">
                  <h6 class="-text-uppercase my-0 mr-3" v-if="entry.fields.creditText">
                    {{entry.fields.creditText}}
                  </h6>
                </div>
                <div class="summary" v-if="entry.fields.summary" v-html="getRichText(entry.fields.summary)"></div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="col-12 col-md-12 d-flex px-0 -px-lg-5"  v-if="entry.fields.embedContent" :style="{ backgroundColor: entry.fields.colour}">
              <div class="">

              </div>
              <div class="d-flex flex-column justify-content-center w-100" v-for="content in entry.fields.embedContent"
              v-if="content && content.sys && content.sys.contentType && content.sys.contentType.sys.id === 'embed'">
                  <div class="video-wrapper" >
                    <div class="iframe-wrapper" v-html="content.fields.embedCode.content[0].content[0].value">

                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="col-12 col-md-6 px-3 px-md-0">
                      {{ content.fields.description}}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header class="container my-3 mt-4 pt-5" v-else>
        <div class="row d-flex justify-content-start">
          <div class="col-12 col-md-7 mb-4">
            <h1 class=" mt-2 mb-4 h2" v-if="entry.fields.title">
              {{entry.fields.title}}
            </h1>
            <h3 class="mb-4" v-if="entry.fields.date">
              {{getDataTime(entry.fields.date, entry.fields.endDate)}}
            </h3>
            <div class="d-flex- mb-5 d-none">
              <h6 class="text-uppercase my-0 mr-2" v-if="entry.fields.contentType">
                {{entry.fields.contentType}}
              </h6>
              <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">
                by {{entry.fields.author[0].fields.name}}
              </h6>
              <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">

              </h6>
            </div>
            <div class="summary h5" v-if="entry.fields.summary" v-html="getRichText(entry.fields.summary)"></div>
          </div>
        </div>
        <div class="row d-flex justify-content-center"
        v-if="entry.fields.mainImage && entry.fields.mainImage.fields && entry.fields.mainImage.fields.file">
          <div
          class="col-12"
          :class="{
            'col-md-10':getImageRatio(entry.fields.mainImage)>1.5,
            'col-md-6':getImageRatio(entry.fields.mainImage)<=1.5
            }"
          >
            <lazy-image
                :src="entry.fields.mainImage.fields.file.url"
                :w="2000"
                :h="2000"
                />
          </div>
        </div>
      </header>

    </div>

    <div class="overflow-x-hidden pt-6 lg:pt-12" v-if="entry">

      <article class="content mt-0" v-if="entry.fields.contentReferences">

        <!-- <RichTextRenderer :document="entry.fields.richText" /> -->
        <div class="row row-flex justify-content-center" v-for="content in entry.fields.contentReferences">

          <!-- text -->
          <div class="col-12  type-text">
            <div class="container ">
              <div class="row justify-content-center">
                <div class="col-12 col-md-6 my-4 -px-lg-5" v-if="content && content.sys && content.sys.contentType && content.sys.contentType.sys.id === 'text'" v-html="getRichText(content.fields.text)">
                </div>
              </div>
            </div>
          </div>

          <!-- embed -->
          <div class="col-12 type-embed">
            <div class="container ">
              <div class="row justify-content-center">
                <div class="col-12 col-md-7 my-5 -px-lg-5" v-if="content && content.sys && content.sys.contentType && content.sys.contentType.sys.id === 'embed'">
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
          class="col-12 col-lg-10 my-5 px-5 px-lg-0 type-gallery"
          v-if="content && content.sys && content.sys.contentType && content.sys.contentType.sys.id === 'gallery'"
          >
            <div class="row row-flex flex-wrap justify-content-center align-items-center gallery">
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

    <BlockJournal />

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
import BlockJournal from '~/components/blocks/BlockJournal'
import { createClient } from '~/plugins/contentful.js'
// import RichTextRenderer from 'contentful-rich-text-vue-renderer'

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
import NewsCard from '~/components/NewsCard'

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

// async getEntryWithId = function (id) {
//   console.log('getEntryWithId', id)
//   let entryWithId = null
//   await client.getEntries({
//     'content_type': 'news',
//     'fields.id': id
//   }).then((entry) => {
//     console.log('id entry', id,  entry)
//     entryWithId = entry
//   })
//   return entryWithId
// }

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
      tags: null
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
    NewsCard,
    BlockJournal
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
        'content_type': 'news',
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

  methods: {

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
          format = 'dddd D MMM, LT'
        }
        return `${moment.parseZone(date).format(format)}`
      } else
      if (!date && endDate) {
        if (moment.parseZone(endDate).hours()>0) {
          format = 'dddd D MMM, LT'
        }
        return `${moment.parseZone(endDate).format(format)}`
      } else
      if (date && endDate) {
        if (moment.parseZone(date).hours()>0 || moment.parseZone(endDate).hours()>0) {
          format = 'dddd D MMM, LT'
        }
        return `${moment.parseZone(date).format(format)}—${moment.parseZone(endDate).format(format)}`
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

      .event-info
        position: relative
        z-index: 9
        height: 100%

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

        @media screen and (max-width: 768px)
          position: relative
          right: 0
          left: 0
          bottom: 0
          width: 100%
          // margin: 0 auto 2rem

        z-index: 9
        // background: black
        padding: 1.5rem
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
</style>
