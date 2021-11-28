import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectActivePage,
  selectCities,
  setActivePage,
} from '../redux/WeatherState';
import CurrentWeather from './CurrentWeather';

export const VerticalSwipe = () => {
  const dispatch = useDispatch();

  const cities = useSelector(selectCities);
  const activePage = useSelector(selectActivePage);

  const onPageSelectedPosition = useRef(new Animated.Value(0)).current;
  const verticalViewPager = useRef();

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
          dispatch(setActivePage(position));
        },
        useNativeDriver: false,
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    verticalViewPager?.current?.setPageWithoutAnimation(activePage);
  }, [activePage]);
  return (
    <PagerView
      ref={verticalViewPager}
      style={styles.pagerView}
      initialPage={0}
      onPageSelected={onPageSelected}
      orientation={'vertical'}>
      {cities.map((item, index) => {
        console.log(item.current);
        return (
          <View key={index.toString()}>
            <CurrentWeather
              weatherId={item?.current.id}
              temp={item?.current.temp}
              desc={item?.current.desc}
              min={item?.current.min_temp}
              max={item?.current.max_temp}
              humidity={item?.current.humidity}
              pressure={item?.current.pressure}
              wind={item?.current.wind.speed}
            />
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
});
