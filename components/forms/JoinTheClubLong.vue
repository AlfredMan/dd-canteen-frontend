<template>
  <div class="">
    <form
      ref="subscribeForm"
      name="subscribeForm"
      method="post"
      :class="{disabled: formState === 'loading'}"
      @submit.prevent="onFormSubmit"
    >
      <h4>1: Basic details</h4>
      <div class="mb-4">
        <h5>Membership Type</h5>
        <div class="form-row">
          <div class="col-12 col-md-6">
            <select
              id=""
              ref=""
              v-model="form.membership"
              class="custom-select form-control form-field-reset"
              name=""
            >
              <option value="" disabled selected>
                Choose an option
              </option>
              <option value="Lounge">
                Lounge
              </option>
              <option value="Hot desk">
                Hot desk
              </option>
              <option value="Fixed desk">
                Fixed desk
              </option>
              <option value="Micro-studio">
                Micro-studio
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="mt-0">
        <h5>Your details</h5>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="first_name">Title<sup>*</sup></label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <div class="col-12" />
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="first_name">First name<sup>*</sup></label>
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
            <label class="accessible-hide" for="last_name">Last name<sup>*</sup></label>
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
      </div>

      <div class="mt-0 mb-4">
        <h5>Date of birth</h5>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="last_name">Date of birth</label>
            <input
              type="date"
              name="date_of_birth"
              placeholder="Date of birth"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <!-- <div class="col-12 col-md-2">
            <select
              id=""
              ref=""
              v-model="form.dob.dd"
              class="custom-select form-control form-field-reset"
              name=""
            >
              <option value="" disabled selected>
                DD
              </option>
              <option v-for="item in formDD">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-2">
            <select
              id=""
              ref=""
              v-model="form.dob.mmm"
              class="custom-select form-control form-field-reset"
              name=""
            >
              <option value="" disabled selected>
                MMM
              </option>
              <option v-for="item in formMMM">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-2">
            <select
              id=""
              ref=""
              v-model="form.dob.yyyy"
              class="custom-select form-control form-field-reset"
              name=""
            >
              <option value="" disabled selected>
                YYYY
              </option>
              <option v-for="item in formYYYY">
                {{ item }}
              </option>
            </select>
          </div> -->
        </div>

        <h5>Address</h5>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="address1">Address line 1</label>
            <input
              type="text"
              name="address1"
              placeholder="Adress line 1"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="address2">Address line 2</label>
            <input
              type="text"
              name="address2"
              placeholder="Adress line 2"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="town">Town/City</label>
            <input
              type="text"
              name="town"
              placeholder="Town/City"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="postcode">Postcode</label>
            <input
              type="text"
              name="postcode"
              placeholder="Postcode"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="country">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <div class="col-12" />
          <div class="col-12">
            <input
              id="isBusinessAddress"
              ref="isBusinessAddress"
              class="form-field-reset checkbox"
              type="checkbox"
              value="1"
            >
            <label for="isBusinessAddress">
              <span>
                This is my business address
              </span>
            </label>
          </div>
        </div>

        <h5>Contact</h5>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="phone">Phone</label>
            <input type="text" name="phone" placeholder="Phone" class="input-text form-field-reset" value="">
          </div>
          <div class="col-12" />
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="email">Email address<sup>*</sup></label>
            <input
              v-model="form.email"
              type="email"
              name="email"
              placeholder="Email address"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <div class="col-12 col-md-6">
            <label class="accessible-hide" :class="{'is-invalid': !formEmailMatched}" for="email_confirm">Confrim email address<sup>*</sup></label>
            <input
              v-model="form.emailConfirm"
              type="email"
              name="email_confirm"
              placeholder="Confirm email address"
              value=""
              class="input-text form-field-reset"
              required
            >
            <div class="invalid-feedback">
              Please enter a correct email address.
            </div>
          </div>
        </div>
      </div>

      <div class="my-5">
        <h4>2: Your work</h4>
        <h5>What industry are you in?</h5>
        <div class="form-row">
          <div class="col-12 col-md-6">
            <select
              id=""
              ref=""
              v-model="form.industry"
              multiple
              class="custom-select form-control form-field-reset"
              name=""
            >
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
            <input
              id="industryOther"
              ref="industryOther"
              class="input-text form-field-reset"
              type="text"
              name=""
              placeholder="Please specify"
              maxlength="254"
            >
          </div>
        </div>
        <h5>What is your role?</h5>
        <div class="form-row">
          <div class="col-12 col-md-6">
            <select
              id=""
              ref=""
              v-model="form.roleType"
              class="custom-select form-control form-field-reset"
              name=""
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="Freelancer">
                Freelancer
              </option>
              <option value="Digital nomad">
                Digital nomad
              </option>
              <option value="Entrepreneur">
                Entrepreneur
              </option>
              <option value="Business owner">
                Business owner
              </option>
              <option value="Employee">
                Employee
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>
          <div v-show="arrayIncludesString(form.roleType,'Other')" class="col-12 col-md-6">
            <input
              id="roleTypeOther"
              ref="roleTypeOther"
              class="input-text form-field-reset"
              type="text"
              name=""
              placeholder="Please specify"
              maxlength="254"
            >
          </div>
        </div>

        <h5>Employees</h5>
        <div class="form-row">
          <div class="col-12 col-md-6">
            <select
              id=""
              ref=""
              v-model="form.employee"
              class="custom-select form-control form-field-reset"
              name=""
            >
              <option value="1">
                1
              </option>
              <option value="2-4">
                2-4
              </option>
              <option value="5-10">
                5-10
              </option>
              <option value="11-20">
                11-20
              </option>
              <option value="21 or more">
                21 or more
              </option>
            </select>
          </div>
        </div>

        <h5>Your business: </h5>
        <div class="form-row">
          <div class="col-12 col-md-6">
            <textarea name="" rows="3" class="input-text form-field-reset" placeholder="Please explain to us what your business does" />
          </div>
        </div>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <h5>Company turnover</h5>
            <select
              id=""
              ref=""
              v-model="form.turnover"
              class="custom-select form-control form-field-reset"
              name=""
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="50">
                50k
              </option>
              <option value="100k">
                100k
              </option>
              <option value="200k">
                200k
              </option>
              <option value="500k">
                500k
              </option>
              <option value="1M">
                1M
              </option>
            </select>
          </div>
          <div class="col-12 col-md-6">
            <h5>Website</h5>
            <label class="accessible-hide" for="country">Company website</label>
            <input
              type="text"
              name="company_website"
              placeholder="Company website"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
        </div>
      </div>

      <div class="my-5">
        <h4>3: Why you</h4>
        <div class="form-row">
          <div class="col-12">
            <p>Please tell us why in 250 words you are interested in becoming a member of the Design District community.</p>
            <textarea name="" rows="6" class="input-text form-field-reset" placeholder="Please explain to us why you are interested" />
          </div>
        </div>
      </div>

      <div class="my-5">
        <h4>4: Pay</h4>
        <div class="form-row">
          <div class="col-12">
            [PAYMENY GOES HERE]
          </div>
        </div>
      </div>

      <div class="my-4 my-5">
        <h4>5: Submit</h4>
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
                <span>I agree to the terms of your <a href="/privacy-notice/">Privacy Policy</a>*</span>
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
          <!-- Our <a href="/privacy-notice/">Privacy Policy</a> outlines how we use and store your data. You can manage your preferences or opt out of communications at any time. -->
          Our <a href="/privacy-notice/">Privacy Policy</a> outlines how we use and store your data. You can manage your preferences or opt out of communications at any time.
        </h6>
        <div class="mt-4">
          <small class="text-black-50">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and
            <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
          </small>
        </div>
      </div>

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
        industry: [],
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
