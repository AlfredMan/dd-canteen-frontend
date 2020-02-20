<template>

<!-- <div class="bg-light container-fluid">
<div class="container"> -->
<div class="">

    <form class="page-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" name="enquireForm" method="post">

      <h5>Your Details</h5>

      <div class="form-row">
        <div class="col">
          <label class="accessible-hide" for="first_name">First name<sup>*</sup></label>
          <input type="text" name="first_name" placeholder="First name" value="" class="input-text form-field-reset" required>
        </div>
        <div class="col">
          <label class="accessible-hide" for="last_name">Last name<sup>*</sup></label>
          <input type="text" name="last_name" placeholder="Last name" value="" class="input-text form-field-reset" required>
        </div>
      </div>

      <div class="form-row">
        <div class="col">
          <label class="accessible-hide" for="email">Email address<sup>*</sup></label>
          <input type="email" name="email" placeholder="Email address" value="" class="input-text form-field-reset" required>
        </div>
        <div class="col">
          <label class="accessible-hide" for="phone">Phone</label>
          <input type="text" name="phone" placeholder="Phone" class="input-text form-field-reset" value="">
        </div>
      </div>

      <div class="" v-if="showBusiness">
        <h5>Work Specifics</h5>

        <div class="form-row">
          <div class="col">
            <label class="accessible-hide" for="00N20000009fVtE">Business name</label>
            <input type="text" name="00N20000009fVtE" placeholder="Business name" class="input-text form-field-reset" value="">
          </div>
          <div class="col">
            <label class="accessible-hide" for="00N0O00000AAdtS">Website</label>
            <input type="text" name="00N0O00000AAdtS" placeholder="Website" class="input-text form-field-reset" value="">
          </div>
        </div>

        <div class="form-row">
          <div class="col-6 full">
            <label for="00N0O00000AAdtr" class="accessible-hide">
              Describe your business
              <!-- Tell us a little bit about your business or idea and how you see it working at the Design District -->
            </label>
            <textarea name="00N0O00000AAdtr" rows="6" class="input-text form-field-reset" placeholder="Describe your business"></textarea>
          </div>
        </div>
      </div>

      <h5>What type of space suits you? *</h5>

      <div class="form-row mb-5">
        <div class="col-12 col-md-6">
          <select class="custom-select form-control form-field-reset" id="typeOfSpace" name="00N0O00000AAdth" required>
              <option value="" disabled selected>-</option>
              <option value="Desk">Desk</option>
              <option value="Office">Office</option>
              <option value="Workshop">Workshop</option>
              <option value="Artist studio">Artist studio</option>
              <option value="Other">Other</option>
            </select>
        </div>
        <div class="form-group">
          <input id="typeOfSpaceOther" class="form-control" type="text" name="00N0O00000AAoDP" placeholder="Please specify" maxlength="254" style="display: none;">
        </div>
      </div>

      <div>
        <div>
          <h5>Select the amenities that are important to you:</h5>

          <div class="row">
            <div class="col-12 col-lg">
              <div class="checkbox-wrapper">
                <input class="form-field-reset checkbox" type="checkbox" id="00N0O00000AAmWy" name="00N0O00000AAmWy" value="1">
                <label for="00N0O00000AAmWy">
                <span>High-speed internet</span>
              </label>
              </div>
              <div class="checkbox checkbox--wide">
                <input class="form-field-reset checkbox" type="checkbox" id="00N0O00000AAmX3" name="00N0O00000AAmX3" value="1">
                <label for="00N0O00000AAmX3">
                <span>Printing (including 3D, canvas, vinyl)</span>
              </label>
              </div>
              <div class="checkbox-wrapper">
                <input class="form-field-reset checkbox" type="checkbox" id="00N0O00000AAmXh" name="00N0O00000AAmXh" value="1">
                <label for="00N0O00000AAmXh">
                <span>Prototyping</span>
              </label>
              </div>
            </div>
            <div class="col-12 col-lg">
              <div class="checkbox-wrapper">
                <input class="form-field-reset checkbox" type="checkbox" id="00N0O00000AAmX8" name="00N0O00000AAmX8" value="1">
                <label for="00N0O00000AAmX8">
                <span>Private phone booths</span>
              </label>
              </div>
              <div class="checkbox checkbox--wide">
                <input class="form-field-reset checkbox" type="checkbox" id="00N0O00000AAmXN" name="00N0O00000AAmXN" value="1">
                <label for="00N0O00000AAmXN">
                <span>Meeting rooms with AV</span>
              </label>
              </div>
              <div class="checkbox-wrapper">
                <input class="form-field-reset checkbox" type="checkbox" id="00N0O00000AAmXI" name="00N0O00000AAmXI" value="1">
                <label for="00N0O00000AAmXI">
                <span>Social events</span>
              </label>
              </div>
            </div>
            <div class="col-12 col-lg">
              <div class="checkbox-wrapper">
                <input class="form-field-reset checkbox" type="checkbox" id="00N0O00000AAmXc" name="00N0O00000AAmXc" value="1">
                <label for="00N0O00000AAmXc">
                <span>Event space</span>
              </label>
              </div>
              <div class="checkbox checkbox--wide">
                <input class="form-field-reset checkbox" type="checkbox" id="00N0O00000AAmXS" name="00N0O00000AAmXS" value="1">
                <label for="00N0O00000AAmXS">
                <span>Access to multiple office locations</span>
              </label>
              </div>
              <div class="checkbox-wrapper">
                <input class="form-field-reset checkbox" type="checkbox" id="00N0O00000AAmXD" name="00N0O00000AAmXD" value="1">
                <label for="00N0O00000AAmXD">
                <span>Unique common areas</span>
              </label>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="">
        <br>
        <h5>Why do you want to move from your current location?</h5>
        <div class="form-row mb-5">
          <div class="col-12 col-md-6">
            <select class="custom-select form-control form-field-reset" id="00N0O00000AAdtw" name="00N0O00000AAdtw">
              <option value="" disabled selected>-</option>
              <option value="Lease Expiring">My lease is expiring</option>
              <option value="Space">I need more space</option>
              <option value="Next Step">I’m ready for the next step</option>
              <option value="Work From Home">I work from home</option>
              <option value="No Work Space">I do not have a business space</option>
              <option value="Supportive Community">I want a supportive community</option>
              <option value="Rent Increase">My rent has increased</option>
              <option value="Change in scene">I want a change of scenery</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div class="">

        <h5>Staying in touch</h5>
        <div class="form-row mb-5">
          <div class="col-12 col-md-8">
            <div class="checkbox-wrapper">
              <input class="form-field-reset checkbox" type="checkbox" id="enquirePrivacyOptIn" name="00N0O00000GRrXc" value="1" required>
              <label class="cb" for="enquirePrivacyOptIn">
                <span>I agree to the terms of your <a href="/privacy-policy/">Privacy Policy</a></span>
              </label>
            </div>
            <div class="checkbox-wrapper">
              <input class="form-field-reset checkbox" type="checkbox" id="enquireDesignOptIn" name="00N0O00000GRkIa" value="1">
              <label class="cb" for="enquireDesignOptIn">
                <span>
                  I am happy to receive news from Design District
                  <!-- I am happy to receive marketing communications on the Design&nbsp;District -->
                </span>
              </label>
            </div>
            <div class="checkbox-wrapper">
              <input class="form-field-reset checkbox" type="checkbox" id="enquireMarketingOptIn" name="00N0O00000GRZb7" value="1">
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

      <input type="hidden" name="oid" value="00D20000000nxym">
      <input type="hidden" name="retURL" value="https://designdistrict.co.uk/success/">
      <input type="hidden" name="00N0O00000AB5j2" id="00N0O00000AB5j2" value="Web Form">
      <input type="hidden" name="00N0O00000AB5j1" id="00N0O00000AB5j1" value="Design District">
      <input type="hidden" name="00N0O00000AB5iY" id="00N0O00000AB5iY" value="Design District Sales Enquiry">
      <input type="hidden" name="00N0O00000AB5iN" id="00N0O00000AB5iN" value="7010O00000153FNQAY">
      <input type="hidden" name="00N0O00000GRkIf" id="enquireDesignOptInDate" value="">
      <input type="hidden" name="00N0O00000GRZbC" id="enquireMarketingOptInDate" value="">
      <input type="hidden" name="00N0O00000GRrXh" id="enquirePrivacyOptInDate" value="">

      <input type="hidden" name="00N0O00000AB5iO" id="00N0O00000AB5iO" value="">
      <input type="hidden" name="00N0O00000AB5iQ" id="00N0O00000AB5iQ" value="">
      <input type="hidden" name="00N0O00000AB5iR" id="utm_source" value="">
      <input type="hidden" name="00N0O00000AB5iS" id="utm_term" value="">
      <input type="hidden" name="00N0O00000AB5iP" id="utm_content" value="">

      <div class="form-row form-row--submit">
        <button onclick="submitEnquireForm(); return false;" class="btn btn-primary btn-lg">Submit</button>
        <input id="enquireSubmit" type="submit" value="Enquire" style="display: none;">
      </div>

      </form>

