let scene, camera, renderer, planet, plane, clouds, isLeaningUp = true,
    isLeaningRight = false, reversedPlanet = false, keyState = {},
    speed, planeDirection = 0;

// const ArrowUp = 38;
// const ArrowDown = 40;
// const ArrowLeft = 39;
// const ArrowRight = 37;

const speedOneDirection = 0.025;
const speedTwoDirection = 0.020;

const planeSpeedLeaningX = 0.002;
const planeLeaningXMin = Math.PI / 2 - 0.2;
const planeLeaningXMax = Math.PI / 2 + 0.2;

const planeSpeedLeaningY = 0.002;
const planeLeaningYMin = -0.2;
const planeLeaningYMax = 0.2;

const planetAutoRotateSpeed = 0.0002;
const cloudSpeed = 0.005;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 11;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);


    ///////////////////// Helpers
    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);
    // controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.addEventListener('change', renderer);
    ///////////////////



    ///////////////////// Lights
    hlight = new THREE.AmbientLight(0x404040, 3);
    scene.add(hlight);

    // directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // directionalLight.position.set(0, 1, 0);
    // directionalLight.castShadow = true;
    // scene.add(directionalLight);

    // directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // directionalLight.position.set(0, -1, 0);
    // directionalLight.castShadow = true;
    // scene.add(directionalLight);

    light = new THREE.PointLight(0xc4c4c4, 1);
    light.position.set(0, 300, 500);
    scene.add(light);
    light2 = new THREE.PointLight(0xc4c4c4, 1);
    light2.position.set(500, 100, 0);
    scene.add(light2);
    light3 = new THREE.PointLight(0xc4c4c4, 1);
    light3.position.set(0, 100, -500);
    scene.add(light3);
    light4 = new THREE.PointLight(0xc4c4c4, 1);
    light4.position.set(-500, 300, 500);
    scene.add(light4);

    // light = new THREE.PointLight(0xc4c4c4, 10);
    // light.position.set(0, 300, 500);
    // scene.add(light);
    /////////////////////



    ///////////////////// Load models
    document.body.appendChild(renderer.domElement);
    let loader = new THREE.GLTFLoader();

    loader.load('models/planetAlone.glb', function (gltf) {
        gltfScene = gltf.scene;
        planet = gltfScene;

        scene.add(gltf.scene);
    });

    loader.load('models/clouds.glb', function (gltf) {
        gltfScene = gltf.scene;
        clouds = gltfScene;

        scene.add(gltf.scene);
    });

    loader.load('models/plane.glb', function (gltf) {
        gltfScene = gltf.scene;
        plane = gltfScene.children[0]

        gltfScene.scale.set(0.1, 0.1, 0.1);
        gltfScene.position.set(0, 0, Math.PI + 0.7);
        gltfScene.rotation.set(-Math.PI / 2, 0, Math.PI);

        scene.add(gltf.scene);
    });
    ///////////////////////


    ////////////////////keys
    window.addEventListener('keydown', function (e) {
        keyState[e.key || e.code] = true;
    }, true);
    window.addEventListener('keyup', function (e) {
        keyState[e.key || e.code] = false;
    }, true);
    ///////////////

    function onKey() {

        if ((keyState.ArrowUp && keyState.ArrowDown) || (keyState.ArrowLeft && keyState.ArrowRight)) {
            return;
        }

        reversedPlanet = (planet.rotation.x > Math.PI / 2 && planet.rotation.x < Math.PI * 3 / 2) || (planet.rotation.x < -Math.PI / 2 && planet.rotation.x > -Math.PI * 3 / 2)

        let nbDirections = Object.values(keyState).filter(Boolean).length;
        speed = nbDirections === 1 ? speedOneDirection : speedTwoDirection

        planeDirection = 0

        if (keyState.ArrowUp) {
            planet.rotation.x += speed;
            planeDirection += keyState.ArrowLeft ? 2 * Math.PI : 0;
        }
        if (keyState.ArrowDown) {
            planet.rotation.x -= speed;
            planeDirection += Math.PI;
        }
        if (keyState.ArrowLeft) {
            if (reversedPlanet) {
                planet.rotation.y -= speed;
            } else {
                planet.rotation.y += speed;
            }
            planeDirection += Math.PI * 3 / 2;
        }
        if (keyState.ArrowRight) {
            if (reversedPlanet) {
                planet.rotation.y += speed;
            } else {
                planet.rotation.y -= speed;
            }
            planeDirection += Math.PI / 2;
        }

        if (nbDirections) {
            console.log(planeDirection)
            plane.rotation.z = planeDirection / nbDirections
        }
    };


    function animate() {

        /////// Auto Move 
        if (planet && plane) {

            /////////////// plane leaning
            if (isLeaningRight) {
                plane.rotation.y += planeSpeedLeaningY
            } else {
                plane.rotation.y -= planeSpeedLeaningY
            }
            if (plane.rotation.y < planeLeaningYMin) {
                isLeaningRight = true
            } else if (plane.rotation.y > planeLeaningYMax) {
                isLeaningRight = false
            }
            if (isLeaningUp) {
                plane.rotation.x += planeSpeedLeaningX
            } else {
                plane.rotation.x -= planeSpeedLeaningX
            }
            if (plane.rotation.x < planeLeaningXMin) {
                isLeaningUp = true
            } else if (plane.rotation.x > planeLeaningXMax) {
                isLeaningUp = false
            }
            ///////////////

            planet.rotation.x -= planetAutoRotateSpeed // planet auto rotation

            /////////////// remove planet full rotation
            if (planet.rotation.x > 2 * Math.PI) {
                planet.rotation.x = 0
            }
            if (planet.rotation.x < -2 * Math.PI) {
                planet.rotation.x = 0
            }
            ///////////////
            onKey()
        }
        if (clouds) {
            clouds.rotation.x -= cloudSpeed
        }
        ////////////

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();
}

init();