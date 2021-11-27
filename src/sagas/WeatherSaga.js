import {call, fork, put, select, take} from 'redux-saga/effects';
import Config from 'react-native-config';

import {
  getCurrentWeather,
  selectCities,
  setCurrentWeather,
  setForecastWeather,
  setImage,
} from '../redux/WeatherState';
import {Network} from '../api/Network';
import {formWeatherData, handleForeCastResponse} from '../utils/WeatherUtils';

function* handleCurrentWeatherRequest(city) {
  try {
    console.log('saga', city);
    const weatherResponse = yield call(Network.getWeather, city);
    const {data} = weatherResponse;
    if (data.cod === Number(200)) {
      const weatherData = formWeatherData(data);
      yield put(setCurrentWeather({city, weatherData}));
    } else {
      //error
    }
  } catch (e) {
    //error
  }
}
function* handleForecastRequest(city) {
  try {
    const forecastResponse = yield call(Network.getForecast, city);
    const {data} = forecastResponse;
    if (data.cod === '200') {
      const weatherData = handleForeCastResponse(data.list);
      yield put(setForecastWeather({city, weatherData}));
    } else {
      //error
    }
  } catch (e) {
    //error
  }
}

function* handleCityImageRequest(city) {
  try {
    const cityResponse = yield call(Network.getCityImage, {
      query: city,
      client_id: Config.UNSPLASH_KEY,
      orientation: 'landscape',
      per_page: 1,
    });
    const {data} = cityResponse;
    if (data.results) {
      const imageURL = data.results[0].urls.small;
      yield put(setImage({city, imageURL}));
    } else {
      //error
    }
  } catch (e) {
    //error
  }
}

export function* watcherWeatherSaga() {
  while (true) {
    yield take(getCurrentWeather.type);
    const cities = yield select(selectCities);
    for (let i = 0; i < cities.length; i++) {
      yield fork(handleCurrentWeatherRequest, cities[i].name);
      yield fork(handleCityImageRequest, cities[i].name);
      yield fork(handleForecastRequest, cities[i].name);
    }
  }
}
