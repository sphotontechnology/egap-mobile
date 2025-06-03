import React, {
  useLayoutEffect,
  useCallback,
  useState,
  useEffect,
} from 'react';
import LandListView from './LandList.view';
import useSelectorShallow, {
  selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import { getIsFetchingByActionsTypeSelector } from 'appRedux/selectors/loadingSelector';
import NavigationServices from 'utils/navigationServices';
import SCENE_NAMES from 'constants/sceneName';
import { getLandListApi } from 'services/api/landApi';
import { useSelector } from 'react-redux';
import { useActions } from '../../../../hooks/useActions';
import { getIdUser } from '../../../../appRedux/actions/landListActions';

const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [
  // ACTION.HANDLER,
]);

export default function LandListContainer({ navigation }) {
  const actions = useActions({ getIdUser });
  const userId = useSelector((state) => state.auth.userInfo.id_production);

  const isLoading = useSelectorShallow(loadingSelector);
  const [searchKey, setSearchKey] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [listLand, setListLand] = useState([]);

  const getLandListData = async (id) => {
    await getLandListApi(id)
      .then((json) => {
        setListLand(json);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally({});
  };

  useEffect(() => {
    getLandListData(userId).then();
  }, []);

  useLayoutEffect(() => {
    // navigation.setOptions({
    //   title: getString(`${NAMESPACE}.title`),
    // });

    actions.getIdUser(userId);
  }, [userId]);

  const onPressPlus = useCallback(() => {
    NavigationServices.navigate(SCENE_NAMES.CREATE_LAND);
  }, []);

  const onChangeText = useCallback((text) => {
    setSearchKey(text);
  }, []);

  const onPressOpenFilter = useCallback(() => {
    setModalVisible(true);
  }, []);

  const onPressCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onPressFilter = useCallback((item) => {
    console.log('onPressFilter::', item);
  }, []);

  const onPressPlusLandItem = useCallback((item) => {
    NavigationServices.navigate(SCENE_NAMES.ADD_PRODUCT_TO_LAND, {
      landInfo: item,
    });
  }, []);

  const onPressItem = useCallback((item) => {
    NavigationServices.navigate(SCENE_NAMES.LAND_DETAIL, { landInfo: item });
  }, []);

  return (
    <LandListView
      isLoading={isLoading}
      onPressPlus={onPressPlus}
      landList={listLand}
      value={searchKey}
      onChangeText={onChangeText}
      modalVisible={modalVisible}
      onPressOpenFilter={onPressOpenFilter}
      onPressCloseModal={onPressCloseModal}
      onPressFilter={onPressFilter}
      onPressPlusLandItem={onPressPlusLandItem}
      onPressItem={onPressItem}
      onRefresh={async () => {
        await getLandListData(userId);
      }}
    />
  );
}
