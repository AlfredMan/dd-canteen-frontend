<template lang="html">
  <footer class="bg-grey monospace">
    <div class="px-0 -px-md-4 pt-2 pb-4 py-md-4">
      <div class="container-fluid cap-max-w px-3">
        <div class="row">
          <div class="col-12 col-md-3 col-lg-3 mb-5 mt-4 mt-md-0">
            <h6 class=" font-medium uppercase">DESIGN DISTRICT</h6>
            <a class="h6" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/The+Gateway+Pavilions,+Peninsula+Square,+Greenwich+Peninsula,+London+SE10+0SQ/@51.5003894,0.0041197,18.67z?hl=en">The Gateway Pavilions<br>Peninsula Square<br>Greenwich Peninsula<br>London SE10 0SQ</a><br>
            <a class="h6 underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/The+Gateway+Pavilions,+Peninsula+Square,+Greenwich+Peninsula,+London+SE10+0SQ/@51.5003894,0.0041197,18.67z?hl=en">Plan my route</a><br><br>
            <email class="h6 underline" :address="'hello@designdistrict.co.uk'" /><br>
            <a class="h6 underline" href="tel:4402039812426">+44 (0)20 3981 2426</a><br>
            <small class="d-block">
              Copyright © 2020 Design District Limited
            </small>
          </div>

          <div class="col-12 col-md-5">
            <div class=" row">
              <div class="col-4 col-md-2-col-lg-2 mb-5">
                <h6 class=" font-medium uppercase">Stay Connected</h6>
                <a class="h6" target="_blank" rel="noreferrer" href="https://www.instagram.com/designdistrictlondon">Instagram</a><br>
                <a class="h6" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/design-district-london">LinkedIn</a><br>
                <a class="h6" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCOE4WSM2KzYyItgaS6k4_eg">YouTube</a><br>
                <!-- <a class="h6" target="_blank" rel="noreferrer" href="https://twitter.com/Design_District">Twitter</a><br>
                <a class="h6" target="_blank" rel="noreferrer" href="https://www.facebook.com/DesignDistrictLondon/">Facebook</a><br> -->

                <a class="h6" target="_blank" rel="noreferrer" href="https://www.pinterest.co.uk/designdistrictlondon/">Pinterest</a>
                <a class="h6" target="_blank" rel="noreferrer" href="">Newsletter</a>
              </div>

              <div class="col-4 col-md-2-col-lg-2 mb-5">
                <h6 class=" font-medium uppercase">Find your workspace</h6>
                <nuxt-link class="h6" to="/workspace">
                  Multi-Purpose
                </nuxt-link>
                <br>
                <nuxt-link class="h6" to="/workspace">
                  Serviced Studio
                </nuxt-link>
                <br>
                <nuxt-link class="h6" to="/workspace">
                  On/off Office
                </nuxt-link>
                <br>
                <nuxt-link class="h6" to="/workspace">
                  Rent a Building
                </nuxt-link>
                <!-- <nuxt-link class="h6" to="/the-club">
                  The Club
                </nuxt-link>
                <br> -->
                <!-- <nuxt-link class="h6" to="/about-us">
                  About
                </nuxt-link>
                <br>
                <nuxt-link class="h6" to="/contact">
                  Contact
                </nuxt-link> -->
              </div>

              <div class="col-4 col-md-2-col-lg-2 mb-5">
                <h6 class=" font-medium uppercase">Legal</h6>
                <nuxt-link class="h6" to="/privacy-policy">
                  Privacy Policy
                </nuxt-link>
                <br>
                <nuxt-link class="h6" to="/cookies-policy">
                  Cookies Policy
                </nuxt-link>
                <br>
                <nuxt-link class="h6" to="/terms-and-conditions">
                  Terms & Conditions
                </nuxt-link>
              </div>
            </div>
          </div>

          <!-- <div class="col-6 col-md-1 col-lg-1" /> -->

          <div class="col-12 col-md-4 mb-5 pl-0 lg:pl-24">
            <div class="row mt-4">
              <div class="col-6 flex align-items-start justify-content-end">
                <img src="~/assets/images/logo-hor.svg" alt="Design District logo" style="" class="mb-5 w-75">
              </div>
              <div class="col-6">
                <div class="w-50 mb-4 mx-auto px-3">
                  <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula logo" style="" class=" w-100 mb-4 mx-auto">
                </div>
                <div class="w-75 mb-4 mx-auto px-3">
                  <img src="~/assets/images/mayor-of-london-logo-3.png" alt="Mayor of London" style="" class=" w-100 mx-auto">
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="col-12 d-block d-md-none" />
          <div class="col-6 col-md-3 col-lg-2 mb-5 ml-md-auto text-md-right text-left">
            <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula" class="w-100 w-md-75" style="max-width: 100px">
          </div> -->
        </div>

        <div class="row">
          <div class="col-12">
            <h6 class="">Design and build by Hato</h6>
          </div>
        </div>

        <div class="inner d-flex row align-items-end justify-content-start mt-0 pb-0" v-if="false">
          <!-- <div class="p-3 mr-auto-mr-md-0-ml-md-auto-order-md-2 d-flex align-items-end">
            <img src="~/assets/images/logo-hor.svg" alt="Design District logo" style="max-width: 40px" class="mr-5">
            <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula logo" style="max-width: 100px">
          </div> -->
          <div class="col-6 col-md-2 pr-0 pr-md-5">
            <!-- <img src="~/assets/images/logo-hor.svg" alt="Design District logo" style="" class="mb-4 w-75">
            <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula logo" style="" class=" w-75 pr-5"> -->
          </div>

          <!-- <small class="col-12 col-md-6 text-left text-md-right ml-auto mt-2">
            Copyright © 2020 Design District Limited
          </small> -->
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
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
h6, .h6 {
  font-size: 0.9rem;
  line-height: 1.25;
  margin-bottom: 0.5em;
}
</style>
