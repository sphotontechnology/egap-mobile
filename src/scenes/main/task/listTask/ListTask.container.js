import React, { useLayoutEffect, useCallback, useState } from 'react';
import ListTaskView from './ListTask.view';
import useSelectorShallow, {
  selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import { getIsFetchingByActionsTypeSelector } from 'appRedux/selectors/loadingSelector';
import NavigationServices, { getParams } from 'utils/navigationServices';
import SCENE_NAMES from 'constants/sceneName';
import { getTaskListApi } from 'services/api/taskApi';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [
  // ACTION.HANDLER,
]);

export default function ListTaskContainer({ navigation, route }) {
  const isLoading = useSelectorShallow(loadingSelector);
  const [listTask, setArray] = useState([]);
  const { productInfo } = getParams(route);
  const productId = productInfo.id_product;
  // const [isItemDeleted, setIsItemDeleted] = useState(true);
  const isFocused = useIsFocused();
  // console.log('manh dat ', listTask);
  // console.log(isItemDeleted);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: productInfo.name,
    });
  }, [navigation, productInfo]);
  // const onDelete = useCallback(() => {
  //   setIsItemDeleted(!isItemDeleted);
  // }, []);

  const getTaskListData = async () => {
    // console.log('dat test');
    await getTaskListApi(productId)
      .then((json) => {
        // let jsonResult = json.substring(1);
        // const oj = JSON.parse(json);
        setArray(json);
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally({});
  };

  const render = () => {
    getTaskListData().then();
  };
  const onPressPlus = () => {
    NavigationServices.navigate(SCENE_NAMES.ADD_TASK, {
      productInfo,
      render: render,
    });
  };

  const onPressBack = useCallback(() => {
    NavigationServices.goBack();
  }, []);

  useEffect(() => {
    getTaskListData().then();
  }, []);
  // const onDelete = useCallback(() => {
  //   getTaskListApi(productId)
  //     .then((json) => {
  //       // let jsonResult = json.substring(1);
  //       // const oj = JSON.parse(json);
  //       setArray(json);
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //     })
  //     .finally({});
  // });
  return (
    <ListTaskView
      // productId={productId}
      // changed={changed}
      // extraData={listTask}
      // onDelete={onDelete}
      getTaskListData={getTaskListData}
      isLoading={isLoading}
      productInfo={productInfo}
      listTask={listTask}
      onPressPlus={onPressPlus}
      onPressBack={onPressBack}
    />
  );
}
