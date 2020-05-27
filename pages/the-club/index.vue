<template lang="html">
  <div class="mt-5">
    <div class="container-fluid-px-0">
      <div class="px-0 px-md-4 py-4 pb-5 py-md-5">
        <div v-if="true" class="container-fluid py-5">
          <div class="row">
            <div class="col-12 col-md-5">
              <h1>The Club</h1>
              <h4>Just starting out or trying something new? The Club is an accessible and low-commitment way to be part of the Design District community.</h4>
              <!-- <a href="#" class="btn btn btn-lg btn-primary">Book a viewing</a> -->
            </div>
            <div class="col-12 col-md-7">
              <div class="row d-flex justify-content-end align-items-end mt-0">
                <!-- <div class="col-5 col-md-4">
                  <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/5O8MZdUvzEq9ZwkNEDG7tr/c5bd4835a154182f51b1008e77019ff6/AdamKahn-1D-Architect.jpg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
                </div> -->
                <div class="col-12 col-md-8">
                  <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/4FnpIUyeKNLkJnB35opltV/7444507404b1420c7e228838cafd6894/Barozzi-Veiga-1B-Architect.jpg?w=1000&h=1200&fm=jpg&q=80&fit=thumb" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="-container-fluid anchor-target bg-white">

      <div class="row no-gutters d-flex align-items-start justify-content-between">
        <!-- <div class="col-12 col-md-6" /> -->
        <div class="col-12 col-md-7 mb-0 px-0">
          <lazy-image
          :src="'https://images.ctfassets.net/7p1ysxjarsp5/1E9dyD5cbyoG8OVAIJG9BJ/7ad80cb2eef001808fe7739647254c3f/6aArchitects-2D-Architect.jpg'"
          :w="2000"
          :h="1000"
          :custom="'fit=thumb'"
          />
        </div>
        <!-- <div class="col-12 col-md-1" /> -->
        <div class="col-12 col-md-5 px-0 p-md-2">
          <div class="px-4 px-md-4 py-4 pb-5 py-md-5">
            <h3>Membership</h3>
            <p>The Club is a co-working space for creative freelancers and entrepreneurs who want to be part of Design District but don’t need their own studio. There are four membership tiers: lounge, hot desk, fixed desk and micro-studio.</p>
          </div>
        </div>
      </div>

      <div class="row no-gutters d-flex align-items-start justify-content-between bg-white text-black">
        <div class="col-12 col-md-5 mb order-md-2">
          <!-- <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-12 px-0">

            </div>
          </div> -->
          <lazy-image
          :src="'https://images.ctfassets.net/7p1ysxjarsp5/7DifsFTlzI7vzhBUouVQGf/77edcddc87c2531fd53898440f016035/AdamKahn-1C-Architect.jpg'"
          :w="2000"
          :h="1333"
          :custom="'fit=thumb'"
          />
        </div>
        <div class="col-12 col-md-5 px-0 p-md-2">
          <div class="px-4 px-md-4 py-4 pb-5 py-md-5">
            <h3>Programme</h3>
            <p>Design District will be home to an active events programme created to connect our tenants and club members. A series of talks and panel discussions will cover every topic from employment law to using a 3D&nbsp;printer.</p>
          </div>
        </div>
      </div>

      <div class="row no-gutters d-flex align-items-start justify-content-between">
        <!-- <div class="col-12 col-md-6" /> -->
        <div class="col-12 col-md-7 mb-0">
          <!-- <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-12 px-0">

            </div>
          </div> -->
          <lazy-image
          :src="'https://images.ctfassets.net/7p1ysxjarsp5/1eLvovl1dCbtnZvQ5f7EEM/09e2e8afdb9cefe11c793ce446ee7e50/KDN_Design_District_C1_190603_LR.jpeg'"
          :w="2000"
          :h="1000"
          :custom="'fit=thumb'"
          />
        </div>
        <!-- <div class="col-12 col-md-1" /> -->
        <div class="col-12 col-md-5 px-0 p-md-2">
          <div class="px-4 px-md-4 py-4 pb-5 py-md-5">
            <h3>Location</h3>
            <p>The Club is located in a light-filled building in the heart of the Design District. It’s also where the Design District team is based, so drop by and say&nbsp;hello.</p>
          </div>
        </div>
      </div>

    </div>

    <!-- <div v-if="false" class="container-fluid bg-secondary py-lg-5 py-4">
      <div class="row">
        <div class="container">
          <div class="row d-flex justify-content-between mb-5">
            <div class="col-12 col-md-6 col-lg-5 mb-5">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/1E9dyD5cbyoG8OVAIJG9BJ/7ad80cb2eef001808fe7739647254c3f/6aArchitects-2D-Architect.jpg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
              <h3>Membership</h3>
              <p>The Club is a co-working space for creative freelancers and entrepreneurs who want to be part of Design District but don’t need their own studio. There are four membership tiers: lounge, hot desk, fixed desk and micro-studio.</p>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/7DifsFTlzI7vzhBUouVQGf/77edcddc87c2531fd53898440f016035/AdamKahn-1C-Architect.jpg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
              <h3>Programme</h3>
              <p>Design District will be home to an active events programme created to connect our tenants and club members. A series of talks and panel discussions will cover every topic from employment law to using a 3D&nbsp;printer.</p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-5">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/1eLvovl1dCbtnZvQ5f7EEM/09e2e8afdb9cefe11c793ce446ee7e50/KDN_Design_District_C1_190603_LR.jpeg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
              <h3>Location</h3>
              <p>The Club is located in a light-filled building in the heart of the Design District. It’s also where the Design District team is based, so drop by and say&nbsp;hello.</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="container-fluid bg-primary py-5">
      <div class="row">
        <div class="container">
          <div class="row py-5 d-flex justify-content-between">
            <div class="col-12 col-md-6 col-lg-4">
              <h3>membership</h3>
              <h4>The Club is an entry level co-working space for creative freelancers and entrepreneurs who want to be part of Design District but aren’t ready to be a tenant. There are four membership tiers: Lounge, Hot desk, Fixed desk and Micro-studio. </h4>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/7DifsFTlzI7vzhBUouVQGf/77edcddc87c2531fd53898440f016035/AdamKahn-1C-Architect.jpg?w=1000&h=1200&fm=jpg&q=80&fit=thumb" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-primary py-5">
      <div class="row">
        <div class="container">
          <div class="row py-5 d-flex justify-content-between">
            <div class="col-12 col-md-6 col-lg-5">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/1E9dyD5cbyoG8OVAIJG9BJ/7ad80cb2eef001808fe7739647254c3f/6aArchitects-2D-Architect.jpg?w=1000&h=800&fm=jpg&q=80&fit=" alt="">
            </div>
            <div class="col-12 col-md-6 col-lg-5">
              <h3>Programme</h3>
              <h4>The Club is also Design District’s hub for ideas sharing and collaboration. It will host a year-round programme of events and workshops, where club members and tenants can meet likeminded creatives and innovate together.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-primary py-5">
      <div class="row">
        <div class="container">
          <div class="row py-5 d-flex justify-content-between">
            <div class="col-12 col-md-6 col-lg-5">
              <h3>Location</h3>
              <h4>The Club is located in the heart of the Design District, in a light-filled building designed by HNNA. It’s also where the Design District team is based, so drop by and say hello.</h4>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/1eLvovl1dCbtnZvQ5f7EEM/09e2e8afdb9cefe11c793ce446ee7e50/KDN_Design_District_C1_190603_LR.jpeg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="bg-dark text-white">
      <div class="row- position-relative -px-4" style="z-index:1">
        <div class="container-fluid px-0">
          <div class="row no-gutters">
            <div class="col-12 col-md-7">
              <div class="px-4 px-md-5 py-5 pb-5 py-md-5">
                <h3>Pricing starting at<br>£60 per month</h3>
                <br>
                <h4>Club membership benefits</h4>
                <ul class="h6">
                  <li>Exclusive member’s events and mixers</li>
                  <li>Access to industry specific workshops</li>
                  <li>On demand work spaces</li>
                  <li>Complimentary teas and coffees for fixed and micro studio club members</li>
                  <li>Onsite members cafe and bar</li>
                  <li>Start-up and business support</li>
                  <li>Bookable meeting rooms in the building</li>
                </ul>
              </div>
              <!-- <h2>Members access</h2>
              <h4>The Design District is at the heart of Greenwich Peninsula, a new type of London created specifically for the creative community.</h4>
              <br> -->
              <!-- </div>
              <div class="col-12 col-md-6 col-lg-4"> -->
              <!-- <h3>Club opening hours</h3>
              <p>Serviced opening hours are between 08:00—18:00<br>with 24hr access via a fob.</p> -->
            </div>
            <div class="col-12 col-md-5 px-0" style="background-size: cover; background-position: center; background-repeat: no-repeat; background-image:url(https://images.ctfassets.net/7p1ysxjarsp5/6wUPBkuAGGxBgcm4X5RszG/8eb3bac1543bee530b798f7eace31e3d/KDN_Design_District_C3_LR.jpeg?w=2000&h=2000&fm=jpg&q=80)">
              <div class="d-block d-lg-none" style="padding-bottom: 100%;">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="px-0 px-md-4 py-4 pb-5 py-md-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-6">
              <h2>Become a member</h2>
            </div>
            <div class="col-12" />
            <div class="col-12 col-md-4">
              <h4>Register your interest to become a member of the Design District community in autumn 2020. Aimed at freelancers, consultants and small enterprises, our membership initiative will offer a place to work but also enjoy talks, events, mixers and business support.</h4>
              <!-- <nuxt-link to="/the-club/apply" class="btn btn btn-lg btn-dark mt-3">
                Apply now
              </nuxt-link> -->
            </div>
            <div class="col-12 col-lg-1" />
            <div class="col-12 col-md-8 col-lg-7">
              <club-form />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!-- <div class="container-fluid">
      <div class="row bg-light py-5 pt-3">
        <div class="container">
          <div class="row py-5">
            <div class="col-12 col-md-6 col-lg-4">
              <h2>Membership</h2>
              <h4>The Club is an entry level co-working space for creative freelancers and entrepreneurs who want to be part of Design District but aren’t ready to be a tenant. There are four membership tiers: Lounge, Hot desk, Fixed desk and Micro-studio. </h4>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-6 col-lg-7">
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <h2>Events & workshops</h2>
              <h4>The Club is also Design District’s hub for ideas sharing and collaboration. It will host a year-round programme of events and workshops, where club members and tenants can meet likeminded creatives and innovate together.</h4>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-6 col-lg-4">
              <h2>Location</h2>
              <h4>The Club is located in the heart of the Design District, in a light-filled building designed by HNNA. It’s also where the Design District team is based, so drop by and say hello.</h4>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="bg-light">
      <div class="container mt-10">
        <enquire-form></enquire-form>
      </div>
    </div> -->

    <!-- <div class="py-5">
      <div class="container my-5">
        <div class="row">
          <div class="col-4">
            <h2>Become a member</h2>
          </div>
          <div class="col-12">
          </div>
          <div class="col col-md-4">
            <h4>The Design District is at the heart of Greenwich Peninsula, a new type of London created specifically for the creative community.</h4>
            <p>Located on Greenwich Peninsula and 1 minute's walk to North Greenwich tube station. With links to central and East London in 15 minutes or less, you can spend less time commuting and more time doing what you do best.</p>
          </div>
          <div class="col col-md-8">
            <enquire-form></enquire-form>
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
import ClubForm from '../../components/forms/JoinTheClub.vue'
export default {
  head () {
    return {
      title: 'The Club',
    }
  },
  components: {
    ClubForm
  }
}
</script>

<style lang="scss">
</style>
