import utils from 'utils/apiUtils';
import AppConfigs from 'components/index.js/configs/appConfigs';

const END_POINT = AppConfigs.END_POINT;

export const getProcessListApi = (id) => {
  return utils.get(`${END_POINT}/productSeed/` + id);
};

export const getProcessDetailApi = (id) => {
  return utils.get(`${END_POINT}/period/` + id);
};
