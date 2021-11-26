/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <View style={styles.flexContainer}>
      <StatusBar barStyle="light-content" />
      <AppNavigation />
    </View>
  );
};
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});
export default App;
