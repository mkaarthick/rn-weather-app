/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';

import AppNavigation from './src/navigation/AppNavigation';
import store from './src/redux/Store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <View style={styles.flexContainer}>
        <StatusBar barStyle="light-content" />
        <AppNavigation />
      </View>
    </StoreProvider>
  );
};
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});
export default App;
