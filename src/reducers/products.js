import {
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILURE,
} from '../actionTypes/products';

const initialState = {
	loading: false,
	error: null,
	data: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return { loading: true, error: null, data: [] };
		case GET_PRODUCTS_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		case GET_PRODUCTS_FAILURE: {
			return { loading: false, error: action.payload, data: [] };
		}
		default:
			return state;
	}
};

export default reducer;
