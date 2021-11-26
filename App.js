/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {Dashboard} from './src/screens/Dashboard';

const App = () => {
  return (
    <SafeAreaView style={styles.flexContainer}>
      <Dashboard />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});
export default App;
