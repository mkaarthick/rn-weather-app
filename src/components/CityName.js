import React from 'react';
import {useSelector} from 'react-redux';
import {selectActivePage, selectCities} from '../redux/WeatherState';
import {Text} from 'react-native-paper';

const CityName = () => {
  const activePage = useSelector(selectActivePage);
  const cities = useSelector(selectCities);
  const name = cities[activePage].name;
  return <Text style={{fontSize: 22}}>{name}</Text>;
};

export default React.memo(CityName);
