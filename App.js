/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {CityList} from './src/screens/CityList';

const App = () => {
  return (
    <SafeAreaView style={styles.flexContainer}>
      <CityList />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});
export default App;
