import API from './ApiConfig';
import {APP_ID, UNSPLASH_ID} from '../utils/AppConstants';

export const Network = {
  getForecast: city =>
    API.get('/forecast', {
      params: {
        units: 'metric',
        APPID: APP_ID,
        q: city,
      },
    }),
  getWeather: city =>
    API.get('/weather', {
      params: {
        units: 'metric',
        APPID: APP_ID,
        q: city,
      },
    }),
  getCityImage: city =>
    API.get('https://api.unsplash.com/search/photos', {
      params: {
        query: city,
        client_id: UNSPLASH_ID,
        orientation: 'landscape',
        per_page: 1,
      },
    }),
};
