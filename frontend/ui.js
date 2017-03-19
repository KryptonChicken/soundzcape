/**
 * frontend/ui.js
 * ~~~~~~~~~~~~~~
 * This module controls the user interface, aka the HUD.
 */

import g from './globals';
import audio from './audio';
import utils from './utils';

let musicSelElem = document.getElementById('music-selection');

// Music control: track selection, play control
let musicList = [];
fetch('/api/music')
    .then(utils.checkFetchStatus)
    .then(utils.jsonData)
    .then(data => {
        // All soundtrack are located in the music/ route.
        musicList = data.music_list.map(file => `music/${file}`);

        musicSelElem.innerHTML = musicList
            .map(file => `<option value="${file}">${file}</option>`)
            .join('');
    })
    .catch(err => console.log(err));

g.playBtnElem.addEventListener('click', () => {
    audio.toggle(musicSelElem.value);
});
