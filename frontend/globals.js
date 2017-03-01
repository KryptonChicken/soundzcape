export const title = 'Soundzcape';
export const version = '0.1.0';

let instance = null;

// We use the singleton design pattern to store the main THREE.js objects.
class Globals {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }
}

export const globals = new Globals();
