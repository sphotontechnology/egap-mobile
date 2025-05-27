import {fork, all} from 'redux-saga/effects';
// Saga Imports
import processSagas from './processSagas';
import otherSagas from './otherSagas';
import authSagas from './authSagas';
import landListSagas from './landListSagas';
export default function* rootSaga() {
  yield all([
    // Sagas
    fork(processSagas),
    fork(otherSagas),
    fork(authSagas),
    fork(landListSagas),
  ]);
}
