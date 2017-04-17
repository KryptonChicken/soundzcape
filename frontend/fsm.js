/**
 * frontend/fsm.js
 * ~~~~~~~~~~~~~~~
 * This is a custom finite state machine for use with Soundzcape. Each FSM
 * should have a 'start' and 'end' action. The start transition should not have
 * a from state while the end transition should not have a to state.
 *
 * Example
 * -------
 * const gate = new FSM({
 *     start: {
 *         to: 'ready', transition: () => {
 *             initGate();
 *         }
 *     },
 *     insertCoin: {
 *         from: 'ready', to: 'paid', transition: () => {
 *             db.revenue += 1;
 *             gateCtl.unlock();
 *         }
 *     },
 *     reset: {
 *         from: 'paid', to: 'ready', transition: () => {
 *             gateCtl.lock();
 *         }
 *     },
 *     end: {
 *         from: ['ready', 'paid'], transition: () => {
 *             gateCtl.destroy();
 *         }
 *     }
 * });
 *
 * gate.dispatch('start');
 * gate.dispatch('insertCoin');
 * gate.dispatch('end');
 */

class FSM {
    constructor(config) {
        this.currentState = 'start';
        this.transitions = config;

        this.transitions.start.from = 'start';
        this.transitions.end.to = 'end';
    }

    dispatch(action) {
        if (this.currentState === 'end') {
            throw new Error('Terminal state of FSM reached already');
        }

        const toState = this.transitions[action].to;
        const fromState = this.transitions[action].from;
        let conditionValid = false;

        if (typeof fromState === 'string') {
            conditionValid = fromState === this.currentState;
        } else if (Array.isArray(fromState)) {
            conditionValid = fromState.includes(this.currentState);
        }

        if (conditionValid) {
            this.transitions[action].transition();
            this.currentState = toState;
        } else {
            throw new Error(
                `Invalid transition from ${this.currentState} to ${toState}.`
            );
        }
    }
}

export default FSM;
