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
