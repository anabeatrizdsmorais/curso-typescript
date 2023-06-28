"use strict";
// 1- tupo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`);
    if (product.isAvailable)
        console.log('O produto está diponivel');
}
const shirt = {
    name: 'Camisa',
    price: 25.99,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`O usuario tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é ${user.role}`);
    }
}
const u1 = {
    email: 'ana@email.com', role: 'Admin'
};
const u2 = {
    email: 'beatriz@email.com'
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca); // n deixa mudar a variavel que recebe o readonly
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const ana = {
    name: 'Ana', age: 26
};
console.log(ana);
const goku = {
    name: 'Goku', age: 50, superpowers: ['Fala muito', 'Tem força']
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 20
};
console.log(arnold);
//7- readonly array
let myArray = ["Laranja", "Maça", "Banana"];
// myArray[3] = "Mamao"; //n deixa acontecer pois é readonly
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumbersArray = [1, 2, 3, 4, 5];
console.log(myNumbersArray);
const anotherUser = ["Matheus", 30];
console.log(anotherUser);
// 9- tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
