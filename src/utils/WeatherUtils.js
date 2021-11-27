import moment from 'moment';

export const getArtResourceForWeatherCondition = weatherId => {
  if (weatherId >= 200 && weatherId <= 232) {
    return require('../assets/art_storm.png');
  } else if (weatherId >= 300 && weatherId <= 321) {
    return require('../assets/art_light_rain.png');
  } else if (weatherId >= 500 && weatherId <= 504) {
    return require('../assets/art_rain.png');
  } else if (weatherId === 511) {
    return require('../assets/art_snow.png');
  } else if (weatherId >= 520 && weatherId <= 531) {
    return require('../assets/art_rain.png');
  } else if (weatherId >= 600 && weatherId <= 622) {
    return require('../assets/art_snow.png');
  } else if (weatherId >= 701 && weatherId <= 761) {
    return require('../assets/art_fog.png');
  } else if (weatherId === 761 || weatherId === 781) {
    return require('../assets/art_storm.png');
  } else if (weatherId === 800) {
    return require('../assets/art_clear.png');
  } else if (weatherId === 801) {
    return require('../assets/art_light_clouds.png');
  } else if (weatherId >= 802 && weatherId <= 804) {
    return require('../assets/art_clouds.png');
  }
};

export const convertToFahrenheit = temperature => {
  return Number(temperature) * 1.8 + 32;
};

export const formWeatherData = (data, date) => {
  const info = data.weather[0];
  const details = data.main;
  return {
    id: info?.id,
    desc: info?.description,
    temp: details?.temp,
    min_temp: details?.temp_min,
    max_temp: details?.temp_max,
    pressure: details?.pressure,
    humidity: details?.humidity,
    wind: data?.wind,
    date: date ? date : moment().format('YYYY-MM-DD'),
  };
};

export const handleForeCastResponse = list => {
  //excluding today's date
  const output = list.filter(
    element => element.dt_txt.substr(0, 10) !== moment().format('YYYY-MM-DD'),
  );
  const map = new Map();
  output.forEach(item => {
    const splitter = item.dt_txt.split(' '); // splitting dt_txt by " " , eg : 2021-11-27 00:00:00
    const date = splitter[0];
    const time = splitter[1];
    if (time === '00:00:00') {
      map.set(date, formWeatherData(item, date));
    }
  });
  return [...map.values()];
};
