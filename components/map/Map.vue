<template>
  <div class="map" :class="{
    'active': mapActive
    }">

    <div class="info">
      <div class="" v-if="threejs.intersect && threejs.controls.isLocked">
        {{threejs.intersect.object.data.title}}
      </div>
    </div>

    <div
    class="curtain"
    :class="{
      'active': mapActive
      }"
    >

    </div>

    <div
    class="toggle"
    @click="toggleMapActive"
    v-show="mapActive"
    >
      &times;
    </div>

    <div
    :class="{'active': mapActive, 'disabled': !mapTouchable}"
    id="container"
    ref="webglCanvas"
    @click="toggleMapActive(true)"
    >
    </div>

    <div
      class="content"
      :class="{'active': mapActive }"
      >

        <div class="panel panel-main">
          <!-- <h1>Map</h1>
          <h4>Rent a desk, a studio, a workshop, or an entire building. With simple wi-fi access, clean and dirty workshops, integrated security, flexible leases and a host of events.</h4> -->

          <h1>The Club</h1>
          <h4>Co-working space for creative freelancers and entrepreneurs. four membership tiers: lounge, hot desk, fixed desk and micro-studio.</h4>
          <h4>
            Facilities &rarr;<br>
            Members &rarr;<br>
            Upcoming Events &rarr;<br>
            Available Space &rarr;
          </h4>
        </div>

        <div class="spacer">

        </div>

        <div class="panel panel-bottom">
          <h4>Explore Design District</h4>
          <div class="tags">
            <div class="tag">
              Events
            </div>
            <div class="tag">
              Workshops
            </div>
            <div class="tag -active">
              Facilities
            </div>
            <div class="tag">
              Members Only
            </div>
          </div>
        </div>


        <div class="panel panel-right list"
        :class="{
          'active': mapActive
          }"
        >
          <div class="search"
          :class="{
            'active': mapActive
            }"
          >
            <div class="input">
              Search for a space
            </div>
    <svg class="icon-search" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-816.000000, -36.000000)" stroke="#2b2b2b"><g transform="translate(817.000000, 37.000000)"><g transform="translate(0.360000, 0.000000)"><circle stroke-width="2" cx="7.5" cy="7.5" r="7.5"></circle><line x1="12.7618408" y1="12.7618408" x2="17.7115883" y2="17.7115883" stroke-width="2"></line></g></g></g></g></svg>
          </div>
          
          <strong>Directory</strong><br>
          <a href="#">Cabinet Gallery</a><br>
          <a href="#">Gagosian Gallery</a><br>
          <a href="#">Timothy Taylor</a><br>
          <a href="#">White Cube</a><br>
          <a href="#">Berlin Biennale for Contemporary Art</a><br>
          <a href="#">Czech Pavilion La Biennale di Venezia</a><br>
          <a href="#">German Pavilion at La Biennale di Venezia</a><br>
          <a href="#">Lisbon Architecture Triennale</a><br>
          <a href="#">Taipei Biennial</a><br>
          <a href="#">Educational Institutions</a><br>
          <a href="#">Architectural Association</a><br>
          <a href="#">CCS Bard Center for Curatorial Studies</a><br>
          <a href="#">Goldsmiths, University of London</a><br>
          <a href="#">Princeton University</a><br>
          <a href="#">Royal College of Art</a><br>
          <a href="#">Städelschule</a><br>
          <a href="#">University of Southern California</a><br>
          <a href="#">Design & Fashion</a><br>
          <a href="#">Frank Ocean</a><br>
          <a href="#">Nike</a><br>
          <a href="#">OFF-WHITE c/o VIRGIL ABLOH™</a><br>
          <a href="#">Paco Rabanne</a><br>
          <a href="#">Vitra</a>
        </div>

      </div>

  </div>
</template>

<script src="./map.js"></script>

<style lang="scss" src="./map.scss"></style>
