
// 1- importacao de arquivos
import importGreet from "./greet"
importGreet();

//2- importacao de variaveis

import {x} from './variable'
console.log(x);

// 3- multiplas importacoes
import {a,b, myFunction} from './multiple'

console.log(a);
console.log(b);
myFunction();

// 4- alias de importacao
import { someName as name } from "./changename";

console.log(name);

// 5- importando diversos itens - importar tudo

import * as myNumbers from "./numbers";

console.log(myNumbers); //retorna em objeto
const nx = myNumbers.n1
console.log(nx);

myNumbers.showNumber()

//6- importar tipos ou interfaces

import {Human} from "./myType";

class User implements Human {
    name
    age

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const jose = new User("Jose", 77);
console.log(jose);
