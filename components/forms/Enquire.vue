<template>
  <!-- <div class="bg-light container-fluid">
<div class="container"> -->
  <div class="">
    <form
      ref="enquireForm"
      class="page-form"
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      name="enquireForm"
      method="post"
      @submit="checkForm"
    >
      <div class="mb-4">
        <h5>Your Details</h5>

        <div class="form-row">
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

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="email">Email address<sup>*</sup></label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value=""
              class="input-text form-field-reset"
              required
            >
          </div>
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="phone">Phone</label>
            <input type="text" name="phone" placeholder="Phone" class="input-text form-field-reset" value="">
          </div>
        </div>
      </div>

      <div v-if="showBusiness" class="my-4">
        <h5>Work Specifics</h5>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="00N20000009fVtE">Business name</label>
            <input type="text" name="00N20000009fVtE" placeholder="Business name" class="input-text form-field-reset" value="">
          </div>
          <div class="col-12 col-md-6">
            <label class="accessible-hide" for="00N0O00000AAdtS">Website</label>
            <input type="text" name="00N0O00000AAdtS" placeholder="Website" class="input-text form-field-reset" value="">
          </div>
        </div>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label for="00N0O00000AAdtr" class="accessible-hide">
              Describe your business
              <!-- Tell us a little bit about your business or idea and how you see it working at the Design District -->
            </label>
            <textarea name="00N0O00000AAdtr" rows="3" class="input-text form-field-reset" placeholder="Describe your business" />
          </div>
        </div>
      </div>

      <div class="my-4">
        <h5>What type of space suits you? *</h5>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <select
              id="typeOfSpace"
              ref="typeOfSpace"
              v-model="typeOfSpace"
              class="custom-select form-control form-field-reset"
              name="00N0O00000AAdth"
              required
            >
              <option value="" disabled selected>
                Choose an option
              </option>
              <option value="Desk">
                Desk
              </option>
              <option value="Office">
                Office
              </option>
              <option value="Workshop">
                Workshop
              </option>
              <option value="Artist studio">
                Artist studio
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>
          <div v-show="typeOfSpace==='Other'" class="col-12 col-md-6">
            <input
              id="typeOfSpaceOther"
              ref="typeOfSpaceOther"
              class="input-text form-field-reset"
              type="text"
              name="00N0O00000AAoDP"
              placeholder="Please specify"
              maxlength="254"
            >
          </div>
        </div>
      </div>

      <div class="my-4">
        <div>
          <h5>Select the amenities that are important to you:</h5>

          <div class="row">
            <div class="col-12 col-lg">
              <div class="checkbox-wrapper">
                <input
                  id="00N0O00000AAmWy"
                  ref="00N0O00000AAmWy"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N0O00000AAmWy"
                  value="1"
                >
                <label for="00N0O00000AAmWy">
                  <span>High-speed internet</span>
                </label>
              </div>
              <div class="checkbox checkbox--wide">
                <input
                  id="00N0O00000AAmX3"
                  ref="00N0O00000AAmX3"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N0O00000AAmX3"
                  value="1"
                >
                <label for="00N0O00000AAmX3">
                  <span>Printing (including 3D, canvas, vinyl)</span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <input
                  id="00N0O00000AAmXh"
                  ref="00N0O00000AAmXh"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N0O00000AAmXh"
                  value="1"
                >
                <label for="00N0O00000AAmXh">
                  <span>Prototyping</span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <input
                  id="00N0O00000AAmX8"
                  ref="00N0O00000AAmX8"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N0O00000AAmX8"
                  value="1"
                >
                <label for="00N0O00000AAmX8">
                  <span>Private phone booths</span>
                </label>
              </div>
              <div class="checkbox checkbox--wide">
                <input
                  id="00N0O00000AAmXN"
                  ref="00N0O00000AAmXN"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N0O00000AAmXN"
                  value="1"
                >
                <label for="00N0O00000AAmXN">
                  <span>Meeting rooms with AV</span>
                </label>
              </div>
            </div>
            <div class="col-12 col-lg">
              <div class="checkbox-wrapper">
                <input
                  id="00N0O00000AAmXI"
                  ref="00N0O00000AAmXI"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N0O00000AAmXI"
                  value="1"
                >
                <label for="00N0O00000AAmXI">
                  <span>Social events</span>
                </label>
              </div>
              <!-- </div>
            <div class="col-12 col-lg"> -->
              <div class="checkbox-wrapper">
                <input
                  id="00N0O00000AAmXc"
                  ref="00N0O00000AAmXc"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N0O00000AAmXc"
                  value="1"
                >
                <label for="00N0O00000AAmXc">
                  <span>Event space</span>
                </label>
              </div>
              <div class="checkbox checkbox--wide">
                <input
                  id="00N0O00000AAmXS"
                  ref="00N0O00000AAmXS"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N0O00000AAmXS"
                  value="1"
                >
                <label for="00N0O00000AAmXS">
                  <span>Access to multiple office locations</span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <input
                  id="00N0O00000AAmXD"
                  ref="00N0O00000AAmXD"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N0O00000AAmXD"
                  value="1"
                >
                <label for="00N0O00000AAmXD">
                  <span>Unique common areas</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="my-4">
        <h5>Why do you want to move from your current location?</h5>
        <div class="form-row">
          <div class="col-12 col-md-6">
            <select id="00N0O00000AAdtw" ref="00N0O00000AAdtw" class="custom-select form-control form-field-reset" name="00N0O00000AAdtw">
              <option value="" disabled selected>
                Choose an option
              </option>
              <option value="Lease Expiring">
                My lease is expiring
              </option>
              <option value="Space">
                I need more space
              </option>
              <option value="Next Step">
                I’m ready for the next step
              </option>
              <option value="Work From Home">
                I work from home
              </option>
              <option value="No Work Space">
                I do not have a business space
              </option>
              <option value="Supportive Community">
                I want a supportive community
              </option>
              <option value="Rent Increase">
                My rent has increased
              </option>
              <option value="Change in scene">
                I want a change of scenery
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="my-4">
        <h5>Staying in touch</h5>
        <div class="form-row">
          <div class="col-12 col-md-8">
            <div class="checkbox-wrapper">
              <input
                id="enquirePrivacyOptIn"
                ref="enquirePrivacyOptIn"
                class="form-field-reset checkbox"
                type="checkbox"
                name="00N0O00000GRrXc"
                value="1"
                required
              >
              <label class="cb" for="enquirePrivacyOptIn">
                <span>I agree to the terms of your <a href="/privacy-policy/">Privacy Policy</a></span>
              </label>
            </div>
            <div class="checkbox-wrapper">
              <input
                id="enquireDesignOptIn"
                ref="enquireDesignOptIn"
                class="form-field-reset checkbox"
                type="checkbox"
                name="00N0O00000GRkIa"
                value="1"
              >
              <label class="cb" for="enquireDesignOptIn">
                <span>
                  I am happy to receive news from Design District
                  <!-- I am happy to receive marketing communications on the Design&nbsp;District -->
                </span>
              </label>
            </div>
            <div class="checkbox-wrapper">
              <input
                id="enquireMarketingOptIn"
                ref="enquireMarketingOptIn"
                class="form-field-reset checkbox"
                type="checkbox"
                name="00N0O00000GRZb7"
                value="1"
              >
              <label class="cb" for="enquireMarketingOptIn">
                <span>
                  I am happy to receive news and events information from Greenwich Peninsula
                  <!-- I am happy to receive marketing communications on the latest happenings on Greenwich Peninsula including cultural events and the latest news -->
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class=" my-4">
        <!-- <div class="form-row form-row--submit">
          <div class="col"> -->
        <button onclick="submitEnquireForm(); return false;" class="btn btn-primary btn-lg mt-0">
          Submit
        </button>
        <input id="enquireSubmit" ref="enquireSubmit" type="submit" value="Enquire" style="display: none;">
        <!-- </div>
        </div> -->
      </div>

      <input type="hidden" name="oid" value="00D20000000nxym">
      <input type="hidden" name="retURL" value="https://designdistrict.co.uk/success/">
      <input id="00N0O00000AB5j2" ref="00N0O00000AB5j2" type="hidden" name="00N0O00000AB5j2" value="Web Form">
      <input id="00N0O00000AB5j1" ref="00N0O00000AB5j1" type="hidden" name="00N0O00000AB5j1" value="Design District">
      <input id="00N0O00000AB5iY" ref="00N0O00000AB5iY" type="hidden" name="00N0O00000AB5iY" value="Design District Sales Enquiry">
      <input id="00N0O00000AB5iN" ref="00N0O00000AB5iN" type="hidden" name="00N0O00000AB5iN" value="7010O00000153FNQAY">
      <input id="enquireDesignOptInDate" ref="enquireDesignOptInDate" type="hidden" name="00N0O00000GRkIf" value="">
      <input id="enquireMarketingOptInDate" ref="enquireMarketingOptInDate" type="hidden" name="00N0O00000GRZbC" value="">
      <input id="enquirePrivacyOptInDate" ref="enquirePrivacyOptInDate" type="hidden" name="00N0O00000GRrXh" value="">

      <input id="00N0O00000AB5iO" ref="00N0O00000AB5iO" type="hidden" name="00N0O00000AB5iO" value="">
      <input id="00N0O00000AB5iQ" ref="00N0O00000AB5iQ" type="hidden" name="00N0O00000AB5iQ" value="">
      <input id="utm_source" ref="utm_source" type="hidden" name="00N0O00000AB5iR" value="">
      <input id="utm_term" ref="utm_term" type="hidden" name="00N0O00000AB5iS" value="">
      <input id="utm_content" ref="utm_content" type="hidden" name="00N0O00000AB5iP" value="">
    </form>
  </div>