</div>

</template>

<script>
export default {
  name: 'enquire-form',
  props: {
    showBusiness: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  monuted() {
    this.init()
  },
  methods: {
    init() {
      (function($) {

        $(function() {

          var $document = $(document);

          $document.on('change', '#typeOfSpace', function() {

            var value = $(this).val(),
              target = $('#typeOfSpaceOther');

            if (value === 'Other') {
              target.show();
            } else {
              target.hide();
            }

          }).change();

        });

      })(jQuery);

      function submitEnquireForm() {

        var form = document.forms['enquireForm'],
          submitButton = document.getElementById('enquireSubmit'),
          today = new Date(),
          dd = today.getDate(),
          mm = today.getMonth() + 1,
          yyyy = today.getFullYear(),
          hours = today.getHours(),
          mins = today.getMinutes(),
          now;

        if (dd < 10) {
          dd = '0' + dd;
        }

        if (mm < 10) {
          mm = '0' + mm;
        }

        now = dd + '/' + mm + '/' + yyyy;

        if (document.getElementById("enquirePrivacyOptIn").checked) {
          document.getElementById("enquirePrivacyOptInDate").value = now;
        }

        if (document.getElementById("enquireDesignOptIn").checked) {
          document.getElementById("enquireDesignOptInDate").value = now;
        }

        if (document.getElementById("enquireMarketingOptIn").checked) {
          document.getElementById("enquireMarketingOptInDate").value = now;
        }


        function parseGET(param) {
          var searchStr = document.location.search;
          try {
            var match = searchStr.match('[?&]' + param + '=([^&]+)');
            if (match) {
              var result = match[1];
              result = result.replace(/\+/g, '%20');
              result = decodeURIComponent(result);
              return result;
            } else {
              return '';
            }
          } catch (e) {
            return '';
          }
        }

        document.getElementById('00N0O00000AB5iO').value = parseGET('utm_campaign');
        document.getElementById('00N0O00000AB5iQ').value = parseGET('utm_medium');
        document.getElementById('utm_source').value = parseGET('utm_source');
        document.getElementById('utm_term').value = parseGET('utm_term');
        document.getElementById('utm_content').value = parseGET('utm_content');

        submitButton.click()

      }
    }
  }
}
</script>
