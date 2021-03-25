// https://localhost:3000/map?building=food-space
import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import {
  getInteractiveBuildingIndexName,
  getBuildingIndexName
} from "./util.js";

import _ from "lodash";
// import { Reflector } from "three/examples/js/objects/Reflector.js";

const MY_CONST = 2;

class Scene {
  constructor({ rootEl, onHover, onSelect }) {
    console.log("Scene construtor called.");

    this.canvas = document.createElement("canvas");

    this.isDragging = false;
    this.onHoverCallback = onHover;
    this.onSelectCallback = onSelect;

    this.hoverTarget = null;
    this.selectedTarget = null;

    this.root = rootEl;
    this.width = rootEl.clientWidth;
    this.height = rootEl.clientHeight;

    // this.background = "#0000ff";
    this.background = "#ffffff";

    // this.objects = [];
    this.parentObjectDict = {};
    this.meshDict = {};
    this.parentRelevantBuildingDict = {};
    this.uuidToIndexNameDict = {};
    this.rayTarget = [];
    this.textureCube = null;

    this.isAddObjectMode = false;

    this.defaultCameraFov = 10;
    this.defaultMaterialOpacityDict = {};
    this.defaultLookAtPosition = {
      x: 0,
      y: 0,
      z: 0
    };
    this.defaultLookAt = new THREE.Vector3(
      this.defaultLookAtPosition.x,
      this.defaultLookAtPosition.y,
      this.defaultLookAtPosition.z
    );
    this.defaultOrbitSetting = {
      // maxPolarAngle: Math.PI * 0.45,
      target: this.defaultLookAt,

      enableDamping: true,
      dampingFactor: 0.05,
      screenSpacePanning: false,

      // minPolarAngle: Math.PI * 0.5 - 0.5,
      // maxPolarAngle: Math.PI * 0.5 - 0.5,
      // minPolarAngle: Math.PI * 0.5 - 0.1,
      // maxPolarAngle: Math.PI * 0.5 - 0.1,

      minPolarAngle: -Math.PI / 2,
      maxPolarAngle: Math.PI / 2,

      maxDistance: 10,
      minDistance: 3
    };
    this.defaultCameraPosition = {
      x: 25,
      y: 30,
      z: 25
    };
    // this.defaultLookAt = new THREE.Vector3(0, 10, 0);
    this.lightSetting = {
      lightProbeIntensity: 1.0,
      directionalLightIntensity: 2,
      directionalLightIntensity2: 0.5,
      spotLightIntensity: 1,
      envMapIntensity: 1
    };

    this.init();
    this.update();
    this.bindEvents();
  }

  triggerUpdate(options) {
    // dummy proof of concept
    // let buildingId = (options && options.id) || "";
    console.log("triggerUpdate", options);
    if (!!options && Object.keys(options).includes("id")) {
      let buildingId = options.id ?? "";
      this.triggerUpdateFromSelectedId(buildingId);
    }

    // dummy proof of concept
  }
  triggerUpdateFromSelectedId(buildingId) {
    // for (let i = 0; i < this.objects.length; i++) {
    //   let object = this.objects[i];
    //   // if (buildingId && object.userData.building == buildingId) {
    //   const objectIndexName = getInteractiveBuildingIndexName(object);
    //   if (buildingId && objectIndexName === buildingId) {
    //     object.material.color.setHex(0xff0000); // make it red
    //     this.hoverTarget = object; // set internal reference the object that matches ID
    //     this.selectedTarget = this.hoverTarget;

    //   } else {
    //     // object.material.color.setHex(0xffffff); // make rest white
    //   }
    // }

    if (!buildingId) {
      this.deselectAllBuilindgs();
      return;
    }
    // this.selectedTarget = this.objects.find(
    //   object => getInteractiveBuildingIndexName(object) === buildingId
    // );
    this.selectedTarget = this.parentObjectDict[buildingId];

    this.hoverTarget = this.selectedTarget;
    if (this.selectedTarget) {
      const selectedBuildingRootObject = this.parentRelevantBuildingDict[
        buildingId
      ];

      if (selectedBuildingRootObject) {
        Object.entries(this.parentRelevantBuildingDict).forEach(
          ([k, building]) => {
            if (k === buildingId) {
              // building.traverse(node => {
              //   this.setMaterialBasedOnSelectedState({
              //     node,
              //     selected: "highlight"
              //   });
              // });
              this.setBuildingMaterialBasedOnSelectedState({
                building,
                selected: "highlight"
              });
            } else {
              // building.traverse(node => {
              //   this.setMaterialBasedOnSelectedState({
              //     node,
              //     selected: "dim"
              //   });
              // });
              this.setBuildingMaterialBasedOnSelectedState({
                building,
                selected: "dim"
              });
            }
          }
        );

        this.zoomToBuilding({
          node: selectedBuildingRootObject,
          zoomScale: 0.5
        });

        // this.orbitControls.update();
      }
      // this.selectedTarget?.material.color.setHex(0xff0000); // make it red
    } else {
      this.deselectAllBuilindgs();
      // this.camera.lookAt(this.defaultLookAt);
    }
  }

