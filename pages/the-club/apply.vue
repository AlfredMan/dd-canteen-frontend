<template lang="html">
  <div class="">
    <div class="container-fluid bg-white -bg-secondary py-5">
      <div class="row">
        <div class="container my-5">
          <div class="row">
            <div class="col-12 col-md-6">
              <h2>The Club application</h2>
            </div>
            <div class="col-12 my-4" />
            <div class="col-12 col-md-4">
              <p>The Club is a space for creative freelancers and entrepreneurs but also the social hub of Design District. Join The Club for members-only events and mixers and year-round start-up and business support.</p>
            </div>
            <!-- <div class="col-12" /> -->
            <div class="col-12 col-lg-1" />
            <div class="col-12 col-md-8 col-lg-7">
              <!-- <club-form /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClubForm from '../../components/forms/JoinTheClub.vue'
export default {
  components: {
    ClubForm
  }
}
</script>

<style lang="scss">
</style>
