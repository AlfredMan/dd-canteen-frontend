<template lang="html">
  <div class=""
  :class="{
    'guideline-canteen':$route.query.source=='canteen'||source=='canteen'
    }"
  >
    <div class="cap-max-w px-3 pt-32 pb-32 lg:py-64">
      <div class="w-full lg:w-7/12">
        <h2>Thank you for your&nbsp;interest!</h2>
      </div>
      <div class="w-full">
        <p class="text-xl guideline-canteen" v-if="$route.query.source=='canteen'||source=='canteen'">
          We'll be in touch soon. Meanwhile, follow our <a href="https://www.instagram.com/designdistrictcanteen/" target="_blank" rel="noreferrer">Instagram</a> for more news and updates.</p>
        <p class="text-xl" v-else>We'll be in touch soon. Meanwhile, follow our <a href="https://www.instagram.com/designdistrictlondon/" target="_blank" rel="noreferrer">Instagram</a> for more news and updates.</p>
      </div>
      <div class="hidden" :class="{
    'guideline-canteen':$route.query.source=='canteen'||source=='canteen'
    }">{{$route.query}},{{$route.query.source}},{{source}},{{source=='canteen'}}</div>
    </div>
  </div>
</template>

<script>
import EnquireForm from '../../components/forms/Enquire.vue'
import NewsletterForm from '../../components/forms/Newsletter.vue'
// import { studios, validStudios } from '~/common/architecture'
export default {
  head () {
    return {
      title: 'Success',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Thank you for your interest! We\'ll be in touch soon.' }
      ]
    }
  },
  components: {
    EnquireForm,
    NewsletterForm
  },
  data () {
    return {
      source: this.$route.query.source || 'nosource',
      log: []
    }
  },
  mounted () {
    if (process.client) {
      this.source = this.$route.query.source || 'nosource'
      this.log.push('1')
      this.$nextTick(()=>{
        this.source = this.$route.query.source || 'nosource'
        this.log.push('2')
      })
      setTimeout(()=>{
        this.source = this.$route.query.source || 'nosource'
        this.log.push('3')
      },500)
    }
  },
  computed: {
  },

  asyncData({route, params}) {
    const source = route.query.source || 'nosource'
    return { source }
  }
}
</script>

<style lang="scss" scoped>
p {
  max-width: 100%
}
</style>
