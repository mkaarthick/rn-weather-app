import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectActivePage, selectCities} from '../redux/WeatherState';
import {Text} from 'react-native-paper';
import WeatherIcon from './WeatherIcon';
import moment from 'moment';
const renderSeparator = () => <View style={styles.separatorStyle} />;

export const Forecast = () => {
  const activePage = useSelector(selectActivePage);
  const cities = useSelector(selectCities);
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
          <Text style={styles.tempStyle}>{Math.floor(item.max_temp)}°</Text>
          <Text style={styles.tempStyle}>{Math.floor(item.min_temp)}°</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
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
    fontWeight: '600',
    fontSize: 16,
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
});
