import {call, fork, put, select, take} from 'redux-saga/effects';
import Config from 'react-native-config';

import {
  getCurrentWeather,
  selectCities,
  setCurrentWeather,
} from '../redux/WeatherState';
import {Network} from '../api/Network';

function* handleCurrentWeatherRequest(city) {
  try {
    console.log('saga', city);
    const weatherResponse = yield call(Network.getWeather, {
      units: 'metric',
      APPID: Config.WEATHER_API_kEY,
      q: city,
    });
    const {data} = weatherResponse;
    if (data.cod === Number(200)) {
      const info = data.weather[0];
      const details = data.main;

      const weatherData = {
        id: info?.id,
        desc: info?.description,
        temp: details?.temp,
        min_temp: details?.temp_min,
        max_temp: details?.temp_max,
        pressure: details?.pressure,
        humidity: details?.humidity,
        wind: data?.wind,
      };

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
    const forecastResponse = yield call(Network.getForecast, {
      units: 'metric',
      APPID: Config.WEATHER_API_kEY,
      q: city,
    });
    const {data} = forecastResponse;
    if (data.cod === '200') {
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
      const image_url = data.results[0].urls.small;
      console.log('results', image_url);
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
