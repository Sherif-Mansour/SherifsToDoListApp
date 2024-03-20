import React from 'react';
import {StyleSheet, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({}) => {
  return (
    <>
      <MainLayout>
        <Text style={styles.header}>Sherif's To Do LIst App</Text>
        <Text style={styles.text}>Written by: Sherif Mansour</Text>
        <Text style={styles.text}>Date: March 20, 2024</Text>
      </MainLayout>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 28,
  },
  text: {
    fontSize: 24,
  },
});

export default AboutScreen;
