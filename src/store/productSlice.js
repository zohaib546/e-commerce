import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getLimitedProducts, getProduct } from "./../services/productService";
import { loadingStart, loadingFinished } from "./loadingSlice";

const productSlice = createSlice({
	name: "products",
	initialState: {
		items: [],
		error: null,
		singleItem: {
			item: {},
			error: null,
		},
	},
	reducers: {
		singleProductRequestSuccess: (products, action) => {
			products.singleItem.error = null;
			products.singleItem.item = action.payload.product;
		},
		singleProductRequestFailed: (products, action) => {
			products.singleItem.error = action.payload.error;
		},
		singleProductRemoved: (products, action) => {
			products.singleItem.error = null;
			products.singleItem.item = {};
		},
		productsRequestSuccess: (products, action) => {
			products.error = null;
			products.items = action.payload.products;
		},
		productsRequestFailed: (products, action) => {
			products.error = action.payload.error;
		},
	},
});

export const {
	productsRequestSuccess,
	productsRequestFailed,
	singleProductRequestSuccess,
	singleProductRequestFailed,
	singleProductRemoved,
} = productSlice.actions;
export default productSlice.reducer;

// Selector Functions
export const selectProducts = createSelector(
	(state) => state.products.items,
	(items) => items
);

// Thunk Functions
export const fetchProducts = (limit) => {
	return async (dispatch, getState) => {
		dispatch(loadingStart());
		try {
			const { data } = await getLimitedProducts(limit);
			dispatch(loadingFinished());
			dispatch(productsRequestSuccess({ data }));
		} catch (error) {
			dispatch(loadingFinished());
			dispatch(productsRequestFailed({ error: error.message }));
		}
	};
};

export const fetchProductById = (id) => {
	return async (dispatch, getState) => {
		dispatch(loadingStart());
		try {
			const { data } = await getProduct(id);
			dispatch(loadingFinished());
			return data;
		} catch (error) {
			dispatch(loadingFinished());
			return Promise.reject(error.message);
		}
	};
};
