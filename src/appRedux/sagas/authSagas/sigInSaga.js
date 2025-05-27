import {put, call} from 'redux-saga/effects';
import {setAccessToken, signInSuccess} from 'appRedux/actions/authActions';
import {signInApi} from 'services/api/authApi';
import {invoke} from 'helpers/sagas';
import {parseUserInfo} from 'appRedux/parsers/authParses';
import APIUtils from 'utils/apiUtils';
import NavigationServices from 'utils/navigationServices';
import SCENE_NAMES from 'constants/sceneName';
import {showAlertNotification} from "../../../utils/alert";
import I18n from "../../../utils/i18n";

export function* sigInSaga({payload, type}) {
  const {showLoading = true, callback = () => {}} = payload || {};
  yield invoke(
    function* execution() {
      const result = yield call(signInApi, payload);
        console.log('result', result)
      const dataParse = parseUserInfo(result);
      if (dataParse.success === '2') {
        const {token} = dataParse.password;
        APIUtils.setAccessToken(token);
        yield put(setAccessToken(token));
        yield put(signInSuccess(dataParse));
        NavigationServices.resetActionTo(SCENE_NAMES.MAIN);
      }else if (dataParse.success === '1') {
          return showAlertNotification({
              message: 'Tài khoản hoặc mật khẩu không đúng',
          });
      }else if (dataParse.success === '0') {
          return showAlertNotification({
              message: 'Chưa nhập tên tài khoản',
          });
      }
      yield callback(null, dataParse);
    },
    null,
    showLoading,
    type,
  );
}
