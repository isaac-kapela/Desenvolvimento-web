"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    getnome() {
        return this._nome;
    }
    setnome(Value) {
        this._nome = Value;
    }
    getidade() {
        return this._idade;
    }
    setidade(value) {
        this._idade = value;
    }
}
exports.default = Pessoa;
