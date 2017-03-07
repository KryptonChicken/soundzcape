import g from './globals';

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

g.audioLoader.load('music/seico-heaven.wav', buffer => {
    g.sound.setBuffer(buffer);
});
