import React, {useLayoutEffect} from 'react';
import AccountView from './Account.view';
import useSelectorShallow, {
  selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {NAMESPACE} from './Account.constants';
import {getString} from 'utils/i18n';
import {useSelector} from 'react-redux';

const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [
  // ACTION.HANDLER,
]);

export default function AccountContainer({navigation}) {
  const isLoading = useSelectorShallow(loadingSelector);

  const userInfo = useSelector((state) => state.auth.userInfo);
  // const userInfo = {
  //   id: userData.id,
  //   fullName: userData.fullname,
  //   company: userData.name,
  // };
  useLayoutEffect(() => {
    // navigation.setOptions({
    //   title: getString(`${NAMESPACE}.title`),
    // });
  }, [navigation]);

  return <AccountView isLoading={isLoading} userInfo={userInfo} />;
}
