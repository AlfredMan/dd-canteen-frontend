<template>
  <div class="max-w-2xl">
    <div v-show="formState === 'complete'" class="">
      <!-- <h5>Thank you for your interest!</h5> -->
      <p
        class="monospace text-lg leading-8"
        :class="{
          'pointer-events-none': formState === 'loading',
          'text-baby-blue': theme === 'dark',
          'text-black': theme === 'light',
          'text-bureau-green': theme === 'green',
        }"
      >
        <!-- We'll be in touch soon.<br>Follow <a href="https://www.instagram.com/bureau.club/" target="_blank" rel="noreferrer">@bureau.club</a> for more news and&nbsp;updates. -->
        <!-- Thanks for joining the waiting list, we’ll be in touch within 48 hours.<br /> -->
        <div class="text-xl lg:text-2xl mb-4">
          Thank you for subscribing to our Canteen&nbsp;newsletter!
        </div>
        <div class="text-xl lg:text-2xl mb-10">
          Stay connected, follow us on Instagram
          <a
            href="https://www.instagram.com/designdistrictcanteen/"
            target="_blank"
            class="underline"
            rel="noreferrer"
            >@designdistrictcanteen</a
          >
        </div>
      </p>
    </div>
    <form
      v-show="formState !== 'complete'"
      ref="subscribeForm"
      name="subscribeForm"
      method="post"
      :class="['', { disabled: formState === 'loading' }]"
      @submit.prevent="onFormSubmit"
    >
      <div class=" ">
        <div class="relative">
          <input
            id="email"
            v-model="form.email"
            type="email"
            name="email"
            placeholder="*Email address"
            value=""
            class="placeholder-gray-500 input-text form-field-reset"
            :class="{
              'pointer-events-none': formState === 'loading',
              'opacity-50': formState === 'loading',
              'border-b border-black': theme === 'light',
            }"
            style="
              background: inherit !important;
              "
            required
          />
          <button class="block btn -btn-outline-dark btn-lg mt-0 absolute right-0 top-0 pr-4" style="display:;" @click="active=true" v-show="!active">
              →
          </button>
        </div>
      </div>

      <div class=" " v-show="active">
        <input
          id="userFirstName"
          v-model="form.userFirstName"
          type="text"
          name="userFirstName"
          placeholder="*First name"
          value=""
          class="placeholder-gray-500 input-text form-field-reset"
          :class="{
            'pointer-events-none': formState === 'loading',
            'opacity-50': formState === 'loading',
            'border-b border-black': theme === 'light',
          }"
          style="background: inherit !important;"
          required
        />

        <input
          id="userLastName"
          v-model="form.userLastName"
          type="text"
          name="userLastName"
          placeholder="*Last name"
          value=""
          class="placeholder-gray-500 input-text form-field-reset"
          :class="{
            'pointer-events-none': formState === 'loading',
            'opacity-50': formState === 'loading',
            'border-b border-black': theme === 'light',
          }"
          style="background: inherit !important;"
          required
        />

        <!-- <input
          id="userPhone"
          v-model="form.userPhone"
          type="text"
          name="userPhone"
          placeholder="*Phone"
          value=""
          class="placeholder-gray-900 focus:placeholder-gray-600 input-text form-field-reset p-4 mb-2 lg:p-4 lg:mb-4 text-base md:text-base w-full max-w-md text-black"
          :class="{
            'pointer-events-none': formState === 'loading',
            'opacity-50': formState === 'loading',
            'border-b border-black': theme === 'light',
          }"
          style="background: inherit !important;"
          required
        /> -->

        <!-- <select
          id="userMembershipType"
          v-model="form.userMembershipType"
          class="placeholder-gray-900 focus:placeholder-gray-600 input-text form-field-reset p-4 mb-2 lg:p-4 lg:mb-4 text-base md:text-base w-full max-w-md text-black"
          name=""
          :class="{
            'pointer-events-none': formState === 'loading',
            'opacity-50': formState === 'loading',
            'border-b border-black': theme === 'light',
          }"
          style=" background: inherit !important; "
        >
          <option value="" selected="true" disabled="disabled"
            >Select a membership type</option
          >
          <option value="Not Sure">Not sure</option>
          <option value="Lounge">Lounge</option>
          <option value="Hot Desk">Hot Desk</option>
          <option value="Fixed Desk">Fixed Desk</option>
          <option value="Serviced Studio">Serviced Studio</option>
        </select> -->

        <div class="py-4">
          <!-- <h5>Staying in touch</h5> -->
          <div class="">
            <div class="">
              <!--<div>
                 <input
                  id="designOptIn"
                  ref="designOptIn"
                  v-model="form.userDesignOptIn"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name=""
                  value="1"
                  hidden
                >
                <label class="text-base" for="designOptIn" v-if="false">
                  <span>
                    I am happy to receive news from Design District
                  </span>
                </label>
              </div> -->

              <!-- <div>
                <input
                  id="marketingOptIn"
                  ref="marketingOptIn"
                  v-model="form.userMarketingOptIn"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name=""
                  value="1"
                  hidden
                >
                <label class="text-base" for="marketingOptIn" v-if="false">
                  <span>
                    I am happy to receive news and events information from Greenwich Peninsula
                  </span>
                </label>
              </div> -->

              <div
                class="mx-auto max-w-2xl text-sm mt-0 leading-2 md:text-xs md:leading-5 md:mt-2 text-black"
              >
                <input
                  :id="`agreePolicy${uuid}`"
                  ref="agreePolicy"
                  v-model="form.userAgreePolicy"
                  @change="onUserAgreePolicyChange"
                  class="form-field-reset checkbox h-4 w-4 rounded "
                  :class="{
                    'border border-black focus:outline-none focus:ring-bureau-green text-bureau-green':
                      theme == 'green',
                    'border border-black focus:outline-none focus:ring-bureau-petrol text-bureau-petrol':
                      theme == 'light',
                  }"
                  type="checkbox"
                  name=""
                  value="1"
                  required
                />
                <label
                  class="opacity-80 cursor-pointer"
                  :for="`agreePolicy${uuid}`"
                >
                  <span>By submitting my email address, I agree to your <a href="/privacy-notice/" target="_blank">Privacy Policy</a> and terms & conditions, and agree to receive news from Bureau, Design District and Canteen into my inbox.            </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          class="cta theme-default format-button text-base uppercase"
          type="submit"
          :class="{
            /* 'bg-bureau-petrol text-black': theme === 'light',
            'border border-black text-black': theme === 'green', */
            'opacity-50': !form.userAgreePolicy,
            'opacity-50 pointer-events-none': formState === 'loading',
          }"
        >
          {{ formAction }}
        </button>

        <div class="text-xs pt-4 text-red-600" v-if="error">
          {{ error }}
        </div>
      </div>

      <!-- <nuxt-link
      :to="'/privacy'"
      target="_blank"
      class="inline-block monospace mx-auto text-center text-sm text-opacity-75 mt-4 hover:underline hover:text-opacity-100 cursor-pointer"
      :class="{
        'text-white': theme === 'dark',
        'text-black': theme === 'light'
        }"
      >
        View Bureau's policy notice
      </nuxt-link> -->



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

      <div
        class="g-recaptcha"
        data-sitekey="6LdPFNEUAAAAAKdvqOAD4Dq1MeL0WoGWzxZFj92t"
      />

      <div v-show="true" class="form-group form-submit my-4">
        <!-- <button onclick="submitDEManagerForm(); return false;" class="btn btn-primary btn-lg">
          Signup
        </button> -->
        <!-- <button class="btn btn-primary btn-lg mt-0" type="submit">
          Signup
        </button> -->
        <!-- <input id="submit" type="submit" value="Signup" style="display: none;"> -->
        <input
          id="submit"
          type="submit"
          value="Signup"
          style="display: none;"
        />
        <vue-recaptcha
          ref="invisibleRecaptcha"
          :sitekey="recaptchaKey"
          :load-recaptcha-script="true"
          size="invisible"
          @verify="onVerify"
          @expired="onExpired"
        />
      </div>

      <!-- <input
        id="recordType"
        type="hidden"
        name="recordType"
        value="0123Y0000007v91"
      /> -->
      <!-- <input
        id="designOptInDate"
        ref="designOptInDate"
        type="hidden"
        name=""
        value=""
      />
      <input
        id="marketingOptInDate"
        ref="marketingOptInDate"
        type="hidden"
        name=""
        value=""
      />
      <input
        id="privacyOptInDate"
        ref="privacyOptInDate"
        type="hidden"
        name=""
        value=""
      /> -->
    </form>
  </div>
