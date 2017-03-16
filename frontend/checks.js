/**
 * This module checks if the target browser meets the necessary requirements
 * to run Soundzcape.
 */

function supportWebGL() {
    try {
        let canvas = document.createElement('canvas');
        return !! window.WebGLRenderingContext && (
            canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl')
        );
    } catch (e) {
        return false;
    }
}

if (!supportWebGL()) {
    // We only need to hide the HUD since THREE.js have not been initialised.
    document.getElementById('no-webgl').style.display = 'block';
    document.getElementById('hud').style.display = 'none';

    throw new Error('Browser incapable to run Soundzcape.');
}
