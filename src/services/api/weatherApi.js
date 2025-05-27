import utils from 'utils/apiUtils';
// import AppConfigs from 'configs/appConfigs';


export const getWeatherApi = () => {
  return utils.get('http://egap.vn/api_weather_now/2');
};
