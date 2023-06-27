// 1- void

function semRetorno():void {
    console.log('Essa funcao n tem retorno');
}

semRetorno();

// 2- callback sem argumento / callback como argumento

function greeting(name: string):string {
    return `Olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando a função");
    const greet = f(userName);

    console.log(greet);
}

preGreeting(greeting, "Ana");
preGreeting(greeting, "Elaine");

// 3- generic function

function firstElement<T>(arr: T[]): T {
    return arr[0];
} 

console.log(firstElement([1,2,3]));
console.log(firstElement(['a','b','c']));

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects(
    {
        name: "Ana"
    }, {
        age: 26,
        job: "Programmer"
    }
)

console.log((newObject));

// 4- constraints em generic function

function biggestNumber<T extends number | string> (a: T, b: T): T {
    let biggest: T;

    if(+a > +b) {
        biggest = a
    } else biggest = b;

    return biggest
}

console.log(biggestNumber(5,3));
console.log(biggestNumber("12","5"));

// 5- definir tipos de parametros

function mergeArray<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2);
}

console.log(
    mergeArray([1,2,3], [5,6])
);

console.log(
    mergeArray<number | string>([1,2,3], ["teste", "testando"])
);


//6- argumentos opcionais

function modernGreeting(name: string, greet?: string) {
    if(greet)   
        return(`Olá ${greet} ${name}, tudo bem?`);

    return(`Olá ${name}, tudo bem?`);
    
}

console.log(modernGreeting("Ana"));
console.log(modernGreeting("Beatriz", "Dra"));

// 7- parametros default

function somaDefault (n: number, m = 10): number {
    return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(15, 15));

// 8- tipo unknown

function doSomething (x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0]);
    } else if(typeof x === "number") {
        console.log("x é um numero");
    }
}

doSomething(5);
doSomething([1,2,3]);

// 9- tipo never

function showErrorMessage (msg: string): never {
    throw new Error(msg);
}

/* console.log(showErrorMessage('Algum erro')); */


//10- rest operator com TS

function sumAll (...n: number[]) {
    return n.reduce((number, sum) => number+sum)
}

console.log(sumAll(1,2,3,4,5));
console.log(sumAll(5,5,5,5));

//11- destructuring com TS

function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome o produto é ${name} e o preço dele é R$ ${price}`;
}

const camisa = {
    name: 'Camisa', price: 25.50
}

console.log(showProductDetails(camisa));

