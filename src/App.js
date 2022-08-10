import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Task } from './components';

const App = () => {

  const [tasks, setTasks] = useState([
    {"id": 0, "title": "Task 1", "completed": false},
    {"id": 1, "title": "Task 2", "completed": false}
  ]);

  const addTask = (value) => {
    if (value === '') return
    const newTask = { id: tasks.length, title: value, completed: false}
    setTasks([...tasks, newTask])
  };

  const updateStatus = () => {

  };

  return (
    <div className="app flex flex-col items-center">
      <Helmet>
        <style>{'body {background-color: rgb(55, 65, 81); padding: 5vw;} '}</style>
      </Helmet>

      <h1 className="text-4xl text-white">My to do list</h1>

      <div className="my-12 w-1/3">
        <Form handleSubmit={addTask} />
      </div>

      {tasks.map((task, index) => (
        <div className={index < tasks.length - 1 ? "w-1/3 mb-4" : "w-1/3"}>
          <Task data={task} />
        </div>
      ))}
    </div>
  );
}

export default App;
