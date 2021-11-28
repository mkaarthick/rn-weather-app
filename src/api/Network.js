import API from './ApiConfig';
import Config from 'react-native-config';

export const Network = {
  getForecast: city =>
    API.get('/forecast', {
      params: {
        units: 'metric',
        APPID: Config.WEATHER_API_kEY,
        q: city,
      },
    }),
  getWeather: city =>
    API.get('/weather', {
      params: {
        units: 'metric',
        APPID: Config.WEATHER_API_kEY,
        q: city,
      },
    }),
  getCityImage: city =>
    API.get('https://api.unsplash.com/search/photos', {
      params: {
        query: city,
        client_id: Config.UNSPLASH_KEY,
        orientation: 'landscape',
        per_page: 1,
      },
    }),
};
