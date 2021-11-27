import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Surface} from 'react-native-paper';
import {getArtResourceForWeatherCondition} from '../utils/WeatherUtils';

const WeatherIcon = ({type}) => {
  console.log('render icon');
  const id = getArtResourceForWeatherCondition(type);
  return (
    <Surface style={styles.surfaceContainer}>
      <Image source={id} style={styles.imageStyle} />
    </Surface>
  );
};
const styles = StyleSheet.create({
  surfaceContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 40,
    height: 40,
  },
});
export default React.memo(WeatherIcon);