import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

import WeatherIcon from './WeatherIcon';
import {convertToFahrenheit} from '../utils/WeatherUtils';
import {selectIsCelsius} from '../redux/WeatherState';

const ListItem = ({name, description, temp, weatherId, onPress}) => {
  const isCelsiusSelected = useSelector(selectIsCelsius);

  const onClick = () => onPress(name);

  return (
    <View>
      <Pressable style={styles.container} onPress={onClick}>
        <Text style={styles.tempStyle}>
          {isCelsiusSelected
            ? Math.floor(temp)
            : Math.floor(convertToFahrenheit(temp))}
          °
        </Text>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{name}</Text>
          <Text style={styles.descriptionStyle}>{description}</Text>
        </View>
        <WeatherIcon type={weatherId} shadow />
      </Pressable>
      <View style={styles.separatorStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tempStyle: {
    fontSize: 45,
    flex: 0.4,
    textAlign: 'center',
    fontFamily: 'ProximaNova-light',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 12,
  },
  titleStyle: {
    fontSize: 18,
    fontFamily: 'ProximaNova-Semibold',
  },
  descriptionStyle: {
    fontSize: 14,
  },
  separatorStyle: {
    height: 25,
  },
});

export default React.memo(ListItem);
