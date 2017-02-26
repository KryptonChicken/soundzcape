/* eslint no-unused-vars: ['error', {'varsIgnorePattern': 'css'}] */

import * as THREE from 'three';
import globals from './globals';

import css from './style.css';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
    globals.leftCoord, globals.rightCoord,
    globals.topCoord, globals.bottomCoord,
    1, 1000
);
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(globals.winWidth, globals.winHeight);
document.body.appendChild(renderer.domElement);

const render = function () {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
};

render();
