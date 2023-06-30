"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1- importacao de arquivos
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
//2- importacao de variaveis
const variable_1 = require("./variable");
console.log(variable_1.x);
// 3- multiplas importacoes
const multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
// 4- alias de importacao
const changename_1 = require("./changename");
console.log(changename_1.someName);
// 5- importando diversos itens - importar tudo
const myNumbers = __importStar(require("./numbers"));
console.log(myNumbers); //retorna em objeto
const nx = myNumbers.n1;
console.log(nx);
myNumbers.showNumber();
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jose = new User("Jose", 77);
console.log(jose);
