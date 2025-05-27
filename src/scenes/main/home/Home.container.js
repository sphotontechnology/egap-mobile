import React from 'react';
import HomeView from './Home.view';
import useSelectorShallow, {
  selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {AUTH} from 'appRedux/actionsType';
// import {NAMESPACE} from './Home.constants';
const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [
  AUTH.GET_USER_INFO.HANDLER,
]);

function HomeContainer({navigation}) {
  const isFetchingTest = useSelectorShallow(loadingSelector);
  return <HomeView isLoading={isFetchingTest} />;
}

export default HomeContainer;
