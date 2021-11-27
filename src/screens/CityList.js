/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ListItem from '../components/Listitem';
import {getCurrentWeather, selectCities} from '../redux/WeatherState';
import Metrics from '../components/Metrics';

const renderSeparator = () => <View style={styles.separatorStyle} />;

const CityList = ({selectedCity}) => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  console.log('render CityList', cities);

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, []);

  const onListItemClick = useCallback(
    city => {
      selectedCity(city);
    },
    [selectedCity],
  );
  const renderItem = ({item}) => {
    const {name, current} = item;
    return (
      <ListItem
        name={name}
        description={current?.desc}
        temp={current?.temp}
        weatherId={current?.id}
        onPress={onListItemClick}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={renderSeparator}
      />
      <Metrics />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tempStyle: {
    fontSize: 62,
  },
  separatorStyle: {
    height: 25,
  },
});

export default React.memo(CityList);
