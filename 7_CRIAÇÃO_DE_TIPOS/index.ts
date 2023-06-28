//1- generics

function showData<T> (arg: T): string {
    return `O dado é: ${arg}`;
}

console.log(showData('Ana'));
console.log(showData(26));

//2- constraints em generics

function showProductName<T extends{name: string}>(obj: T) {
    return `O nome do produto é ${obj.name}`;
}

const obj = {
    name: 'Caderno',
    cor: 'Verde'
}

const obj2 = {
    name: 'Carro',
    wheels: 4,
    engine: 1.6
}

console.log(showProductName(obj));
console.log(showProductName(obj2));

//3- interfaces com generics

interface MyObj<T, U, Q>{
    name: string
    wheels: T
    engine: U,
    color: Q
}

type Car = MyObj<number, number, string>
type Pen = MyObj<boolean, boolean, string>

const myCar: Car = {
    name: 'Fusca',
    wheels: 4,
    engine: 1.0,
    color: 'Branco'
}

const myPen: Pen = {
    name: 'Caneta BIC',
    wheels: false,
    engine: false,
    color: 'Azul'
}

console.log(myCar);
console.log(myPen);

// 4- type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return ` A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
    hd: '2TB', 
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'));
// console.log(getSomeKey(server, 'teste'));


// 5- keyof type operator

type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharName (obj: Character, name: C):string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: 'Ana',
    age: 26, 
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'));

// 6- typeof type operator

const userName: string = 'Victoria';

const userName2: typeof userName = 'Beatriz';


console.log(userName);
console.log(userName2);

type x = typeof userName

const userName3: x = "Elaine";

console.log(userName3);


// 7- indexed access types

type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhao para pouca carga'
}

function showKm (km: Km) {
    console.log(`O veiculo tem a km de ${km}`);
}

showKm(5000)

const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.kg);

// 8- conditional types

interface A {}
interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string;

const someVar: myType = 5

console.log(someVar);

type myTypeB = Teste extends {showNumber(): number} ? string : boolean;


//9- teplate literals type

type testeA = "Teste"
type CustomType = `some ${testeA}`

// const testing: CustomType = 'some teste';

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`;

// console.log(a3);
