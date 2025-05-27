export const NAMESPACE = 'scenes.main.addProductToLand';
export const NAMESCREEN = 'addProductToLand';
import * as Yup from 'yup';

export const LAND_SCHEME = Yup.object().shape({
  product: Yup.string(),
  time: Yup.string(),
});
export const products = [
  {
    id: 'general',
    label: 'Chọn tên sản phẩm',
    value: 'general',
  },
  {
    id: '1',
    label: 'Thanh long ruột đỏ sấy dẻo',
    value: '1',
  },
  {
    id: '2',
    label: 'Thanh long không hạt sấy dẻo',
    value: '2',
  },
  {
    id: '3',
    label: 'Thanh long ruột trắng sấy dẻo',
    value: '3',
  },
];
