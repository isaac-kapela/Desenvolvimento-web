"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
let pessoa = new Pessoa_1.default("fulano", 10);
pessoa.setnome("ciclano");
console.log(`${pessoa.getnome()} tem ${pessoa.getidade()} anos`);
