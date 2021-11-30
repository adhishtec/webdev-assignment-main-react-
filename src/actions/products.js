import {
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILURE,
} from '../actionTypes/products';

export const getProducts = () => ({
	type: GET_PRODUCTS,
});

export const getProductsSuccess = (payload) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload,
});

export const getProductsFailure = (payload) => ({
	type: GET_PRODUCTS_FAILURE,
	payload,
});
