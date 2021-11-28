import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import WeatherIcon from './WeatherIcon';
import {convertToFahrenheit} from '../utils/WeatherUtils';
import {selectIsCelsius} from '../redux/WeatherState';

const ListItem = ({name, description, temp, weatherId, onPress}) => {
  const isCelsiusSelected = useSelector(selectIsCelsius);

  const onClick = () => onPress(name);

  return (
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
      <WeatherIcon type={weatherId} />
    </Pressable>
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
  },
  titleContainer: {
    flex: 1,
    marginLeft: 12,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  descriptionStyle: {
    fontSize: 14,
  },
});

export default React.memo(ListItem);
