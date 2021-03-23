// https://localhost:3000/map?building=food-space
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import _ from "lodash";
// import { Reflector } from "three/examples/js/objects/Reflector.js";

const MY_CONST = 2;

class Scene {
  constructor({ rootEl, onHover, onSelect }) {
    console.log("Scene construtor called.");

    this.canvas = document.createElement("canvas");

    this.onHoverCallback = onHover;
    this.onSelectCallback = onSelect;

    this.hoverTarget = null;

    this.root = rootEl;
    this.width = rootEl.clientWidth;
    this.height = rootEl.clientHeight;

    // this.background = "#0000ff";
    this.background = "#ffffff";

    this.objects = [];
    this.rayTarget = [];
    this.textureCube = null;

    this.isAddObjectMode = false;

    this.cameraDefaultPosition = {
      x: 25,
      y: 30,
      z: 25
    };
    this.light = {
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
    let buildingId = (options && options.id) || "";

    console.log("triggerUpdate", options);

    for (let i = 0; i < this.objects.length; i++) {
      let box = this.objects[i];
      // if (buildingId && box.userData.building == buildingId) {
      if (buildingId && box.userData.name == buildingId) {
        // box.material.color.setHex(0xff0000); // make it red
        this.hoverTarget = box; // set internal reference the box that matches ID
      } else {
        // box.material.color.setHex(0xffffff); // make rest white
      }
    }

    // dummy proof of concept
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

    this.throttledMouseMove = _.throttle(self.onDocumentMouseMove, 500);
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
      this.light.directionalLightIntensity
    );
    directionalLight.position.x = -10;
    directionalLight.position.y = 2;
    directionalLight.position.z = -10;
    this.scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(
      0xeeeeff,
      this.light.directionalLightIntensity2
    );
    directionalLight2.position.x = 10;
    directionalLight2.position.y = 2;
    directionalLight2.position.z = -10;
    this.scene.add(directionalLight2);

    const spotLight = new THREE.SpotLight(
      0xffffee,
      this.light.spotLightIntensity
    );
    spotLight.position.x = 5;
    spotLight.position.y = -2;
    spotLight.position.z = 5;
    this.scene.add(spotLight);
  }

  initCamera() {
    const aspect = this.width / this.height;
    this.camera = new THREE.PerspectiveCamera(10, aspect, 1, 1000);
    this.camera.position.x = this.cameraDefaultPosition.x;
    this.camera.position.z = this.cameraDefaultPosition.z;
    this.camera.position.y = this.cameraDefaultPosition.y;
    this.camera.lookAt(new THREE.Vector3(0, 10, 0));
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(this.background, 1);

    this.canvas = this.renderer.domElement;
  }

  initOrbitControls() {
    this.orbitControls = new OrbitControls(this.camera, this.canvas);

    this.orbitControls.maxPolarAngle = Math.PI * 0.45;

    this.orbitControls.enableDamping = true;
    this.orbitControls.dampingFactor = 0.05;
    this.orbitControls.screenSpacePanning = false;

    this.orbitControls.maxDistance = 10; // 15;
    this.orbitControls.minDistance = 3;

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
            self.objects.push(child);
          }
        });

        // gltf.scene.position.x = 0.05
        // gltf.scene.translateX(-0.15);
        // gltf.scene.translateZ(0.4);

        self.autoCenter(gltf.scene)

        self.scene.add(gltf.scene);
      });

    // dummy geom for testing
    // });
  }

  autoCenter(obj){
    const box = new THREE.Box3().setFromObject( obj );
    box.getCenter( obj.position ); // this re-sets the mesh position
    obj.position.multiplyScalar( - 1 )
  }

  initRaycaster() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
  }

  ray() {
    const self = this;
    // _.debounce(
    //   function() {
    self.raycaster.setFromCamera(self.mouse, self.camera);
    const intersects = self.raycaster.intersectObjects([...self.objects], true);

    if (intersects.length > 0) {
      self.hoverTarget = intersects[0].object;
      self.onHoverCallback(self.hoverTarget);

      // for (let i = 0; i < intersects.length; i++) {
      //   if (intersects[i].object && intersects[i].object.material) {
      //     // console.log(intersects[i].object.name);
      //     // intersects[i].object.material.color.setHex(Math.random() * 0xffffff); // set a random color so we know its constantly updating
      //   }
      // }
    }
    // },
    // 1000,
    // {
    //   leading: true
    // }
    // );

    // if (intersects.length > 0) {
    //   console.log(intersects[0].object.userData&&intersects[0].object.userData.building)
    // } else {
    //   //
    // }
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
    event.preventDefault();
    let x = event.offsetX || event.clientX;
    let y = event.offsetY || event.clientY;
    this.mouse.x = (x / this.width) * 2 - 1;
    this.mouse.y = -(y / this.height) * 2 + 1;

    this.ray();

  };

  onDocumentMouseDown = event => {
    // return
    event.preventDefault();
    if (this.hoverTarget) {
      this.onSelectCallback(this.hoverTarget);
    } else {
      this.onSelectCallback();
    }
  };

  bindEvents() {
    window.addEventListener("resize", this.onResize);
    this.canvas.addEventListener(
      "mousemove",
      this.throttledMouseMove,
      false
    );
    this.canvas.addEventListener("mousedown", this.onDocumentMouseDown, false);
  }

  unbindEvents() {
    window.removeEventListener("resize", this.onResize);
    this.canvas.removeEventListener(
      "mousemove",
      // this.onDocumentMouseMove,
      this.throttledMouseMove,
      false
    );
    this.canvas.removeEventListener(
      "mousedown",
      this.onDocumentMouseDown,
      false
    );
  }
}

const SceneConstructor = args => new Scene(args);

export default SceneConstructor;