</template>

<script>
export default {
  name: 'EnquireForm',
  props: {
    showBusiness: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      typeOfSpace: ''
    }
  },
  computed: {},
  monuted () {
    this.init()
  },
  methods: {
    init () {
      // (function ($) {
      //   $(function () {
      //     const $document = $(document)
      //
      //     $document.on('change', '#typeOfSpace', function () {
      //       const value = $(this).val()
      //       const target = $('#typeOfSpaceOther')
      //
      //       if (value === 'Other') {
      //         target.show()
      //       } else {
      //         target.hide()
      //       }
      //     }).change()
      //   })
      // })(jQuery)
    },
    checkForm (e) {
      if (this.submitEnquireForm() && this.handleRecap()) {
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
      return false
    },
    submitEnquireForm () {
      // const form = document.forms.enquireForm
      // const submitButton = document.getElementById('enquireSubmit')
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

      now = dd + '/' + mm + '/' + yyyy

      // if (document.getElementById('enquirePrivacyOptIn').checked) {
      //   document.getElementById('enquirePrivacyOptInDate').value = now
      // }
      //
      // if (document.getElementById('enquireDesignOptIn').checked) {
      //   document.getElementById('enquireDesignOptInDate').value = now
      // }
      //
      // if (document.getElementById('enquireMarketingOptIn').checked) {
      //   document.getElementById('enquireMarketingOptInDate').value = now
      // }
      if (this.$refs.enquirePrivacyOptIn.checked) {
        this.$refs.enquirePrivacyOptInDate.value = now
      }

      if (this.$refs.enquireDesignOptIn.checked) {
        this.$refs.enquireDesignOptInDate.value = now
      }

      if (this.$refs.enquireMarketingOptIn.checked) {
        this.$refs.enquireMarketingOptInDate.value = now
      }

      function parseGET (param) {
        const searchStr = document.location.search
        try {
          const match = searchStr.match('[?&]' + param + '=([^&]+)')
          if (match) {
            let result = match[1]
            result = result.replace(/\+/g, '%20')
            result = decodeURIComponent(result)
            return result
          } else {
            return ''
          }
        } catch (e) {
          return ''
        }
      }

      // document.getElementById('00N0O00000AB5iO').value = parseGET('utm_campaign')
      // document.getElementById('00N0O00000AB5iQ').value = parseGET('utm_medium')
      // document.getElementById('utm_source').value = parseGET('utm_source')
      // document.getElementById('utm_term').value = parseGET('utm_term')
      // document.getElementById('utm_content').value = parseGET('utm_content')

      this.$refs['00N0O00000AB5iO'].value = parseGET('utm_campaign')
      this.$refs['00N0O00000AB5iQ'].value = parseGET('utm_medium')
      this.$refs.utm_source.value = parseGET('utm_source')
      this.$refs.utm_term.value = parseGET('utm_term')
      this.$refs.utm_content.value = parseGET('utm_content')

      // submitButton.click()
      return true
    }
  }
}
</script>
