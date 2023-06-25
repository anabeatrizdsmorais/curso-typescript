// 1- arrays

let numbers: number[] = [1,2,3];
numbers.push(4);
console.log(numbers);

const names: string[] = ['Ana', 'Beatriz', 'Morais'];
names.push('Victoria');
console.log(names);


//2 - outra sintaxe array
console.log('Outra sintaxe');

const nums: Array<number> = [10,20,30];
nums.push(40);
console.log(nums);

// 3- tipo any
const arr1: any = [1, 'teste', true, [1,2], {nome: 'Ana'}];
arr1.push([1,2,3,4])
console.log(arr1);

//4- tipo de parametro de funcoes

function soma(a: number, b: number) {
    console.log(a+b);
}
soma(2,2);

//5- tipo de retorno de funções
function greeting(name: string): string{
    return `Olá ${name}`;
}
console.log(greeting('Ana'));

//6- funcoes anonimas
setTimeout(() => {
    const sallary: number = 4000;
    // console.log(parseFloat(sallary)); //erro pois o parseFloat so converte string
    // console.log(sallary);
}, 2000);

//7- tipos de objetos

function passCoordinates(coord: {x: number, y: number}) {
    console.log("x COORDinates: ", coord.x);
    console.log("y COORDinates: ", coord.y);
}
const objCoordinates = {
    x: 329, y: 84.5
}
passCoordinates(objCoordinates)

// 8- propriedades opcionais

function showNumbers(a: number, b: number, c?: number){
    console.log("A: ", a);
    console.log("B: ", b);
    if(c) console.log("C: ", c);
}

showNumbers(1,2,3);
showNumbers(10,20);

//9- validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string ){
    if(lastName !== undefined) {
        return(`Olá ${firstName} ${lastName}, como vai?`);
    }
    return(`Olá ${firstName}`);
}
console.log(advancedGreeting('Ana', 'Beatriz'));
console.log(advancedGreeting('Victoria'));

// 10- union type - so existe no typescript

function showBalance(balance: string | number){
    console.log(`O saldo da conta é ${balance}`);
}

showBalance(5000);
showBalance("5000");

const arr2: Array<number | string> = [1, "ana"];
console.log(arr2);

// 11- avançando em union types

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuário não aprovado";
    }

    return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// 12- type alias

type ID = string | number;

function showId (id: ID){
    console.log(`O id é ${id}`);
}

showId(1);
showId("200");

//13 - interfaces

interface Point {
    x: number
    y: number
    z: number
}

const showCoords = (obj: Point) => {
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`);
}

const coordObj:Point = {
    x: 34,
    y: 50,
    z: 70
}

showCoords(coordObj);

//14 - interface x type alias

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: 'John', age: 34}
console.log(somePerson);

//O type não aceita ser declarado duas vezes como a interface, não aceita fazer alteração
// type personType = {
//     name: string
// };

// type personType = {
//     name: string
// };

// 15- literal types

let test: "Testando";

test= 'Testando';

console.log(test);

function showDirection(direction: "left" | "right" | "center"){
    console.log(`A direção é ${direction}`);
}

showDirection("left")
// showDirection("top")

// 16- non null assertion operator
// colocar interrogacao na variavel significa opcional - exemplo: text?

const p = document.getElementById('some-p');
console.log(p!.innerText);

// 17- bigint

let n: bigint;
// n = 1; //n aceita
n = 1000n
console.log(n);
console.log(typeof n);
console.log(n + 100n);

// 18- symbol

let symbolA:symbol = Symbol("a");
let symbolB = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolB === symbolA);
