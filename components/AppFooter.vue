<template lang="html">
  <footer class="bg-grey monospace">
    <div class="px-0 -px-md-4 pt-2 pb-4 py-md-4">
      <div class="container-fluid cap-max-w px-3">
        <div class="row">
          <div class="col-12 col-md-3 col-lg-3 mb-5 mt-4 mt-md-0">
            <h6 class=" font-medium uppercase">DESIGN DISTRICT</h6>
            <a class="h6" target="_blank" rel="noreferrer" href="https://goo.gl/maps/bNePBjngUXNPMr9P9">The Gateway Pavilions<br>Peninsula Square<br>Greenwich Peninsula<br>London SE10 0SQ</a><br>
            <a class="h6 underline" target="_blank" rel="noreferrer" href="https://goo.gl/maps/bNePBjngUXNPMr9P9">Plan my route</a><br><br>
            <email class="h6 underline" :address="'hello@designdistrict.co.uk'" /><br>
            <a class="h6 underline" href="tel:4402039812426">+44 (0)20 3981 2426</a><br>
            <small class="d-block mt-1">
              Copyright © 2020 Design District Limited
            </small>
          </div>

          <div class="col-12 col-md-6">
            <div class=" row">
              <div class="col-6 col-md-3 col-md-2-col-lg-2 mb-5">
                <h6 class=" font-medium uppercase">Connect</h6>
                <a class="h6" target="_blank" rel="noreferrer" href="https://www.instagram.com/designdistrictlondon">Instagram</a><br>
                <a class="h6" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/design-district-london">LinkedIn</a><br>
                <a class="h6" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCOE4WSM2KzYyItgaS6k4_eg">YouTube</a><br>
                <a class="h6" target="_blank" rel="noreferrer" href="https://www.pinterest.co.uk/designdistrictlondon/">Pinterest</a><br>
                <nuxt-link class="h6" to="/contact#newsletter">Newsletter</nuxt-link>
              </div>

              <div class="col-6 col-md-3 col-md-2-col-lg-2 mb-5">
                <h6 class=" font-medium uppercase">Find your workspace</h6>
                <nuxt-link class="h6" to="/workspace?space-type=multi-purpose-work-space">
                  Multi-Purpose
                </nuxt-link>
                <br>
                <nuxt-link class="h6" to="/workspace?space-type=serviced-studio">
                  Serviced Studio
                </nuxt-link>
                <br>
                <nuxt-link class="h6" to="/workspace?space-type=on-off-office">
                  On/off Office
                </nuxt-link>
                <br>
                <nuxt-link class="h6" to="/workspace?space-type=building">
                  Rent a Building
                </nuxt-link>
              </div>

              <div class="col-6 col-md-3 col-md-2-col-lg-2 mb-5">
                <h6 class=" font-medium uppercase">Our Partners</h6>
                <a class="h6" href="https://bureau.club/" target="_blank" rel="nofollow">
                  Bureau
                </a>
                <br>
                <a class="h6" href="https://nowgallery.co.uk/" target="_blank" rel="nofollow">
                  Now Gallery
                </a>
                <br>
                <a class="h6" href="https://www.greenwichpeninsula.co.uk/whats-on/the-peninsulist/" target="_blank" rel="nofollow">
                  The Peninsulist
                </a>

              </div>

              <div class="col-6 col-md-3 col-md-2-col-lg-2 mb-5">
                <h6 class=" font-medium uppercase">Legal</h6>
                <nuxt-link class="h6" to="/privacy-notice">
                  Privacy Notice
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

          <div class="col-12 col-md-3 mb-5 pl-0 pl-4 lg:pl-24">
            <div class="row mt-4">
              <div class="col-6 flex align-items-start lg:justify-content-end">
                <img src="~/assets/images/logo-hor.svg" alt="Design District logo" style="" class="mb-5 w-full lg:w-75">
              </div>
              <div class="col-6">
                <div class="w-75 lg:w-50 mb-4 mx-auto px-3">
                  <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula logo" style="" class=" w-100 mb-4 mx-auto">
                </div>
                <div class="w-full lg:w-75 mb-4 mx-auto px-3">
                  <img src="~/assets/images/mayor-of-london-logo-3.png" alt="Mayor of London" style="" class=" w-100 mx-auto">
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-12">
            <a href="https://hato.co" target="_blank" rel="nofollow noreferrer" class="h6 no-underline">Design and build by HATO</a>
          </div>
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
