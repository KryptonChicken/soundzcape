import * as THREE from 'three';

export const title = 'Soundzcape';
export const version = '0.1.0';

let initialWidth = window.innerWidth;
let initialHeight = window.innerHeight;

// We use the singleton design pattern to store the main THREE.js objects.
let instance = null;
class Globals {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(
            -initialWidth / 2, initialWidth / 2,
            -initialHeight / 2, initialHeight / 2,
            1, 1000
        );
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(initialWidth, initialHeight);
        this.listener = new THREE.AudioListener();

        return instance;
    }
}

export const globals = new Globals();
