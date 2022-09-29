import React, { useState, useEffect } from 'react';
import { Interface } from 'readline';
import axios from 'axios';
const todoItems = [{ id: 1, title: 'Todo 1' }, { id: 2, title: 'Todo 2' }];

interface task{
    id: number;
    title: string;
}

const TaskDiv = ({ taskID, taskName, taskHandler, taskList}: any) => {
    const [checkbox, setCheckbox] = useState(false);
    const checkboxHandler = () => {
        setCheckbox(!checkbox);
    }

    const addTask = (task: task)=>{
        taskHandler([...taskList, task])
    }
    const deleteTask = (id: any)=>{
        console.log('task id to be deleted:::', id);
        const newTaskList = taskList.filter((task: task)=> task.id !== Number(id));
        console.debug('new task list:', newTaskList)
        taskHandler(newTaskList);
    }
 
    return (
        <>
            <div className={"checkbox-wrapper  m-2 rounded-md p-2 " + (checkbox ? "bg-green-400" : "bg-red-400")} key={taskID}>
                <label htmlFor="">
                    <input type="checkbox" onChange={(event: any) => checkboxHandler()} />
                    <span className='text-xl text-white ml-1 mr-3 font-bold'>  {taskName}</span>
                    
                </label>
                <button id={taskID} className='text-sm m-1 text-zinc-200 font-bold'>edit</button>
                <button id={taskID}  className='text-sm m-1 text-zinc-200 font-bold' onClick={(event: any)=>deleteTask(event.currentTarget.id)}>delete</button>
            </div>
        </>
    )
}

function Todo() {
    const [taskList, setTaskList] = useState([{ id: 1, title: 'Todo 1' }, { id: 2, title: 'Todo 2' }]);
    const taskHandler = (task: Array<task>)=>{
        setTaskList(task);
    }

    // make api call and get task list
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/todo_api/todo")
            .then((response: any) => console.log(response.data))
            .catch((error: any) => console.log(error))
    }, []);

    const divItems = taskList.map((todo) => (
        <div key={todo.id} >
            <TaskDiv taskID={todo.id} taskName={todo.title} taskHandler={taskHandler} taskList={taskList}  />
        </div>
    ));

    return (
        <>
            <button className='bg-redpink rounded-md border shadow-xl mb-10 p-4 text-white font-bold text-2xl'>Add New Task</button>
            <ul>{divItems}</ul>
        </>
    );
}


export default Todo