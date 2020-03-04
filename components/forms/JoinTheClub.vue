<template>
  <div class="">
    <form
      ref="subscribeForm"
      name="subscribeForm"
      method="post"
      :class="{disabled: formState === 'loading'}"
      @submit.prevent="onFormSubmit"
    >
      <div class="mt-0">
        <h5>Register your interest</h5>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="first_name">First name<sup>*</sup></label>
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="last_name">Last name<sup>*</sup></label>
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
        </div>
        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="email">Email address<sup>*</sup></label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="website">Website or social media handle</label>
            <input
              id="website"
              type="text"
              name="website"
              placeholder="Website or social media handle"
              class="input-text form-field-reset"
              value=""
            >
          </div>
        </div>
        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="industry">Industry:</label>
            <select
              id="industry"
              ref="industry"
              v-model="form.industry"
              class="custom-select form-control form-field-reset"
              name="industry"
            >
              <option value="" disabled selected>
                Choose your industry
              </option>
              <option value="Advertising and marketing">
                Advertising and marketing
              </option>
              <option value="Architecture">
                Architecture
              </option>
              <option value="Animation and VFX (visual effects)">
                Animation and VFX (visual effects)
              </option>
              <option value="Crafts">
                Crafts
              </option>
              <option value="Fashion">
                Fashion
              </option>
              <option value="Film, TV, video, radio, podcasts">
                Film, TV, video, radio, podcasts
              </option>
              <option value="Graphic Design">
                Graphic Design
              </option>
              <option value="IT, software, computer services and UX Design(‘creative tech’)">
                IT, software, computer services and UX Design(‘creative tech’)
              </option>
              <option value="Museums, galleries, libraries, and heritage">
                Museums, galleries, libraries, and heritage
              </option>
              <option value="Music, performing and visual arts">
                Music, performing and visual arts
              </option>
              <option value="Photography">
                Photography
              </option>
              <option value="Product Design">
                Product Design
              </option>
              <option value="Publishing">
                Publishing
              </option>
              <option value="Video games">
                Video games
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>
          <div v-show="arrayIncludesString(form.industry,'Other')" class="col-12 col-md-6">
            <label class="-accessible-hide" for="industry_other">Please specify your industry</label>
            <input
              id="industry_other"
              ref="industry_other"
              class="input-text form-field-reset"
              type="text"
              name="industry_other"
              placeholder="Please specify"
              maxlength="254"
            >
          </div>
        </div>
      </div>

      <div class="my-4">
        <h5>Staying in touch</h5>
        <div class="form-row">
          <div class="col-12">
            <div>
              <input
                id="designOptIn"
                ref="designOptIn"
                class="form-field-reset checkbox"
                type="checkbox"
                name=""
                value="1"
              >
              <label for="designOptIn">
                <span>
                  <!-- The Design District including information on work spaces, offices and commercial opportunities -->
                  I am happy to receive news from Design District
                </span>
              </label>
            </div>

            <div>
              <input
                id="marketingOptIn"
                ref="marketingOptIn"
                class="form-field-reset checkbox"
                type="checkbox"
                name=""
                value="1"
              >
              <label for="marketingOptIn">
                <span>
                  <!-- The latest happenings on Greenwich Peninsula including cultural events and the latest news -->
                  I am happy to receive news and events information from Greenwich Peninsula
                </span>
              </label>
            </div>

            <div>
              <input
                id="agreePolicy"
                ref="agreePolicy"
                class="form-field-reset checkbox"
                type="checkbox"
                name=""
                value="1"
              >
              <label for="agreePolicy">
                <span>I agree to the terms of your <a href="/privacy-policy/">Privacy Policy</a>*</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- <div>
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
      </div> -->

      <div v-show="active||true" class="" />

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
      <input id="recordType" type="hidden" name="recordType" value="0123Y0000007v91">
      <input id="designOptInDate" ref="designOptInDate" type="hidden" name="" value="">
      <input id="marketingOptInDate" ref="marketingOptInDate" type="hidden" name="" value="">
      <input id="privacyOptInDate" ref="privacyOptInDate" type="hidden" name="" value="">
    </form>
  </div>
</template>

<script>
import _ from 'lodash'
import VueRecaptcha from 'vue-recaptcha'

const KEY = '6LeyatwUAAAAAHWHaZuq8aq0GAZj21SxmI4fCgPk'

export default {
  name: 'NewsletterForm',
  components: { VueRecaptcha },
  data () {
    return {
      recaptchaKey: KEY,
      active: false,
      form: {
        industry: '',
        roleType: '',
        membership: '',
        employee: 1,
        turnover: '',
        dob: {
          dd: '',
          mmm: '',
          yyyy: ''
        },
        email: '',
        emailConfirm: ''
      },
      formAlert: {
        type: '',
        text: ''
      },
      formAction: 'Submit',
      formState: 'idle'
    }
  },
  computed: {
    formDD () {
      return _.range(1, 32)
    },
    formMMM () {
      const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December' ]
      return _.map(monthNames, (m) => {
        return _.join(_.take(m, 3), '')
      })
    },
    formYYYY () {
      return _.range(2020, 1900)
    },
    formEmailMatched () {
      if (!this.form.email) {
        return true
      } else if (this.form.email.length > 0 && this.form.emailConfirm === this.form.email) {
        return true
      } else {
        return false
      }
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
  methods: {
    init () {

    },
    arrayIncludesString (arr, string) {
      return _.includes(arr, string)
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

        alert('test form submission completed. no data is saved.')

        const postBody = { 'email': 'jason@hato.co', 'userFirstName': 'Jason', 'userLastName': 'Chow', 'userWebsite': '@hello', 'userIndustry': 'IT' }
        this.$axios.$post('https://us-central1-designdistrict-2b9e1.cloudfunctions.net/sendMail', {
          body: postBody
        }).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })

        // setTimeout(() => {
        //   this.formState = 'idle'
        //   this.formAlert.type = ''
        //   this.formAlert.text = ''
        //   this.formAction = 'Submit'
        // }, 3000)
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
