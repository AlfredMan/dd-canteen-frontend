import * as THREE from 'three'
import _ from 'lodash'
export default {
  data () {
    return {
      eventState: {
        down: false,
        move: false
      }
    }
  },
  methods: {
    enableMapInteraction: _.debounce(function () {
      this.mapTouchable = true
    }, 500, {
      leading: false
    }),
    disableMapInteraction: _.debounce(function () {
      this.mapTouchable = false
      this.enableMapInteraction()
    }, 500, {
      leading: true
    }),
    onAnimateDebounce: _.debounce(function () {
      this.eventState.move = false
    }, 1000),
    bindEvents () {
      if (process.client) {
        const self = this
        if (('ontouchstart' in window) || window.DocumentTouch) {
          self.sceneState.renderer.domElement.addEventListener('touchstart', self.onDown, false)
          self.sceneState.renderer.domElement.addEventListener('touchend', self.onUp, false)
        } else {
          // window.document.addEventListener('keydown', self.keydown, false)
          // window.document.addEventListener('keyup', self.keyup, false)

          self.sceneState.renderer.domElement.addEventListener('mousedown', self.onDown, false)
          self.sceneState.renderer.domElement.addEventListener('mousemove', self.onMove, false)
          self.sceneState.renderer.domElement.addEventListener('mouseup', self.onUp, false)
        }
        self.sceneState.container.addEventListener('resize', self.onContainerResize, false)
        window.addEventListener('resize', self.onWindowResize, false)
      }
    },
    unbindEvents () {
      if (process.client) {
        const self = this
        if (('ontouchstart' in window) || window.DocumentTouch) {
          self.sceneState.renderer.domElement.removeEventListener('touchstart', self.onDown, false)
          self.sceneState.renderer.domElement.removeEventListener('touchend', self.onUp, false)
        } else {
          // window.document.removeEventListener('keydown', self.keydown, false)
          // window.document.removeEventListener('keyup', self.keyup, false)

          self.sceneState.renderer.domElement.removeEventListener('mousedown', self.onDown, false)
          self.sceneState.renderer.domElement.removeEventListener('mousemove', self.onMove, false)
          self.sceneState.renderer.domElement.removeEventListener('mouseup', self.onUp, false)
        }
        self.sceneState.container.removeEventListener('resize', self.onContainerResize, false)
        window.removeEventListener('resize', self.onWindowResize, false)
      }
    },
    onWindowResize () {
      if (process.client) {
        const self = this
        // console.log('update camera 1')
        if (self.sceneState.camera) {
          // console.log('update camera 2')
          self.sceneState.camera.aspect = window.innerWidth / window.innerHeight
          self.sceneState.camera.updateProjectionMatrix()
          self.sceneState.renderer.setSize(window.innerWidth, window.innerHeight)
        }
      }
    },
    onContainerResize () {
      if (process.client) {
        const self = this
        // console.log('onContainerResize')
        if (self.sceneState.camera) {
          if (self.mapActive) {
            self.sceneState.camera.aspect = window.innerWidth / window.innerHeight
            self.sceneState.camera.updateProjectionMatrix()
            // self.sceneState.renderer.setSize(window.innerWidth, window.innerHeight)
          } else {
            self.sceneState.camera.aspect = window.innerWidth / window.innerHeight
            self.sceneState.camera.updateProjectionMatrix()
            // self.sceneState.renderer.setSize(100, 100)
          }
        }
      }
    },
    onDown () {
      if (process.client) {
        // console.log('onDown')
        // const self = this
        // self.addObject()
        // self.sceneState.canAdd = true
        this.eventState.down = true
        this.selectBuilding()
      }
    },
    onUp () {
      if (process.client) {
        this.eventState.down = false
        // console.log('onUp')
        // const self = this
        // self.addObject()
        // self.sceneState.canAdd = false
      }
    },
    onMove () {
      if (process.client) {
        // console.log('onMove')
        this.eventState.move = true
        this.onAnimateDebounce()
        const self = this
        // self.addObject()
        if (self.sceneState.mouse) {
          self.sceneState.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
          self.sceneState.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
          // console.log(self.sceneState.mouse.x, self.sceneState.mouse.y);
        }
      }
    }
    // keyup (event) {
    //   const self = this
    //   console.log(event.keyCode)
    //   switch (event.keyCode) {
    //     case 38: // up
    //     case 87: // w
    //       self.sceneState.controlConfig.moveForward = false
    //       break
    //
    //     case 37: // left
    //     case 65: // a
    //       self.sceneState.controlConfig.moveLeft = false
    //       break
    //
    //     case 40: // down
    //     case 83: // s
    //       self.sceneState.controlConfig.moveBackward = false
    //       break
    //
    //     case 39: // right
    //     case 68: // d
    //       self.sceneState.controlConfig.moveRight = false
    //       break
    //   }
    // },
    // keydown (event) {
    //   const self = this
    //   console.log(event.keyCode)
    //   switch (event.keyCode) {
    //     case 38: // up
    //     case 87: // w
    //       self.sceneState.controlConfig.moveForward = true
    //       break
    //
    //     case 37: // left
    //     case 65: // a
    //       self.sceneState.controlConfig.moveLeft = true
    //       break
    //
    //     case 40: // down
    //     case 83: // s
    //       self.sceneState.controlConfig.moveBackward = true
    //       break
    //
    //     case 39: // right
    //     case 68: // d
    //       self.sceneState.controlConfig.moveRight = true
    //       break
    //
    //     case 32: // space
    //       if (self.sceneState.controlConfig.canJump === true) { self.sceneState.controlConfig.velocity.y += 350 }
    //       self.sceneState.controlConfig.canJump = false
    //       break
    //   }
    // }
  }
}
