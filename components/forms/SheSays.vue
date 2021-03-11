<template>
<div
  :id="id"
  class="py-16 pb-16"
  :class="{
  'bg-yellow': block.fields.theme && block.fields.theme=='Yellow',
  'bg-light': block.fields.theme && block.fields.theme=='Light'
  }">


  <div class="flex flex-wrap cap-max-w px-3 justify-content-start">

    <div class="md:w-5/12">
      <h2 v-if="block.fields.heading">{{block.fields.heading}}</h2>
    </div>

    <div v-show="formState === 'complete'" class="md:w-7/12 block max-w-3xl pt-2">

      <h4 class="" v-if="block.fields.successMessage">
        <rich-text :richtext="block.fields.successMessage" />
      </h4>
      <h4 class="" v-else>
        Thank you for your interest!<br>
        For the latest news and updates, follow us on <a href="https://www.instagram.com/designdistrictlondon/" target="_blank" rel="nofollow noreferrer">Instagram</a>.
      </h4>

    </div>

    <form
    v-show="formState !== 'complete'"
    ref="subscribeForm" name="subscribeForm" method="post"
    :class="{disabled: formState === 'loading'}"
    class="md:w-7/12 block max-w-3xl pt-2"
    @submit.prevent="onFormSubmit">

      <div class="">
        <!-- <label class="-accessible-hide" for="email">Email address<sup>*</sup></label> -->

        <h4 class="mb-16" v-if="block.fields.formDescription">
          <rich-text :richtext="block.fields.formDescription" />
        </h4>

        <div class="mx-auto my-8 lg:my-0 lg:text-right">
          <h5 class="text-sm">* Required fields</h5>
        </div>

        <div class="mx-auto mb-2 lg:-mt-3">
          <h5 class="font-bold text-lg">About yourself</h5>
        </div>

        <input :id="`${id}-userFirstName`" v-model="form.userFirstName" type="text" name="userFirstName" placeholder="First name*" value="" class="input-text p- mb-2 lg:p-4 lg:mb-4 text-base md:text-xl w-full text-black" :class="{
            'pointer-events-none': formState === 'loading',
            'opacity-50': formState === 'loading'
          }" required>
        <input :id="`${id}-userLastName`" v-model="form.userLastName" type="text" name="userLastName" placeholder="Surname*" value="" class="input-text p- mb-2 lg:p-4 lg:mb-4 text-base md:text-xl w-full text-black" :class="{
            'pointer-events-none': formState === 'loading',
            'opacity-50': formState === 'loading'
          }" required>

        <input :id="`${id}-email`" v-model="form.email" type="email" name="email" placeholder="Email address*" value="" class="input-text p- mb-2 lg:p-4 lg:mb-4 text-base md:text-xl w-full text-black" :class="{
            'pointer-events-none': formState === 'loading',
            'opacity-50': formState === 'loading'
          }" required>


        <div class="mx-auto mt-12 mb-2">
          <h5 class="font-bold text-lg">Your work</h5>
        </div>

        <input :id="`${id}-userBusinessName`" v-model="form.userBusinessName" type="text" name="userBusinessName" placeholder="Company*" value="" class="input-text p- mb-2 lg:p-4 lg:mb-4 text-base md:text-xl w-full  text-black" :class="{
            'pointer-events-none': formState === 'loading',
            'opacity-50': formState === 'loading'
          }" required>

      <div class="">
        <!-- <h5>What industry are you in?</h5> -->
        <div class="">
          <div class="">
            <select required :id="`${id}-userIndustry`" ref="" v-model="form.userIndustry" class="input-text p- mb-2 lg:p-4 lg:mb-4 text-base md:text-xl w-full  text-black custom-select -form-control form-field-reset" name="">

              <option value="" disabled selected>
                Creative sector*
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
          <!-- <div v-show="arrayIncludesString(form.userIndustry,'Other')" class="col-12 col-md-6">
            <input
              :id="`${id}-industryOther`"
              ref="industryOther"
              class=" form-field-reset"
              type="text"
              name=""
              placeholder="Please specify"
              maxlength="254"
            >
          </div> -->
        </div>
        <!-- <h5>What is your role?</h5> -->
        <!-- <div class="">
          <div class="">
            <select required :id="`${id}-userRoleType`" ref="" v-model="form.userRoleType" class="input-text p- mb-2 lg:p-4 lg:mb-4 text-base md:text-xl w-full text-black custom-select -form-control form-field-reset" name="">
              <option value="" disabled selected>
                What is your role?*
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
          </div> -->
          <!-- <div v-show="arrayIncludesString(form.userRoleType,'Other')" class="col-12 col-md-6">
            <input
              :id="`${id}-roleTypeOther`"
              ref="roleTypeOther"
              class="input-text form-field-reset"
              type="text"
              name=""
              placeholder="Please specify"
              maxlength="254"
            >
          </div> -->
        </div>

        <input :id="`${id}-userWebsite`" v-model="form.userWebsite" type="text" name="userWebsite" placeholder="Website" value="" class="input-text p- mb-2 lg:p-4 lg:mb-4 text-base md:text-xl w-full  text-black" :class="{
            'pointer-events-none': formState === 'loading',
            'opacity-50': formState === 'loading'
          }" >

        <input :id="`${id}-userSocialHandle`" v-model="form.userSocialHandle" type="text" name="userSocialHandle" placeholder="Social media handle" value="" class="input-text p- mb-2 lg:p-4 lg:mb-4 text-base md:text-xl w-full  text-black" :class="{
            'pointer-events-none': formState === 'loading',
            'opacity-50': formState === 'loading'
          }" >

        </div>

        <div class="">
          <textarea :id="`${id}-userWhyApply`" ref="userWhyApply" v-model="form.userWhyApply" class="input-text form-field-reset p-" type="text" name="" rows="1" placeholder="Please tell us about a professional challenge you would like to focus on" maxlength="1000">
            </textarea>
        </div>

        <div class="py-4 mx-auto block">

          <div class="mx-auto my-4">
            <h5 class="font-bold text-lg">Keep in touch*</h5>
          </div>

          <div class="">
            <div class="">
              <div>
                <input id="designOptIn" ref="designOptIn" v-model="form.userDesignOptIn" class="form-field-reset checkbox" type="checkbox" name="" value="1" hidden>
                <label class="text-base" for="designOptIn" v-if="false">
                  <span>
                    I am happy to receive news from Design District
                  </span>
                </label>
              </div>

              <div>
                <input id="marketingOptIn" ref="marketingOptIn" v-model="form.userMarketingOptIn" class="form-field-reset checkbox" type="checkbox" name="" value="1" hidden>
                <label class="text-base" for="marketingOptIn" v-if="false">
                  <span>
                    I am happy to receive news and events information from Greenwich Peninsula
                  </span>
                </label>
              </div>

              <div class="mx-auto text-sm mt-0 leading-2 md:text-base md:leading-6 md:mt-4">
                <input @change="trySubmit" :id="`${id}-agreePolicy`" ref="agreePolicy" v-model="form.userAgreePolicy" class="form-field-reset checkbox" type="checkbox" name="" value="1" required>
                <label class="opacity-50" :for="`${id}-agreePolicy`">
                  <span>By submitting your email address, you agree to our <a href="/privacy-notice" target="_blank">Privacy Notice</a> and <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a> and agree to receive news and
                    happenings from Design District into your inbox.</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
        class="inline-block py-3 px-6 rounded-sm text-base md:text-lg w-auto bg-black text-white font-medium"
        type="submit"
        :class="{
          'disabled': formState === 'loading' || formVerificationFailed,
        }"
        :xdisabled="formState === 'loading' || formVerificationFailed"
        @click="trySubmit"
            >
          {{ formAction }}
        </button>

        <h6 class="text-sm text-red-600" v-if="error">{{error}}</h6>


        <div class="pr-8 my-16" v-if="block.fields.terms">
          <rich-text :richtext="block.fields.terms" />
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
        v-show="true"
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
        v-show="true"
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

      <!-- <div class="py-12">

    </div> -->

      <div class="g-recaptcha" data-sitekey="6LdPFNEUAAAAAKdvqOAD4Dq1MeL0WoGWzxZFj92t" />

      <div v-show="true" class="form-group form-submit my-4">
        <!-- <button onclick="submitDEManagerForm(); return false;" class="btn btn-primary btn-lg">
        Signup
      </button> -->
        <!-- <button class="btn btn-primary btn-lg mt-0" type="submit">
        Signup
      </button> -->
        <!-- <input id="submit" type="submit" value="Signup" style="display: none;"> -->
        <input id="submit" type="submit" value="Signup" style="display: none;">
        <vue-recaptcha ref="invisibleRecaptcha" :sitekey="recaptchaKey" :load-recaptcha-script="true" size="invisible" @verify="onVerify" @expired="onExpired" />
      </div>

      <input id="recordType" type="hidden" name="recordType" value="0123Y0000007v91">
      <input id="designOptInDate" ref="designOptInDate" type="hidden" name="" value="">
      <input id="marketingOptInDate" ref="marketingOptInDate" type="hidden" name="" value="">
      <input id="privacyOptInDate" ref="privacyOptInDate" type="hidden" name="" value="">
    </form>
  </div>

