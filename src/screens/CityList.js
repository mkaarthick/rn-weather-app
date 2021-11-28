/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ListItem from '../components/Listitem';
import {selectCities, setActivePage} from '../redux/WeatherState';
import Metrics from '../components/Metrics';
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

const CityList = ({selectedCity}) => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);

  const onListItemClick = useCallback(
    city => {
      selectedCity(city);
      const post = cities.findIndex(element => element.name === city);
      dispatch(setActivePage(post));
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
      <AnimatedFlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        animationType={AnimationType.SlideFromRight}
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
