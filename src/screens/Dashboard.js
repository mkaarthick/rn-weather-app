/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Surface} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {HorizontalSwipe} from '../components/HorizontalSwipe';
import {getCurrentWeather} from '../redux/WeatherState';
import CityImage from '../components/CityImage';

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, []);
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
};
