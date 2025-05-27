export const NAMESPACE = 'scenes.main.createLand';
import * as Yup from 'yup';
export const NAMESCREEN = 'createLandContainer';
export const LAND_SCHEME = Yup.object().shape({
  area: Yup.string(),
  title: Yup.string(),
  owner: Yup.object(),
});

export const ownerList = [
  {
    id: 'general',
    label: 'Chọn chủ lô đất',
    value: 'general',
    color: 'black',
  },
  {
    id: '1',
    label: 'Nguyễn Quang Vinh',
    value: '1',
  },
  {
    id: '2',
    label: 'Lý Vinh Quang',
    value: '2',
  },
  {
    id: '3',
    label: 'Lý Quang Vinh',
    value: '3',
  },
  {
    id: '4',
    label: 'Nguyễn Vinh Quang',
    value: '4',
  },
];
