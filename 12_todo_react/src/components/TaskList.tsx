import React from 'react'
import { ITask } from '../interfaces/Task'
import styles from './TaskList.module.css'

interface Props {
    taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id}> 
                        <div>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </div>
                        <div>
                            <i className='bi bi-pencil'></i>
                            <i className='bi bi-trash'></i>
                        </div>
                    </div>
                ))
            ): (
                <p>Não há tarefas cadastradas</p>
            )}
        </>
    )
}

export default TaskList;