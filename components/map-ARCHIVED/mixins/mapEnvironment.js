import * as THREE from 'three'
export default {
  data () {
    return {
      pointerTextureMap: require('~/assets/images/map/the-o2.png')
    }
  },
  methods: {
    initSignage () {
      const pointerTexture = new THREE.TextureLoader().load(this.pointerTextureMap)
      const signMaterial = new THREE.MeshBasicMaterial({ map: pointerTexture })
      const signGeom = new THREE.PlaneGeometry(5, 1.2)
      const mesh = new THREE.Mesh(signGeom, signMaterial)
      mesh.position.x = 8
      mesh.position.z = 9
      mesh.rotation.x = -Math.PI / 2
      this.sceneState.scene.add(mesh)
    },
    initGround () {
      const geometry = new THREE.PlaneGeometry(24, 18, 32)
      // const material = new THREE.ShadowMaterial()
      // const material = new THREE.MeshBasicMaterial({
      //   color: 0xBFC4C0
      // })
      const material = new THREE.MeshNormalMaterial({})
      material.opacity = 0.5
      const plane = new THREE.Mesh(geometry, material)
      plane.rotation.x = -Math.PI / 2
      plane.receiveShadow = true
      this.sceneState.scene.add(plane)
    }
  }
}
