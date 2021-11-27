/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Surface} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {HorizontalSwipe} from '../components/HorizontalSwipe';
import {getCurrentWeather} from '../redux/WeatherState';

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{height: '25%', backgroundColor: '#454856'}}>
        <Image
          resizeMode={'cover'}
          style={{height: '100%'}}
          source={{
            uri: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzY0OTV8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrfGVufDB8MHx8fDE2MzcyMTcyMTc&ixlib=rb-1.2.1&q=80&w=400',
          }}
          blurRadius={50}
        />
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
          <Image
            resizeMode={'cover'}
            style={{width: 100, height: 100, borderRadius: 100 / 2}}
            source={{
              uri: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzY0OTV8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrfGVufDB8MHx8fDE2MzcyMTcyMTc&ixlib=rb-1.2.1&q=80&w=400',
            }}
          />
        </Surface>
      </View>
      <HorizontalSwipe />
    </View>
  );
};
