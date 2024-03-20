import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MainLayout = ({children}) => {
  return (
    <>
      {children}
      <Text style={{marginTop: 15, fontSize: 16, textAlign: 'center'}}>
        This is the footer
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
