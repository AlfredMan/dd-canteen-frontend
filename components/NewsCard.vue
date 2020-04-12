<template lang="html">
  <div class="news-card">
    <router-link :to="{ path: `/news/${entry.fields.slug}` }">
      <!-- <img class="news-thumbnail" :src="entry.fields.thumbnailImage.fields.file.url" alt=""> -->
      <lazy-image
      class="news-thumbnail"
      :src="entry.fields.thumbnailImage.fields.file.url"
      :w="1000"
      :h="1000"
      />
      <div class="news-info mt-2">
        <h4 class="mt-0 mb-2" v-if="entry.fields.title">
          <div class="news-type">
            <div class="badge badge-pill" :class="{
              'badge-secondary': entry.fields.contentType == 'Event',
              'badge-success': entry.fields.contentType == 'Podcast',
              'badge-dark': entry.fields.contentType == 'Video',
              'badge-light': entry.fields.contentType == 'Article',
            }">{{entry.fields.contentType}}</div>
          </div>
          {{entry.fields.title}}
        </h4>
        <h5 class="mt-2" v-if="entry.fields.date">
          {{getDataTime(entry.fields.date, entry.fields.endDate)}}
        </h5>
        <div class="new-meta d-flex mt-3 flex-wrap">
          <!-- <h6 class="-text-uppercase my-0 mr-1" v-if="entry.fields.contentType">
            {{entry.fields.contentType}}
          </h6> -->
          <h6 class="-text-uppercase my-0 mr-3" v-if="entry.fields.author">
            By {{entry.fields.author[0].fields.name}}
          </h6>
          <h6 class="-text-uppercase my-0 mr-3" v-if="entry.fields.creditText">
            {{entry.fields.creditText}}
          </h6>
        </div>
        <div class="d-flex">
        </div>

      </div>
    </router-link>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['entry'],
  data () {
    return {

    }
  },
  methods: {
    getDataTime (date, endDate) {
      // let default = '12:00:00'
      let format = 'D MMM'
      if (date && !endDate) {
        return `${moment(date).format(format)}`
      } else
      if (!date && endDate) {
        return `${moment(endDate).format(format)}`
      } else
      if (date && endDate) {
        return `${moment(date).format(format)}—${moment(endDate).format(format)}`
      } else {
        return ``
      }
    }
  }
}
</script>

<style lang="sass" scoped="">
.news-card

  .news-type
    line-height: 1
    height: 1.5rem
    margin-bottom: .25rem
    @media screen and (max-width: 768px)
      height: auto
      margin-top: 1rem

  .news-info
    h4
      font-weight: 400
    h5
      font-weight: 500
    .badge
      font-weight: 400
      font-size: 0.35em
      line-height: 1
      letter-spacing: 0.1em
      text-transform: uppercase
      padding: .4em .7em
      vertical-align: super
      @media screen and (max-width: 768px)
        font-size: .5em

    .new-meta
      opacity: 0.5



</style>
