"use strict";
//1- campos em classes
class User {
}
const ana = new User();
console.log(ana);
ana.name = "Beatriz";
console.log(ana);
//2- constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const beatriz = new NewUser("Beatriz", 26);
console.log(beatriz);
// 3- campos readonly em classes
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const corolla = new Car('Corolla');
console.log(corolla);
console.log(corolla.wheels);
corolla.name = "Corola Turbo";
// corolla.wheels = 5; // n deixa alterar pois é readonly
console.log(corolla);
//4 - herança e super
//tudo que ta na classe pai tem que da no metodo super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
//5- metodos
class Dwaf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwaf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
// 6- o this em classes
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhao do modelo ${this.model}, que tem ${this.hp} cavalos de potencia.`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
console.log(volvo);
volvo.showDetails();
scania.showDetails();
// 7- getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const anadsm = new Person("ANA BEATRIZ", "DOS SANTOS MORAIS");
console.log(anadsm);
console.log(anadsm.name);
console.log(anadsm.surname);
console.log(anadsm.fullName);
//8- setters
class Coords {
    // constructor() {
    // }
    set fillX(x) {
        if (x === 0)
            return;
        this.x = x;
        console.log(`x inserido com sucesso!`);
    }
    set fillY(y) {
        if (y === 0)
            return;
        this.y = y;
        console.log(`y inserido com sucesso!`);
    }
    get getCoords() {
        return `x: ${this.x} | y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 100;
myCoords.fillY = 500;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é: ${this.title}`;
    }
}
const blog = new blogPost("A raposa");
console.log(blog);
console.log(blog.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é: ${this.title}`;
    }
}
const teste = new blogPost("A pedra");
console.log(teste);
console.log(teste.itemTitle());
// 10- override de metodos
