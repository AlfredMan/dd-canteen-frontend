<template>
  <div class="">
    <div v-if="isSuccess" class="">
      <h5>Thank you for your interest!</h5>
      <p>We'll be in touch soon. Meanwhile, follow our <a href="https://www.instagram.com/designdistrictlondon/" target="_blank" rel="noreferrer">Instagram</a> for more news and updates.</p>
    </div>
    <!-- <p v-if="!isSuccess">
      Sign-up today for the latest Design District news, updates and&nbsp;events.
    </p> -->
    <form
      v-if="!isSuccess"
      ref="subscribeForm"
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      name="subscribeForm"
      method="post"
      :target="formTarget"
      :class="{disabled: formState === 'loading'}"
      @submit.prevent="onFormSubmit"
    >
      <div>
        <div class="form-row">
          <div :class="[{'col-12 col-md-12': !active}, {'col-12': active}]" class="relative">
            <input
              class="form-control input-text form-field-reset"
              type="email"
              name="email"
              :class="{
                'error': error_email
                }"
              v-model="email"
              placeholder="Email Address"
              value=""
              required
            >
            <button class="block btn -btn-outline-dark btn-lg mt-0 absolute right-0 top-0 pr-4" @click="active = true"  v-show="!active">
              &rarr;
            </button>
          </div>
          <!-- <div v-show="!active" class="col">
            <div class="form-group">
              <button class="btn -btn-outline-dark btn-lg mt-0" @click="active = true">
                &rarr;
              </button>
            </div>
          </div> -->
        </div>

        <input
          v-show="active"
          id="first_name"
          ref="first_name"
          v-model="first_name"
          class="form-control input-text form-field-reset"
          type="text"
          name="first_name"
          :class="{
            'error': error_first_name
            }"
          placeholder="First Name"
          value=""
          required
        >
        <input
          v-show="active"
          id="last_name"
          ref="last_name"
          v-model="last_name"
          class="form-control input-text form-field-reset"
          type="text"
          name="last_name"
          :class="{
            'error': error_last_name
            }"
          placeholder="Last Name"
          value=""
          required
        >
      </div>

      <div v-show="active" class="">
        <!-- <h6>
          <small>I agree to the terms of your <a href="/privacy-notice/" target="_blank">Privacy Policy</a> and I want to receive:</small>
        </h6> -->

        <div>
          <input
            :id="`subscribeDesignOptIn-${this.formId}`"
            ref="subscribeDesignOptIn"
            v-model="subscribeDesignOptIn"
            class="form-field-reset checkbox"
            type="checkbox"
            name="00N0O00000GRkIa"
            :class="{
              'error': error_subscribeDesignOptIn
              }"
            value="1"
            @update="trySubmit"
            @change="trySubmit"
            required
          >
          <label :for="`subscribeDesignOptIn-${this.formId}`">
            <span>
              <!-- The Design District including information on work spaces, offices and commercial opportunities -->
              By submitting my email address, I agree to your <a href="/privacy-notice/" target="_blank">Privacy Policy</a> and terms & conditions, and agree to receive news from Bureau, Design District and Canteen into my inbox.            </span>
          </label>
        </div>

        <!-- <div>
          <input
            :id="`subscribeMarketingOptIn-${this.formId}`"
            ref="subscribeMarketingOptIn"
            v-model="subscribeMarketingOptIn"
            class="form-field-reset checkbox"
            type="checkbox"
            name="00N0O00000GRZb7"
            :class="{
              'error': error_subscribeMarketingOptIn
              }"
            value="1"
          >
          <label :for="`subscribeMarketingOptIn-${this.formId}`">
            <span>
              News from Greenwich Peninsula including cultural events and announcements
            </span>
          </label>
        </div> -->
      </div>

      <div class="g-recaptcha" data-sitekey="6LdPFNEUAAAAAKdvqOAD4Dq1MeL0WoGWzxZFj92t" />
      <div v-show="active" class="form-group form-submit my-4">
        <!-- <button onclick="submitDEManagerForm(); return false;" class="btn btn-primary btn-lg">
          Signup
        </button> -->
        <!-- <button class="btn btn-primary btn-lg mt-0" type="submit">
          Signup
        </button> -->
        <!-- <input id="submit" type="submit" value="Signup" style="display: none;"> -->
        <input id="subscribeSubmit" ref="subscribeSubmit" type="submit" value="Signup" style="display: none;">

        <h6 class="text-sm my-6 text-red-700 bg-red-200__px-8__p-6 rounded-sm" v-if="error">{{error}}</h6>

        <button
          class="cta theme-default format-button text-base uppercase"
          type="submit"
          :class="{
            'disabled pointer-events-none opacity-50': formState === 'loading' || (!this.subscribeDesignOptIn || (this.email.length<1) || (this.first_name.length<1) || (this.last_name.length<1))
          }"
          :disabled="formState === 'loading' || (!this.subscribeDesignOptIn || (this.email.length<1) || (this.first_name.length<1) || (this.last_name.length<1))"
          @click="trySubmit"
        >
          {{ formAction }}
        </button>

        <vue-recaptcha
          ref="invisibleRecaptcha"
          :sitekey="recaptchaKey"
          :load-recaptcha-script="true"
          size="invisible"
          @verify="onVerify"
          @expired="onExpired"
        />
      </div>
      <div v-show="active&&false" class="">
        <h6>
          <!-- Our <a href="/privacy-notice/">Privacy Policy</a> outlines how we use and store your data. You can manage your preferences or opt out of communications at any time. -->
          <small>Our <a href="/privacy-notice/" target="_blank">Privacy Policy</a> outlines how we use and store your data. You can manage your preferences or opt out of communications at any time.</small>
        </h6>
        <!-- <div class="mt-4">
          <small class="text-black-50">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and
            <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
          </small>
        </div> -->
      </div>

      <!-- <input type="hidden" name="captcha_settings" value="{&quot;keyname&quot;:&quot;GoogleAPIKeyV2&quot;,&quot;fallback&quot;:&quot;true&quot;,&quot;orgId&quot;:&quot;00D20000000nxym&quot;,&quot;ts&quot;:&quot;&quot;}"> -->
      <input type="hidden" name="oid" value="">
      <!-- <input type="hidden" name="retURL" value="https://designdistrict.co.uk/success/"> -->
      <input ref="retURL" type="hidden" name="retURL" value="https://designdistrict.co.uk/success?source=newsletter">
      <input id="00N0O00000AB5j2" ref="00N0O00000AB5j2" type="hidden" name="00N0O00000AB5j2" value="Web Form">
      <input id="00N0O00000AB5j1" ref="00N0O00000AB5j1" type="hidden" name="00N0O00000AB5j1" value="Design District">
      <input id="00N0O00000AB5iY" ref="00N0O00000AB5iY" type="hidden" name="00N0O00000AB5iY" value="Design District Subscription">
      <input id="00N0O00000AB5iN" ref="00N0O00000AB5iN" type="hidden" name="00N0O00000AB5iN" value="7010O00000153NQQAY">
      <input id="designOptInDate" ref="designOptInDate" type="hidden" name="00N0O00000GRkIf" value="">
      <input id="marketingOptInDate" ref="marketingOptInDate" type="hidden" name="00N0O00000GRZbC" value="">
      <input id="privacyOptIn" ref="privacyOptIn" type="hidden" name="00N0O00000GRrXc" value="1">
      <input id="privacyOptInDate" ref="privacyOptInDate" type="hidden" name="00N0O00000GRrXh" value="">
      <input id="recordType" type="hidden" name="recordType" value="0123Y0000007v91">
      <input id="00N3Y00000H1cZf" ref="Last_Page_Viewed" type="hidden" name="00N3Y00000H1cZf" value="">
      <input ref="tracking" type="hidden" name="tracking_default" value="tracking_default">
    </form>
    <!-- <iframe
      v-if="!isSuccess && formState === 'loading'"
      id="subscribRet"
      ref="subscribRet"
      name="subscribRet"
      style="display:none"
      @load="retOnload"
    /> -->
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

