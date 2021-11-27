import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {selectActivePage, selectCities} from '../redux/WeatherState';

const CityImage = ({blur = false}) => {
  const activePage = useSelector(selectActivePage);
  const cities = useSelector(selectCities);
  const url = cities[activePage].image;
  if (blur) {
    return (
      <Image
        resizeMode={'cover'}
        style={{height: '100%'}}
        source={{
          uri: url,
        }}
        blurRadius={40}
      />
    );
  } else {
    return (
      <Image
        resizeMode={'cover'}
        style={{width: 100, height: 100, borderRadius: 100 / 2}}
        source={{
          uri: url,
        }}
      />
    );
  }
};

export default React.memo(CityImage);
