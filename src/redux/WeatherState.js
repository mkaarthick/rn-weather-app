import {createSlice} from '@reduxjs/toolkit';

export const weatherState = createSlice({
  name: 'weather',
  initialState: {
    loading: true,
    metrics: 'c',
    activePage: 0,
    cities: [
      {name: 'Singapore', current: null, forecast: null, image: null},
      {name: 'New York', current: null, forecast: null, image: null},
      {name: 'Miami', current: null, forecast: null, image: null},
      {name: 'Tokyo', current: null, forecast: null, image: null},
      {name: 'Cairo', current: null, forecast: null, image: null},
      {name: 'Reykjavík', current: null, forecast: null, image: null},
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
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setImage: (state, action) => {
      return {
        ...state,
        cities: state.cities.map(item => {
          if (item.name === action.payload.city) {
            return {
              ...item,
              image: action.payload.imageURL,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };
    },
  },
});

//Selectors
export const selectCities = state => state.weather.cities;
export const selectIsCelsius = state => state.weather.metrics === 'c';
export const selectActivePage = state => state.weather.activePage;
export const selectLoading = state => state.weather.loading;

//Actions
export const {
  setMetrics,
  getCurrentWeather,
  setCurrentWeather,
  setForecastWeather,
  setActivePage,
  setImage,
  setLoading,
} = weatherState.actions;

export default weatherState.reducer;
