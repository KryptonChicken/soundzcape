/**
 * frontend/audio.js
 * ~~~~~~~~~~~~~~~~~
 * This module provides interface for controlling audio playback.
 */

import g from './globals';
import ui from './ui';

let lastPlayed = '';

function play() {
    g.sound.play();
    ui.playBtnElem.innerHTML = 'pause';
}

function pause() {
    g.sound.pause();
    ui.playBtnElem.innerHTML = 'play';
}

function toggle(soundtrack) {
    if (g.sound.isPlaying) {
        pause();
    } else if (soundtrack === '') {
        ui.playBtnElem.innerHTML = 'No music';
    // eslint-disable-next-line no-negated-condition
    } else if (soundtrack !== lastPlayed) {
        if (lastPlayed !== '') {
            g.sound.stop();
        }

        g.audioLoader.load(soundtrack,
            buffer => {
                g.sound.setBuffer(buffer);
                play();
            },
            () => {
                ui.playBtnElem.innerHTML = `loading...`;
            },
            xhr => console.log(xhr)
        );
        lastPlayed = soundtrack;
    } else {
        play();
    }
}

const audio = {
    toggle
};

export default audio;
