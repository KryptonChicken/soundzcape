/**
 * frontend/game.js
 * ~~~~~~~~~~~~~~~~
 * This module contains the core game mechanics.
 */

import * as THREE from 'three';

import g from './globals';
import FSM from './fsm';
import network from './network';

const render = function () {
    requestAnimationFrame(render);
    g.renderer.render(g.scene, g.camera);
};

const gameFSM = new FSM({
    start: {
        to: 'pageReady', transition: () => {
            g.scene.background = new THREE.Color(0xFFFFFF);
            g.renderer.setSize(g.initialWidth, g.initialHeight);
            g.camera.add(g.listener);
            document.body.appendChild(g.renderer.domElement);

            network.fetchMusicList();

            render();
        }
    },
    loadMusic: {
        from: 'pageReady', to: 'musicReady', transition: () => {
            // network.downloadMusic();
        }
    },
    loadLevel: {
        from: 'musicReady', to: 'levelReady', transition: () => {
            // network.downloadLevel();
            // game.createLevel();
        }
    },
    play: {
        from: ['levelReady', 'pauseMenu'], to: 'gaming', transition: () => {
            // audio.playMusic();
            // game.scrollMap();
        }
    },
    pause: {
        from: 'gaming', to: 'pauseMenu', transition: () => {
            // audio.pauseMusic();
            // game.stopScollMap();
        }
    },
    end: {
        from: ['gaming', 'pauseMenu'], transition: () => {
            // audio.stopMusic();
            // game.destroyScene();
            // ui.displayMenu();
        }
    }
});

export default gameFSM;
