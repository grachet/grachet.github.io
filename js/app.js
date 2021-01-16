let scene, camera, renderer, planet, plane, clouds, isLeaningUp = true, isLeaningRight = false;

const speed = 0.03;
const planeSpeedLeaningX = 0.002;
const planeLeaningXMin = 1.1;
const planeLeaningXMax = 1.4;

const planeSpeedLeaningY = 0.002;
const planeLeaningYMin = -0.2;
const planeLeaningYMax = 0.2;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 11;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);


    /////////////////////
    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);
    ///////////////////

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

    document.body.appendChild(renderer.domElement);
    let loader = new THREE.GLTFLoader();

    loader.load('models/planetAlone.glb', function (gltf) {
        gltfScene = gltf.scene;
        planet = gltfScene;

        // const axesHelper = new THREE.AxesHelper(5);
        // planet.add(axesHelper);

        scene.add(gltf.scene);
    });

    loader.load('models/clouds.glb', function (gltf) {
        gltfScene = gltf.scene;
        clouds = gltfScene;

        const axesHelper = new THREE.AxesHelper(5);
        clouds.add(axesHelper);

        scene.add(gltf.scene);
    });

    loader.load('models/plane.glb', function (gltf) {
        gltfScene = gltf.scene;
        plane = gltfScene.children[0]

        gltfScene.scale.set(0.1, 0.1, 0.1);
        gltfScene.position.set(0, 0, 3.8);
        gltfScene.rotation.set(-1.5, 0, 3.15);

        scene.add(gltf.scene);
    });

    function onDocumentKeyDown(event) {
        console.log(planet)
        var keyName = event.key;
        if (keyName === "ArrowUp") {
            planet.rotation.x += speed;
            plane.rotation.z = 0;
        }
        else if (keyName === "ArrowDown") {
            planet.rotation.x -= speed;
            plane.rotation.z = 3.15;
        }
        else if (keyName === "ArrowLeft") {
            planet.rotation.y += speed;
            plane.rotation.z = 4.725;
        } else if (keyName === "ArrowRight") {
            planet.rotation.y -= speed;
            plane.rotation.z = 1.575;
        }
    };

    document.addEventListener("keydown", onDocumentKeyDown, false);

    function animate() {
        if (plane) {
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
        }
        // if (planet) {
        //     planet.rotation.x -= 0.0002
        // }
        // if (clouds) {
        //     clouds.rotation.x -= 0.005
        // }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();
}

init();