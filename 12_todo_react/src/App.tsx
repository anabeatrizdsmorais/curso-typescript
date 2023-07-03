import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import style from './App.module.css'; 
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


//Interface
import {ITask} from './interfaces/Task'


function App() {

    const [taskList, setTaskList] = useState<ITask[]>([]);

    return (
        <div className="">
            <Header />
            <main className={style.main}>
                <div>
                    <h2>O que você vai fazer?</h2>
                    <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
                </div>
                <div>
                    <h2>Suas tarefas:</h2>
                    <TaskList taskList={taskList}/>
                </div>
               
            </main>
            <Footer />
        </div>
    );
}

export default App;
