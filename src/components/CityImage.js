import React from 'react';
import {Image, StyleSheet} from 'react-native';
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
        style={styles.blur}
        source={{uri: url}}
        blurRadius={40}
      />
    );
  } else {
    return (
      <Image resizeMode={'cover'} style={styles.rounded} source={{uri: url}} />
    );
  }
};
const styles = StyleSheet.create({
  blur: {
    height: '100%',
  },
  rounded: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
export default React.memo(CityImage);
