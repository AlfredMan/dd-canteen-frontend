import * as THREE from 'three'
import _ from 'lodash'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export default {
  data () {
    return {
      sceneState: {
        model: '/model/dd-site.obj',
        mtl: '/model/dd-site.mtl',
        gltfs: [
          '/model/DD-all-gltf-v01.gltf',
          '/model/DD-all-baked-A1.gltf',
          '/model/DD-all-baked-A2.gltf',
          '/model/DD-all-baked-A3.gltf',
          '/model/DD-all-baked-A4.gltf'
        ],
        activeMaterial: null,
        defaultMaterial: null
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
          console.log(gltf)
          resolve(gltf.scene)
          // scene.add(gltf.scene)
          // roughnessMipmapper.dispose()
          // render()
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
    addModels (gltfScene) {
      // for (let i = 0; i < gltfScenes.length; i++) {
      //   this.addModel(gltfScenes[i])
      // }
      for (let i = 0; i < gltfScene.children.length; i++) {
        const child = gltfScene.children[i]
        if (!_.lowerCase(child.name).includes('plane')) {
          if (child.type === 'Mesh') {
            this.sceneState.rayTarget.push(child)
          } else
          if (child.type === 'Object3D') {
            for (let iC = 0; iC < child.children.length; iC++) {
              const grandchild = child.children[iC]
              if (grandchild.type == 'Mesh') {
                this.sceneState.rayTarget.push(grandchild)
              }
            }
          }
        }
      }

      console.log(this.sceneState.rayTarget)

      this.addModel(gltfScene)
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

      object.scale.set(0.01, 0.01, 0.01)
      // object.position.x = 1.0
      // object.position.z = 2.5
      // this.sceneState.targetMesh = object
      this.sceneState.scene.add(object)
    }
  }
}
