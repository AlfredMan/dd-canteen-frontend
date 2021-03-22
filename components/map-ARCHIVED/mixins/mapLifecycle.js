import * as THREE from 'three'
export default {
  data () {
    return {
    }
  },
  methods: {
    destroyScene () {
      cancelAnimationFrame(this.sceneState.raf)// Stop the animation
      this.unbindEvents()
      this.sceneState.scene = null
      this.sceneState.camera = null
      empty(this.sceneState.container)
      function empty (elem) {
        while (elem.lastChild) { elem.removeChild(elem.lastChild) }
      }
    },
    removeObjects () {
      if (this.sceneState.meshes.length > 0) {
        // see mr.doob on SO
        // https://stackoverflow.com/questions/12945092/memory-leak-with-three-js-and-many-shapes?rq=1
        for (let i = 0; i < this.sceneState.meshes.length; i++) {
          this.sceneState.meshes[i].geometry.dispose()
          this.sceneState.meshes[i].texture.dispose()
          this.sceneState.meshes[i].material.dispose()
          this.sceneState.scene.remove(this.sceneState.meshes[i])
        }
        this.sceneState.meshes = []
        this.sceneState.geometry.dispose()
        this.sceneState.texture.dispose()
        this.sceneState.material.dispose()
      }
    }
  }
}
