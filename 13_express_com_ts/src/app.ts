//para instalar
// npm install @types/express @types/node ts-node-dev typescript --save-dev

// 1- iniciando projeto
// console.log('Express + TS!!');

// 2- init express

import express, {Request, Response} from 'express';

const app = express();

// 3- rota com POST
app.use(express.json())
app.get('/', (req, res) => {
    return res.send("Olá Express")
})

// 3- rota com POST
app.post("/api/product", (req, res) => {
    console.log(req.body);

    return res.send("Produto adicionado");
})

// 4- rota para todos os verbos
app.all('/api/product/check', (req, res) => {
    //req.method  = VERBO HTTP

    if(req.method === 'POST') { 
        return res.send("Inseriu algum registro");
    } else if(req.method === 'GET') {
        return res.send("Leu algum registro");
    } else {
        return res.send('Não podemos realizar esta operação');
    }
})

// 5- interfaces do express

app.get('/api/interfaces', (req: Request, res: Response) =>{
    return res.send("Utilizando interfaces");
})


// 6- enviando json

app.get('/api/json', (req: Request, res: Response) => {


    return res.json({
        name: "Camiseta",
        price: 30.99,
        color: "Red",
        sizes: ["P", "M", "G"]
    });

})

// 7- router parameters
app.get('/api/product/:id', (req: Request, res: Response) => {
    console.log(req.params);

    const id = req.params.id;

    if(id === "1"){
        const product = {
            id: 1,
            name: "Camiseta",
            price: 30.99,
        }
        return res.json(product);
    } else {
        return res.send("Produto não encontrado");
    }

    
})


app.listen(3000, () => {
    console.log('executando na porta 8000');
})

