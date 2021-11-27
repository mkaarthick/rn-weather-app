import {configureStore, combineReducers} from '@reduxjs/toolkit';
import weatherReducer from './WeatherState';

const reducer = combineReducers({
  weather: weatherReducer,
});

const store = configureStore({
  reducer,
});

export default store;
