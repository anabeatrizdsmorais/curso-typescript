"use strict";
//1- generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData('Ana'));
console.log(showData(26));
//2- constraints em generics
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const obj = {
    name: 'Caderno',
    cor: 'Verde'
};
const obj2 = {
    name: 'Carro',
    wheels: 4,
    engine: 1.6
};
console.log(showProductName(obj));
console.log(showProductName(obj2));
const myCar = {
    name: 'Fusca',
    wheels: 4,
    engine: 1.0,
    color: 'Branco'
};
const myPen = {
    name: 'Caneta BIC',
    wheels: false,
    engine: false,
    color: 'Azul'
};
console.log(myCar);
console.log(myPen);
// 4- type parameters
function getSomeKey(obj, key) {
    return ` A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Ana',
    age: 26,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
// 6- typeof type operator
const userName = 'Victoria';
const userName2 = 'Beatriz';
console.log(userName);
console.log(userName2);
const userName3 = "Elaine";
console.log(userName3);
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhao para pouca carga'
};
function showKm(km) {
    console.log(`O veiculo tem a km de ${km}`);
}
showKm(5000);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.kg);
const someVar = 5;
console.log(someVar);
// console.log(a3);
