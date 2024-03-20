import React from 'react';
import {SafeAreaView} from 'react-native';

import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

const HomeScreen = ({}) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const handleAddTask = task => {
    setTasks([...tasks, task]); // ... spread operator

    // tasks.push(task); // setTasks(tasks); // setTasks((prev) => [...prev, task]); // setTasks(tasks.concat(task));
  };

  return (
    <>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={handleAddTask} />
        <button
          title="Go to about"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
