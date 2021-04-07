let scene, camera, renderer, planet, plane, clouds, isLeaningUp = true,
    isLeaningRight = false, reversedPlanet = false, keyState = {},
    planeDirection = 0, panel, newIdPanel, idPanel, commandPanelHidden = false;


// const ArrowUp = 38;
// const ArrowDown = 40;
// const ArrowLeft = 39;
// const ArrowRight = 37;

const speedOneDirection = 0.025;
const speedTwoDirection = 0.020;
const planeTurnSpeed = 0.080;
const planeTurnEpsilon = 0.080;

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
    hlight = new THREE.AmbientLight(0x404040, 2.5);
    scene.add(hlight);
    /////////////////////

    ///////////////////// Load models
    document.body.appendChild(renderer.domElement);
    let loader = new THREE.GLTFLoader();

    loader.load('models/planet.glb', function (gltf) {
        gltfScene = gltf.scene;
        planet = gltfScene;
        const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 2);
        light.position.set(Math.PI + 1, 0, Math.PI + 1)
        planet.add(light);

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

    panel = document.getElementById('panel');

    function hideCommandePanel() {
        document.getElementById('commandPanel').style.display = 'none';
        commandPanelHidden = true
    }

    function onKey() {

        newIdPanel = getIDPanel(planet.rotation.x, planet.rotation.y);

        if (idPanel !== newIdPanel && !!newIdPanel) {
            panel.style.display = "block"
            idPanel = newIdPanel;
            panel.innerHTML = newIdPanel;
        } else if (!newIdPanel) {
            idPanel = undefined;
            panel.style.display = "none"
        }

        ////// opposite keys
        if ((keyState.ArrowUp && keyState.ArrowDown) || (keyState.ArrowLeft && keyState.ArrowRight)) {
            return;
        }

        reversedPlanet = (planet.rotation.x > Math.PI / 2 && planet.rotation.x < Math.PI * 3 / 2)

        if (keyState.ArrowUp && keyState.ArrowLeft) { // ↖
            planet.rotation.x += speedTwoDirection;
            if (reversedPlanet) {
                planet.rotation.y -= speedTwoDirection;
            } else {
                planet.rotation.y += speedTwoDirection;
            }
            planeDirection = - 1 / 4 * Math.PI;
        } else if (keyState.ArrowUp && keyState.ArrowRight) {  // ↗ 
            planet.rotation.x += speedTwoDirection;
            if (reversedPlanet) {
                planet.rotation.y += speedTwoDirection;
            } else {
                planet.rotation.y -= speedTwoDirection;
            }
            planeDirection = 1 / 4 * Math.PI;
        } else if (keyState.ArrowDown && keyState.ArrowRight) { // ↘ 
            planet.rotation.x -= speedTwoDirection;
            if (reversedPlanet) {
                planet.rotation.y += speedTwoDirection;
            } else {
                planet.rotation.y -= speedTwoDirection;
            }
            planeDirection = 3 / 4 * Math.PI;
        } else if (keyState.ArrowDown && keyState.ArrowLeft) { // ↙ 
            planet.rotation.x -= speedTwoDirection;
            if (reversedPlanet) {
                planet.rotation.y -= speedTwoDirection;
            } else {
                planet.rotation.y += speedTwoDirection;
            }
            planeDirection = -3 / 4 * Math.PI;

            ////////////////////////////// one direction
        } else if (keyState.ArrowUp) { // ↑
            !commandPanelHidden && hideCommandePanel()
            planet.rotation.x += speedOneDirection;
            planeDirection = 0;
        } else if (keyState.ArrowDown) { // ↓
            !commandPanelHidden && hideCommandePanel()
            planet.rotation.x -= speedOneDirection;
            planeDirection = Math.PI;
        } else if (keyState.ArrowLeft) { // ←
            !commandPanelHidden && hideCommandePanel()
            if (reversedPlanet) {
                planet.rotation.y -= speedOneDirection;
            } else {
                planet.rotation.y += speedOneDirection;
            }
            planeDirection = 3 / 2 * Math.PI;
        } else if (keyState.ArrowRight) { // →
            !commandPanelHidden && hideCommandePanel()
            if (reversedPlanet) {
                planet.rotation.y += speedOneDirection;
            } else {
                planet.rotation.y -= speedOneDirection;
            }
            planeDirection = 1 / 2 * Math.PI;
        }

        const sinus = Math.sin(plane.rotation.z - planeDirection);
        const cos = Math.cos(plane.rotation.z - planeDirection);
        const isAnglesCloserThanEpsilon = Math.abs(sinus) < planeTurnEpsilon
        const isAnglesNotAt180Degrees = 1 - cos < planeTurnEpsilon;

        if (isAnglesCloserThanEpsilon && isAnglesNotAt180Degrees) {
            plane.rotation.z = planeDirection
        } else if (sinus > 0) {
            plane.rotation.z -= planeTurnSpeed
        } else if (sinus < 0) {
            plane.rotation.z += planeTurnSpeed
        }
    };


    function animate() {

        /////// Auto Move 
        if (planet && plane) {

            // console.log(planet.rotation)



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

            // planet.rotation.x -= planetAutoRotateSpeed // planet auto rotation

            /////////////// remove planet full rotation
            if (planet.rotation.x > 2 * Math.PI) {
                planet.rotation.x = 0
            }
            if (planet.rotation.x < 0 * Math.PI) {
                planet.rotation.x = 2 * Math.PI
            }
            if (planet.rotation.y > 2 * Math.PI) {
                planet.rotation.y = 0
            }
            if (planet.rotation.y < 0 * Math.PI) {
                planet.rotation.y = 2 * Math.PI
            }
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