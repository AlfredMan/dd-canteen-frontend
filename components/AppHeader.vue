<template lang="html">
  <header class="header" :class="{'bg-primary': menuActive}">
    <div class="container">
      <nav class="inner d-flex flex-row align-items-center row z-index-- ">
        <nuxt-link to="/" exact class="ml-1 mr-0">
          <img class="logo" src="~/assets/images/logo-hor.svg" alt="logo">
        </nuxt-link>

        <nuxt-link class="menu-link d-none d-lg-inline" to="/workspace">
          Work space
        </nuxt-link>
        <!-- <nuxt-link class="menu-link d-none d-lg-inline" to="/the-club">
          The Club
        </nuxt-link> -->
        <!-- <nuxt-link class="menu-link d-none d-lg-inline" to="/">Architecture</nuxt-link> -->
        <!-- <nuxt-link class="menu-link d-none d-lg-inline" to="/news-and-events">News & Events</nuxt-link> -->
        <nuxt-link class="menu-link d-none d-lg-inline" to="/about-us">
          About
        </nuxt-link>
        <nuxt-link class="menu-link d-none d-lg-inline" to="/contact">
          Contact Us
        </nuxt-link>

        <nuxt-link :to="{ path: '/contact', hash: '#register-interest' }" class="btn text-black btn-outline-primary ml-auto mr-0" :class="{'btn-outline-dark': menuActive}">
          <span class="d-inline d-lg-none">Join Now</span>
          <span class="d-none d-lg-inline">Join design district</span>
          <!-- <span>Join design district</span> -->
        </nuxt-link>

        <div class="d-block d-lg-none pl-3">
          <button class="form-field-reset btn cursor-pointer p0 mt-1" type="button" @click="menuActive = !menuActive">
            <span class="accessible-hide">Menu</span>
            <div class="icon-burger" style="color: rgb(43, 43, 43);" :class="{'icon-burger--is-active': menuActive}">
              <div class="icon-burger__inner" />
            </div>
          </button>
        </div>
      </nav>
    </div>

    <div v-show="menuActive" class="position-fixed w-100 h-100 bg-primary">
      <div class="row p-4 mobile-nav">
        <div class="col">
          <nuxt-link class="mobile-menu-link" to="/workspace">
            Work space
          </nuxt-link><br>
          <!-- <nuxt-link class="mobile-menu-link" to="/the-club">
            The Club
          </nuxt-link><br> -->
          <nuxt-link class="mobile-menu-link" to="/about-us">
            About
          </nuxt-link><br>
          <nuxt-link class="mobile-menu-link" to="/contact">
            Contact Us
          </nuxt-link><br>
        </div>
      </div>
      <div class="row p-4 mobile-footer">
        <div class="col-12">
          <a class="">The Gateway Pavilion<br>Peninsula Square<br>Greenwich Peninsula<br>London SE10 0SQ</a>
          <br><br>
          <a class="">hello@designdistrict.co.uk</a><br>
          <a class="">020 3981 2426</a>
          <br><br>
          <!-- </div>
        <div class="col-5"> -->
          <!-- <h5>Connect</h5> -->
          <a class="" target="_blank" rel="noreferrer" href="https://www.instagram.com/designdistrictlondon">Instagram</a><br>
          <a class="" target="_blank" rel="noreferrer" href="https://twitter.com/Design_District">Twitter</a><br>
          <a class="" target="_blank" rel="noreferrer" href="https://www.facebook.com/DesignDistrictLondon/">Facebook</a><br>
          <a class="" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/design-district-london">LinkedIn</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menuActive: false
    }
  },
  watch: {
    '$route' (to, from) {
      // console.log(this)
      if (to.fullPath !== from.fullPath) {
        this.menuActive = false
      }
    }
  }
}
</script>

<style lang="css">
</style>
