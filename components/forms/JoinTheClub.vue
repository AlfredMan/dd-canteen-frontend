<template>
  <div class="">

    <form
      ref="subscribeForm"
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      name="subscribeForm"
      method="post"
      :class="{disabled: formState === 'loading'}"
      @submit.prevent="onFormSubmit"
    >
      <div>
        <!-- <div class="form-row">
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
        </div> -->

        <input
          class="form-control input-text form-field-reset"
          type="email"
          name="email"
          placeholder="Email Address"
          value=""
          required
        >

        <input
          v-show="active||true"
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
          v-show="active||true"
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

      <div v-show="active||true" class="">
        <h6>
          I agree to the terms of your <a href="/privacy-policy/">Privacy Policy</a> and I want to receive:
        </h6>

        <div>
          <input
            id="designOptIn"
            ref="designOptIn"
            class="form-field-reset checkbox"
            type="checkbox"
            name="00N0O00000GRkIa"
            value="1"
          >
          <label for="designOptIn">
            <span>
              <!-- The Design District including information on workspaces, offices and commercial opportunities -->
              Design District news and information about workspaces, workshops and events
            </span>
          </label>
        </div>

        <div>
          <input
            id="marketingOptIn"
            ref="marketingOptIn"
            class="form-field-reset checkbox"
            type="checkbox"
            name="00N0O00000GRZb7"
            value="1"
          >
          <label for="marketingOptIn">
            <span>
              <!-- The latest happenings on Greenwich Peninsula including cultural events and the latest news -->
              News from Greenwich Peninsula including cultural events and announcements
            </span>
          </label>
        </div>
      </div>

      <div class="g-recaptcha" data-sitekey="6LdPFNEUAAAAAKdvqOAD4Dq1MeL0WoGWzxZFj92t" />
      <div v-show="active||true" class="form-group form-submit my-4">
        <!-- <button onclick="submitDEManagerForm(); return false;" class="btn btn-primary btn-lg">
          Signup
        </button> -->
        <!-- <button class="btn btn-primary btn-lg mt-0" type="submit">
          Signup
        </button> -->
        <!-- <input id="submit" type="submit" value="Signup" style="display: none;"> -->
        <input id="submit" type="submit" value="Signup" style="display: none;">

        <button
          class="btn btn-dark btn-lg mt-0"
          type="submit"
          :class="{disabled: formState === 'loading'}"
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
      <div v-show="active||true" class="">
        <h6>
          <!-- Our <a href="/privacy-policy/">Privacy Policy</a> outlines how we use and store your data. You can manage your preferences or opt out of communications at any time. -->
          Our <a href="/privacy-policy/">Privacy Policy</a> outlines how we use and store your data. You can manage your preferences or opt out of communications at any time.
        </h6>
        <div class="mt-4">
          <small class="text-black-50">
            This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and
                <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
          </small>
        </div>
      </div>

      <input type="hidden" name="captcha_settings" value="{&quot;keyname&quot;:&quot;GoogleAPIKeyV2&quot;,&quot;fallback&quot;:&quot;true&quot;,&quot;orgId&quot;:&quot;00D20000000nxym&quot;,&quot;ts&quot;:&quot;&quot;}">
      <input type="hidden" name="oid" value="00D20000000nxym">
      <input type="hidden" name="retURL" value="https://designdistrict.co.uk/success/">
      <input id="00N0O00000AB5j2" ref="00N0O00000AB5j2" type="hidden" name="00N0O00000AB5j2" value="Web Form">
      <input id="00N0O00000AB5j1" ref="00N0O00000AB5j1" type="hidden" name="00N0O00000AB5j1" value="Design District">
      <input id="00N0O00000AB5iY" ref="00N0O00000AB5iY" type="hidden" name="00N0O00000AB5iY" value="Design District Subscription">
      <input id="00N0O00000AB5iN" ref="00N0O00000AB5iN" type="hidden" name="00N0O00000AB5iN" value="7010O00000153NQQAY">
      <input id="designOptInDate" ref="designOptInDate" type="hidden" name="00N0O00000GRkIf" value="">
      <input id="marketingOptInDate" ref="marketingOptInDate" type="hidden" name="00N0O00000GRZbC" value="">
      <input id="privacyOptIn" ref="privacyOptIn" type="hidden" name="00N0O00000GRrXc" value="1">
      <input id="privacyOptInDate" ref="privacyOptInDate" type="hidden" name="00N0O00000GRrXh" value="">
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
      active: false,
      formAlert: {
        type: '',
        text: ''
      },
      formAction: 'Submit',
      formState: 'idle'
    }
  },
  computed: {},
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
  methods: {
    init () {

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
    onVerify (response) {
      console.log('Verify: ' + response)

      // this.formState = 'idle'
      // this.formAlert.type = 'success'
      // this.formAlert.text = 'Complete.'

      setTimeout(() => {
        this.formState = 'idle'
        this.formAlert.type = 'success'
        this.formAlert.text = 'Complete.'
        this.formAction = 'Complete'

        alert('done')
        // this.$refs.enquireForm.submit()

        setTimeout(() => {
          this.formState = 'idle'
          this.formAlert.type = ''
          this.formAlert.text = ''
          this.formAction = 'Submit'
        }, 3000)
      }, 1000)
    },
    onExpired () {
      console.error('reCAPTCHA has expired')
      // this.formState = 'idle'
      // this.formAlert.type = 'error'
      // this.formAlert.text = 'reCAPTCHA has expired. Please try again.'
      setTimeout(() => {
        this.resetRecaptcha()
      }, 3000)
    },
    resetRecaptcha () {
      this.$refs.invisibleRecaptcha.reset() // Direct call reset method
    },
    submitDEManagerForm () {
      // const form = document.forms.subscribeForm
      // const form = this.$refs.subscribeForm
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

      if (this.$refs.designOptIn.checked) {
        this.$refs.designOptInDate.value = now
      }

      if (this.$refs.marketingOptIn.checked) {
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
