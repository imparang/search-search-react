import { all, fork } from 'redux-saga'

export default function* rootSaga() {
  yield all([fork()])
}
