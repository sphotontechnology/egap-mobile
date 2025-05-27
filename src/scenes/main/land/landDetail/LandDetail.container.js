import React, {useLayoutEffect, useCallback} from 'react';
import LandDetailView from './LandDetail.view';
import useSelectorShallow, {
  selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {NAMESPACE} from './LandDetail.constants';
import {getString} from 'utils/i18n';
import NavigationServices, {getParams} from 'utils/navigationServices';
import SCENE_NAMES from 'constants/sceneName';

const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [
  // ACTION.HANDLER,
]);

export default function LandDetailContainer({navigation, route}) {
  const isLoading = useSelectorShallow(loadingSelector);
  const {landInfo} = getParams(route);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  const onPressBack = useCallback(() => {
    NavigationServices.goBack();
  }, []);

  const onPress = useCallback((item) => {
    NavigationServices.navigate(SCENE_NAMES.LIST_TASK, {productInfo: item});
  }, []);

  return (
    <LandDetailView
      isLoading={isLoading}
      landInfo={landInfo}
      onPress={onPress}
      onPressBack={onPressBack}
    />
  );
}
