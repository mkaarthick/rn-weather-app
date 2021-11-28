import React from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import PagerView from 'react-native-pager-view';

import {VerticalSwipe} from './VerticalSwipe';
import {Forecast} from './Forecast';
import CityName from './CityName';

const HORIZONTAL_DATA = [{key: '1'}, {key: '2'}];
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);
const width = Dimensions.get('window').width;
export const HorizontalSwipe = () => {
  const ref = React.useRef();
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, HORIZONTAL_DATA.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, HORIZONTAL_DATA.length * width],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={styles.dotsContainer}>
        <View style={styles.dotContainer}>
          <CityName />
          <ExpandingDot
            data={HORIZONTAL_DATA}
            expandingDotWidth={20}
            scrollX={scrollX}
            inActiveDotOpacity={0.6}
            dotStyle={{
              width: 5,
              height: 5,
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
