<template lang="html">
  <div class="">
    <!--  -->
    <div v-if="state==0" class="container-fluid map-wrapper">
      <div class="row d-flex">
        <div class="col-12 col-lg-3 bg-dark text-light  text-view">
          <div class="row">
            <div class="col-12 col-md-12 mb-5 p-5">
              <h2>Map</h2>
              <!-- <h4>Design District will be a new permanent home for the creative industries in the heart of Greenwich Peninsula. One minute from North Greenwich underground station.</h4> -->
              <p>Design District will be a new permanent home for the creative industries in the heart of Greenwich Peninsula. One minute from North Greenwich underground station.</p>
              <div class="row building-selector p-3">
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">A1</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">A2</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">A3</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">A4</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">B1</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">B2</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">B3</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">B4</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">C1</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">C2</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">C3</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">C4</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">D1</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">D2</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">D3</a>
                </div>
                <div class="col-3 p-3">
                  <a class="h3 text-primary" @click="state=1">D4</a>
                </div>
              </div>
              <br>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-9 map-view">
          <input type="text" name="" value="" placeholder="Search">
          <img class="site-plan multiply" src="~/assets/images/map.png" alt="" @click="state = 1">
        </div>
      </div>
    </div>

    <div v-if="state==1" class="container-fluid map-wrapper">
      <div class="row d-flex">
        <div class="col-12 col-lg-3 bg-dark text-light text-view">
          <div class="row">
            <div class="col-12 col-md-12 mb-5 p-5">
              <!-- <a @click="state = 0">
                &larr; close
              </a> -->
              <h2>
                C1
              </h2>

              <p>Design District will be a new permanent home for the creative industries in the heart of Greenwich Peninsula. One minute from North Greenwich underground station.</p>
              <div class="">
                <a class="text-primary" @click="state=2">Roof &rarr;</a>
              </div>
              <div class="">
                <a class="text-primary" @click="state=2">Level 4 &rarr;</a>
              </div>
              <div class="">
                <a class="text-primary" @click="state=2">Level 3 &rarr;</a>
              </div>
              <div class="">
                <a class="text-primary" @click="state=2">Level 2 &rarr;</a>
              </div>
              <div class="">
                <a class="text-primary" @click="state=2">Level 1 &rarr;</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 building-view p-5">
          <h3>
            C1
          </h3>
          <img class="building-plan multiply" src="~/assets/images/map-building.png" alt="" @click="state=2">
        </div>
        <div class="col-12 col-lg-6 map-view">
          <input type="text" name="" value="" placeholder="Search">
          <img class="site-plan multiply" src="~/assets/images/map-selected.png" alt="" @click="state = 0">
        </div>
      </div>
    </div>

    <div v-if="state==2" class="container-fluid map-wrapper">
      <div class="row d-flex">
        <div class="col-12 col-lg-3 bg-dark text-light  text-view">
          <div class="row">
            <div class="col-12 col-md-12 mb-5 p-5">
              <!-- <a @click="state = 0">
                &larr; close
              </a> -->
              <h4>
                Rooftop Baseketball Court
              </h4>
              <h5>
                C1, Rooftop Level
              </h5>
              <!-- <h5>Building: C1</h5> -->
              <p>Design District will be a new permanent home for the creative industries in the heart of Greenwich Peninsula. One minute from North Greenwich underground station.</p>

              <br>
              <h5>Information</h5>
              <p>Opening hour: 9:00—20:00</p>
              <a href="#" class="text-primary">View booking information &rarr;</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 building-view p-5">
          <h3>
            C1
          </h3>
          <img class="building-plan multiply" src="~/assets/images/map-building-selected.png" alt="">
        </div>
        <div class="col-12 col-lg-6 map-view">
          <input type="text" name="" value="" placeholder="Search">
          <img class="site-plan multiply" src="~/assets/images/map-selected.png" alt="" @click="state = 0">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: 1,
      map: '~/assets/images/map.png',
      mapSelected: '~/assets/images/map-selected.png',
      mapSelectedDot: '~/assets/images/map-selected-dot.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.map-wrapper {
  overflow: hidden;
  height: 50vw;
}
.map {
  background-size: cover
}

.text-view {
  height: 50vw;
  overflow: hidden;
  background-color: #eee;
  box-shadow: 0 0 10px 0px rgba(0,0,0,0.3);
  z-index: 99;
}
.building-view {
  background: #f0f0f0;
  box-shadow: 0 0 10px 0px rgba(0,0,0,0.3);
  z-index: 9;
  height: 50vw;
  // overflow: auto;
}
.map-view {
  width: 100%;
  height: 50vw;
  background-color: #fff;
  position: relative;
}
input {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 20rem;
  z-index: 99
}
.building-plan {
  margin-top: 5rem;
}
.site-plan {
  object-fit: contain;
  object-position: center center;
  width: 100%;
  height: 100%;
}

a {
  cursor: pointer
}
</style>
