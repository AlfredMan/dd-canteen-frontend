<template lang="html">
  <footer class="bg-grey">
    <div class="container">
      <div class="row pt-5 pb-5">
        <div class="col-12 col-md-3 col-lg-3 mb-5">
          <h5>DESIGN DISTRICT</h5>
          <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/The+Gateway+Pavilions,+Peninsula+Square,+Greenwich+Peninsula,+London+SE10+0SQ/@51.5003894,0.0041197,18.67z?hl=en">The Gateway Pavilions<br>Peninsula Square<br>Greenwich Peninsula<br>London SE10 0SQ</a><br><br>
          <email :address="'hello@designdistrict.co.uk'" /><br>
          <a class="">+44 (0)20 3981 2426</a><br>
        </div>

        <div class="col-6 col-md-3 col-lg-2 mb-5">
          <h5>Connect</h5>
          <a class="" target="_blank" rel="noreferrer" href="https://www.instagram.com/designdistrictlondon">Instagram</a><br>
          <a class="" target="_blank" rel="noreferrer" href="https://twitter.com/Design_District">Twitter</a><br>
          <a class="" target="_blank" rel="noreferrer" href="https://www.facebook.com/DesignDistrictLondon/">Facebook</a><br>
          <a class="" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/design-district-london">LinkedIn</a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 mb-5">
          <h5>Join</h5>
          <nuxt-link class="" to="/workspace">
            Work space
          </nuxt-link>
          <br>
          <!-- <nuxt-link class="" to="/the-club">
            The Club
          </nuxt-link>
          <br> -->
          <nuxt-link class="" to="/about-us">
            About
          </nuxt-link>
          <br>
          <nuxt-link class="" to="/contact">
            Contact
          </nuxt-link>
        </div>

        <div class="col-6 col-md-3 col-lg-2 mb-5">
          <h5>Legal</h5>
          <nuxt-link class="" to="/privacy-policy">
            Privacy Policy
          </nuxt-link>
          <br>
          <nuxt-link class="" to="/cookies-policy">
            Cookies Policy
          </nuxt-link>
          <br>
          <nuxt-link class="" to="/terms-and-conditions">
            Terms & Conditions
          </nuxt-link>
        </div>

        <div class="col-6 col-md-3 col-lg-1" />

        <div class="col-6 col-md-3 col-lg-2 mb-5">
          <img src="~/assets/images/logo-hor.svg" alt="Design District logo" style="" class="mb-4 w-75">
          <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula logo" style="" class=" w-75 pr-5">
        </div>

        <!-- <div class="col-12 d-block d-md-none" />
        <div class="col-6 col-md-3 col-lg-2 mb-5 ml-md-auto text-md-right text-left">
          <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula" class="w-100 w-md-75" style="max-width: 100px">
        </div> -->
      </div>

      <div class="inner d-flex row align-items-end justify-content-start mt-0 pb-4">
        <!-- <div class="p-3 mr-auto-mr-md-0-ml-md-auto-order-md-2 d-flex align-items-end">
          <img src="~/assets/images/logo-hor.svg" alt="Design District logo" style="max-width: 40px" class="mr-5">
          <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula logo" style="max-width: 100px">
        </div> -->
        <div class="col-6 col-md-2 pr-0 pr-md-5">
          <!-- <img src="~/assets/images/logo-hor.svg" alt="Design District logo" style="" class="mb-4 w-75">
          <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula logo" style="" class=" w-75 pr-5"> -->
        </div>

        <small class="col-12 col-md-6 text-left text-md-right ml-auto mt-2">
          Copyright © 2020 Design District Limited
        </small>
        <!-- <nuxt-link class="d-none d-md-inline nav-link" to="/privacy-policy">
          Privacy Policy
        </nuxt-link>
        <nuxt-link class="d-none d-md-inline nav-link" to="/terms-and-conditions">
          Terms & Conditions
        </nuxt-link> -->

        <!-- <a class="d-none d-md-inline nav-link ml-auto" href="https://twitter.com/Design_District">Twitter</a>
        <a class="d-none d-md-inline nav-link" href="https://www.facebook.com/DesignDistrictLondon/">Facebook</a>
        <a class="d-none d-md-inline nav-link" href="http://www.instagram.com/designdistrictlondon">Instagram</a> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
