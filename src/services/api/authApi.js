import utils from 'utils/apiUtils';
import AppConfigs from 'components/index.js/configs/appConfigs';

const END_POINT = AppConfigs.END_POINT;

export const signInApi = (params) => {
  return utils.post(`${END_POINT}/login`, params);
};

export const getUserInfoApi = () => {
  return utils.get(`${END_POINT}/get-version-app`);
};
