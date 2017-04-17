/**
 * frontend/ui.js
 * ~~~~~~~~~~~~~~
 * This module controls the user interface, aka the HUD. All HUD elements
 * operate at a higher z-level (on top) than THREE.js' game objects.
 */

import g from './globals';
import audio from './audio';

const playBtnElem = document.getElementById('play-button');
const musicSelElem = document.getElementById('music-selection');

function populateMusicList(musicList) {
    musicSelElem.innerHTML = musicList
        .map(file => `music/${file}`)
        .map(file => `<option value="${file}">${file}</option>`)
        .join('');
}

playBtnElem.addEventListener('click', () => {
    audio.toggle(musicSelElem.value);
});

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    g.renderer.setSize(width, height);
    g.camera.left = -width / 2;
    g.camera.right = width / 2;
    g.camera.top = height / 2;
    g.camera.bottom = -height / 2;

    g.camera.updateProjectionMatrix();
}, false);

const ui = {
    playBtnElem,
    populateMusicList
};

export default ui;
