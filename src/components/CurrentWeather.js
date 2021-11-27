import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getArtResourceForWeatherCondition} from '../utils/WeatherUtils';

const CurrentWeather = ({weatherId, temp, desc, min, max, humidity}) => {
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
        <View>
          <Text style={styles.otherStyle}>{humidity}%</Text>
        </View>
        <Text>Image</Text>
        <Text>Image</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  otherStyle: {
    fontSize: 18,
  },
});
export default React.memo(CurrentWeather);
