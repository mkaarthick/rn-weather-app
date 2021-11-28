import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getArtResourceForWeatherCondition} from '../utils/WeatherUtils';

const CurrentWeather = ({
  weatherId,
  temp,
  desc,
  min,
  max,
  humidity,
  wind,
  pressure,
}) => {
  const imgSrc = getArtResourceForWeatherCondition(weatherId);
  return (
    <View>
      <View style={styles.center}>
        <Image style={styles.weatherIconStyle} source={imgSrc} />
        <Text style={styles.tempStyle}>{Math.floor(temp)}°</Text>
        <Text>{desc}</Text>
        <Text>
          {Math.floor(min)}° {Math.floor(max)}°
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomDetails}>
          <Image
            style={styles.iconStyle}
            source={require('../assets/icon_pressure.png')}
          />
          <Text style={styles.otherStyle}>{pressure} hPa</Text>
        </View>
        <View style={styles.bottomDetails}>
          <Image
            style={styles.iconStyle}
            source={require('../assets/icon_drop.png')}
          />
          <Text style={styles.otherStyle}>{humidity}%</Text>
        </View>
        <View style={styles.bottomDetails}>
          <Image
            style={styles.iconStyle}
            source={require('../assets/icon_wind.png')}
          />
          <Text style={styles.otherStyle}>{Math.floor(wind * 2.237)} mph</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  otherStyle: {
    fontSize: 18,
  },
  iconStyle: {
    width: 32,
    height: 32,
  },
  weatherIconStyle: {
    width: 120,
    height: 120,
  },
  tempStyle: {
    fontSize: 50,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomDetails: {
    alignItems: 'center',
  },
});
export default React.memo(CurrentWeather);
