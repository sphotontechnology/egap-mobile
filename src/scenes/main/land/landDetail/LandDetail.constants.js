import {PRODUCT_STATUS} from 'constants/appConstants';

export const NAMESPACE = 'scenes.main.landDetail';

export const products = [
  {
    id: '1',
    title: 'Thanh long ruột đỏ đợt 1',
    date: '2020/10/23',
    status: PRODUCT_STATUS.DONE,
    quantity: 15,
  },
  {
    id: '2',
    title: 'Thanh long ruột đỏ đợt 2',
    date: '2021/01/23',
    status: PRODUCT_STATUS.SELLING,
    quantity: 10,
  },
];
