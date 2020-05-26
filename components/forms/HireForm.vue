<template>
  <div class="">
    <form
      v-if="!isSuccess"
      ref="subscribeForm"
      name="subscribeForm"
      method="post"
      :target="formTarget"
      :class="{disabled: formState === 'loading'}"
      @submit.prevent="onFormSubmit"
    >
      <div>
        <div class="form-row">
          <div :class="[{'col-7 col-md-8': !active}, {'col-12': active}]">
            <input
              class="form-control input-text form-field-reset"
              type="email"
              name="email"
              placeholder="Email Address"
              value=""
              required
            >
          </div>
          <div v-show="!active" class="col">
            <div class="form-group">
              <button class="btn btn-outline-dark btn-lg mt-0" @click="active = true">
                Next &rarr;
              </button>
            </div>
          </div>
        </div>

        <input
          v-show="active"
          id="first_name"
          ref="first_name"
          class="form-control input-text form-field-reset"
          type="text"
          name="first_name"
          placeholder="First Name"
          value=""
          required
        >
        <input
          v-show="active"
          id="last_name"
          ref="last_name"
          class="form-control input-text form-field-reset"
          type="text"
          name="last_name"
          placeholder="Last Name"
          value=""
          required
        >
      </div>

      <div v-show="active" class="">
        <h6>
          I agree to the terms of your <a href="/privacy-policy/" target="_blank">Privacy Policy</a> and I want to receive:
        </h6>

        <div>
          <input
            id="subscribeDesignOptIn"
            ref="subscribeDesignOptIn"
            class="form-field-reset checkbox"
            type="checkbox"
            name="00N0O00000GRkIa"
            value="1"
          >
          <label for="subscribeDesignOptIn">
            <span>
              <!-- The Design District including information on work spaces, offices and commercial opportunities -->
              Design District news and information about work spaces, workshops and events
            </span>
          </label>
        </div>
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

        <button
          class="btn btn-primary btn-lg mt-0"
          type="submit"
          :class="{disabled: formState === 'loading'}"
        >
          <strong>{{ formAction }}</strong>
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
      <!-- <div v-show="active" class="">
        <h6>
          Our <a href="/privacy-policy/" target="_blank">Privacy Policy</a> outlines how we use and store your data. You can manage your preferences or opt out of communications at any time.
        </h6>
      </div> -->

    </form>
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
      active: true,
      formAlert: {
        type: '',
        text: ''
      },
      formTarget: '',
      formAction: 'Hire',
      formState: 'idle'
    }
  },
  computed: {
    isSuccess () {
      return this.$route.query.subscription && this.$route.query.subscription === 'success'
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.fullPath !== from.fullPath) {
        this.active = false
      }
    }
  },
  monuted () {
    this.init()
  },
  updated () {
    // console.log(this.$route.path)
  },
  methods: {
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

      this.$refs.invisibleRecaptcha.execute()

      if (this.submitDEManagerForm() && this.handleRecap()) {
        return true
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
      console.log('Verify: ' + recaptchaToken)

      // const url = 'http://localhost:5001/designdistrict-2b9e1/us-central1/verify'
      const url = 'https://us-central1-designdistrict-2b9e1.cloudfunctions.net/verify'
      // let url = 'https://www.google.com/recaptcha/api/siteverify'
      this.$axios.$post(url, {
        token: recaptchaToken
      }).then((response) => {
        console.log(response)
        // this.formTarget = 'subscribRet'
        this.$refs.subscribeForm.submit()
      }).catch((error) => {
        console.log(error)
      })
    },
    onExpired () {
      this.resetRecaptcha()
    },
    resetRecaptcha () {
      if (this.$refs.invisibleRecaptcha) {
        this.$refs.invisibleRecaptcha.reset() // Direct call reset method
      }
    },
    submitDEManagerForm () {
      const today = new Date()
      let dd = today.getDate()
      let mm = today.getMonth() + 1
      const yyyy = today.getFullYear()
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

      if (this.$refs.subscribeMarketingOptIn.checked) {
        this.$refs.marketingOptInDate.value = now
      }

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
