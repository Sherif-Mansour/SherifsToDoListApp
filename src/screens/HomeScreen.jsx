import React from 'react';
import {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';

import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const handleAddTask = task => {
    setTasks([...tasks, task]); // ... spread operator

    // tasks.push(task); // setTasks(tasks); // setTasks((prev) => [...prev, task]); // setTasks(tasks.concat(task));
  };

  return (
    <>
      <MainLayout>
        <SafeAreaView>
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={handleAddTask} />
          <Button
            title="Go to about"
            onPress={() => navigation.navigate('About')}
          />
        </SafeAreaView>
      </MainLayout>
    </>
  );
};

export default HomeScreen;
