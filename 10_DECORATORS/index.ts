
// // 1- exmplo decorator

function myDecorator () {
    console.log("Iniciando decorator");
    
    return function(
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator!");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);  
    };
}

class myClass {

    name!: string;

    @myDecorator()
    
    testing() {
        console.log("Terminando execução de metodo");
    }
}

const myObj = new myClass();

myObj.testing();

// // 2- multiplos decorators

function a() {
    return function(
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
    ){
        console.log("executou a.");
    };
}

function b() {
    return function(
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
    ){
        console.log("executou b.");
    };
}

function c() {
    return function(
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
    ){
        console.log("executou c.");
    };
}

class MultipleDecorators {
    @c()
    @a()
    @b() //o primeiro mais perto da funcao retorna primeiro
    testing() {
        console.log('terminando execução');
    }
}

const multiple = new MultipleDecorators();

multiple.testing();

// // 3- class decorator

function classDec(constructor: Function) {
    console.log(constructor);
    if(constructor.name === "User"){
        console.log("Criando usuario");
    }
}
@classDec
class User {
    name: string

    constructor(name: string) {
        this.name = name;
    }
}

const victor = new User("Victor");
console.log(victor);

// // 4- decorator de metodo

function enumerable (value: boolean) {
    return function (
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value
    }
}
class Machine {
    name

    constructor(name: string) {
        this.name = name;
    }

    @enumerable(true) //false não mostra
    showName() {
        console.log(this);
        
        return `O nome da maquina é ${this.name}`
    }
}

const trator = new Machine("Trator")
console.log(trator.showName())

//5- accessor decorator

class Monster {
    name?
    age?

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName(){
        return `Nome do monstro: ${this.name}`
    }
    
    @enumerable(true)
    get showAge(){
        return `Idade do monstro: ${this.age}`
    }
}

const monstro = new Monster("Monstro", 26);
console.log(monstro);

// 6- property decorator


function formatNumber() {
    return function(target: Object, propertyKey: string){
        let value: string

        const getter = function () {
            return value
        }

        const setter = function (newVal: string){
            value = newVal.padStart(5, "0");
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string){
        this.id = id;
    }
}

const newId = new ID('8');
console.log(newId);
console.log(newId.id);

// 7- exemplo real com class decorator 

function createdDate(created: Function){
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id 
    createdAt?: Date;

    constructor (id: number) {
        this.id = id;
    }
}
@createdDate
class Pen {
    id 

    constructor (id: number) {
        this.id = id;
    }
}

const newBook = new Book(12);
console.log(newBook);
console.log(newBook.createdAt);

const newPen = new Pen(55);
console.log(newPen);

//8- exemplo real: method decorator

function checkIfUserPosted () {
    return function (target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value 
        console.log(childFunction);
        descriptor.value = function(...args: any[]){
            if(args[1] === true){
                console.log("Usuario ja postou.");
                return null;
            } else {
                childFunction.apply(this, args);
            }
        }
        return descriptor;
    }
}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true;
        console.log(`Post do usuario -> ${content}`);
        
    }
}

const newPost = new Post();
newPost.post("Meu primeiro post", newPost.alreadyPosted);
newPost.post("Meu primeiro post", newPost.alreadyPosted);

// 9- exmplo real: property decorator

function Max(limit: number) {
    return function (target: Object, propertyKey: string) {
        let value: string

        const getter = function () {
            return value
        }

        const setter = function (newVal: string){
            if(newVal.length > limit) {
                console.log(`O valor deve ter no minimo ${limit} digitos`);
                return
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    }
}

class Admin {
    @Max(10)
    username

    constructor(username: string) {
        this.username = username;
    }
}

const beatriz = new Admin("Beatriz Ana");
console.log(beatriz);


