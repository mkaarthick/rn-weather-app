import {createSlice} from '@reduxjs/toolkit';

export const weatherState = createSlice({
  name: 'weather',
  initialState: {
    metrics: 'c',
    cities: [
      {name: 'Cuddalore', current: null, forecast: null},
      {name: 'Singapore', current: null, forecast: null},
      {name: 'New York', current: null, forecast: null},
      {name: 'Miami', current: null, forecast: null},
      {name: 'Tokyo', current: null, forecast: null},
    ],
  },
  reducers: {
    setMetrics: (state, action) => {},
    getCurrentWeather: state => {},
    setCurrentWeather: (state, action) => {},
  },
});

//Selectors
export const selectCities = state => state.weather.cities;
export const selectIsCelsius = state => state.weather.metrics === 'c';

//Actions
export const {setMetrics, getCurrentWeather, setCurrentWeather} =
  weatherState.actions;

export default weatherState.reducer;
