//1- numbers
let x: number = 10;
console.log(x);
const y:number = 15.54521;
console.log(y.toPrecision(3));

//2- strings
const firstName: string = "Ana";
console.log(firstName.toUpperCase());
let fullName: string ;
const lastName: string = "Morais";
fullName = firstName + " " + lastName;
console.log(fullName);

//3- boolean
let a: boolean = false;
let b: boolean = true;
console.log(a);
console.log(b);

// COMPILAÇÃO AUTOMATICA = tsc -w
//anotation = é quando definimos um tipo de dado manualmente
//inference = é quando o TS identifica e define o tipo de dado pra nós.

//4- anotation and inference
const ann: string = "ann";
let inf = "inf";
console.log(inf);

//Exercicio 

const num1: number = 10;
const str = num1.toString() ;
const printString = `Imprimindo a conversao de um number para string: ${str}`;
console.log(printString);



