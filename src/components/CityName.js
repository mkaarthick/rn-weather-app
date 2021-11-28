import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import {useSelector} from 'react-redux';
import {selectActivePage, selectCities} from '../redux/WeatherState';

const CityName = () => {
  const activePage = useSelector(selectActivePage);
  const cities = useSelector(selectCities);
  const name = cities[activePage].name;
  return <Text style={styles.city}>{name}</Text>;
};

const styles = StyleSheet.create({
  city: {
    fontSize: 22,
    fontFamily: 'ProximaNova-Semibold',
  },
});
export default React.memo(CityName);
