<template lang="html">
  <div class="news-card" v-if="entry">
    <router-link :to="{ path: `/events/${entry.fields.slug}` }">
      <lazy-image
      v-if="entry.fields.thumbnailImage"
      class="news-thumbnail"
      :src="entry.fields.thumbnailImage.fields.file.url"
      :w="1000"
      :h="1000"
      />
      <div class="news-info mt-2">
        <h6 class="organiser" v-if="entry.fields.creditText">
          {{entry.fields.creditText}}
        </h6>
        <h4 class="normal" v-if="entry.fields.title">
          <!-- <div class="news-type">
            <div class="monospace badge badge-pill" :class="{
              'badge-secondary': entry.fields.contentType == 'Event',
              'badge-success': entry.fields.contentType == 'Podcast',
              'badge-dark': entry.fields.contentType == 'Video',
              'badge-light': entry.fields.contentType == 'Article',
            }">{{entry.fields.contentType}}</div>
          </div> -->
          <span class="-uppercase">{{entry.fields.title}}</span>
        </h4>
        <h5 class="mt-2 font-light" v-if="entry.fields.date">
          {{getDataTime(entry.fields.date, entry.fields.endDate)}}
        </h5>
        <h5 class="mt-2 opacity-50" v-if="entry.fields.summary" v-html="getRichText(entry.fields.summary)">
        </h5>
        <!-- <div class="new-meta d-flex mt-3 flex-wrap monospace">
          <h6 class="-text-uppercase my-0 mr-3" v-if="entry.fields.author">
            By {{entry.fields.author[0].fields.name}}
          </h6>
        </div> -->
        <div class="d-flex">
        </div>

      </div>
    </router-link>
  </div>
</template>

<script>
import moment from 'moment'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default {
  props: ['entry'],
  data () {
    return {

    }
  },
  methods: {
    getRichText (document) {
      return documentToHtmlString(document);
    },

    // getDataTime (date, endDate) {
    //   // let default = '12:00:00'
    //   let format = 'D MMM'
    //   if (date && !endDate) {
    //     return `${moment(date).format(format)}`
    //   } else
    //   if (!date && endDate) {
    //     return `${moment(endDate).format(format)}`
    //   } else
    //   if (date && endDate) {
    //     return `${moment(date).format(format)}—${moment(endDate).format(format)}`
    //   } else {
    //     return ``
    //   }
    // }

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
        if (moment.parseZone(date).hours()>0 || moment.parseZone(endDate).hours()>0) {
          format = 'dddd D MMM'
        }
        return `${moment.parseZone(date).format(format)}—${moment.parseZone(endDate).format(format)}`
      } else {
        return ``
      }
    },
  }
}
</script>

<style lang="sass" scoped="">
.news-card

  @media screen and (max-width: 768px)
    margin-bottom: 2rem

  .news-type
    line-height: 1
    height: 2em
    font-size: .9rem
    line-height: 1
    margin-bottom: .5rem
    @media screen and (max-width: 768px)
      height: auto
      margin-top: 1rem

  .news-info
    h4
      font-weight: 400
      text-transform: none
      margin: .5rem 0
      line-height: 1.125
    h5
      font-weight: 400
      @media screen and (max-width: 768px)
        font-size: 1.2rem
        p
          font-size: 1.5rem
          b
            font-weight: 400
    h6
      @apply text-orange text-sm font-medium
      margin: .75rem 0 .2rem
    b
      font-weight: 400

    .badge
      font-weight: 400
      font-size: .9rem
      line-height: 1
      // letter-spacing: 0.1em
      // text-transform: uppercase
      padding: .3em 1.8em
      margin: .5em 0 .5em 0
      vertical-align: super
      @media screen and (max-width: 768px)
        font-size: .5em
        font-size: .9rem

    .new-meta
      opacity: 0.5
      h6
        font-size: 0.8rem
        @media screen and (max-width: 768px)
          font-size: .9rem



</style>
