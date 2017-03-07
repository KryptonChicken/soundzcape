import * as THREE from 'three';

/* Application constants */
const title = 'Soundzcape';
const version = '0.1.0';

const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;

/* Game objects */
let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(
    -initialWidth / 2, initialWidth / 2,
    -initialHeight / 2, initialHeight / 2,
    1, 1000
);
let renderer = new THREE.WebGLRenderer({antialias: true});
let listener = new THREE.AudioListener();
let audioLoader = new THREE.AudioLoader();
let sound = new THREE.Audio(listener);

camera.add(listener);

const globals = {
    title,
    version,
    initialWidth,
    initialHeight,

    scene,
    camera,
    renderer,
    listener,
    audioLoader,
    sound
};

export default globals;
