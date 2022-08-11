import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { EditForm, Form, Task } from './components';

export default function App () {
  const [tasks, setTasks] = useState([]);

  const [isEdit, setIsEdit]= useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const addTask = (value, e) => {
    e.preventDefault();
    if (value === '') return
    const newTask = { id: tasks.length, title: value, completed: false}
    setTasks([...tasks, newTask])
  };

  const changeTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return ({...task, completed: !task.completed})
      } else {
        return task
      }
    })
    setTasks(updatedTasks)
  }

  const editTask = (data) => {
    setIsEdit(true);
    setTaskToEdit(data);
  };

  const saveEdit = (text) => {
    const updatedTasks = tasks.map((task) => {
      if (task === taskToEdit) {
        return ({...task, title: text})
      } else {
        return task
      }
    })
    setTasks(updatedTasks)
    setIsEdit(false);
  }

  const cancelEdit = () => {
    setIsEdit(false);
  }; 

  const deleteTask = (id) => {
    console.log('deleteTask');
    const updatedTaskList = tasks.filter((task) => task.id !== id)
    const updatedTasksIndex = updatedTaskList.map((task) => {
      return ({...task, id: updatedTaskList.indexOf(task)})
    })
    setTasks(updatedTasksIndex)
  };

  return (
    <div className="app flex flex-col items-center">
      <Helmet>
        <style>{'body {background-color: rgb(55, 65, 81);} '}</style>
      </Helmet>

      <h1 className="text-4xl mt-12 text-white">My to do list</h1>

      <div className="my-12 lg:w-1/2 w-5/6">
        {isEdit ? (
          <EditForm initialValue={taskToEdit.title} handleSave={saveEdit} handleCancel={cancelEdit} />
        ) : (
          <Form handleSubmit={addTask} />
        )}
      </div>

      {tasks.map((task, index) => (
        <div className={index < tasks.length - 1 ? "lg:w-1/2 w-5/6 mb-4" : "lg:w-1/2 w-5/6"}>
          <Task data={task} handleEdit={editTask} handleDelete={deleteTask} onChangeStatus={changeTaskStatus} />
        </div>
      ))}
    </div>
  );
}
