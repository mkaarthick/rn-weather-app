import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {
  selectActivePage,
  selectCities,
  selectIsCelsius,
} from '../redux/WeatherState';
import WeatherIcon from './WeatherIcon';
import moment from 'moment';
import {convertToFahrenheit} from '../utils/WeatherUtils';
const renderSeparator = () => <View style={styles.separatorStyle} />;

export const Forecast = () => {
  const activePage = useSelector(selectActivePage);
  const cities = useSelector(selectCities);
  const isCelsiusSelected = useSelector(selectIsCelsius);

  const data = cities[activePage].forecast;
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.weatherContainer}>
          <WeatherIcon type={item.id} shadow={false} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.dayStyle}>
            {moment(item.date).format('ddd').toUpperCase()}
          </Text>
          <Text style={styles.dateStyle}>
            {moment(item.date).format('DD MMM').toUpperCase()}
          </Text>
        </View>

        <View style={styles.tempContainer}>
          <Text style={styles.tempStyle}>
            {isCelsiusSelected
              ? Math.floor(item.max_temp)
              : Math.floor(convertToFahrenheit(item.max_temp))}
            °
          </Text>
          <Text style={styles.tempStyle}>
            {isCelsiusSelected
              ? Math.floor(item.min_temp)
              : Math.floor(convertToFahrenheit(item.min_temp))}
            °
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.flatlistContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.date}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 0.5,
    marginLeft: 32,
    textAlign: 'left',
  },
  dayStyle: {
    fontSize: 16,
    fontFamily: 'ProximaNova-Semibold',
  },
  dateStyle: {
    fontSize: 14,
  },
  tempContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  separatorStyle: {
    height: 25,
  },
  tempStyle: {
    fontSize: 14,
    fontWeight: '500',
  },
  flatlistContainer: {
    flex: 1,
    marginTop: 32,
  },
});
