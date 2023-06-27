"use strict";
// 1- void
function semRetorno() {
    console.log('Essa funcao n tem retorno');
}
semRetorno();
// 2- callback sem argumento / callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Ana");
preGreeting(greeting, "Elaine");
// 3- generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({
    name: "Ana"
}, {
    age: 26,
    job: "Programmer"
});
console.log((newObject));
// 4- constraints em generic function
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else
        biggest = b;
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
// 5- definir tipos de parametros
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], [5, 6]));
console.log(mergeArray([1, 2, 3], ["teste", "testando"]));
//6- argumentos opcionais
function modernGreeting(name, greet) {
    if (greet)
        return (`Olá ${greet} ${name}, tudo bem?`);
    return (`Olá ${name}, tudo bem?`);
}
console.log(modernGreeting("Ana"));
console.log(modernGreeting("Beatriz", "Dra"));
// 7- parametros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 15));
// 8- tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x é um numero");
    }
}
doSomething(5);
doSomething([1, 2, 3]);
// 9- tipo never
function showErrorMessage(msg) {
    throw new Error(msg);
}
/* console.log(showErrorMessage('Algum erro')); */
//10- rest operator com TS
function sumAll(...n) {
    return n.reduce((number, sum) => number + sum);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 5, 5, 5));
//11- destructuring com TS
function showProductDetails({ name, price }) {
    return `O nome o produto é ${name} e o preço dele é R$ ${price}`;
}
const camisa = {
    name: 'Camisa', price: 25.50
};
console.log(showProductDetails(camisa));
