"use strict";
//1- TYPE GUARD
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log("impossivel realizar a conta.");
    }
}
sum("10", "20");
sum(5, 5);
sum("8", 8);
//2- checando se valor existe
function oprations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor defina uma operacion.");
    }
}
oprations([2, 2, 2], 'multiply');
oprations([2, 2, 2], 'sum');
//3- operador instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const ana = new User('Ana');
const victoria = new SuperUser('Victoria');
console.log(ana);
console.log(victoria);
function userGreenting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá, ${user.name}!`);
    }
}
userGreenting(victoria);
userGreenting(ana);
// 4- operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed)
            this.breed = breed;
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pitbull");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else
        console.log(`O cachorro não tem raça definida.`);
}
showDogDetails(turca);
showDogDetails(bob);
function reviewUser(review) {
    if (typeof review === 'number') {
        if (review === 1)
            console.log('Muito ruim');
        else if (review === 2)
            console.log('Ruim');
        else if (review === 3)
            console.log('Bom');
        else if (review === 4)
            console.log('Muito bom');
        else if (review === 5)
            console.log('Otimo');
    }
    else {
        console.log("O usuário não deixou uma review.");
    }
}
reviewUser(5);
reviewUser(false);
