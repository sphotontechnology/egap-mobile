import React, {useLayoutEffect, useCallback} from 'react';
import WeatherAndForecastView from './WeatherAndForecast.view';
import useSelectorShallow, {
  selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {NAMESPACE} from './WeatherAndForecast.constants';
import {getString} from 'utils/i18n';
import NavigationServices from 'utils/navigationServices';

const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [
  // ACTION.HANDLER,
]);

export default function WeatherAndForecastContainer({navigation}) {
  const isLoading = useSelectorShallow(loadingSelector);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  const onPressBack = useCallback(() => {
    NavigationServices.goBack();
  }, []);

  return (
    <WeatherAndForecastView isLoading={isLoading} onPressBack={onPressBack} />
  );
}
