import React, {useRef} from 'react';
import {StyleSheet, View, Text, Image, Animated} from 'react-native';
import PagerView from 'react-native-pager-view';
import {useDispatch, useSelector} from 'react-redux';
import {selectCities, setActivePage} from '../redux/WeatherState';
import {getArtResourceForWeatherCondition} from '../utils/WeatherUtils';

export const VerticalSwipe = () => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  const onPageSelectedPosition = useRef(new Animated.Value(0)).current;

  const onPageSelected = React.useMemo(function () {
    return Animated.event(
      [
        {
          nativeEvent: {
            position: onPageSelectedPosition,
          },
        },
      ],
      {
        listener: ({nativeEvent: {position}}) => {
          // addLog({
          //   event: 'select',
          //   text: `Page: ${position}`,
          //   timestamp: new Date(),
          // });
          // setActivePage(position);
          dispatch(setActivePage(position));
          // onPageSelectedCallback(position);
          console.log('page', `Page: ${position}`);
        },
        useNativeDriver: false,
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <PagerView
      style={styles.pagerView}
      initialPage={0}
      onPageSelected={onPageSelected}
      orientation={'vertical'}>
      {cities.map((item, index) => {
        return (
          <View key={index}>
            <View style={styles.center}>
              <Image
                style={{width: 80, height: 80}}
                source={getArtResourceForWeatherCondition(item.current.id)}
              />
              <Text style={{fontSize: 80}}>35</Text>
              <Text>{item.current.desc}</Text>
              <Text>{item.name}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Text>Image</Text>
              <Text>Image</Text>
              <Text>Image</Text>
            </View>
          </View>
        );
      })}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    // flex: 1,
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    position: 'absolute',
    // zIndex: 0,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
});
