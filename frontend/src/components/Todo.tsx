import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { randomUUID } from 'crypto';

interface task {
    task_id: number;
    title: string;
    completed: boolean;
    description: string;
}

const TaskDiv = ({ taskID, taskName, taskHandler, taskList }: any) => {
    const [checkbox, setCheckbox] = useState(false);
    const checkboxHandler = () => {
        setCheckbox(!checkbox);
    }

    const addTask = (task: task) => {
        taskHandler([...taskList, task])
    }
    const deleteTask = (id: any) => {
        console.log('task id to be deleted:::', id);
        const newTaskList = taskList.filter((task: task) => task.task_id !== Number(id));
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
                <button id={taskID} className='text-sm m-1 text-zinc-200 font-bold' onClick={(event: any) => deleteTask(event.currentTarget.id)}>delete</button>
            </div>
        </>
    )
}

const NewTaskModal = (props: any) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    let newTask: task = {} as task;
    useEffect(() => {
        // newTask.completed = false;
        // newTask.task_id = Math.random()*100;
        // newTask.title = taskName;
        // newTask.description = taskDescription;
        // props.taskHandler(props.taskList);
        // console.debug('taskname: ', taskName);
    }, [taskName, taskDescription])

    const addNewTask = ()=>{
        newTask.completed = false;
        newTask.task_id = Math.random()*100;
        newTask.title = taskName;
        newTask.description = taskDescription;
        props.add(newTask);
    }
    return (
        <>
            <div className="modal">
                <div className='modal-box relative'>
                    <label htmlFor="new-task-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                    <input className="input input-bordered text-lg m-2" type="text" placeholder="Task Name" onChange={(event: any)=>setTaskName(event.target.value)}  />
                    <input className="input input-bordered input-lg w-full max-w-xs m-2"  type="text" placeholder="Task Description" onChange={(event: any)=>setTaskDescription(event.target.value)}/>
                    <div className="modal-action">
                        <label className="btn " htmlFor="new-task-modal" onClick={(event: any)=> addNewTask()}>
                            Add
                        </label>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Todo() {
    const [taskList, setTaskList] = useState([{ task_id: 1, title: 'Browse Angelist for Opps', "completed": false, "description":"" }]);
    const taskHandler = (task: Array<task>) => {
        console.debug('new task::', task)
        setTaskList(task);
    }


    const addTask = (newTask:task)=>{
        setTaskList([...taskList, newTask])
    }

    // make api call and get task list
    useEffect(() => {
        axios.get("http://localhost:8000/todo_api/todo")
        // , {method:'GET',  headers: {'Content-Type': 'application/json'}    })
            .then((response: any) => {console.log('response data::', response.data);setTaskList(response.data)})
            .catch((error: any) => console.log(error))
    }, []);

    const divItems = taskList.map((todo) => (
        <div key={todo.task_id} >
            <TaskDiv taskID={todo.task_id} taskName={todo.title} taskHandler={taskHandler} taskList={taskList} />
        </div>
    ));

    return (
        <>
            <label htmlFor="new-task-modal" className="btn modal-button text-white rounded-md border shadow-xl m-10 p-4 font-bold text-2xl">
                Add New Task
            </label>
            <input type="checkbox" id="new-task-modal" className="modal-toggle" />
            <NewTaskModal add={addTask} />
            <ul>{divItems}</ul>
        </>
    );
}


export default Todo