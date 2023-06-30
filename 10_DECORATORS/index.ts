// 1- exmplo decorator

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
