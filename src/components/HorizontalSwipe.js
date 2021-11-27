/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import PagerView from 'react-native-pager-view';
import {VerticalSwipe} from './VerticalSwipe';
import {useSelector} from 'react-redux';
import {selectActivePage, selectCities} from '../redux/WeatherState';
import {Forecast} from './Forecast';
const INTRO_DATA = [
  {
    key: '1',
    title: 'App showcase ✨',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    key: '2',
    title: 'Introduction screen 🎉',
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
  },
];
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);
const width = Dimensions.get('window').width;
export const HorizontalSwipe = () => {
  const cities = useSelector(selectCities);
  const activePage = useSelector(selectActivePage);

  console.log('cities', cities);
  const ref = React.useRef();
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, INTRO_DATA.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, INTRO_DATA.length * width],
  });

  const onPageScroll = React.useMemo(function () {
    return Animated.event(
      [
        {
          nativeEvent: {
            offset: scrollOffsetAnimatedValue,
            position: positionAnimatedValue,
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    );
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={styles.dotsContainer}>
        <View style={styles.dotContainer}>
          <Text style={{fontSize: 18}}>New York</Text>

          <ExpandingDot
            data={INTRO_DATA}
            expandingDotWidth={20}
            scrollX={scrollX}
            inActiveDotOpacity={0.6}
            dotStyle={{
              width: 5,
              height: 5,
              // backgroundColor: '#c7f034',
              borderRadius: 5,
              marginHorizontal: 2,
            }}
            containerStyle={{
              top: 30,
            }}
          />
        </View>
      </View>
      <AnimatedPagerView
        initialPage={0}
        ref={ref}
        style={styles.PagerView}
        onPageScroll={onPageScroll}>
        <View key="1">
          <VerticalSwipe />
        </View>
        <View key="2">
          <Forecast />
        </View>
      </AnimatedPagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  PagerView: {
    flex: 1,
    // backgroundColor: 'orange',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
  dotsContainer: {
    // flex: 1,
    // justifyContent: 'space-evenly',
    height: 50,
    // backgroundColor: 'yellow',
    marginTop: '20%',
  },
  dotContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
