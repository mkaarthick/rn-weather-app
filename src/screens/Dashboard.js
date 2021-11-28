/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, Surface} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {HorizontalSwipe} from '../components/HorizontalSwipe';
import {getCurrentWeather, selectLoading} from '../redux/WeatherState';
import CityImage from '../components/CityImage';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, []);
  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View style={styles.flexStyle}>
        <View style={styles.blurContainer}>
          <CityImage blur={true} />
        </View>
        <View style={styles.imageContainer}>
          <Surface style={styles.surface}>
            <CityImage />
          </Surface>
        </View>
        <HorizontalSwipe />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  surface: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    position: 'absolute',
    elevation: 12,
  },
  blurContainer: {
    height: '25%',
    backgroundColor: '#454856',
  },
});
