import utils from 'utils/apiUtils';
import AppConfigs from 'components/index.js/configs/appConfigs';

const END_POINT = AppConfigs.END_POINT;

export const getLandListApi = (id) => {
  return utils.get(`${END_POINT}/showArea/` + id);
};
export const getOwnerListApi = (id) => {
  return utils.get(`${END_POINT}/owner/owner_production/` + id);
};
export const createLandApi = (payload) => {
  return utils.post(`${END_POINT}/area/new`, payload);
};
export const getProductKindListApi = (id) => {
  return utils.get(`${END_POINT}/productKind/` + id);
};
export const addProductToLandApi = (payload) => {
  return utils.post(`${END_POINT}/product`, payload);
};
