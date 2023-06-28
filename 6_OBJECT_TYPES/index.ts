// 1- tupo de objeto para função com interface

interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`);
    if(product.isAvailable) 
        console.log('O produto está diponivel');
}

const shirt:Product = {
    name: 'Camisa',
    price: 25.99,
    isAvailable: true
}

showProductDetails(shirt);

//2- propriedade opcionais em interfaces

interface User {
    email: string
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuario tem o email: ${user.email}`);
    if(user.role) {
        console.log(`A função do usuario é ${user.role}`);
        
    }
}

const u1: User = {
    email: 'ana@email.com', role: 'Admin'
}

const u2: User = {
    email: 'beatriz@email.com'
}

showUserDetails(u1);
showUserDetails(u2);

// 3- propriedade readonly

interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: 'VW',
    wheels: 4
}

console.log(fusca); // n deixa mudar a variavel que recebe o readonly

// 4- index signatura

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords);

// 5- herança de interfaces

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]

}

const ana: Human = {
    name: 'Ana', age: 26
}

console.log(ana);

const goku: SuperHuman = {
    name: 'Goku', age: 50, superpowers: ['Fala muito', 'Tem força']
}

console.log(goku);
console.log(goku.superpowers[1]);

//6- intersection types

interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 20
}

console.log(arnold);

//7- readonly array

let myArray: ReadonlyArray<string> = ["Laranja", "Maça", "Banana"];

// myArray[3] = "Mamao"; //n deixa acontecer pois é readonly

console.log(myArray);

myArray.forEach((item) => {
    console.log("Fruta: " + item);
})

myArray = myArray.map((item) =>{
    return `Fruta: ${item}`;
})

console.log(myArray);

//8- tuplas

type fiveNumbers = [number, number, number, number, number]

const myNumbersArray: fiveNumbers = [1,2,3,4,5];

console.log(myNumbersArray);

type nameAndAge = [string, number]
const anotherUser: nameAndAge = ["Matheus", 30]

console.log(anotherUser);

// 9- tuplas com readonly

function showNumbers(numbers: readonly [number, number] ) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}

showNumbers([1,2]);

