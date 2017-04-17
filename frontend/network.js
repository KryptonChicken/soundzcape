/**
 * frontend/network.js
 * ~~~~~~~~~~~~~~~~~~~
 * This module handle the networking of the game, mostly by fetch data from
 * server.
 */

import utils from './utils';
import ui from './ui';

function fetchMusicList() {
    fetch('/api/music')
        .then(utils.checkFetchStatus)
        .then(utils.jsonData)
        .then(response => {
            if (response.status === 'ok') {
                ui.populateMusicList(response.music_list);
            } else {
                return Promise.reject(response.reason);
            }
        })
        .catch(err => console.log(err));
}

const network = {
    fetchMusicList
};

export default network;
