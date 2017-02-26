// ES6 module import/export check
import utils from './utils';

const jsStatus = document.getElementById('js-status');
const jsEs6Check = document.getElementById('js-es6-check');
const jsModuleCheck = document.getElementById('js-module-check');

const es6 = 'ES2015/ES6';
const x = 5;
const y = 10;

jsStatus.innerHTML = 'Javascript working!';

// Check if es6 template literal works.
jsEs6Check.innerHTML = `JS version: ${es6}`;

let addResult = utils.add(x, y);
let arrowAddResult = utils.arrowAdd(x, y);

jsModuleCheck.innerHTML = `ES6 modules working: ${addResult === arrowAddResult}`;
