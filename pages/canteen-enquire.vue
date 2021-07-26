<template lang="html">
  <div class="mt-12 bg-white -pt-5">
    <div
      class="py-5 bg-white anchor-target px-0 -px-md-4 py-4 pb-5 py-md-5 cap-max-w"
    >
      <div class="container-fluid -my-5 pt-5 px-3">
        <div class="row">
          <div class="col-12 col-md-12">
            <h1 class="default-case">Canteen</h1>
          </div>
          <div class="col-12" />
          <div class="col-12 col-md-4 mb-5">
            <h4>
              Located at the heart of Design District in a groundbreaking
              building, Design District Canteen will become a culinary
              destination for the entirety of Greenwich Peninsula.
            </h4>
          </div>
          <div class="col-12 col-lg-1" />
          <div class="col-12 col-md-8 col-lg-7">
            <canteen-enquire-form source="workspace" />
          </div>
        </div>
      </div>
    </div>

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
// import EnquireForm from '~/components/forms/Enquire.vue'
import CanteenEnquireForm from "~/components/forms/CanteenEnquire.vue";
import NewsletterForm from "~/components/forms/Newsletter.vue";
// import { buildings } from '~/common/buildings.js'
// import { spaces } from '~/common/spaces.js'
import _ from "lodash";
export default {
  components: {
    CanteenEnquireForm,
    NewsletterForm
  },
  head() {
    return {
      title: "Work space",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Design District will provide 150,000 sq ft of permanent workspace for everyone for London’s designers makers and creators. A place for total focus, shared stories and resources, new connections and collaboration."
        }
      ]
    };
  },

  data() {
    return {
      spaceActive: false,
      mapActive: false,
      filter: {
        sizeBracket: null,
        architect: null,
        options: null
      }
    };
  },

  created() {
    this.$store.dispatch("updateNavigationTheme", { theme: "light" });
  },

  computed: {
    // formattedBuildings () {
    //   // console.log('buildings', buildings)
    //   return _.map(buildings, (b) => {
    //     b.type = _.sample(['Meeting Room', 'Popup', 'Photo Studio', 'Roof Top'])
    //     return b
    //   })
    // },
    // formattedSpaces () {
    //   return _.map(spaces, (b) => {
    //     return b
    //   })
    // },
    allSpacesByType() {
      return _.groupBy(this.allSpaces, "type");
    },
    allBuildings() {
      return this.$store.state.buildings;
    },
    allSpaces() {
      return this.$store.state.spaces;
    },
    spaceFilters() {
      return this.$store.state.filters;
    },
    filteredSpaces() {
      return _.filter(this.$store.state.spaces, space => {
        let match = 0;
        if (this.filter.sizeBracket) {
          match =
            space.sizeSqFtBracket == this.filter.sizeBracket ? match + 1 : -100;
        }
        if (this.filter.architect) {
          match = space.architect == this.filter.architect ? match + 1 : -100;
        }
        if (this.filter.options) {
          match = space.options == this.filter.options ? match + 1 : -100;
        }
        return match >= 0;
      });
    }
  },

  methods: {
    toggleFilter(filterOption, value) {
      if (this.filter[filterOption] == value) {
        this.filter[filterOption] = null;
      } else {
        this.filter[filterOption] = value;
      }
    },
    getTitleCase(string) {
      return _.startCase(string);
    },
    getSlug(string) {
      return _.kebabCase(string);
    },
    openSpace() {
      this.spaceActive = true;
    },
    closeSpace() {
      this.spaceActive = false;
      this.closeMap();
    },
    openMap() {
      this.mapActive = true;
    },
    closeMap() {
      this.mapActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.building {
  cursor: pointer;

  &:hover {
    color: $primary;
  }
}
.drawer {
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  transform: translate3d(100%, 0, 0);
  transition: 0.3s ease-in-out all;
  z-index: 9999;
  box-shadow: 0px 0px 20px 0 rgba(0, 0, 0, 0.5);

  &.space-active {
    transform: translate3d(66.6667%, 0, 0);
  }
  &.map-active {
    transform: translate3d(0%, 0, 0);
  }
  .space {
    width: 33.3333%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    .close-space,
    .toggle-map {
      font-size: 1.5rem;
      position: relative;
      // width: 50%;
      z-index: 999;
      cursor: pointer;
    }

    .close-space {
      opacity: 0.5;
    }

    .scroller {
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 2rem;
      overflow: auto;
    }
  }
  .close-cross {
    // position: absolute;
    cursor: pointer;
    // right: 2rem;
    // top: 2.5rem;
    // width: 50%;
    // // height: 2rem;
    // text-align: right;
    // font-weight: 100;
    // font-size: 1.5rem;
    // line-height: 1.5rem;
    // // font-family: sans-serif;
    // z-index: 999;
  }
  .map {
    width: 66.66667%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>
