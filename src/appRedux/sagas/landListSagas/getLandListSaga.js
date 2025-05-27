import {put, call} from 'redux-saga/effects';
import {invoke} from 'helpers/sagas';
import {parseUserInfo} from 'appRedux/parsers/authParses';
import {getLandListApi} from '../../../services/api/landApi';
import {getLandList} from '../../actions/landListActions';

export function* getLandListSaga({id, type}) {
    const {
        showLoading = true, callback = () => {
        },
    } = id || {};
    yield invoke(function* execution() {
        const result = yield call(getLandListApi, id);
        const dataParse = parseUserInfo(result);
        yield put(getLandList(dataParse));
        yield callback(null, dataParse);
    }, null, showLoading, type);
}
