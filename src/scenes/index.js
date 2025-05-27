import React, {useEffect, useState, useCallback} from 'react';
import NetInfo from '@react-native-community/netinfo';
import RootNavigator from 'routers/RootNavigator';
import {onAppConnectivityChange} from 'appRedux/actions/connectActions';
import {useActions} from 'hooks/useActions';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import {getIsLoadingSelector} from 'appRedux/selectors/loadingSelector';
import {getIsConnectedSelector} from 'appRedux/selectors/connectSelector';
import {getErrorSelector} from 'appRedux/selectors/errorSelector';
import {hideError} from 'appRedux/actions/alertActions';
import DialogAlertNotification from 'components/Dialog/DialogAlertNotification';
import AppLoading from 'components/AppLoading';
import {getActiveRouteName} from 'utils/activeRouteName';
import {
  BackHandler,
  Alert,
  StatusBar,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import SCENE_NAMES from 'constants/sceneName';
import NavigationServices from 'utils/navigationServices';
import I18n from 'utils/i18n';
import {COLOR_PRIMARY} from 'constants/colors';

export default function Scenes() {
  const isConnected = useSelectorShallow(getIsConnectedSelector);
  const actions = useActions({onAppConnectivityChange, hideError});
  const [currentRouteName, setCurrentRouteName] = useState('');
  const isLoading = useSelectorShallow(getIsLoadingSelector);
  const error = useSelectorShallow(getErrorSelector);

  const handleBackPress = useCallback(() => {
    if (isLoading) {
      return true;
    }
    switch (currentRouteName) {
      case SCENE_NAMES.HOME:
      case SCENE_NAMES.SIGN_IN:
      case 'AnotherCase':
        // handler
        break;
      default:
        NavigationServices.goBack();
        break;
    }
    return true;
  }, [isLoading, currentRouteName]);

  const onNavigationStateChange = (action) => {
    // console.log('>>>>ACTION_NAVIGATOR:', {action});
    const routeName = getActiveRouteName(action);
    if (currentRouteName !== routeName) {
      setCurrentRouteName(routeName);
      // change the tracker here to use other Mobile analytics SDK.
    }
  };

  const netInfoListener = useCallback(() => {
    (state) => {
      if (state.isConnected !== isConnected) {
        actions.onAppConnectivityChange(state.isConnected);
      }
    };
  }, [isConnected, actions]);

  // Subscribe net info
  useEffect(() => {
    const subscribeNetInfo = NetInfo.addEventListener(netInfoListener);
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => {
      subscribeNetInfo();
      backHandler.remove();
    };
  }, [netInfoListener, handleBackPress]);

  useEffect(() => {
    switch (currentRouteName) {
      case SCENE_NAMES.GET_START:
      case SCENE_NAMES.MAIN:
      case SCENE_NAMES.SIGN_IN:
        if (Platform.OS === 'android') {
          StatusBar.setBarStyle('light-content', true);
        } else {
          StatusBar.setBarStyle('dark-content', true);
        }
        break;
      default:
        break;
    }
  }, [currentRouteName]);
  const requestPermission = async () => {
    // console.log('You');
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cần cung cấp quyền cho ứng dụng',
          message: 'Ứng dụng cần cung cấp quyền truy cập vào máy ảnh',
          buttonNeutral: 'Hỏi lại sau',
          buttonNegative: 'Đóng',
          buttonPositive: 'Đồng ý',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {
      console.warn(err);
    }

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cần cung cấp quyền cho ứng dụng',
          message: 'Ứng dụng cần cung cấp quyền thêm bộ nhớ',
          buttonNeutral: 'Hỏi lại sau',
          buttonNegative: 'Đóng',
          buttonPositive: 'Đồng ý',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <>
      <RootNavigator onNavigationStateChange={onNavigationStateChange} />
      {/*<DialogAlertNotification onPressHide={actions.hideError} error={error} />*/}
      {isLoading && <AppLoading />}
    </>
  );
}
