<template lang="html">
  <div class="">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-7">
          <h1>Contact</h1>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 col-md-6">
          <h4>Ask a question or book a viewing. Comment or collaborate. We want to hear from you.</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3 mb-4 mb-lg-0">
          <p>
            <strong>General enquiries</strong><br>
            <email :address="'hello@designdistrict.co.uk'"></email>
          </p>
        </div>
        <div class="col-12 col-md-3 mb-4 mb-lg-0">
          <p>
            <strong>Sales</strong><br>
            <email :address="'sales@designdistrict.co.uk'"></email>
            <br>+44 (0)20 3981 2426
          </p>
        </div>
        <div class="col-12 col-md-3 mb-4 mb-lg-0">
          <p>
            <strong>Press</strong><br>
            <email :address="'designdistrict@zetteler.co.uk'"></email>
            <br>+44 (0)20 3735 5855
          </p>
        </div>
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

    <!-- <div class="bg-light">
      <div class="container mt-10">
        <enquire-form></enquire-form>
      </div>
    </div> -->

    <span class="anchor" id="register-interest"></span>
    <div class="py-5 anchor-target">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h2>Register your interest</h2>
          </div>
          <div class="col-12" />
          <div class="col-12 col-md-7">
            <!-- <h4>
              Welcome to the Design District. London’s new work space for the creative industries. Opening 2021.
            </h4> -->
            <h4>
              Register your interest to become a tenant and schedule a digital walk-through. Tell us about your requirements, and we’ll be in touch. For general enquiries, please email us at <email :address="'hello@designdistrict.co.uk'"></email>
            </h4>
            <br>
            <!-- <enquire-form :show-business="false" /> -->
            <enquire-form source="contact" />
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!-- <div class="container-fluid">
      <div class="row bg-light pb-5 pt-3">
        <div class="container py-5">
          <div class="row">
            <div class="col-12 col-md-6">
              <h2>Press</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <h4>World-class architecture. And the needs of creatives put front and centre. Design District is an offer that’s entirely new for London.</h4>
              <p>For information, images and interviews, contact our press team at xxxxxx@xxxx.com</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="py-5">
      <div class="container my-5">
        <div class="row">
          <div class="col-12">
            <h2>Newsletter</h2>
          </div>
          <div class="col-12" />

          <div class="col col-md-5">
            <h4>The Design District is at the heart of Greenwich Peninsula, a new type of London created specifically for the creative community.</h4>
            <p>Located on Greenwich Peninsula and 1 minute's walk to North Greenwich tube station. With links to central and East London in 15 minutes or less, you can spend less time commuting and more time doing what you do best.</p>
          </div>

          <div class="col col-md-1" />

          <div class="col col-md-5">
            <newsletter-form />
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="bg-light">
      <div class="container mt-10">
        <div class="row">
          <div class="col">

          </div>
          <div class="col">
            <enquire-form></enquire-form>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import EnquireForm from '../../components/forms/Enquire2.vue'
// import EnquireFormCondensed from '../../components/forms/EnquireCondensed.vue'
import NewsletterForm from '../../components/forms/Newsletter.vue'
export default {
  head () {
    return {
      title: 'Contact',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Ask a question or book a viewing. Comment or collaborate. We want to hear from you.' }
      ]
    }
  },
  components: {
    EnquireForm,
    // EnquireFormCondensed,
    NewsletterForm
  }
}
</script>

<style lang="scss">
</style>
