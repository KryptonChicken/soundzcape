import * as THREE from 'three';

import c from './constants';

// We use the singleton design pattern to store the main THREE.js objects.
let instance = null;
class Globals {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(
            -c.initialWidth / 2, c.initialWidth / 2,
            -c.initialHeight / 2, c.initialHeight / 2,
            1, 1000
        );
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.listener = new THREE.AudioListener();
        this.audioLoader = new THREE.AudioLoader();
        this.sound = new THREE.Audio(this.listener);

        this.camera.add(this.listener);

        return instance;
    }
}

// eslint-disable-next-line import/prefer-default-export
export const globals = new Globals();
