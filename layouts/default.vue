<template>
  <div id="app">
    <header class="header">
      <nav class="inner d-flex flex-row align-items-center container">
        <router-link to="/" exact>
          <img class="logo" src="~/assets/images/logo@1x.png" alt="logo">
        </router-link>

        <router-link class="d-none d-md-inline" to="/join">
          Home for Makers
        </router-link>
        <router-link class="d-none d-md-inline" to="/the-club">
          The Club
        </router-link>
        <!-- <router-link class="d-none d-md-inline" to="/">Architecture</router-link> -->
        <!-- <router-link class="d-none d-md-inline" to="/news-and-events">News & Events</router-link> -->
        <router-link class="d-none d-md-inline" to="/about-us">
          About
        </router-link>
        <router-link class="d-none d-md-inline" to="/contact">
          Contact Us
        </router-link>
        <router-link to="/contact" class="btn btn-outline-dark ml-auto mr-0">
          <span>Join <span class="d-none d-md-inline">design district</span></span>
        </router-link>
      </nav>
    </header>
    <!-- <transition name="fade" mode="out-in">
      <router-view class="view" />
    </transition> -->
    <nuxt nuxt-child-key="none" role="main" />
    <footer class="bg-dark">
      <div class="container">
        <div class="row">
          <div class="col pt-5 pb-5">
            <img src="~/assets/images/gp-logo-white.svg" alt="">
          </div>
        </div>
        <nav class="inner d-flex row align-items-center py-2 text-light">
          <span class="nav-link">© 2020 GREENWICH PENINSULA</span>
          <router-link class="d-none d-md-inline nav-link" to="/privacy-policy">
            Privacy Policy
          </router-link>
          <router-link class="d-none d-md-inline nav-link" to="/terms-and-conditions">
            Terms & Conditions
          </router-link>

          <a class="d-none d-md-inline nav-link ml-auto" href="https://twitter.com/Design_District">Twitter</a>
          <a class="d-none d-md-inline nav-link" href="https://www.facebook.com/DesignDistrictLondon/">Facebook</a>
          <a class="d-none d-md-inline nav-link" href="http://www.instagram.com/designdistrictlondon">Instagram</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
// custom boostrap overrides
@import '~/assets/styles/custom.scss';
// boostrap
@import "../node_modules/bootstrap/scss/bootstrap";
// normalize
@import '../node_modules/normalize.css/normalize.css';
// brand type
@import '~/assets/fonts/fonts.css';

@import '~/assets/styles/typography.scss';
@import '~/assets/styles/reset.scss';
@import '~/assets/styles/utility.scss';
// @import "custom"

@import '~/assets/styles/app.scss';
</style>
