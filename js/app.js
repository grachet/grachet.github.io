let scene, camera, renderer, planet, plane, clouds, isLeaningUp = true;

const speed = 1;
const planeSpeedLeaning = 0.005;
const planeLeaningMin = 1.1;
const planeLeaningMax = 1.4;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 11;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

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

    // const geometry = new THREE.SphereGeometry(3.5, 32, 32);
    // const material = new THREE.MeshBasicMaterial({ color: "red" });
    // const sphere = new THREE.Mesh(geometry, material);
    // sphere.position.set(0, 3.5, 0);
    // scene.add(sphere);

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

        // console.log(gltfScene)
        // car.scale.set(0.5, 0.5, 0.5);
        scene.add(gltf.scene);
    });

    loader.load('models/clouds.glb', function (gltf) {
        gltfScene = gltf.scene;
        clouds = gltfScene;

        // console.log(gltfScene)
        // car.scale.set(0.5, 0.5, 0.5);
        scene.add(gltf.scene);
    });

    loader.load('models/plane.glb', function (gltf) {
        gltfScene = gltf.scene;
        console.log(gltfScene)
        plane = gltfScene.children[0]
        console.log(plane)

        gltfScene.scale.set(0.1, 0.1, 0.1);
        gltfScene.position.set(0, 0, 3.8);
        gltfScene.rotation.set(-1.5, 0, 3.15);

        // car.scale.set(0.5, 0.5, 0.5);
        scene.add(gltf.scene);
    });

    function animate() {
        // console.log(planet)
        if (plane) {

            if (isLeaningUp) {
                plane.rotation.x += planeSpeedLeaning
            } else {
                plane.rotation.x -= planeSpeedLeaning
            }
            if (plane.rotation._x < planeLeaningMin) {
                isLeaningUp = true
            } else if (plane.rotation._x > planeLeaningMax) {
                isLeaningUp = false
            }
        }
        if (planet) {
            planet.rotation.x -= 0.0002
        }
        if (clouds) {
            clouds.rotation.x -= 0.005
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();

}

init();