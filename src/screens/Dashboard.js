/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View} from 'react-native';
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
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <View style={{height: '25%', backgroundColor: '#454856'}}>
          <CityImage blur={true} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Surface
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              position: 'absolute',
              elevation: 12,
            }}>
            <CityImage />
          </Surface>
        </View>
        <HorizontalSwipe />
      </View>
    );
  }
};
