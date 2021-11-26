import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import ListItem from '../components/Listitem';

const renderSeparator = () => <View style={styles.separatorStyle} />;

export const CityList = () => {
  const renderItem = ({item}) => {
    return (
      <ListItem
        name={item.name}
        description={item.description}
        temp={item.temp}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {name: 'Singapore', temp: '30', description: 'cloudy'},
          {name: 'New York', temp: '50', description: 'rain'},
        ]}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={renderSeparator}
      />
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
