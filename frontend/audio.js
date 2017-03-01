import * as THREE from 'three';
import {globals as g} from './globals';

let playing = false;
let playButton = document.getElementById('play-button');
playButton.addEventListener('click', () => {
    playButton.innerText = playing ? 'Play' : 'Pause';
    if (playing) {
        g.sound.pause();
    } else {
        g.sound.play();
    }
    playing = !playing;
});

g.camera.add(g.listener);

g.sound = new THREE.Audio(g.listener);
let audioLoader = new THREE.AudioLoader();

audioLoader.load('music/seico-heaven.wav', buffer => {
    g.sound.setBuffer(buffer);
});
