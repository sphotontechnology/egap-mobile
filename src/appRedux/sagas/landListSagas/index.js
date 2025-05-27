import {takeLatest} from 'redux-saga/effects';
import { DATA} from 'appRedux/actionsType';
import {getLandListSaga} from './getLandListSaga';

export default function* landListSagas() {
    yield takeLatest(DATA.ID_USER, getLandListSaga);
}
