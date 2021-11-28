/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, LogBox} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import AppNavigation from './src/navigation/AppNavigation';
import store from './src/redux/Store';
import {fontConfig} from './src/utils/Fontconfig';
const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};
const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <View style={styles.flexContainer}>
          <StatusBar
            barStyle="light-content"
            translucent={true}
            backgroundColor={'transparent'}
          />
          <AppNavigation />
        </View>
      </PaperProvider>
    </StoreProvider>
  );
};
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});
export default App;
