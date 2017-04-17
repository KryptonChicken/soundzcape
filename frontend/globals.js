/**
 * frontend/globals.js
 * ~~~~~~~~~~~~~~~~~~~
 * This module defines application constants and initialize main game objects,
 * which take advantage of ES6 module system's default singleton behaviour.
 */

import * as THREE from 'three';

/* Application constants */
const title = 'Soundzcape';
const version = '0.1.0';

const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;

/* Game objects */
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
    -initialWidth / 2, initialWidth / 2,
    -initialHeight / 2, initialHeight / 2,
    1, 1000
);
const renderer = new THREE.WebGLRenderer({antialias: true});
const listener = new THREE.AudioListener();
const audioLoader = new THREE.AudioLoader();
const sound = new THREE.Audio(listener);

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
