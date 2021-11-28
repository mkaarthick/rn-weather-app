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
        <Image style={{width: 120, height: 120}} source={imgSrc} />
        <Text style={{fontSize: 50}}>{Math.floor(temp)}°</Text>
        <Text>{desc}</Text>
        <Text>
          {Math.floor(min)}° {Math.floor(max)}°
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.iconStyle}
            source={require('../assets/icon_pressure.png')}
          />
          <Text style={styles.otherStyle}>{pressure} hPa</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.iconStyle}
            source={require('../assets/icon_drop.png')}
          />
          <Text style={styles.otherStyle}>{humidity}%</Text>
        </View>
        <View style={{alignItems: 'center'}}>
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
});
export default React.memo(CurrentWeather);
