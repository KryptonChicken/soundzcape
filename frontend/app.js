/* eslint no-unused-vars: ['error', {'varsIgnorePattern': '_\w+'}], import/default: 0 */
/**
 * frontend/app.js
 * ~~~~~~~~~~~~~~~
 * This is the main entry point to the Soundzcape frontend which is bundled
 * by webpack.
 */

import _milligram from 'milligram';
import _custom from './style.css';

import _checks from './checks';
import g from './globals';
import _audio from './audio';
import _ui from './ui';

g.renderer.setSize(g.initialWidth, g.initialHeight);

const render = function () {
    requestAnimationFrame(render);
    g.renderer.render(g.scene, g.camera);
};

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

document.body.appendChild(g.renderer.domElement);
render();