</template>

<script>
import _ from "lodash";
import VueRecaptcha from "vue-recaptcha";

const KEY = "6LeyatwUAAAAAHWHaZuq8aq0GAZj21SxmI4fCgPk";

let uuid = 0;

export default {
  name: "WaitlistForm",
  components: { VueRecaptcha },

  props: {
    theme: {
      type: String,
      default: "dark",
    },
  },

  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },

  data() {
    return {
      id: 0,
      recaptchaKey: KEY,
      active: false,
      error: "",
      form: {
        email: "",
        userFirstName: "",
        userLastName: "",
        // userPhone: "",
        // userWebsite: "",
        // userIndustry: "",
        // userIndustryOther: "",
        userDesignOptIn: 1,
        userMarketingOptIn: 1,
        userAgreePolicy: "",
        // userMembershipType: "",
        industry: "",
        roleType: "",
        membership: "",
        employee: 1,
        turnover: "",
        dob: {
          dd: "",
          mmm: "",
          yyyy: "",
        },
        email: "",
        emailConfirm: "",
      },
      formAlert: {
        type: "",
        text: "",
      },
      formAction: "Submit",
      formState: "idle",
    };
  },
  computed: {
    formDD() {
      return _.range(1, 32);
    },
    formMMM() {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return _.map(monthNames, (m) => {
        return _.join(_.take(m, 3), "");
      });
    },
    formYYYY() {
      return _.range(2020, 1900);
    },
    formEmailMatched() {
      if (!this.form.email) {
        return true;
      } else if (
        this.form.email.length > 0 &&
        this.form.emailConfirm === this.form.email
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    $route(to, from) {
      if (to.fullPath !== from.fullPath) {
        this.active = false;
      }
    },
  },
  monuted() {
    this.init();
  },
  methods: {
    onUserAgreePolicyChange() {
      if (this.form.userAgreePolicy) {
        this.error = "";
      } else {
        this.error = "Please agree to our policy and terms below.";
      }
    },
    init() {
      this.id = this._uid;
    },
    arrayIncludesString(arr, string) {
      return _.includes(arr, string);
    },
    onFormSubmit(e) {
      this.formState = "loading";
      this.formAlert.type = "loading";
      this.formAlert.text = "Processing...";
      this.formAction = "Loading";

      if (!this.form.userAgreePolicy) {
        this.error = "Please agree to our policy and terms below.";
        e.preventDefault();
        return;
      }

      try {
        this.$refs.invisibleRecaptcha.execute();
      } catch (e) {
        console.log(e);
      }

      // this.submitDEManagerForm();

      // if (this.submitDEManagerForm() && this.handleRecap()) {
      //   return true
      // }

      e.preventDefault();
    },
    handleRecap() {
      // if (grecaptcha.getResponse().length <= 0) {
      //   alert('Please click the reCAPTCHA checkbox')
      //   return false
      // } else {
      //   return true;
      // }

      // do some checking
      return true;
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
      let url = "";
      if (process.client) {
        url = _.take(_.escape(window.location.href), 128).join("");
      }

      const postBody = {
        email: _.take(_.escape(this.form.email), 64).join(""),
        userFirstName: _.take(_.escape(this.form.userFirstName), 64).join(""),
        userLastName: _.take(_.escape(this.form.userLastName), 64).join(""),
        // userPhone: _.take(_.escape(this.form.userPhone), 64).join(""),
        // userMembershipType: _.take(
        //   _.escape(this.form.userMembershipType),
        //   64
        // ).join(""),
        // 'userWebsite': _.take(_.escape(this.form.userWebsite), 64).join(''),
        // 'userIndustry': _.take(_.escape(this.form.userIndustry), 64).join(''),
        // 'userIndustryOther': _.take(_.escape(this.form.userIndustryOther), 64).join(''),

        userDesignOptIn: _.take(_.escape(this.form.userDesignOptIn), 64).join(
          ""
        ),
        userMarketingOptIn: _.take(
          _.escape(this.form.userMarketingOptIn),
          64
        ).join(""),
        userAgreePolicy: _.take(_.escape(this.form.userAgreePolicy), 64).join(
          ""
        ),
        userUrl: url
      };

      this.$axios
        .$post(
          "https://us-central1-designdistrict-2b9e1.cloudfunctions.net/sendMailCanteen",
          postBody
        )
        .then((response) => {
          // console.log(response)
          this.formState = "complete";
          this.formAlert.type = "success";
          this.formAlert.text = "Complete.";
          this.formAction = "Complete";
          // this.$emit("completed");
          this.$emit('success')          
        })
        .catch((error) => {
          // console.log(error)
          // this.formState = 'loading'
          // this.formAlert.type = 'error'
          // this.formAlert.text = 'Error'
          // this.formAction = 'Please try again'
          this.error = error

          setTimeout(() => {
            this.formState = "idle";
            this.formAlert.type = "";
            this.formAlert.text = "";
            this.formAction = "Submit";
          }, 3000);
        });

      // setTimeout(() => {
      //   this.formState = 'idle'
      //   this.formAlert.type = ''
      //   this.formAlert.text = ''
      //   this.formAction = 'Submit'
      // }, 3000)
      // }, 500)
    },
    onExpired() {
      console.error("reCAPTCHA has expired");
      // this.formState = 'idle'
      // this.formAlert.type = 'error'
      // this.formAlert.text = 'reCAPTCHA has expired. Please try again.'
      setTimeout(() => {
        this.resetRecaptcha();
      }, 2000);
    },
    resetRecaptcha() {
      if (this.$refs.invisibleRecaptcha) {
        this.$refs.invisibleRecaptcha.reset(); // Direct call reset method
      }
    },
    submitDEManagerForm() {
      // const form = document.forms.subscribeForm
      // const form = this.$refs.subscribeForm
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      // const hours = today.getHours()
      // const mins = today.getMinutes()
      let now = "";

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      // now = mm+'/'+dd+'/'+yyyy+' '+hours+':'+mins;
      now = dd + "/" + mm + "/" + yyyy;

      // this.$refs.privacyOptInDate.value = now;

      // if (this.$refs.designOptIn.checked) {
      //   this.$refs.designOptInDate.value = now;
      // }

      // if (this.$refs.marketingOptIn.checked) {
      //   this.$refs.marketingOptInDate.value = now;
      // }

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
      return true;
    },
  },
};
</script>
