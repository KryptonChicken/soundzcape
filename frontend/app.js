/* eslint no-unused-vars: ['error', {'varsIgnorePattern': '\w+Css'}] */

import * as THREE from 'three';

import milligramCss from 'milligram';
import customCss from './style.css';

import {globals as g} from './globals';

let initialWidth = window.innerWidth;
let initialHeight = window.innerHeight;

g.scene = new THREE.Scene();
g.camera = new THREE.OrthographicCamera(
    -initialWidth / 2, initialWidth / 2,
    -initialHeight / 2, initialHeight / 2,
    1, 1000
);
g.renderer = new THREE.WebGLRenderer({
    antialias: true
});
g.renderer.setSize(initialWidth, initialHeight);

const render = function () {
    requestAnimationFrame(render);
    g.renderer.render(g.scene, g.camera);
};

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    g.renderer.setSize(width, height);
    g.camera.left = -width / 2;
    g.camera.right = width / 2;
    g.camera.top = height / 2;
    g.camera.bottom = -height / 2;
    g.camera.updateProjectionMatrix();
}, false);

document.body.appendChild(g.renderer.domElement);
render();