</div>
</template>

<script>
import _ from 'lodash'
import VueRecaptcha from 'vue-recaptcha'

const KEY = '6LeyatwUAAAAAHWHaZuq8aq0GAZj21SxmI4fCgPk'

export default {
  name: 'WaitlistForm',
  components: {
    VueRecaptcha
  },

  props: ['block'],

  data() {
    return {
      recaptchaKey: KEY,
      active: false,
      error: '',
      form: {
        email: '',

        userFirstName: '',
        userLastName: '',
        // userRoleType: '',
        userIndustry: '',
        userBusinessName: '',
        userWebsite: '',
        userSocialHandle: '',
        userWhyApply: '',
        userDesignOptIn: '',
        userMarketingOptIn: '',
        userAgreePolicy: '',
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
      formAction: 'Enter',
      formState: 'idle'
    }
  },
  computed: {
    id () {
      return this.block && this.block.sys.id || ''
    },
    theme() {
      return this.block && this.block.theme || 'default'
    },
    formDD() {
      return _.range(1, 32)
    },
    formMMM() {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
      return _.map(monthNames, (m) => {
        return _.join(_.take(m, 3), '')
      })
    },
    formYYYY() {
      return _.range(2020, 1900)
    },
    formEmailMatched() {
      if (!this.form.email) {
        return true
      } else if (this.form.email.length > 0 && this.form.emailConfirm === this.form.email) {
        return true
      } else {
        return false
      }
    },
    formVerificationFailed () {
      let form = this.form;
      if (!form.userAgreePolicy) return true
      if (form.email.length<1) return true
      if (form.userFirstName.length<1) return true
      if (form.userLastName.length<1) return true
      // if (form.userRoleType.length<1) return true
      if (form.userIndustry.length<1) return true
      if (form.userBusinessName.length<1) return true
      // if (form.userWebsite.length<1) return true
      // if (form.userSocialHandle.length<1) return true
      // if (form.userWhyApply.length<1) return true
      return false
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.fullPath !== from.fullPath) {
        this.active = false
      }
    }
  },
  monuted() {
    this.init()
  },
  methods: {
    trySubmit () {
      let errs = []
      let form = this.form;
      if (form.email.length<1) { errs.push('email') }
      if (form.userFirstName.length<1) { errs.push('first name') }
      if (form.userLastName.length<1) { errs.push('surname') }
      // if (form.userRoleType.length<1) { errs.push('role') }
      if (form.userIndustry.length<1) { errs.push('creative sector') }
      if (form.userBusinessName.length<1) { errs.push('company') }
      // if (form.userWebsite.length<1) { errs.push('website or social media handle') }
      // if (form.userWhyApply.length<1) { errs.push('reason to apply') }
      if (!form.userAgreePolicy) { errs.push('policy and agree to receive Design District news and information') }

      if (errs.length>0) {
        let errorMessage = _.join(errs, ', ')
        this.error = `Please check the ${errorMessage}`
        return false
      }

      this.error = ''
      return true
    },
    init() {

    },
    arrayIncludesString(arr, string) {
      return _.includes(arr, string)
    },
    onFormSubmit(e) {
      this.formState = 'loading'
      this.formAlert.type = 'loading'
      this.formAlert.text = 'Processing...'
      this.formAction = 'Loading'

      if (!this.trySubmit()) return;

      try {
        this.$refs.invisibleRecaptcha.execute()
      } catch (e) {
        console.log(e);
      }

      this.submitDEManagerForm()

      // if (this.submitDEManagerForm() && this.handleRecap()) {
      //   return true
      // }

      e.preventDefault()
    },
    handleRecap() {
      // if (grecaptcha.getResponse().length <= 0) {
      //   alert('Please click the reCAPTCHA checkbox')
      //   return false
      // } else {
      //   return true;
      // }

      // do some checking
      return true
    },
    onVerify(response) {
      // console.log('Verify: ' + response)

      // this.formState = 'idle'
      // this.formAlert.type = 'success'
      // this.formAlert.text = 'Complete.'

      // setTimeout(() => {
      // this.formState = 'idle'
      // this.formAlert.type = 'success'
      // this.formAlert.text = 'Complete.'
      // this.formAction = 'Complete'

      // alert('test form submission completed. no data is saved.')
      let url = ''
      if (process.client) {
        url = _.take(_.escape(window.location.href), 128).join('')
      }

      const postBody = {
        'email': _.take(_.escape(this.form.email), 64).join(''),
        'userFirstName': _.take(_.escape(this.form.userFirstName), 64).join(''),
        'userLastName': _.take(_.escape(this.form.userLastName), 64).join(''),

        'userIndustry': _.take(_.escape(this.form.userIndustry), 64).join(''),
        'userBusinessName': _.take(_.escape(this.form.userBusinessName), 64).join(''),
        'userWebsite': _.take(_.escape(this.form.userWebsite), 64).join(''),
        'userSocialHandle': _.take(_.escape(this.form.userSocialHandle), 64).join(''),
        'userWhyApply': _.take(_.escape(this.form.userWhyApply), 1000).join(''),
        // 'userRoleType': _.take(_.escape(this.form.userRoleType), 64).join(''),

        // 'userWebsite': _.take(_.escape(this.form.userWebsite), 64).join(''),
        // 'userIndustry': _.take(_.escape(this.form.userIndustry), 64).join(''),
        // 'userIndustryOther': _.take(_.escape(this.form.userIndustryOther), 64).join(''),

        'userDesignOptIn': _.take(_.escape(this.form.userAgreePolicy), 64).join(''),
        'userMarketingOptIn': _.take(_.escape(this.form.userAgreePolicy), 64).join(''),
        'userAgreePolicy': _.take(_.escape(this.form.userAgreePolicy), 64).join(''),
        'userUrl': url
      }

      this.$axios.$post('https://us-central1-designdistrict-2b9e1.cloudfunctions.net/sendMailSheSays', postBody).then((response) => {
        // console.log(response)
        this.formState = 'complete'
        this.formAlert.type = 'success'
        this.formAlert.text = 'Complete.'
        this.formAction = 'Complete'
        this.$emit('completed')

      }).catch((error) => {
        // console.log(error)
        // this.formState = 'loading'
        // this.formAlert.type = 'error'
        // this.formAlert.text = 'Error'
        // this.formAction = 'Please try again'

        setTimeout(() => {
          this.formState = 'idle'
          this.formAlert.type = ''
          this.formAlert.text = ''
          this.formAction = 'Submit'
        }, 3000)
      })

      // setTimeout(() => {
      //   this.formState = 'idle'
      //   this.formAlert.type = ''
      //   this.formAlert.text = ''
      //   this.formAction = 'Submit'
      // }, 3000)
      // }, 500)
    },
    onExpired() {
      console.error('reCAPTCHA has expired')
      // this.formState = 'idle'
      // this.formAlert.type = 'error'
      // this.formAlert.text = 'reCAPTCHA has expired. Please try again.'
      setTimeout(() => {
        this.resetRecaptcha()
      }, 2000)
    },
    resetRecaptcha() {
      if (this.$refs.invisibleRecaptcha) {
        this.$refs.invisibleRecaptcha.reset() // Direct call reset method
      }
    },
    submitDEManagerForm() {
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
