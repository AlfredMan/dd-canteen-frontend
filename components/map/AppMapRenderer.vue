<template lang="html">
  <div class="app-map-renderer">
    <div
      class="app-map-scene"
      ref="container"
      v-bind:style="{ cursor: selectedCursor }"
    >
      <!-- WebGL goes here -->
    </div>

    <div class="helpers absolute z-10 right-0 top-0 p-0">
      <div class="">
        {{ hoverID }}
      </div>
      <div class="">
        {{ selectID }}
      </div>
      <!-- <button
        class="p-2 bg-white m-2 bg-yellow-300"
        v-if="!this.scene"
        @click="initScene"
      >
        Init Scene
      </button>
      <button
        class="p-2 bg-white m-2 bg-red-300"
        v-if="this.scene"
        @click="destroyScene"
      >
        Destroy Scene
      </button> -->
    </div>
  </div>
</template>

<script>
import { getInteractiveBuildingIndexName } from "./util.js";
// import getInteractiveBuildingIndexName from "./util.js";
import SceneConstructor from "./map.js";
export default {
  data() {
    return {
      hoverID: "",
      selectID: "",
      scene: {},
      selectedCursor: "default"
    };
  },

  mounted() {
    // vue hook on component mount
    this.initScene();
  },

  beforeDestroy() {
    // vue hook on component destroy
    this.destroyScene();
  },

  watch: {
    $route(newVal, oldVal) {
      this.onRouteChange(newVal);
    }
  },

  methods: {
    initScene() {
      this.scene = SceneConstructor({
        rootEl: this.$refs.container,
        onHover: this.onBuildingHover,
        onSelect: this.onBuildingSelect,
        store: this.$store
      });
      this.onRouteChange();
    },
    destroyScene() {
      if (this.scene && this.scene.destroy) {
        this.scene.destroy();
        this.scene = null;
      }
    },
    onBuildingHover(target) {
      const buildingIndexName = getInteractiveBuildingIndexName(target);
      if (buildingIndexName) {
        console.log(`Hovering ${buildingIndexName}`);
        this.selectedCursor = "pointer";
      } else {
        this.selectedCursor = "default";
      }
    },
    // getInteractiveBuildingIndexName(obj) {
    //   if (
    //     !obj ||
    //     !obj.name ||
    //     obj.name === "ground" ||
    //     obj.name === "GROUND1"
    //   ) {
    //     return null;
    //   }
    //   if (obj.name.startsWith("C4")) {
    //     return "food-space";
    //   }
    //   return obj.name.slice(0, 2);
    // },

    // onBuildingSelect(target) {
    //   // console.log('vue component onBuildingSelect', target)
    //   if (target && target.userData && target.userData.building) {
    //     this.$router.push({ query: { building: target.userData.building } });
    //   } else {
    //     this.$router.push({ query: { building: null } });
    //   }
    // },
    onBuildingSelect(target) {
      const buildingIndexName = getInteractiveBuildingIndexName(target);
      if (!buildingIndexName) {
        this.$router.push({ query: {} });
        return;
      }
      console.log(target?.name, buildingIndexName);
      if (buildingIndexName) {
        this.$router.push({ query: { building: buildingIndexName } });
      } else {
        this.$router.push({ query: { building: null } });
      }
    },
    onRouteChange() {
      let buildingId = this.$route.query.building;
      if (this.scene) {
        this.scene.triggerUpdate({ id: buildingId });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// .app-map-renderer {
//   @apply fixed inset-0 pl-96
// }
.app-map-scene {
  @apply w-full h-full bg-gray-100;
}
</style>
