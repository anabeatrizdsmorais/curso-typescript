//1- campos em classes

class User {
    name!: string
    age!: number

    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }
}

const ana = new User();

console.log(ana);

ana.name = "Beatriz";

console.log(ana);

//2- constructor

class NewUser {
    name
    age 

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const beatriz = new NewUser("Beatriz", 26);

console.log(beatriz);

// 3- campos readonly em classes

class Car {
    name
    readonly wheels = 4

    constructor (name: string) {
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
    name 

    constructor (name: string) {
        this.name = name;
    }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name);
        this.guns = guns;
    }
}


const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer);

//5- metodos

class Dwaf {
    name

    constructor (name: string) {
        this.name = name;
    }

    greeting() {
        console.log("Hey Stranger!");
    }
}

const jimmy = new Dwaf("Jimmy");

console.log(jimmy.name);

jimmy.greeting()

console.log(jimmy);

// 6- o this em classes

class Truck {
    model
    hp

    constructor(model: string, hp: number) {
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
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    get fullName(){
        return `${this.name} ${this.surname}`
    }
}

const anadsm = new Person("ANA BEATRIZ", "DOS SANTOS MORAIS");

console.log(anadsm);
console.log(anadsm.name);
console.log(anadsm.surname);

console.log(anadsm.fullName);

//8- setters

class Coords{

    x!: number;
    y!: number;

    // constructor() {
        
    // }

    set fillX(x: number) {
        if(x === 0) return 

        this.x = x

        console.log(`x inserido com sucesso!`);
    }
    
    set fillY(y: number) {
        if(y === 0) return 

        this.y = y

        console.log(`y inserido com sucesso!`);
    }

    get getCoords () {
        return `x: ${this.x} | y: ${this.y}`;
    }
}

const myCoords = new Coords();


myCoords.fillX = 100;
myCoords.fillY = 500;

console.log(myCoords);

console.log(myCoords.getCoords);

// 9-herdando interfaces - implements

interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title

    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
        return `O titulo do post é: ${this.title}`;
    }
}

const blog = new blogPost("A raposa");
console.log(blog);

console.log(blog.itemTitle());


class TestingInterface implements showTitle {
    title

    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
        return `O titulo é: ${this.title}`;
    }
}

const teste = new blogPost("A pedra");
console.log(teste);
console.log(teste.itemTitle());


// 10- override de metodos