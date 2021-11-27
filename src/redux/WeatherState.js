import {createSlice} from '@reduxjs/toolkit';

export const weatherState = createSlice({
  name: 'weather',
  initialState: {
    metrics: 'c',
    activePage: 0,
    cities: [
      {name: 'Cuddalore', current: null, forecast: null},
      {name: 'Singapore', current: null, forecast: null},
      {name: 'New York', current: null, forecast: null},
      {name: 'Miami', current: null, forecast: null},
      {name: 'Tokyo', current: null, forecast: null},
      {name: 'Cairo', current: null, forecast: null},
      {name: 'Reykjavík', current: null, forecast: null},
    ],
  },
  reducers: {
    setMetrics: (state, action) => {
      return {
        ...state,
        metrics: action.payload,
      };
    },
    getCurrentWeather: state => {},
    setCurrentWeather: (state, action) => {
      return {
        ...state,
        cities: state.cities.map(item => {
          if (item.name === action.payload.city) {
            return {
              ...item,
              current: action.payload.weatherData,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };
    },
    setForecastWeather: (state, action) => {
      return {
        ...state,
        cities: state.cities.map(item => {
          if (item.name === action.payload.city) {
            return {
              ...item,
              forecast: action.payload.weatherData,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };
    },
    setActivePage: (state, action) => {
      return {
        ...state,
        activePage: action.payload,
      };
    },
  },
});

//Selectors
export const selectCities = state => state.weather.cities;
export const selectIsCelsius = state => state.weather.metrics === 'c';
export const selectActivePage = state => state.weather.activePage;

//Actions
export const {
  setMetrics,
  getCurrentWeather,
  setCurrentWeather,
  setForecastWeather,
  setActivePage,
} = weatherState.actions;

export default weatherState.reducer;
