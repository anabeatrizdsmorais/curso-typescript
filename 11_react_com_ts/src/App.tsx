import React, { createContext } from 'react';

// 4 - importacao de components 
import FirstComponent from './components/FirstComponent';

// 5- desestruturando props
import SecondComponent from './components/SecondComponent';

// 6- destruturing
import Destructuring, {Category} from './components/Destructuring';

// 7- useState
import StateComponents from './components/StateComponents';

//10- utilizando context
import Context from './components/Context';

// 8- type
type TextOrNull = string | null
type fixed = "Isso" | "Disso" | "Cansada"

// 9- context

interface IAppContext {
    language: string
    framework: string
    projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
    // 1- variaveis no react

    const name: string = 'ana';
    const age: number = 26;
    const isWorking: boolean = true;


    // 2- funções

    const userGreeting = (name: string): string => {
        return `Olá ${name}`
    }

    // 8- type
    const myText: TextOrNull = "Tem algum texto aqui";
    let mySecondText: TextOrNull = null;

    const testandoFixed: fixed = "Isso"
    // mySecondText = "OPA!!!";
    
    // 9- context api

    const contextValue: IAppContext = {
        language: "Javascript",
        framework: "Express",
        projects: 5
    };

    return (
        <AppContext.Provider value={contextValue}>

            <div className="App">
                <h1>Typescript com React</h1>
                <div>
                    Nome: {name} <br></br>
                    Idade: {age} <br></br>
                    {isWorking && (
                    <div>
                        <p>Está trabalhando.</p>
                    </div>
                    )}
                    <hr />
                    {userGreeting(name)}
                    <hr />
                    <FirstComponent />
                    <hr />
                    <SecondComponent name={"Segundo componente"} />
                    <hr />
                    <Destructuring 
                        title='Primeiro post' 
                        commentsQty={4} 
                        content='Hmmmmm' 
                        tags={["ts", "js"]} 
                        category={Category.TS}
                    />
                    <hr />
                    <Destructuring 
                        title='Segundo post' 
                        commentsQty={6} 
                        content='Hmmmmm22222' 
                        tags={["ts", "js"]} 
                        category={Category.JS}
                    />
                    
                    <hr />
                    <StateComponents />
                    <hr />

                    {
                        myText && <p>Tem texto na variavel</p>
                    }
                    {
                        mySecondText && <p>Tem texto na variavel</p>
                    }
                    {
                        testandoFixed && <p>Tem texto na variavel</p>
                    }
                </div>
            </div>
            <hr />
            <Context />
        </AppContext.Provider>
    );
}

export default App;
