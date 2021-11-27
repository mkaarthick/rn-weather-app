import API from './ApiConfig';

export const Network = {
  getForecast: params => API.get('/forecast', {params}),
  getWeather: params => API.get('/weather', {params}),
  getCityImage: params =>
    API.get('https://api.unsplash.com/search/photos', {params}),
};
