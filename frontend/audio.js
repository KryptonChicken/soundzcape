import g from './globals';

let lastPlayed = '';

function toggle(soundtrack) {
    if (g.sound.isPlaying) {
        pause();
    // eslint-disable-next-line no-negated-condition
    } else if (soundtrack !== lastPlayed) {
        g.audioLoader.load(soundtrack,
            buffer => {
                g.sound.setBuffer(buffer);
                play();
            },
            xhr => {
                let loadPercentage = Math.round(xhr.loaded / xhr.total * 100);
                g.playBtnElem.innerHTML = `loading ${loadPercentage}%`;
            },
            xhr => console.log(xhr)
        );
        lastPlayed = soundtrack;
    } else {
        play();
    }
}

function play() {
    g.sound.play();
    g.playBtnElem.innerHTML = 'pause';
}

function pause() {
    g.sound.pause();
    g.playBtnElem.innerHTML = 'play';
}

const audio = {
    toggle
};

export default audio;
