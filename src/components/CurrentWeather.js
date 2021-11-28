import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

import {
  convertToFahrenheit,
  getArtResourceForWeatherCondition,
} from '../utils/WeatherUtils';
import {selectIsCelsius} from '../redux/WeatherState';

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
  const isCelsiusSelected = useSelector(selectIsCelsius);
  {
    isCelsiusSelected
      ? Math.floor(temp)
      : Math.floor(convertToFahrenheit(temp));
  }
  return (
    <View>
      <View style={styles.center}>
        <Image style={styles.weatherIconStyle} source={imgSrc} />
        <View style={styles.flexRow}>
          <Text style={styles.tempStyle}>
            {isCelsiusSelected
              ? Math.floor(temp)
              : Math.floor(convertToFahrenheit(temp))}
            °
          </Text>
          <Text style={styles.metricStyle}>
            {isCelsiusSelected ? 'C' : 'F'}
          </Text>
        </View>
        <Text>{desc}</Text>
        <Text>
          {isCelsiusSelected
            ? Math.floor(min)
            : Math.floor(convertToFahrenheit(temp))}
          °{' '}
          {isCelsiusSelected
            ? Math.floor(max)
            : Math.floor(convertToFahrenheit(temp))}
          °
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
    marginTop: 8,
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
    fontSize: 60,
    fontFamily: 'ProximaNova-Light',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomDetails: {
    alignItems: 'center',
  },
  metricStyle: {
    marginTop: 10,
    marginLeft: 4,
    fontSize: 18,
    fontFamily: 'ProximaNova-Semibold',
  },
  flexRow: {
    flexDirection: 'row',
  },
});
export default React.memo(CurrentWeather);
