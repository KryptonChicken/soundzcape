// ES6 module import/export check
import utils from "./utils";

const js_status = document.getElementById("js-status");
const js_es6_check = document.getElementById("js-es6-check");
const js_module_check = document.getElementById("js-module-check");

const es6 = "ES2015/ES6";
const x = 5;
const y = 10;

js_status.innerHTML = "Javascript working!";

// Check if es6 template literal works.
js_es6_check.innerHTML = `JS version: ${es6}`;

let add_result = utils.add(x, y);
let arrow_add_result = utils.arrow_add(x, y);

js_module_check.innerHTML = `ES6 modules working: ${add_result == arrow_add_result}`;
