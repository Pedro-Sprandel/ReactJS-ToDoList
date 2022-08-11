import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { EditForm, Form, Task } from './components';

const App = () => {

  const [tasks, setTasks] = useState([]);

  const [isEdit, setIsEdit]= useState(false);

  const [editValue, setEditValue] = useState('');

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

  const editTask = (text) => {
    setIsEdit(true)
    setEditValue(text);
  };

  const saveEdit = (id, text) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return ({...task, title: text})
      } else {
        return task
      }
    })
    setTasks(updatedTasks)
  }

  const cancelEdit = () => {
    setIsEdit(false);
  }; 

  const deleteTask = (id) => {
    const updatedTaskList = tasks.filter((task) => task.id !== id)
    const updatedTasksIndex = updatedTaskList.map((task) => {
      return ({...task, id: updatedTaskList.indexOf(task)})
    })
    setTasks(updatedTasksIndex)
  };

  return (
    <div className="app flex flex-col items-center">
      <Helmet>
        <style>{'body {background-color: rgb(55, 65, 81); padding: 5vw;} '}</style>
      </Helmet>

      <h1 className="text-4xl text-white">My to do list</h1>

      <div className="my-12 w-1/2">
        {isEdit ? (
          <EditForm value={editValue} setValue={setEditValue} handleSave={saveEdit} handleCancel={cancelEdit} />
        ) : (
          <Form handleSubmit={addTask} />
        )}
      </div>

      {tasks.map((task, index) => (
        <div className={index < tasks.length - 1 ? "w-1/2 mb-4" : "w-1/2"}>
          <Task id={task.id} data={task} handleEdit={editTask} handleDelete={deleteTask} onChangeStatus={changeTaskStatus} />
        </div>
      ))}
    </div>
  );
}

export default App;
