import React, {useCallback} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import ListItem from '../components/Listitem';

const renderSeparator = () => <View style={styles.separatorStyle} />;

const CityList = ({selectedCity}) => {
  console.log('render CityList');

  const onListItemClick = useCallback(
    city => {
      selectedCity(city);
    },
    [selectedCity],
  );
  const renderItem = ({item}) => {
    return (
      <ListItem
        name={item.name}
        description={item.description}
        temp={item.temp}
        onPress={onListItemClick}
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

export default React.memo(CityList);
