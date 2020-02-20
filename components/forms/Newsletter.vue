<template>
<div class="">

	<p>Sign up now to stay in the loop with the latest happenings on the Peninsula.</p>

  <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" name="subscribeForm" method="post">
		<input type=hidden name='captcha_settings' value='{"keyname":"GoogleAPIKeyV2","fallback":"true","orgId":"00D20000000nxym","ts":""}'>
		<input type="hidden" name="oid" value="00D20000000nxym">
		<input type="hidden" name="retURL" value="https://designdistrict.co.uk/success/">
		<input type="hidden" name="00N0O00000AB5j2" id="00N0O00000AB5j2" value="Web Form">
		<input type="hidden" name="00N0O00000AB5j1" id="00N0O00000AB5j1" value="Design District">
		<input type="hidden" name="00N0O00000AB5iY" id="00N0O00000AB5iY" value="Design District Subscription">
		<input type="hidden" name="00N0O00000AB5iN" id="00N0O00000AB5iN" value="7010O00000153NQQAY">
		<input type="hidden" name="00N0O00000GRkIf" id="designOptInDate" value="">
		<input type="hidden" name="00N0O00000GRZbC" id="marketingOptInDate" value="">
		<input type="hidden" name="00N0O00000GRrXc" id="privacyOptIn" value="1">
		<input type="hidden" name="00N0O00000GRrXh" id="privacyOptInDate" value="">

		<div>
			<input class="form-control input-text form-field-reset" type="text" name="first_name" placeholder="First Name" value="" id="first_name" required>
			<input class="form-control input-text form-field-reset" type="text" name="last_name" placeholder="Last Name" id="last_name" value="" required>
			<input class="form-control input-text form-field-reset" type="email" name="email" placeholder="Email Address" value="" required>
		</div>

		<p>
			I agree to the terms of your <a href="/privacy-policy/">Privacy Policy</a> and I want to receive:
		</p>

		<div>
			<input class="form-field-reset checkbox" type="checkbox" id="designOptIn" name="00N0O00000GRkIa" value="1">
			<label for="designOptIn">
				<span>
          <!-- The Design District including information on workspaces, offices and commercial opportunities -->
          Design District news and information about workspaces, workshops and events
        </span>
			</label>
		</div>

		<div>
			<input class="form-field-reset checkbox" type="checkbox" id="marketingOptIn" name="00N0O00000GRZb7" value="1">
			<label for="marketingOptIn">
				<span>
          <!-- The latest happenings on Greenwich Peninsula including cultural events and the latest news -->
          News from Greenwich Peninsula including cultural events and announcements
        </span>
			</label>
		</div>

		<p>
			<!-- Our <a href="/privacy-policy/">Privacy Policy</a> outlines how we use and store your data. You can manage your preferences or opt out of communications at any time. -->
      Our <a href="/privacy-policy/">Privacy Policy</a> outlines how we use and store your data. You can manage your preferences or opt out of communications at any time.
		</p>

		<div class="g-recaptcha" data-sitekey="6LdPFNEUAAAAAKdvqOAD4Dq1MeL0WoGWzxZFj92t"></div>
		<div class="form-row form-submit">

			<button onclick="submitDEManagerForm(); return false;" class="btn btn-primary btn-lg">Signup</button>
			<input id="submit" type="submit" value="Signup" style="display: none;">

		</div>

	</form>
</div>
</template>

<script>
export default {
  name: 'newsletter-form',
  computed: {},
  monuted() {
    this.init()
  },
  methods: {
    init() {

      function HandleRecap() {
        if (grecaptcha.getResponse().length <= 0) {
          alert('Please click the reCAPTCHA checkbox');
          return false;
        } else {
          // return true;
          //form.submit();
          $('#submit').click();
        }
      }

      function submitDEManagerForm() {
        var form = document.forms['subscribeForm'],
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

        //now = mm+'/'+dd+'/'+yyyy+' '+hours+':'+mins;
        now = dd + '/' + mm + '/' + yyyy;

        document.getElementById("privacyOptInDate").value = now;

        if (document.getElementById("designOptIn").checked) {
          document.getElementById("designOptInDate").value = now;
        }

        if (document.getElementById("marketingOptIn").checked) {
          document.getElementById("marketingOptInDate").value = now;
        }

        if ((document.getElementById("first_name").value === "James") && (document.getElementById("last_name").value === "Smith")) {
          alert('Sorry, something went wrong!');
          return false;
        }

        HandleRecap();
      }
    }
  }
}
</script>
