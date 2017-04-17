/* eslint no-unused-vars: ['error', {'varsIgnorePattern': '_\w+'}], import/default: 0 */
/**
 * frontend/app.js
 * ~~~~~~~~~~~~~~~
 * This is the main entry point to the Soundzcape frontend which is bundled
 * by webpack.
 */

import _milligram from 'milligram';
import _custom from './style.css';

import check from './checks';
import gameFSM from './game';
import _ui from './ui';

check();

gameFSM.dispatch('start');
