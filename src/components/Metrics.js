import React from 'react';
import {IconButton, Surface, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsCelsius, setMetrics} from '../redux/WeatherState';

const Metrics = () => {
  const dispatch = useDispatch();
  const isCelsiusSelected = useSelector(selectIsCelsius);

  const onCelsiusPress = () => {
    dispatch(setMetrics('c'));
  };

  const onFahrenheitPress = () => {
    dispatch(setMetrics('f'));
  };

  return (
    <Surface style={styles.container}>
      <IconButton
        icon={() => (
          <Text
            style={
              isCelsiusSelected ? styles.unSelectedStyle : styles.selectedStyle
            }>
            °F
          </Text>
        )}
        onPress={onFahrenheitPress}
        size={20}
      />
      <IconButton
        icon={() => (
          <Text
            style={
              isCelsiusSelected ? styles.selectedStyle : styles.unSelectedStyle
            }>
            °C
          </Text>
        )}
        onPress={onCelsiusPress}
        size={20}
      />
    </Surface>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '25%',
    borderRadius: 30,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 12,
  },
  tempStyle: {
    fontSize: 62,
  },
  selectedStyle: {
    color: 'black',
    fontWeight: '700',
  },
  unSelectedStyle: {
    color: 'black',
    fontWeight: 'normal',
  },
});
export default React.memo(Metrics);
