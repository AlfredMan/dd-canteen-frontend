<template>
  <div class="mt-5">
    <!--  -->
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-7">
          <h1>Contact</h1>
        </div>
      </div>
      <div class="row mb-0">
        <div class="col-12 col-md-6">
          <h4>Ask a question or book a viewing. Comment or collaborate. We want to hear from you.</h4>
        </div>
      </div>

      <responsive-line></responsive-line>

      <div class="row d-flex justify-content-end">
        <div class="col-12 col-md-3 mb-4 mb-lg-0 d-flex justify-content-end">
          <p>
            <strong>General enquiries</strong><br>
            <email :address="'hello@designdistrict.co.uk'"></email>
          </p>
        </div>
        <div class="col-12 col-md-3 mb-4 mb-lg-0 d-flex justify-content-end">
          <p>
            <strong>Sales</strong><br>
            <email :address="'sales@designdistrict.co.uk'"></email>
            <br>+44 (0)20 3981 2426
          </p>
        </div>
        <div class="col-12 col-md-3 mb-4 mb-lg-0 d-flex justify-content-end">
          <p>
            <strong>Press</strong><br>
            <email :address="'designdistrict@zetteler.co.uk'"></email>
            <br>+44 (0)20 3735 5855
          </p>
        </div>
      </div>

      <!-- <responsive-line></responsive-line> -->
      <div style="border-top:1px solid black" class="w-100 mt-5">

      </div>

    </div>

    <!--  -->
    <div class="container-fluid">
      <div class="row bg-light">
        <div class="container py-5">
          <div class="row">
            <div class="col-12 col-md-6">
              <h2>Visit</h2>
            </div>
          </div>

          <div class="row d-flex">
            <div class="col-12 col-lg-4">
              <div class="row">
                <div class="col-12 col-md-12 mb-5">
                  <h4>Design District will be a new permanent home for the creative industries in the heart of Greenwich Peninsula. One minute from North Greenwich underground station.</h4>
                </div>
                <!-- </div>

              <div class="row d-flex align-items-end mt-5 pt-5"> -->
                <div class="col-12 col-md-6 col-lg-6 mb-4 mb-lg-4">
                  <h5>Tube</h5>
                  <p>The closest tube station in North Greenwich (30 metres). On the 24-hour Jubilee line, it gets you to London Bridge in 8 minutes and Waterloo in 11&nbsp;minutes.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-6 mb-4 mb-lg-4">
                  <h5>Boat</h5>
                  <p>Travel along the Thames to Tate Modern, Tate Britain or&nbsp;Woolwich.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                  <h5>Emirates Air Line Cable&nbsp;Car</h5>
                  <p>Connecting the Design District to the Royal Docks (near ExCel London) and the&nbsp;DLR.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                  <h5>Bus </h5>
                  <p>North Greenwich bus station is a major hub providing direct links across the&nbsp;city.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-8">
              <!-- <div class="embed-responsive embed-responsive-4by3 bg-dark" /> -->
              <img class="img-fluid lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/2ktZJktAQov9qqmv48aHV3/7bded41c83ea309edff8ce029932ce90/DD-location-map-1350x831.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <responsive-line></responsive-line>
    </div>

    <div class="empty">

    </div>

  </div>
</template>

<script>
import _ from 'lodash'
export default {
  layout: 'v2',
  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },
}
</script>

<style lang="scss">
</style>
