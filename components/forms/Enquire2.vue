<template>
  <!-- <div class="bg-light container-fluid">
<div class="container"> -->
  <div class="">
    <div v-if="formState === 'complete'">
      <h5>Thank you for your interest!</h5>
      <p>We'll be in touch soon. Meanwhile, follow our <a href="https://www.instagram.com/designdistrictlondon/" target="_blank" rel="noreferrer">Instagram</a> for more news and updates.</p>
    </div>
    <form
      v-if="formState !== 'complete'"
      ref="enquireForm"
      class="page-form"
      name="enquireForm"
      method="post"
      :class="{disabled: formState === 'loading'}"
      @submit.prevent="onFormSubmit"
    >
      <div class="mb-4">
        <h5>Your Details</h5>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="first_name">First name<sup>*</sup></label>
            <input
              id="first_name"
              ref="first_name"
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
              id="last_name"
              ref="last_name"
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
            <label class="-accessible-hide" for="phone">Phone</label>
            <input type="text" name="phone" placeholder="Phone" class="input-text form-field-reset" value="">
          </div>
        </div>

        <div class="form-row">
          <div class="col-12 col-md-8">
            <label>I would like to be contacted by:</label>
            <div class="checkbox-wrapper">
              <input
                id="Email__c"
                ref="Email__c"
                class="form-field-reset checkbox"
                type="checkbox"
                name="00N20000009fVlo"
                value="1"
              >
              <label class="cb" for="Email__c">
                <span>
                  Email
                </span>
              </label>
            </div>

            <div class="checkbox-wrapper">
              <input
                id="Telephone__c"
                ref="Telephone__c"
                class="form-field-reset checkbox"
                type="checkbox"
                name="00N20000009fVle"
                value="1"
              >
              <label class="cb" for="Telephone__c">
                <span>
                  Phone
                </span>
              </label>
            </div>

            <div class="checkbox-wrapper">
              <input
                id="SMS__c"
                ref="SMS__c"
                class="form-field-reset checkbox"
                type="checkbox"
                name="00N20000009fVlj"
                value="1"
              >
              <label class="cb" for="SMS__c">
                <span>
                  SMS
                </span>
              </label>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="col-12">
            <button type="button" name="button" class="btn btn-lg" :class="{'btn-dark': step === 1, 'btn-outline-dark disabled': step === 2}" @click="step = 2">
              Next &rarr;
            </button>
          </div>
        </div>
      </div>

      <div v-if="showBusiness" v-show="step === 2" class="my-4 mt-5">
        <h5>Your work</h5>
        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="00N3Y00000H10Ce">I am a:</label>
            <select
              id="00N3Y00000H10Ce"
              ref="00N3Y00000H10Ce"
              v-model="roleType"
              class="custom-select form-control form-field-reset"
              name="00N3Y00000H10Ce"
            >
              <option value="" disabled selected>
                Choose your role
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
          <div v-show="arrayIncludesString(roleType,'Other')" class="col-12 col-md-6">
            <label class="-accessible-hide" for="00N3Y00000H10Cj">Please specify your role</label>
            <input
              id="00N3Y00000H10Cj"
              ref="00N3Y00000H10Cj"
              class="input-text form-field-reset"
              type="text"
              name="00N3Y00000H10Cj"
              placeholder="Please specify"
              maxlength="254"
            >
          </div>
          <!-- </div>

        <div class="form-row"> -->
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="00N3Y00000H10Ea">Industry:</label>
            <select
              id="00N3Y00000H10Ea"
              ref="00N3Y00000H10Ea"
              v-model="industry"
              class="custom-select form-control form-field-reset"
              name="00N3Y00000H10Ea"
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
          <div v-show="arrayIncludesString(industry,'Other')" class="col-12 col-md-6">
            <label class="-accessible-hide" for="00N3Y00000H10Ef">Please specify your industry</label>
            <input
              id="00N3Y00000H10Ef"
              ref="00N3Y00000H10Ef"
              class="input-text form-field-reset"
              type="text"
              name="00N3Y00000H10Ef"
              placeholder="Please specify"
              maxlength="254"
            >
          </div>
        </div>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="00N20000009fVtE">Business name</label>
            <input
              id="00N20000009fVtE"
              type="text"
              name="00N20000009fVtE"
              placeholder="Business name"
              class="input-text form-field-reset"
              value=""
            >
          </div>
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="00N0O00000AAdtS">Website or social media handle</label>
            <input
              id="00N0O00000AAdtS"
              type="text"
              name="00N0O00000AAdtS"
              placeholder="Website or social media handle"
              class="input-text form-field-reset"
              value=""
            >
          </div>
        </div>

        <div class="form-row">
          <div class="col-12 col-md-6">
            <label class="-accessible-hide" for="00N0O00000GRkIk">Number of employees:</label>
            <select
              id="00N0O00000GRkIk"
              name="00N0O00000GRkIk"
              title="Work Space Requirement"
              class="custom-select form-control form-field-reset"
            >
              <option value="" disabled selected>
                Select
              </option>
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

        <div class="form-row">
          <div class="col-12 col-md-12">
            <label for="00N0O00000AAmP4" class="-accessible-hide">
              Describe your business in 250 words
              <!-- Tell us a little bit about your business or idea and how you see it working at the Design District -->
            </label>
            <textarea id="00N0O00000AAmP4" name="00N0O00000AAmP4" rows="4" class="input-text form-field-reset" placeholder="Describe your business" />
          </div>
        </div>
      </div>

      <div v-show="step === 2" class="my-4">
        <div class="form-row">
          <div class="col-12 col-md-6">
            <label for="00N0O00000AAdth">What type of space suits you? *</label>
            <select
              id="00N0O00000AAdth"
              ref="00N0O00000AAdth"
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
              <option value="Studio">
                Studio
              </option>
              <option value="Workshop">
                Workshop
              </option>
              <option value="Office">
                Office
              </option>
              <option value="Food Kiosk">
                Food Kiosk
              </option>
              <option value="Showroom">
                Showroom
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>
          <div v-show="typeOfSpace==='Other'" class="col-12 col-md-6">
            <label for="00N0O00000AAoDP">Please specify the type of space</label>
            <input
              id="00N0O00000AAoDP"
              ref="00N0O00000AAoDP"
              class="input-text form-field-reset"
              type="text"
              name="00N0O00000AAoDP"
              placeholder="Please specify"
              maxlength="254"
            >
          </div>
        </div>
        <!-- </div>
        <div v-show="step === 2" class="my-4"> -->
        <div class="my-4">
          <label for="">What services and amenities are important to you ?</label>
          <div class="form-row mt-3">
            <!-- <div class="row"> -->

            <div class="col-6 col-lg">
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
                  <span>Communal space</span>
                </label>
              </div>
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
                  <span>Hirable Event Space</span>
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
              <div class="checkbox checkbox--wide">
                <input
                  id="00N3Y00000H11CL"
                  ref="00N3Y00000H11CL"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N3Y00000H11CL"
                  value="1"
                >
                <label for="00N3Y00000H11CL">
                  <span>Bar and café</span>
                </label>
              </div>
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
                  <span>Community event programme</span>
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
                  <span>Private phone booth</span>
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
                  <span>Print shop (including 3D, canvas, vinyl)</span>
                </label>
              </div>
            </div>
            <div class="col-6 col-lg">
              <!-- </div>
            <div class="col-12 col-lg"> -->
              <div class="checkbox-wrapper">
                <input
                  id="00N3Y00000H11CQ"
                  ref="00N3Y00000H11CQ"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N3Y00000H11CQ"
                  value="1"
                >
                <label for="00N3Y00000H11CQ">
                  <span>Wood workshop</span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <input
                  id="00N3Y00000H11CV"
                  ref="00N3Y00000H11CV"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N3Y00000H11CV"
                  value="1"
                >
                <label for="00N3Y00000H11CV">
                  <span>Digital workshop</span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <input
                  id="00N3Y00000H11Cf"
                  ref="00N3Y00000H11Cf"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N3Y00000H11Cf"
                  value="1"
                >
                <label for="00N3Y00000H11Cf">
                  <span>Engineering workshop</span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <input
                  id="00N3Y00000H11Ca"
                  ref="00N3Y00000H11Ca"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N3Y00000H11Ca"
                  value="1"
                >
                <label for="00N3Y00000H11Ca">
                  <span>Textile Workshop</span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <input
                  id="00N3Y00000H11Ck"
                  ref="00N3Y00000H11Ck"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N3Y00000H11Ck"
                  value="1"
                >
                <label for="00N3Y00000H11Ck">
                  <span>24hr Security</span>
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
                  <span>Prototyping Service</span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <input
                  id="00N0O00000AAmXX"
                  ref="00N0O00000AAmXX"
                  v-model="workspaceAmenitiesOther"
                  class="form-field-reset checkbox"
                  type="checkbox"
                  name="00N0O00000AAmXX"
                  value="1"
                >
                <label for="00N0O00000AAmXX">
                  <span>Other</span>
                </label>
              </div>
              <div v-show="workspaceAmenitiesOther">
                <label for="00N3Y00000H10Eu" />
                <input
                  id="00N3Y00000H10Eu"
                  ref="00N3Y00000H10Eu"
                  class="input-text form-field-reset"
                  type="text"
                  name="00N3Y00000H10Eu"
                  placeholder="Please specify"
                  maxlength="254"
                >
              </div>
            </div>
            <!-- </div> -->
            <!-- <div class="col-12" />
            <div v-show="workspaceAmenitiesOther" class="col-12 col-md-6">
              <label for="00N3Y00000H10Eu" />
              <input
                id="00N3Y00000H10Eu"
                ref="00N3Y00000H10Eu"
                class="input-text form-field-reset"
                type="text"
                name="00N3Y00000H10Eu"
                placeholder="Please specify"
                maxlength="254"
              >
            </div> -->
          </div>
        </div>
        <!-- </div>
        <div v-show="step === 2" class="my-4"> -->
        <div class="form-row">
          <div class="col-12 col-md-6">
            <label for="00N0O00000AAdtw">Why are you looking for a new workspace?</label>
            <select
              id="00N0O00000AAdtw"
              ref="00N0O00000AAdtw"
              v-model="reasonOfMove"
              class="custom-select form-control form-field-reset"
              name="00N0O00000AAdtw"
            >
              <option value="" disabled selected>
                Choose an option
              </option>
              <option value="Support a better work-life balance">
                Support a better work-life balance
              </option>
              <option value="Have room for growth">
                Have room for growth
              </option>
              <option value="Attract new clients and partners">
                Attract new clients and partners
              </option>
              <option value="Work alongside other creatives">
                Work alongside other creatives
              </option>
              <option value="Have a change of scenery">
                Have a change of scenery
              </option>
              <option value="Work closer to home">
                Work closer to home
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>
          <div v-show="arrayIncludesString(reasonOfMove,'Other')" class="col-12 col-md-6">
            <label for="00N3Y00000H10Ek">Specify your reason</label>
            <input
              id="00N3Y00000H10Ek"
              ref="00N3Y00000H10Ek"
              class="input-text form-field-reset"
              type="text"
              name="00N3Y00000H10Ek"
              placeholder="Please specify"
              maxlength="254"
            >
          </div>
        </div>
      </div>

      <div v-show="step === 2" class="my-4">
        <h5>Staying in touch</h5>
        <div class="form-row">
          <div class="col-12 col-md-8">
            <!-- <div class="custom-control custom-checkbox">
              <input
                id="customCheck1"
                type="checkbox"
                class="custom-control-input"
              >
              <label class="custom-control-label" for="customCheck1">
                I agree to the terms of your <a href="/privacy-policy/">Privacy Policy</a>*
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
              <div class="valid-feedback">
                All good.
              </div>
            </div> -->
            <div class="checkbox-wrapper">
              <input
                id="enquirePrivacyOptIn"
                ref="enquirePrivacyOptIn"
                class="form-field-reset checkbox"
                type="checkbox"
                name="00N0O00000GRrXc"
                value="1"
                required
                :class="{'is-invalid': true, 'is-valid': true}"
              >
              <label class="cb" for="enquirePrivacyOptIn">
                <span>I agree to the terms of your <a href="/privacy-policy/" target="_blank">Privacy Policy</a>*</span>
              </label>
              <!-- <div class="invalid-feedback">
                You must agree before submitting.
              </div>
              <div class="valid-feedback">
                You must agree before submitting.
              </div> -->
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

            <!-- <div class="checkbox-wrapper">
              <input
                id="Email__c"
                ref="Email__c"
                class="form-field-reset checkbox"
                type="checkbox"
                name="00N20000009fVlo"
                value="1"
              >
              <label class="cb" for="Email__c">
                <span>
                  Email
                </span>
              </label>
            </div>

            <div class="checkbox-wrapper">
              <input
                id="Telephone__c"
                ref="Telephone__c"
                class="form-field-reset checkbox"
                type="checkbox"
                name="00N20000009fVle"
                value="1"
              >
              <label class="cb" for="Telephone__c">
                <span>
                  Telephone
                </span>
              </label>
            </div>

            <div class="checkbox-wrapper">
              <input
                id="SMS__c"
                ref="SMS__c"
                class="form-field-reset checkbox"
                type="checkbox"
                name="00N20000009fVlj"
                value="1"
              >
              <label class="cb" for="SMS__c">
                <span>
                  SMS
                </span>
              </label>
            </div> -->
          </div>
        </div>
      </div>

      <div v-show="step === 2" class=" my-4">
        <!-- <div class="form-row form-row--submit">
          <div class="col"> -->

        <button
          class="btn -btn-primary btn-lg mt-0"
          type="submit"
          :class="[{disabled: formState === 'loading'}, `btn-${color}`]"
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

        <div class="mt-4">
          <small class="text-black-50">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and
            <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
          </small>
        </div>

        <!-- <div v-if="formAlert.type === 'loading'" class="alert alert-light mt-4" role="alert">
          {{ formAlert.text }}
        </div>

        <div v-if="formAlert.type === 'success'" class="alert alert-success mt-4" role="alert">
          {{ formAlert.text }}
        </div>

        <div v-if="formAlert.type === 'error'" class="alert alert-danger mt-4" role="alert">
          {{ formAlert.text }}
        </div> -->

        <input id="enquireSubmit" ref="enquireSubmit" type="submit" value="Enquire" style="display: none;">
        <!-- </div>
        </div> -->
      </div>

      <input type="hidden" name="oid" value="">
      <!-- <input type="hidden" name="retURL" value="https://designdistrict.co.uk/success"> -->
      <input type="hidden" name="retURL" :value="retURL">
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

      <input id="recordType" type="hidden" name="recordType" value="0123Y0000007v91">
    </form>
    <!-- <iframe
      id="enquireRet"
      ref="enquireRet"
      name="enquireRet"
      style="display:none"
      @load="retOnload"
    /> -->
  </div>
