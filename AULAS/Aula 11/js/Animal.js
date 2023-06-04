"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(nome) {
        this._nome = nome;
    }
    comer() {
        return `${this._nome} esta comendo`;
    }
    sentar() {
        return `${this._nome} acabou de sentar`;
    }
}
exports.default = Animal;
