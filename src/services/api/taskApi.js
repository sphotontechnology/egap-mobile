import utils from 'utils/apiUtils';
import AppConfigs from 'components/index.js/configs/appConfigs';

const END_POINT = AppConfigs.END_POINT;

export const getTaskListApi = (id) => {
  return utils.get(`${END_POINT}/task/get_task/` + id);
};

export const getTaskKindListApi = (id) => {
  return utils.get(`${END_POINT}/taskKindProduct/` + id);
};

export const createTaskApi = (params) => {
  // console.log(params);
  return utils.post(`${END_POINT}/task`, params);
};
