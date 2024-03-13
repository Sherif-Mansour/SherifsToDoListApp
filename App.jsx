/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const handleAddTask = task => {
    setTasks([...tasks, task]); // ... spread operator

    // tasks.push(task);
    // setTasks(tasks);

    // setTasks((prev) => [...prev, task]);

    // setTasks(tasks.concat(task));
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={handleAddTask} />
    </SafeAreaView>
  );
}

export default App;
