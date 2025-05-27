import React, {useLayoutEffect, useCallback, useState, useEffect} from 'react';
import ProcessDetailView from './ProcessDetail.view';
import useSelectorShallow, {
  selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {NAMESPACE} from './ProcessDetail.constants';
import {getString} from 'utils/i18n';
import NavigationServices, {getParams} from 'utils/navigationServices';
import {getProcessDetailApi} from 'services/api/processApi';

const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [
  // ACTION.HANDLER,
]);

export default function ProcessDetailContainer({navigation, route}) {
  const isLoading = useSelectorShallow(loadingSelector);
  const {processItem} = getParams(route);
  const processId = processItem.id_product_seed;

  const [processDetailData, setArray] = useState([]);

  useEffect(() => {
    getProcessDetailData(processId);
  }, [getProcessDetailData, processId]);

  const getProcessDetailData = async (id) => {
    await getProcessDetailApi(id)
      .then((json) => {
        //them du lieu ten hat giong vao data
        json.data.seed_name = processItem.seed_name;
        setArray(json.data);
      })
      .catch((error) => {
      })
      .finally({});
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  const onPressBack = useCallback(() => {
    NavigationServices.goBack();
  }, []);

  return (
    <ProcessDetailView
      isLoading={isLoading}
      processItem={processDetailData}
      onPressBack={onPressBack}
    />
  );
}
