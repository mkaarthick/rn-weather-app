import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Surface} from 'react-native-paper';
import {getArtResourceForWeatherCondition} from '../utils/WeatherUtils';

const WeatherIcon = ({type, shadow}) => {
  const id = getArtResourceForWeatherCondition(type);
  if (shadow) {
    return (
      <Surface style={styles.surfaceContainer} elevation={10}>
        <Image source={id} style={styles.imageStyle} />
      </Surface>
    );
  } else {
    return <Image source={id} style={styles.imageStyle} />;
  }
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
