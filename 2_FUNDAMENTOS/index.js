"use strict";
//1- numbers
let x = 10;
console.log(x);
const y = 15.54521;
console.log(y.toPrecision(3));
//2- strings
const firstName = "Ana";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Morais";
fullName = firstName + " " + lastName;
console.log(fullName);
//3- boolean
let a = false;
let b = true;
console.log(a);
console.log(b);
//anotation = é quando definimos um tipo de dado manualmente
//inference = é quando o TS identifica e define o tipo de dado pra nós.
//4- anotation and inference
const ann = "ann";
let inf = "inf";
console.log(inf);
//Exercicio 
const num1 = 10;
const str = num1.toString();
const printString = `Imprimindo a conversao de um number para string: ${str}`;
console.log(printString);