const KEY = '6LeyatwUAAAAAHWHaZuq8aq0GAZj21SxmI4fCgPk'

export default {
  name: 'NewsletterForm',
  components: { VueRecaptcha },
  data () {
    return {
      recaptchaKey: KEY,
      active: false,
      formAlert: {
        type: '',
        text: ''
      },
      formTarget: '',
      formAction: 'Submit',
      formState: 'idle',
      first_name: '',
      last_name: '',
      email: '',
      subscribeDesignOptIn: '',
      subscribeMarketingOptIn: '',
      error: '',
      error_first_name: false,
      error_last_name: false,
      error_email: false,
      error_subscribeDesignOptIn: false,
      error_subscribeMarketingOptIn: false,
      formId: '123456789'
    }
  },
  computed: {
    isSuccess () {
      return this.$route.query.subscription && this.$route.query.subscription === 'success'
    },
    routeHistory () {
      return this.$store.state.routeHistory || {}
    },
    previousPath () {
      return this.routeHistory && this.routeHistory.path || ''
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.fullPath !== from.fullPath) {
        this.active = false
      }
    }
  },
  mounted () {
    this.createFormID()
  },
  updated () {
    // console.log(this.$route.path)
  },
  methods: {

    createFormID () {
      console.log('this.formId 1', this.formId)
      this.formId = this._uid ||_.shuffle(_.split(this.formId,'')).join('')
      console.log('this.formId 2', this.formId)
    },

    trySubmit () {
      if (this.email.length<1) {
        this.error = 'Please check your email'
        return
      }
      if (this.first_name.length<1||this.last_name.length<1) {
        this.error = 'Please check your name'
        return
      }
      if (!this.subscribeDesignOptIn) {
        this.error = 'You need to agree to receive Bureau, Design District and Canteen news and information'
        return
      }
      this.error = ''
      return
    },

    init () {
      // this.$refs.subscribeForm.setAttribute('target', 'ref')
    },
    retOnload (e) {
      // console.log('retOnload', e)
      // console.log(this.$refs.subscribRet, this.$refs.subscribRet.contentWindow.location.href)
      // const iframeURL = this.$refs.subscribRet.src
      // const retURL = this.$refs.retURL.value
      // debugger
      this.formState = 'complete'
      this.formAlert.type = 'success'
      this.formAlert.text = 'Complete.'
      this.formAction = 'Complete'
      // this.$router.push({ query: { subscription: 'success' } })
    },
    onFormSubmit (e) {
      this.formState = 'loading'
      this.formAlert.type = 'loading'
      this.formAlert.text = 'Processing...'
      this.formAction = 'Loading'
      // this.$refs.invisibleRecaptcha.execute()

      if (this.submitDEManagerForm() && this.handleRecap()) {
        this.$refs.invisibleRecaptcha.execute()
        return true
      } else {
        // alert('failed')
        console.error('something went wrong.')
        e.preventDefault()
        return false
      }

      e.preventDefault()
    },
    handleRecap () {
      // if (grecaptcha.getResponse().length <= 0) {
      //   alert('Please click the reCAPTCHA checkbox')
      //   return false
      // } else {
      //   return true;
      // }

      // do some checking
      return true
    },
    sendForm ({ oid, f, v }) {

      this.$refs.subscribeForm.oid.value = oid
      this.$refs.tracking.name = f
      this.$refs.tracking.value = v
      this.$refs.Last_Page_Viewed.value = this.previousPath || ''
      // debugger
      // return;

      this.$refs.subscribeForm.submit();
    },
    getNow () {
      const today = new Date()
      let dd = today.getDate()
      let mm = today.getMonth() + 1
      const yyyy = today.getFullYear()
      // const hours = today.getHours()
      // const mins = today.getMinutes()
      let now = ''

      if (dd < 10) {
        dd = '0' + dd
      }

      if (mm < 10) {
        mm = '0' + mm
      }

      // now = mm+'/'+dd+'/'+yyyy+' '+hours+':'+mins;
      now = dd + '/' + mm + '/' + yyyy
      return now
    },
    onVerify (recaptchaToken) {

      this.resetRecaptcha()
      const url = 'https://us-central1-designdistrict-2b9e1.cloudfunctions.net/verify'
      // let url = 'https://www.google.com/recaptcha/api/siteverify'

      this.$axios.$get('https://www.cloudflare.com/cdn-cgi/trace').then((data) => {
        // console.log(data)

        let w=window.innerWidth||-1;
        let h=window.innerHeight||-1;
        let y = window.pageYOffset || -1;
        let href=window.location.href||-1;
        let fn = this.$refs.subscribeForm.first_name.value || -1
        let ln = this.$refs.subscribeForm.last_name.value || -1
        let e = this.$refs.subscribeForm.email.value || -1

        this.$axios.$post(url, {
          token: recaptchaToken,
          data: data,
          win: `${fn}_${ln}_${e}_${w}_${h}_${y}_${href}`
        }).then((response) => {
          // console.log(response)
          // this.formTarget = 'subscribRet'
          this.sendForm({
            oid: response.oid,
            f: response.f,
            v: response.v
          })

        }).catch((error) => {
          return false;
          // console.log(error)
        })
      })

      // console.log('onVerify test finished')

      return

      // console.log('Verify: ' + recaptchaToken)
      //
      // // const url = 'http://localhost:5001/designdistrict-2b9e1/us-central1/verify'
      // const url = 'https://us-central1-designdistrict-2b9e1.cloudfunctions.net/verify'
      // // let url = 'https://www.google.com/recaptcha/api/siteverify'
      // this.$axios.$post(url, {
      //   token: recaptchaToken
      // }).then((response) => {
      //   console.log(response)
      //   // this.formTarget = 'subscribRet'
      //   this.$refs.subscribeForm.submit()
      // }).catch((error) => {
      //   console.log(error)
      // })

      // debugger
      // this.$refs.subscribeForm.submit()

      // setTimeout(() => {
      //   this.formState = 'idle'
      //   this.formAlert.type = 'success'
      //   this.formAlert.text = 'Complete.'
      //   this.formAction = 'Complete'
      //
      //   // alert('done')
      //   this.$refs.subscribeForm.submit()
      //
      //   setTimeout(() => {
      //     this.formState = 'idle'
      //     this.formAlert.type = ''
      //     this.formAlert.text = ''
      //     this.formAction = 'Submit'
      //   }, 3000)
      // }, 1000)

      // const postBody = {
      //   'email': 'testtestjason@hato.co',
      //   'first_name': 'Jason TEST',
      //   'last_name': 'Chow TEST',
      //   'oid': '00D20000000nxym',
      //   '00N0O00000GRkIa': '1',
      //   '00N0O00000GRZb7': '1',
      //   '00N0O00000AB5j2': 'Web Form',
      //   '00N0O00000AB5j1': 'Design District',
      //   '00N0O00000AB5iY': 'Design District Subscription',
      //   '00N0O00000AB5iN': '7010O00000153NQQAY',
      //   '00N0O00000GRkIf': this.getNow(),
      //   '00N0O00000GRZbC': this.getNow(),
      //   '00N0O00000GRrXc': '1',
      //   '00N0O00000GRrXh': this.getNow()
      // }
      //
      // const formUrlEncoded = (x) => {
      //   return Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
      // }
      //
      // const dataFromForm = formUrlEncoded(postBody)
      //
      // const fd = new FormData(this.$refs.subscribeForm)
      // fd.append('email', 'testtestjason@hato.co')
      // fd.append('first_name', 'Jason TEST')
      // fd.append('last_name', 'Chow TEST')
      // fd.append('oid', '00D20000000nxym')
      // fd.append('00N0O00000GRkIa', '1')
      // fd.append('00N0O00000GRZb7', '1')
      // fd.append('00N0O00000AB5j2', 'Web Form')
      // fd.append('00N0O00000AB5j1', 'Design District')
      // fd.append('00N0O00000AB5iY', 'Design District Subscription')
      // fd.append('00N0O00000AB5iN', '7010O00000153NQQAY')
      // fd.append('00N0O00000GRkIf', this.getNow())
      // fd.append('00N0O00000GRZbC', this.getNow())
      // fd.append('00N0O00000GRrXc', '1')
      // fd.append('00N0O00000GRrXh', this.getNow())
      // debugger
      // this.$axios.$post('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', fd).then((response) => {
      //   console.log(response)
      // }).catch((error) => {
      //   console.log(error)
      // })

      // this.$axios({
      //   method: 'post',
      //   url: 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
      //   data: dataFromForm,
      //   config: {
      //     headers: { 'Content-type': 'application/x-www-form-urlencoded' }
      //   }
      //   // headers: {
      //   //   'Content-type': 'application/x-www-form-urlencoded'
      //   // }
      // }).then((response) => {
      //   console.log(response)
      // }).catch((error) => {
      //   console.log(error)
      // })
    },
    onExpired () {
      // console.error('reCAPTCHA has expired')
      // this.formState = 'idle'
      // this.formAlert.type = 'error'
      // this.formAlert.text = 'reCAPTCHA has expired. Please try again.'
      // setTimeout(() => {
      this.resetRecaptcha()
      // }, 1000)
    },
    resetRecaptcha () {
      if (this.$refs.invisibleRecaptcha) {
        this.$refs.invisibleRecaptcha.reset() // Direct call reset method
      }
    },
    submitDEManagerForm () {
      // const form = document.forms.subscribeForm
      // const form = this.$refs.subscribeForm
      if ((this.$refs.first_name.value && this.$refs.first_name.value.toLowerCase() == 'test 123')) {
        alert("Sorry, something went wrong!!");
        this.resetForm()
        return false
      }

      if ((this.$refs.first_name.value && this.$refs.first_name.value.toLowerCase() == 'james') && (this.$refs.last_name.value && this.$refs.last_name.value.toLowerCase() == 'smith')) {
        alert("Sorry, something went wrong!");
        this.resetForm()
        return false
      }

      if (this.$refs.first_name.value === this.$refs.last_name.value) {
        alert("Sorry, please check your name!");
        this.resetForm()
        return false
      }

      const today = new Date()
      let dd = today.getDate()
      let mm = today.getMonth() + 1
      const yyyy = today.getFullYear()
      // const hours = today.getHours()
      // const mins = today.getMinutes()
      let now = ''

      if (dd < 10) {
        dd = '0' + dd
      }

      if (mm < 10) {
        mm = '0' + mm
      }

      // now = mm+'/'+dd+'/'+yyyy+' '+hours+':'+mins;
      now = dd + '/' + mm + '/' + yyyy

      this.$refs.privacyOptInDate.value = now

      if (this.$refs.subscribeDesignOptIn.checked) {
        this.$refs.designOptInDate.value = now
      }

      // if (this.$refs.subscribeMarketingOptIn.checked) {
      //   this.$refs.marketingOptInDate.value = now
      // }

      this.$refs.Last_Page_Viewed.value = this.previousPath || ''

      // document.getElementById('privacyOptInDate').value = now
      //
      // if (document.getElementById('designOptIn').checked) {
      //   document.getElementById('designOptInDate').value = now
      // }
      //
      // if (document.getElementById('marketingOptIn').checked) {
      //   document.getElementById('marketingOptInDate').value = now
      // }
      //
      // if ((document.getElementById('first_name').value === 'James') && (document.getElementById('last_name').value === 'Smith')) {
      //   alert('Sorry, something went wrong!')
      //   return false
      // }

      // handleRecap()
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  @apply max-w-3xl;
}
h2 {
  @apply max-w-2xl;
}
h4 {
  @apply max-w-3xl font-medium;
}
</style>
