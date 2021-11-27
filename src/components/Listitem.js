import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const ListItem = ({name, description, temp, onPress}) => {
  const onClick = () => onPress(name);
  console.log('render CityList');

  return (
    <Pressable
      style={styles.container}
      onPress={onClick}
    >
      <Text style={styles.tempStyle}>{temp}°</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={styles.descriptionStyle}>{description}</Text>
      </View>
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
