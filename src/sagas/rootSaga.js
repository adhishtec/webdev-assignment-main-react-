import { all } from 'redux-saga/effects';
import { productsSaga } from './products';

export default function* rootSaga() {
	yield all([productsSaga]);
}
