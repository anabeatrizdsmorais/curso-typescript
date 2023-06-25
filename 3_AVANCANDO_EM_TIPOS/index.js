"use strict";
// 1- arrays
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
const names = ['Ana', 'Beatriz', 'Morais'];
names.push('Victoria');
console.log(names);
//2 - outra sintaxe array
console.log('Outra sintaxe');
const nums = [10, 20, 30];
nums.push(40);
console.log(nums);
// 3- tipo any
const arr1 = [1, 'teste', true, [1, 2], { nome: 'Ana' }];
arr1.push([1, 2, 3, 4]);
console.log(arr1);
//4- tipo de parametro de funcoes
function soma(a, b) {
    console.log(a + b);
}
soma(2, 2);
//5- tipo de retorno de funções
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Ana'));
//6- funcoes anonimas
setTimeout(() => {
    const sallary = 4000;
    // console.log(parseFloat(sallary)); //erro pois o parseFloat so converte string
    // console.log(sallary);
}, 2000);
//7- tipos de objetos
function passCoordinates(coord) {
    console.log("x COORDinates: ", coord.x);
    console.log("y COORDinates: ", coord.y);
}
const objCoordinates = {
    x: 329, y: 84.5
};
passCoordinates(objCoordinates);
// 8- propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: ", a);
    console.log("B: ", b);
    if (c)
        console.log("C: ", c);
}
showNumbers(1, 2, 3);
showNumbers(10, 20);
//9- validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá ${firstName} ${lastName}, como vai?`);
    }
    return (`Olá ${firstName}`);
}
console.log(advancedGreeting('Ana', 'Beatriz'));
console.log(advancedGreeting('Victoria'));
// 10- union type - so existe no typescript
function showBalance(balance) {
    console.log(`O saldo da conta é ${balance}`);
}
showBalance(5000);
showBalance("5000");
const arr2 = [1, "ana"];
console.log(arr2);
// 11- avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O id é ${id}`);
}
showId(1);
showId("200");
const showCoords = (obj) => {
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`);
};
const coordObj = {
    x: 34,
    y: 50,
    z: 70
};
showCoords(coordObj);
const somePerson = { name: 'John', age: 34 };
console.log(somePerson);
//O type não aceita ser declarado duas vezes como a interface, não aceita fazer alteração
// type personType = {
//     name: string
// };
// type personType = {
//     name: string
// };
// 15- literal types
let test;
test = 'Testando';
console.log(test);
function showDirection(direction) {
    console.log(`A direção é ${direction}`);
}
showDirection("left");
// showDirection("top")
// 16- non null assertion operator
// colocar interrogacao na variavel significa opcional - exemplo: text?
const p = document.getElementById('some-p');
console.log(p.innerText);
// 17- bigint
let n;
// n = 1; //n aceita
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18- symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolB === symbolA);