</template>

<script>
import _ from 'lodash'
import VueRecaptcha from 'vue-recaptcha'

const KEY = '6LeyatwUAAAAAHWHaZuq8aq0GAZj21SxmI4fCgPk'

export default {
  name: 'EnquireForm',
  components: { VueRecaptcha },
  props: {
    showBusiness: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    source: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      step: 1,
      recaptchaKey: KEY,
      typeOfSpace: '',
      reasonOfMove: '',
      workspaceAmenities: [],
      workspaceAmenitiesOther: false,
      industry: '',
      roleType: '',
      showPart2: false,
      formTarget: '',
      formAlert: {
        type: '',
        text: ''
      },
      formAction: 'Submit',
      formState: 'idle'
    }
  },
  computed: {
    retURL () {
      return `https://designdistrict.co.uk/success?source=${this.source}`
    }
  },
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
    retOnload (e) {
      console.log('retOnload', e)
      // debugger
      // this.formState = 'complete'
      // this.formAlert.type = 'success'
      // this.formAlert.text = 'Complete.'
      // this.formAction = 'Complete'
      // this.$router.push({ query: { enquire: 'success' } })
    },
    arrayIncludesString (arr, string) {
      return _.includes(arr, string)
    },
    onFormSubmit (e) {
      this.formState = 'loading'
      this.formAlert.type = 'loading'
      this.formAlert.text = 'Processing...'
      this.formAction = 'Loading'

      console.log('onFormSubmit false')
      // return false
      // debugger
      if (this.submitEnquireForm() && this.handleRecap()) {
        // alert('checked!')
        this.$refs.invisibleRecaptcha.execute()
        return true

      } else {
        // alert('failed')
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
    sendForm ({ oid }) {

      this.$refs.oid.value = oid
      this.$refs.enquireForm.setAttribute('action','https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8');
      this.$refs.enquireForm.submit();

      // const url = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'
      // let bodyFormData = new FormData(this.$refs.enquireForm);

      // enquireForm
      // first_name
      // last_name
      // email
      // phone
      // 00N20000009fVlo
      // 00N20000009fVle
      // 00N20000009fVlj
      // button
      // 00N3Y00000H10Ce
      // 00N3Y00000H10Cj
      // 00N3Y00000H10Ea
      // 00N3Y00000H10Ef
      // 00N20000009fVtE
      // 00N0O00000AAdtS
      // 00N0O00000GRkIk
      // 00N0O00000AAmP4
      // 00N0O00000AAdth
      // 00N0O00000AAoDP
      // 00N0O00000AAmXD
      // 00N0O00000AAmWy
      // 00N0O00000AAmXc
      // 00N0O00000AAmXN
      // 00N3Y00000H11CL
      // 00N0O00000AAmXI
      // 00N0O00000AAmX8
      // 00N0O00000AAmX3
      // 00N3Y00000H11CQ
      // 00N3Y00000H11CV
      // 00N3Y00000H11Cf
      // 00N3Y00000H11Ca
      // 00N3Y00000H11Ck
      // 00N0O00000AAmXh
      // 00N0O00000AAmXX
      // 00N3Y00000H10Eu
      // 00N3Y00000H10Eu
      // 00N0O00000AAdtw
      // 00N3Y00000H10Ek
      // 00N0O00000GRrXc
      // 00N0O00000GRkIa
      // 00N0O00000GRZb7
      // 00N20000009fVlo
      // 00N20000009fVle
      // 00N20000009fVlj
      // oid
      // retURL
      // 00N0O00000AB5j2
      // 00N0O00000AB5j1
      // 00N0O00000AB5iY
      // 00N0O00000AB5iN
      // 00N0O00000GRkIf
      // 00N0O00000GRZbC
      // 00N0O00000GRrXh
      // 00N0O00000AB5iO
      // 00N0O00000AB5iQ
      // 00N0O00000AB5iR
      // 00N0O00000AB5iS
      // 00N0O00000AB5iP
      // recordType

      // for (let i=0; this.$refs.enquireForm.elements; i++) {
      //   let name = this.$refs.enquireForm.elements[i].name;
      //   let val = this.$refs.enquireForm.elements[i].value;
      //   if (name || name.indexOf('recaptcha') >= 0) {
      //     continue;
      //   }
      // }
      //
      // debugger
      // console.log('bodyFormData', bodyFormData, this.$refs.enquireForm)
      //
      // for (var i = 0; i < array.length; i++) {
      //   array[i]
      // }
      //
      // return
      //
      // this.$axios.$post(url, {
      //   data: bodyFormData,
      //   config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
      // })
    },
    onVerify (recaptchaToken) {
      console.log('Verify: ' + recaptchaToken)

      this.resetRecaptcha()
      const url = 'https://us-central1-designdistrict-2b9e1.cloudfunctions.net/verify'
      // let url = 'https://www.google.com/recaptcha/api/siteverify'
      this.$axios.$post(url, {
        token: recaptchaToken
      }).then((response) => {
        console.log(response)
        // this.formTarget = 'subscribRet'
        this.sendForm({
          oid: response.oid
        })

      }).catch((error) => {
        return false;
        console.log(error)
      })
      // this.formState = 'idle'
      // this.formAlert.type = 'success'
      // this.formAlert.text = 'Complete.'
      // const url = 'https://us-central1-designdistrict-2b9e1.cloudfunctions.net/verify'
      // const url = 'http://localhost:5001/designdistrict-2b9e1/us-central1/verify'
      // // let url = 'https://www.google.com/recaptcha/api/siteverify'
      // this.$axios.$post(url, {
      //   token: recaptchaToken
      // }).then((response) => {
      //   console.log(response)
      //   this.formState = 'loading'
      //   this.formTarget = 'enquireRet'
      //   this.$refs.enquireForm.submit()
      // }).catch((error) => {
      //   console.log(error.message)
      // })



      // this.$refs.enquireForm.submit()
      //
      // debugger



      // this.$refs.enquireForm.submit()
      //
      // setTimeout(() => {
      //   this.formState = 'idle'
      //   this.formAlert.type = 'success'
      //   this.formAlert.text = 'Complete.'
      //   this.formAction = 'Complete'
      // }, 1000)

      // setTimeout(() => {
      //   // alert('done')
      //   this.$refs.enquireForm.submit()
      //
      //   setTimeout(() => {
      //     this.formState = 'idle'
      //     this.formAlert.type = ''
      //     this.formAlert.text = ''
      //     this.formAction = 'Submit'
      //   }, 3000)
      // }, 1000)
    },
    resetForm: _.debounce( function (){
      this.formState = 'idle'
      this.formAlert.type = ''
      this.formAlert.text = ''
      this.formAction = 'Submit'
    }, 5000, {
      leading: false
    }),
    onExpired () {
      // console.error('reCAPTCHA has expired')
      // this.formState = 'idle'
      // this.formAlert.type = 'error'
      // this.formAlert.text = 'reCAPTCHA has expired. Please try again.'
      // setTimeout(() => {
      this.resetRecaptcha()
      // }, 2000)
    },
    resetRecaptcha () {
      if (this.$refs.invisibleRecaptcha) {
        this.$refs.invisibleRecaptcha.reset() // Direct call reset method
      }
    },
    submitEnquireForm () {
      // const form = document.forms.enquireForm
      // const submitButton = document.getElementById('enquireSubmit')

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

      // console.log('testing finished')
      // this.resetForm()
      // return false
      // submitButton.click()
      return true
    }
  }
}
</script>
