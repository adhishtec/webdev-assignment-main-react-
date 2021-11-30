import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILURE,
} from '../actionTypes/products';

// import products from './../mocks/products';

const API_URL = process.env.REACT_APP_API_URL;

export const getProducts = async () => await axios.get(API_URL);

// To test as mock data when api not available
// export const getProducts = async () =>
// 	new Promise((resolve, reject) => {
// 		setTimeout(resolve(products), 3000);
// 	});

export function* getProductsSaga() {
	try {
		const body = yield call(getProducts);
		yield put({
			type: GET_PRODUCTS_SUCCESS,
			payload: body['data'],
		});
	} catch (e) {
		yield put({
			type: GET_PRODUCTS_FAILURE,
			payload: e.message,
		});
	}
}

export const productsSaga = takeEvery(GET_PRODUCTS, getProductsSaga);