  // //zoomScale is (0=>1), 0.1 is more zoom in, 1 is capped at defaultOrbitSetting.maxDisctance
  // zoomToBuilding({ node, zoomScale, y = 0 }) {
  //   const newX = node.getWorldPosition(new THREE.Vector3()).x;
  //   const newZ = node.getWorldPosition(new THREE.Vector3()).z;
  //   this.orbitControls.target.set(newX, y, newZ);
  //   this.orbitControls.maxDistance =
  //     this.defaultOrbitSetting.maxDistance * zoomScale;
  //   this.orbitControls.minDistance =
  //     this.defaultOrbitSetting.maxDistance * zoomScale;
  // }


  //zoomScale is (0=>1), 0.1 is more zoom in, 1 is capped at defaultOrbitSetting.maxDisctance
  zoomToBuilding({ node, zoomScale, y = 0 }) {
    // const newX = node.getWorldPosition(new THREE.Vector3()).x;
    // const newZ = node.getWorldPosition(new THREE.Vector3()).z;
    // this.orbitControls.target.set(newX, y, newZ);
    // this.orbitControls.maxDistance =
    //   this.defaultOrbitSetting.maxDistance * zoomScale;
    // this.orbitControls.minDistance =
    //   this.defaultOrbitSetting.maxDistance * zoomScale;
    let self = this;
    const tl = gsap.timeline();

    const currentDistance =
      self.orbitControls.minDistance === self.orbitControls.maxDistance
        ? self.orbitControls.maxDistance
        : self.orbitControls.target.distanceTo(
            self.orbitControls.object.position
          );
    const orbitAnimatedValue = {
      limit: currentDistance,
      minPolarAngle: self.orbitControls.minPolarAngle,
      maxPolarAngle: self.orbitControls.maxPolarAngle
      // minPolarAngle: this.defaultOrbitSetting.minPolarAngle,
      // maxPolarAngle: this.defaultOrbitSetting.maxPolarAngle
    };
    const orbitTo = {
      limit: this.defaultOrbitSetting.maxDistance * zoomScale,
      minPolarAngle: Math.PI * 0.5 - 0.1,
      maxPolarAngle: Math.PI * 0.5 - 0.1
    };

    const positionAnimatedValue = {
      // x: self.defaultLookAtPosition.x,
      // y: self.defaultLookAtPosition.y,
      // z: self.defaultLookAtPosition.z
      x: self.orbitControls.target.x,
      y: self.orbitControls.target.y,
      z: self.orbitControls.target.z
    };
    const positionTo = {
      x: node.getWorldPosition(new THREE.Vector3()).x,
      y: node.getWorldPosition(new THREE.Vector3()).y,
      z: node.getWorldPosition(new THREE.Vector3()).z
    };

    tl.to(orbitAnimatedValue, {
      limit: orbitTo.limit,
      minPolarAngle: orbitTo.minPolarAngle,
      maxPolarAngle: orbitTo.maxPolarAngle,
      duration: 0.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (self.orbitControls) {
          self.orbitControls.minDistance = orbitAnimatedValue.limit;
          self.orbitControls.maxDistance = orbitAnimatedValue.limit;
          // self.orbitControls.minPolarAngle = orbitAnimatedValue.minPolarAngle;
          // self.orbitControls.maxPolarAngle = orbitAnimatedValue.maxPolarAngle;
          // self.orbitControls.enablePan = false;
          self.orbitControls.update();
        }
      }
    }).to(
      positionAnimatedValue,
      {
        x: positionTo.x,
        y: positionTo.y,
        z: positionTo.z,
        duration: 0.5,
        ease: "power2.inOut",
        onUpdate: () => {
          if (self.orbitControls) {
            self.orbitControls.target.set(
              positionAnimatedValue.x,
              positionAnimatedValue.y,
              positionAnimatedValue.z
            );
            // self.orbitControls.minPolarAngle = Math.PI * 0.5 - 0.1;
            // self.orbitControls.maxPolarAngle = Math.PI * 0.5 - 0.1;
            // self.orbitControls.enablePan = false;
            self.orbitControls.update();
          }
        }
      },
      0
    );
  }
  resetOrbit() {
    let self = this;
    const tl = gsap.timeline({
      onComplete: function() {
        if (self.orbitControls) {
          self.orbitControls.minDistance = self.defaultOrbitSetting.minDistance;
          self.orbitControls.maxDistance = self.defaultOrbitSetting.maxDistance;
          self.orbitControls.update();
        }
      }
    });

    const currentDistance = self.orbitControls.target.distanceTo(
      self.orbitControls.object.position
    );
    const orbitAnimatedValue = {
      limit: currentDistance,
      minPolarAngle: self.orbitControls.minPolarAngle,
      maxPolarAngle: self.orbitControls.maxPolarAngle
    };
    const orbitTo = {
      limit: self.defaultOrbitSetting.maxDistance,
      minPolarAngle: self.defaultOrbitSetting.minPolarAngle,
      maxPolarAngle: self.defaultOrbitSetting.maxPolarAngle
    };

    const positionAnimatedValue = {
      x: self.orbitControls.target.x,
      y: self.orbitControls.target.y,
      z: self.orbitControls.target.z
    };
    const positionTo = {
      x: self.defaultLookAtPosition.x,
      y: self.defaultLookAtPosition.y,
      z: self.defaultLookAtPosition.z
    };

    tl.to(orbitAnimatedValue, {
      limit: orbitTo.limit,
      minPolarAngle: orbitTo.minPolarAngle,
      maxPolarAngle: orbitTo.maxPolarAngle,
      duration: 0.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (self.orbitControls) {
          self.orbitControls.minDistance = orbitAnimatedValue.limit;
          self.orbitControls.maxDistance = orbitAnimatedValue.limit;
          // self.orbitControls.minPolarAngle = orbitAnimatedValue.minPolarAngle;
          // self.orbitControls.maxPolarAngle = orbitAnimatedValue.maxPolarAngle;
          // self.orbitControls.enablePan = false;
          self.orbitControls.update();
        }
      }
    }).to(
      positionAnimatedValue,
      {
        x: positionTo.x,
        y: positionTo.y,
        z: positionTo.z,
        duration: 0.5,
        ease: "power2.inOut",
        onUpdate: () => {
          if (self.orbitControls) {
            console.log(
              positionAnimatedValue.x,
              positionAnimatedValue.y,
              positionAnimatedValue.z
            );
            self.orbitControls.target.set(
              positionAnimatedValue.x,
              positionAnimatedValue.y,
              positionAnimatedValue.z
            );
            // self.orbitControls.minPolarAngle = Math.PI * 0.5 - 0.1;
            // self.orbitControls.maxPolarAngle = Math.PI * 0.5 - 0.1;
            // self.orbitControls.enablePan = false;
            self.orbitControls.update();
          }
        }
      },
      0
    );
  }

  // resetOrbit0() {
  //   this.orbitControls.target = this.defaultLookAt;
  //   this.orbitControls.minDistance = this.defaultOrbitSetting.maxDistance;
  //   this.orbitControls.update();
  //   Object.entries(this.defaultOrbitSetting).forEach(([k, v]) => {
  //     this.orbitControls[k] = v;
  //   });
  //   this.orbitControls.update();
  // }
  setBuildingMaterialBasedOnSelectedState({
    building,
    selected = "highlight" | "dim" | "default"
  }) {
    // if (selected === "default") {
    //   console.log("object reset to default", building);
    // }
    // if (selected === "highlight") {
    //   console.log("object being highlight", building);
    // }
    // if (selected === "dim") {
    //   console.log("object being dimmed", building);
    // }
    // if (selected === "dim") {
    //   // building.parent.remove(building)
    //   return;
    // }
    building.traverse(node => {
      this.setMaterialBasedOnSelectedState({
        node,
        selected
      });
    });
  }
  setMaterialBasedOnSelectedState({
    node,
    selected = "highlight" | "dim" | "default"
  }) {
    if (!node || !node.isMesh) {
      return;
    }
    const material = node.material;
    if (!material) {
      return;
    }

    if (selected === "dim") {
      const defaultMaterialOpacity = this.defaultMaterialOpacityDict[
        material.uuid
      ];
      material.opacity = defaultMaterialOpacity * 0.3;
      if (defaultMaterialOpacity >= 1) {
        material.transparent = true;
      }
      // material.wireframe = true;
      // // material.color.setHex(0xff0000);
    } else {
      // 'hightlight' or 'default' for now share same material setup
      const defaultMaterialOpacity = this.defaultMaterialOpacityDict[
        material.uuid
      ];
      material.opacity = defaultMaterialOpacity;
      if (defaultMaterialOpacity >= 1) {
        material.transparent = false;
      }
      // material.wireframe = false;
      // // material.color.setHex(0xff0000);
    }
  }
  deselectAllBuilindgs() {
    // if (Object.values(this.parentRelevantBuildingDict).length===0) {
    //   return;
    // }
    Object.entries(this.parentRelevantBuildingDict).forEach(([_, building]) => {
      // building.traverse(node => {
      //   this.setMaterialBasedOnSelectedState({
      //     node,
      //     selected: "default"
      //   });
      // });
      this.setBuildingMaterialBasedOnSelectedState({
        building,
        selected: "default"
      });
    });
    // this.orbitControls.target = this.defaultLookAt;
    // this.camera.fov = this.defaultCameraFov;
    // this.orbitControls.maxDistance = this.defaultOrbitSetting.maxDistance;
    // this.orbitControls.maxDistance = this.defaultOrbitSetting.maxDistance;
    this.resetOrbit();

    // this.update();
    // this.camera.focus=
  }

  destroy() {
    if (this.scene) {
      this.scene.remove.apply(this.scene, this.scene.children);
    }
    if (this.canvas) {
      this.canvas.parentElement.removeChild(this.canvas);
    }
    if (this.raf) {
      cancelAnimationFrame(this.raf);
    }
    this.unbindEvents();
  }

  init() {
    const self = this;
    this.initScene();
    this.initLights();
    this.initCamera();
    this.initRenderer();
    this.initOrbitControls();
    this.initRaycaster();

    this.textureCube = this.initTextureCube();
    this.initEnv();
    // this.initMirrorGround();
    this.initMapObjects();

    this.throttledMouseMove = _.throttle(self.onDocumentMouseMove, 200);
    (this.debouncedMouseMove = _.debounce(self.onDocumentMouseMove, 200, {
      leading: true
    })),
      this.root.appendChild(this.canvas);
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(this.background);
  }

  initLights() {
    // const hlights = new THREE.AmbientLight("#666666");
    // const directionalLight = new THREE.DirectionalLight("#dfebff", 1);
    // directionalLight.position.set(0, 10, 10);
    // directionalLight.position.multiplyScalar(1.3);

    // this.scene.add(hlights);
    // this.scene.add(directionalLight);

    const directionalLight = new THREE.DirectionalLight(
      0xffffff,
      this.lightSetting.directionalLightIntensity
    );
    directionalLight.position.x = -10;
    directionalLight.position.y = 2;
    directionalLight.position.z = -10;
    this.scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(
      0xeeeeff,
      this.lightSetting.directionalLightIntensity2
    );
    directionalLight2.position.x = 10;
    directionalLight2.position.y = 2;
    directionalLight2.position.z = -10;
    this.scene.add(directionalLight2);

    const spotLight = new THREE.SpotLight(
      0xffffee,
      this.lightSetting.spotLightIntensity
    );
    spotLight.position.x = 5;
    spotLight.position.y = -2;
    spotLight.position.z = 5;
    this.scene.add(spotLight);
  }

  initCamera() {
    const aspect = this.width / this.height;
    this.camera = new THREE.PerspectiveCamera(
      this.defaultCameraFov,
      aspect,
      1,
      1000
    );
    this.camera.position.x = this.defaultCameraPosition.x;
    this.camera.position.z = this.defaultCameraPosition.z;
    this.camera.position.y = this.defaultCameraPosition.y;
    // this.camera.lookAt(this.defaultLookAt);
  }

  initRenderer() {
    // this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // this.renderer.setSize(this.width, this.height);
    // this.renderer.setClearColor(this.background, 1);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    let pixelRatio = window.devicePixelRatio || 2;
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(this.width, this.height);

    // // this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.gammaOutput = true;
    // // this.renderer.gammaFactor = 2.2

    this.canvas = this.renderer.domElement;
  }

  initOrbitControls() {
    this.orbitControls = new OrbitControls(this.camera, this.canvas);

    Object.entries(this.defaultOrbitSetting).forEach(
      ([k, v]) => (this.orbitControls[k] = v)
    );
    // this.orbitControls.maxPolarAngle = Math.PI * 0.45;
    // this.orbitControls.target = this.defaultLookAt;

    // this.orbitControls.enableDamping = true;
    // this.orbitControls.dampingFactor = 0.05;
    // this.orbitControls.screenSpacePanning = false;

    // this.orbitControls.maxDistance = 10; //15;
    // this.orbitControls.minDistance = 3;

    this.orbitControls.update();
  }

  // initMapObjects() {

  //   // dummy geom for testing

  //   let buildings=['A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4','D1','D2','D3','D4']
  //   for (let i = 0; i < buildings.length; i++) {
  //     const geometry = new THREE.BoxGeometry( 0.4, 0.4, 0.4 );
  //     const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  //     const cube = new THREE.Mesh( geometry, material );
  //     cube.position.x = i-buildings.length/2 + 0.5
  //     cube.userData.building=buildings[i]
  //     this.scene.add( cube );
  //     this.objects.push(cube)
  //   }
  //   // dummy geom for testing
  // }

  initTextureCube() {
    const loader2 = new THREE.CubeTextureLoader();
    loader2.setPath("https://threejs.org/examples/textures/cube/Bridge2/");
    const textureCube = loader2.load(
      ["posx.jpg", "negx.jpg", "posy.jpg", "negy.jpg", "posz.jpg", "negz.jpg"],
      function(txt) {
        //
        // 	// lightProbe.copy( THREE.LightProbeGenerator.fromCubeTexture( txt ) );
        // 	// lightProbe.copy( THREE.LightProbeGenerator.fromCubeTexture( envMap ) );
        // 	// lightProbe.copy( THREE.LightProbeGenerator.fromCubeRenderTarget( envMap ) );
        //
      }
    );
    textureCube.encoding = THREE.sRGBEncoding;
    return textureCube;
  }
  // Jason: Why this doesn't seems to do anything?
  initEnv() {
    const self = this;
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();
    new THREE.TextureLoader().load("/model/gradient5.png", function(texture) {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;

      // scene.background = envMap;
      self.scene.environment = envMap;

      texture.dispose();
      pmremGenerator.dispose();
    });
  }
  // Jason: What is mirrorFromGeom?
  // initMirrorGround() {
  //   const self = this;
  //   let mirrorFromGeom = function(child) {
  //     // let geometry = new THREE.CircleGeometry( 2, 64 );
  //     let geometry = child.geometry;
  //     const groundMirror = new THREE.Reflector(geometry, {
  //       // const groundMirror = new Reflector(geometry, {
  //       // clipBias: 0.003,
  //       textureWidth: WIDTH * window.devicePixelRatio,
  //       textureHeight: HEIGHT * window.devicePixelRatio,
  //       color: 0x777777
  //     });
  //     groundMirror.position.x = child.position.x;
  //     groundMirror.position.y = child.position.y;
  //     groundMirror.position.z = child.position.z;

  //     groundMirror.position.y = 0.1;
  //     // groundMirror.rotateX( - Math.PI / 2 );
  //     self.scene.add(groundMirror);
  //   };
  // }
  initMapObjects() {
    const self = this;

    // render();

    // model

    const model = "./model/DD-all-baked-tex-11-compressed.draco.gltf";
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);

    // # todo: remove this if successful
    // const loader = new THREE.GLTFLoader()
    loader
      // .setPath('models/gltf/DamagedHelmet/glTF/')
      .load(model, function(gltf) {
        let target;

        gltf.scene.traverse(function(child) {
          console.log(child);
          // if child's parent isn't "Object3D" then its the root of the building object
          if (child?.parent?.type !== "Object3D") {
            const indexName = getBuildingIndexName(child);
            if (indexName) {
              self.uuidToIndexNameDict[child.uuid] = indexName;
              self.parentRelevantBuildingDict[indexName] = child;
              console.log(
                `Group ${child.name} has ${child.children.length} children`
              );
            }
          }
          // console.log(child.name);
          // if (child.name.indexOf('B1Glass')>=0) {
          // 	child.material.opacity=0.3
          // 	child.material.roughness=0.1
          // 	child.material.metalness=0.9
          // }
          if (child.isMesh) {
            if (child.name == "GROUND1") {
              target = child;
            }
            if (child.name.indexOf("A1Steel") >= 0) {
              // mirrorFromGeom(child)
              // child.material.envMap=textureCube
              // child.material.roughness=0.1
              // child.material.metalness=1
            }
            if (child.name == "A2" || child.name == "B2") {
              child.material.roughness = 0.1;
              child.material.metalness = 0.8;
            }
            if (child.name.indexOf("Glass") >= 0) {
              // console.log("C4Glass", child);
              child.material.opacity = 0.5;
              child.material.envMap = self.textureCube;
              child.material.roughness = 0;
              child.material.metalness = 0;
              child.material.color.set(0xeeeeff);
              child.material.side = THREE.DoubleSide;
            }
            // child.material.side = THREE.doubleSide
            // child.material.roughness=1
            // child.material.metalness=1
            // child.envMap = envMap
            // child.material.castShadow = true
            // child.material.receiveShadow = true
            // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
            // roughnessMipmapper.generateMipmaps( child.material );

            self.rayTarget.push(child);
            // self.objects.push(child);
            // self.parentObjectDict[child.uuid] = child;
            const indexName = getBuildingIndexName(child);
            self.defaultMaterialOpacityDict[child.material.uuid] =
              child.material.opacity;
            self.parentObjectDict[indexName] = child;
            self.meshDict[child.uuid] = child;
            console.log("uuid", child.uuid);
            console.log("parent", child?.parent?.uuid);
            if (!child.parent) {
              self.uuidToIndexNameDict[child.uuid] = indexName;
            }
          }
        });
        console.log(`uuid to indexName dictionary:`);
        console.log(
          Object.entries(self.uuidToIndexNameDict).map(([k, v]) => `${k}:${v}`)
        );

        // gltf.scene.position.x = 0.05
        // gltf.scene.position.x = 0.05
        // gltf.scene.translateX(-0.15);
        // gltf.scene.translateZ(0.4);

        self.autoCenter(gltf.scene);

        self.scene.add(gltf.scene);
      });

    // dummy geom for testing
    // });
  }

  autoCenter(obj) {
    const box = new THREE.Box3().setFromObject(obj);
    box.getCenter(obj.position); // this re-sets the mesh position
    obj.position.multiplyScalar(-1);
  }

  initRaycaster() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
  }

  ray() {
    const self = this;
    self.raycaster.setFromCamera(self.mouse, self.camera);
    // const intersects = self.raycaster.intersectObjects([...self.objects], true);
    const intersects = self.raycaster.intersectObjects(
      // [...Object.values(self.parentObjectDict)],
      [...Object.values(self.meshDict)],
      true
    );

    let noIntersectOrOnlyIntersectGround = true;
    const hasIntersection = intersects.length > 0;
    let intersectIsRelevantBuilding = false;
    if (hasIntersection) {
      console.log("intersecting: ", intersects[0].object?.name);
      const buildingName = getInteractiveBuildingIndexName(
        intersects[0].object
      );
      if (buildingName) {
        intersectIsRelevantBuilding = true;
        console.log(
          intersects[0].object?.id,
          intersects[0].object?.name,
          intersects[0].object?.userData.name
        );
        if (
          !self.hoverTarget ||
          getInteractiveBuildingIndexName(self.hoverTarget) !==
            getInteractiveBuildingIndexName(intersects[0]?.object)
        ) {
          self.hoverTarget = intersects[0].object;
          self.onHoverCallback(self.hoverTarget);
        }
        // for (let i = 0; i < intersects.length; i++) {
        //   if (intersects[i].object && intersects[i].object.material) {
        //     // console.log(intersects[i].object.name);
        //     // intersects[i].object.material.color.setHex(Math.random() * 0xffffff); // set a random color so we know its constantly updating
        //   }
        // }
      }
    }
    if (!hasIntersection || !intersectIsRelevantBuilding) {
      self.hoverTarget = null;
      self.onHoverCallback(null);
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  update() {
    this.raf = requestAnimationFrame(() => this.update());
    this.orbitControls.update();
    this.render();
  }

  // Callbacks

  onResize = () => {
    this.width = this.root.clientWidth;
    this.height = this.root.clientHeight;

    this.renderer.setSize(this.width, this.height);

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  };

  onDocumentMouseMove = event => {
    this.isDragging = true;
    event.preventDefault();
    let x = event.offsetX || event.clientX;
    let y = event.offsetY || event.clientY;
    this.mouse.x = (x / this.width) * 2 - 1;
    this.mouse.y = -(y / this.height) * 2 + 1;
    this.ray();
  };
  onDocumentMouseDown = event => {
    event.preventDefault();
    this.isDragging = false;
  };

  onDocumentMouseUp = event => {
    event.preventDefault();
    if (this.isDragging) {
      console.log("mouse up but mouse moved");
      return;
    }
    console.log("mouse up, has hover target" , this.hoverTarget);
    if (this.hoverTarget) {
      this.selectedTarget = this.hoverTarget;
    } else {
      this.selectedTarget = null;
      console.log("mouse up, no hover target");
    }
    this.onSelectCallback(this.selectedTarget);
    const buildingIndexName = getInteractiveBuildingIndexName(
      this.selectedTarget
    );
    // if (buildingIndexName) {
    this.triggerUpdate({ id: buildingIndexName });
    // }
  };

  bindEvents() {
    window.addEventListener("resize", this.onResize);
    // this.canvas.addEventListener("mousemove", this.throttledMouseMove, false);
    this.canvas.addEventListener("mousemove", this.debouncedMouseMove, false);
    this.canvas.addEventListener(
      "pointerdown",
      this.onDocumentMouseDown,
      false
    );
    this.canvas.addEventListener("pointerup", this.onDocumentMouseUp, false);
  }

  unbindEvents() {
    window.removeEventListener("resize", this.onResize);
    this.canvas.removeEventListener(
      "mousemove",
      // this.onDocumentMouseMove,
      // this.throttledMouseMove,
      this.debouncedMouseMove,
      false
    );
    this.canvas.removeEventListener(
      "pointerdown",
      this.onDocumentMouseDown,
      false
    );
    this.canvas.removeEventListener("pointerup", this.onDocumentMouseUp, false);
  }
}

const SceneConstructor = args => new Scene(args);

export default SceneConstructor;
