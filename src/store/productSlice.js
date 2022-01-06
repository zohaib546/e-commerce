import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getLimitedProducts, getProduct } from "./../services/productService";

const productSlice = createSlice({
	name: "products",
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	reducers: {
		productsRequested: (products) => {
			products.loading = true;
		},
		productsReceieved: (products, action) => {
			products.loading = false;
			products.error = null;
			products.items = action.payload.data;
		},
		productsRequestFailed: (products, action) => {
			products.loading = false;
			products.error = action.payload.error;
		},
	},
});

export const { productsRequested, productsReceieved, productsRequestFailed } = productSlice.actions;
export default productSlice.reducer;

// Selector Functions
export const selectProducts = createSelector(
	(state) => state.products.items,
	(items) => items
);

// Thunk Functions
export const fetchProducts = (limit) => {
	return async (dispatch, getState) => {
		dispatch(productsRequested());
		try {
			const { data } = await getLimitedProducts(limit);
			dispatch(productsReceieved({ data }));
		} catch (error) {
			dispatch(productsRequestFailed({ error: error.message }));
		}
	};
};

export const fetchProductById = (id) => {
	return async (dispatch, getState) => {
		try {
			const { data } = await getProduct(id);
			return data;
		} catch (error) {
			return Promise.reject(error.message);
		}
	};
};
