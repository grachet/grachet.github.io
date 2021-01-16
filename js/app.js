let scene, camera, renderer;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
    // camera.rotation.y = 45 / 180 * Math.PI;
    // camera.position.x = 7;
    // camera.position.y = 10;
    // camera.position.z = 10;


    camera.position.x = -7.8587422370910645;
    camera.position.y = 4.857544898986816;
    camera.position.z = -16.959041595458984;
    camera.rotation.x = 1.6317866451706384;
    camera.rotation.y = -0.018295476787527132;
    camera.rotation.z = 2.7127579845176455;

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

    loader.load('models/low-poly-planet.glb', function (gltf) {
        gltfScene = gltf.scene;

        console.log(gltfScene)
        // car.scale.set(0.5, 0.5, 0.5);
        scene.add(gltf.scene);
        animate();
    });
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();