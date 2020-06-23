import * as THREE from 'three'
import _ from 'lodash'
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export default {
  data () {
    return {
      sceneState: {
        // model: '/model/dd-site-BCD-only.obj',
        gltfs: [
          '/model/DD-all-baked-tex-v06-b.glb',
          '/model/DD-all-baked-tex-fixb2-fromfbx.glb',
          '/model/DD-all-baked-tex-fixb2.glb',
          '/model/DD-all-baked-tex.glb',
          '/model/DD-all-baked-tex-B-alphafix.glb',
          '/model/DD-all-baked-tex-B.gltf',
          '/model/DD-all-baked-tex-B.glb',
          '/model/DD-all-notex-01.glb',
          // '/model/DD-all-baked.gltf',
          '/model/DD-all-baked-16-no-texture.gltf',
          // '/model/DD-all-baked-16-no-texture-has-tags.gltf',
          '/model/DD-all-gltf-combined-test-1.gltf',
          '/model/DD-all-gltf-v01.gltf',
          '/model/DD-all-baked-A1.gltf',
          '/model/DD-all-baked-A2.gltf',
          '/model/DD-all-baked-A3.gltf',
          '/model/DD-all-baked-A4.gltf'
        ],
        activeMaterial: null,
        defaultMaterial: null,
        site: null,
        environment: [],
        buildings: []
      }
    }
  },
  methods: {
    loadModel () {
      const self = this
      return new Promise((resolve, reject) => {
        // const material = self.sceneState.mtl
        // const model = self.sceneState.model
        // const onProgress = function (xhr) {
        //   if (xhr.lengthComputable) {
        //     const percentComplete = xhr.loaded / xhr.total * 100
        //     console.log(Math.round(percentComplete) + '% downloaded')
        //   }
        // }
        // const onError = function (error) {
        //   console.warn(error)
        // }
        // const manager = new THREE.LoadingManager()
        // new MTLLoader(manager)
        //   .load(material, function (materials) {
        //     materials.preload()
        //     new OBJLoader(manager)
        //       .setMaterials(materials)
        //       .load(model, function (object) {
        //         resolve(object)
        //       }, onProgress, onError)
        //   })
        new GLTFLoader().load(self.sceneState.gltfs[0], function (gltf) {
          // gltf.scene.traverse(function (child) {
          //   if (child.isMesh) {
          //     roughnessMipmapper.generateMipmaps(child.material)
          //   }
          // })
          // console.log(gltf)
          resolve([gltf.scene])

          // new OBJLoader()
          //   .load(self.sceneState.model, function (object) {
          //     resolve([gltf.scene, object])
          //   })
        })

        // let index = 0
        // const files = [self.sceneState.gltfs[0]]
        // const loader = new GLTFLoader()
        // const models = []
        // loadNextFile()
        // function loadNextFile () {
        //   if (index > files.length - 1) {
        //     complete()
        //     return
        //   }
        //   loader.load(files[index], (gltf) => {
        //     models.push(gltf.scene)
        //     index++
        //     loadNextFile()
        //   })
        // }
        // function complete () {
        //   resolve(models)
        // }
      })
    },
    handleModels (models) {
      const [gltfScene, obj] = models
      this.sceneState.activeMaterial = new THREE.MeshStandardMaterial({ color: 0x666666, side: THREE.DoubleSide })
      this.sceneState.defaultMaterial = new THREE.MeshStandardMaterial({ color: 0xEEEEEE, side: THREE.DoubleSide })

      // for (let i = 0; i < obj.children.length; i++) {
      //   const child = obj.children[i]
      //   if (child.type === 'Mesh') {
      //     child.material = this.sceneState.defaultMaterial
      //     child.visible = true
      //     // child.material = new THREE.MeshNormalMaterial()
      //     this.sceneState.rayTarget.push(child)
      //     // this.sceneState.scene.add(child)
      //     // console.log(child.name, child)
      //   }
      // }

      // debugger

      gltfScene.traverse((child) => {
        // console.log(_.lowerCase(child.name))
        if (_.includes(['site'], _.lowerCase(child.name))) {
          this.sceneState.site = child
        } else
        if (_.includes(['plane', 'ground'], _.lowerCase(child.name))) {
          child.receiveShadow = true
          this.sceneState.environment.push(child)
        } else
        if (child.type === 'Mesh') {
          // child.material = this.sceneState.defaultMaterial
          child.castShadow = true
          child.defaultMaterial = child.material.clone()
          this.sceneState.rayTarget.push(child)
          // this.sceneState.buildings.push(child)
        } else
        if (child.type === 'Object3D') {
          this.sceneState.buildings.push(child)
        }
      })

      // for (let i = 0; i < gltfScene.children.length; i++) {
      //   const child = gltfScene.children[i]
      //   if (_.lowerCase(child.name).includes('plane')) {
      //     child.visible = false
      //   } else
      //   if (child.type === 'Mesh') {
      //     this.sceneState.rayTarget.push(child)
      //   } else
      //   if (child.type === 'Object3D') {
      //     for (let iC = 0; iC < child.children.length; iC++) {
      //       const grandchild = child.children[iC]
      //       if (grandchild.type == 'Mesh') {
      //         this.sceneState.rayTarget.push(grandchild)
      //       }
      //     }
      //   }
      // }

      for (let i = 0; i < this.sceneState.buildings.length; i++) {
        const b = this.sceneState.buildings[i]
        // console.log(b.name)
        // if (b.name == 'B2') {
        //   const m = b.children[1].material
        //   console.log(b.children[1].material)
        //   m.roughness = 0.2
        //   m.metalness = 0.9
        //   // m.emissive = 0xFF0000
        //   // m.wireframe = true
        // }
        // for (let iChildren = 0; iChildren < b.children.length; iChildren++) {
        //   const child = b.children[iChildren]
        //   console.log(child.name)
        //   if (child.name.includes('Glass')) {
        //     child.material = new THREE.MeshStandardMaterial({
        //     })
        //     child.material.roughness = 0.5
        //     child.material.metalness = 0.5
        //     child.material.transparent = true
        //     child.material.opacity = 0.9
        //     // child.material.envMap = this.sceneState.cubeCamera.texture
        //     // child.material.side = THREE.DoubleSide
        //     // child.material.emissive = 0xFF0000
        //     // child.material.color = 0xFF0000
        //     // console.log(child)
        //     // child.material = new THREE.MeshLambertMaterial ({
        //     //     // map: texture,
        //     //     envMap: this.sceneState.scene.background,
        //     // })
        //   }
        //   if (child.name.includes('windows')) {
        //     child.material = new THREE.MeshStandardMaterial({
        //     })
        //     child.material.roughness = 0.5
        //     child.material.metalness = 0.5
        //     child.material.transparent = true
        //     child.material.opacity = 0.9
        //     // child.material.envMap = this.sceneState.cubeCamera.texture
        //     // child.material.side = THREE.DoubleSide
        //     // child.material.emissive = 0xFF0000
        //     // child.material.color = 0xFF0000
        //     // console.log(child)
        //     // child.material = new THREE.MeshLambertMaterial ({
        //     //     // map: texture,
        //     //     envMap: this.sceneState.scene.background,
        //     // })
        //   }
        // }
        // const m = b.children[1].material
        // console.log(b.children[1].material)
        // m.roughness = 0.2
        // m.metalness = 0.9
      }
      // console.log(this.sceneState.rayTarget)

      // this.addModel(gltfScene)
      // this.addModel(object)
      // obj.scale.set(0.1, 0.1, 0.1)

      gltfScene.position.x = -2.5
      gltfScene.position.z = 4

      // // this.sceneState.targetMesh = obj
      // this.sceneState.scene.add(obj)

      // gltfScene.scale.set(0.01, 0.01, 0.01)
      // gltfScene.position.x = 0
      // gltfScene.position.y = 0
      // gltfScene.position.z = 0
      // this.sceneState.targetMesh = gltfScene
      this.sceneState.scene.add(gltfScene)
    },
    addModel (object) {
      if (!object) { return }

      this.sceneState.activeMaterial = new THREE.MeshStandardMaterial({ color: 0x666666, side: THREE.DoubleSide })
      this.sceneState.defaultMaterial = new THREE.MeshStandardMaterial({ color: 0xEEEEEE, side: THREE.DoubleSide })

      // for (let i = 0; i < object.children.length; i++) {
      //   object.children[i].castShadow = true
      //   object.children[i].receiveShadow = true
      // }
      // console.log(object.children)
      // this.sceneState.defaultBuildingMaterial = new THREE.MeshStandardMaterial( {color: 0xeeeeee, side: THREE.DoubleSide, map: buildingTexture} );
      // this.sceneState.defaultRoofMaterial = new THREE.MeshStandardMaterial( {color: 0xeeeeee, side: THREE.DoubleSide, map: roofTexture} );

      // object.scale.set(0.01, 0.01, 0.01)
      // object.position.x = 1.0
      // object.position.z = 2.5
      // this.sceneState.targetMesh = object
      // this.sceneState.scene.add(object)
    },
    highlightBuildingBySlug (buildingName = '') {
      return
      if (!buildingName) {
        this.resetBuildingHighlight()
        return
      }
      const meshesOfSameBuilding = _.filter(this.sceneState.rayTarget, mesh => _.includes(mesh.name, buildingName))
      const otherBuildings = _.filter(this.sceneState.rayTarget, mesh => !_.includes(mesh.name, buildingName))

      for (let i = 0; i < meshesOfSameBuilding.length; i++) {
        meshesOfSameBuilding[i].material.transparent = true
        meshesOfSameBuilding[i].material.opacity = 0.9
      }
      for (let i = 0; i < otherBuildings.length; i++) {
        otherBuildings[i].material.transparent = true
        otherBuildings[i].material.opacity = 1
      }
    },
    displayBuildingBySlugOnly (buildingName = '') {
      console.log('highlightBuildingBySlugOnly', buildingName)
      return
      if (!buildingName) {
        this.resetBuildingHighlight()
        return
      }
      const meshesOfSameBuilding = _.filter(this.sceneState.rayTarget, mesh => _.includes(mesh.name, buildingName))
      const otherBuildings = _.filter(this.sceneState.rayTarget, mesh => !_.includes(mesh.name, buildingName))
      const environment = this.sceneState.environment

      for (let i = 0; i < meshesOfSameBuilding.length; i++) {
        meshesOfSameBuilding[i].material.transparent = true
        meshesOfSameBuilding[i].material.opacity = 1
        otherBuildings[i].visible = true
      }
      for (let i = 0; i < otherBuildings.length; i++) {
        otherBuildings[i].material.transparent = true
        otherBuildings[i].material.opacity = 0
        otherBuildings[i].visible = false
      }
      for (let i = 0; i < environment.length; i++) {
        environment[i].material.transparent = true
        environment[i].material.opacity = 0
        environment[i].visible = false
      }
    },
    resetBuildingHighlight () {
      return
      console.log('resetBuildingHighlight')
      for (let i = 0; i < this.sceneState.rayTarget.length; i++) {
        this.sceneState.rayTarget[i].material.transparent = true
        this.sceneState.rayTarget[i].material.opacity = 1
        this.sceneState.rayTarget[i].visible = true
      }
      for (let i = 0; i < this.sceneState.environment.length; i++) {
        this.sceneState.environment[i].material.transparent = true
        this.sceneState.environment[i].material.opacity = 1
        this.sceneState.environment[i].visible = true
      }
    }
  }
}
