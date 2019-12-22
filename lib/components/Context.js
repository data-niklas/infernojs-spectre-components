import { Component } from '../inferno.js';
Component.prototype.subscribe = subscribe;
Component.prototype.unsubscribe = unsubscribe;
if (!window.contexts) window.contexts = {};

var contexts = window.contexts;

class Context {
    constructor(name, defaultValue) {
        this.name = name;
        this.listeners = [];
        this.value = defaultValue;
    }
    attach(item, varname) {
        this.listeners.push({ item, varname });
    }
    deattach(item) {
        for (let index = 0; index < this.listeners.length; index++) {
            if (this.listeners[i] === item) {
                this.listeners.splice(index, 1);
                index--;
            }

        }
    }
    setState(value) {
        this.value = value;

        for (var listener of this.listeners) {
            var obj = {};
            if (listener.varname) obj[listener.varname] = value;
            else obj[this.name] = value;
            listener.item.setState(obj);
        }
    }

}

function subscribe(context, varname) {
    var ctx = contexts[context];
    if (ctx) {
        ctx.attach(this, varname);
    }
    else {
        var ctx = new Context(context);
        ctx.attach(this, varname);
        contexts[context] = ctx;
    }
    if (varname) {
        this.state[varname] = ctx.value;
    }
    else this.state[context] = ctx.value;
}

function unsubscribe(context) {
    if (contexts[context]) {
        contexts[context].deattach(this);
    }
}

function createCtx(name, defaultValue = {}) {
    if (!contexts[name]) contexts[name] = new Context(name, defaultValue);
}

function setCtx(context, state) {
    if (contexts[context]) {
        contexts[context].setState(state);
    }
}

function getCtx(context) {
    if (contexts[context]) {
        return contexts[context].value;
    }
    else return {};
}



export default { Context, subscribe, unsubscribe, createCtx, setCtx, getCtx };