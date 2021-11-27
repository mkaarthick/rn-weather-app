import {all} from 'redux-saga/effects';
import {watcherWeatherSaga} from './WeatherSaga';

export default function* rootSagas() {
  yield all([watcherWeatherSaga()]);
}
