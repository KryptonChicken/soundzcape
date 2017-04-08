/**
 * frontend/ui.js
 * ~~~~~~~~~~~~~~
 * This module controls the user interface, aka the HUD.
 */

import g from './globals';
import audio from './audio';
import utils from './utils';

const musicSelElem = document.getElementById('music-selection');

// Music control: track selection, play control
let musicList = [];
fetch('/api/music')
    .then(utils.checkFetchStatus)
    .then(utils.jsonData)
    .then(response => {
        if (response.status === 'ok') {
            // All soundtrack are located in the music/ route.
            musicList = response.music_list.map(file => `music/${file}`);

            musicSelElem.innerHTML = musicList
                .map(file => `<option value="${file}">${file}</option>`)
                .join('');
        } else {
            return Promise.reject(response.reason);
        }
    })
    .catch(err => console.log(err));

g.playBtnElem.addEventListener('click', () => {
    audio.toggle(musicSelElem.value);
});
