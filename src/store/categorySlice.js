import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getCategories } from "../services/categoryService";
import { loadingStart, loadingFinished } from "./loadingSlice";

const categorySlice = createSlice({
	name: "categories",
	initialState: {
		items: [],
		error: null,
	},
	reducers: {
		categoriesRequestSuccess: (categories, action) => {
			categories.error = null;
			categories.items = action.payload.categories;
		},
		categoriesRequestFailed: (categories, action) => {
			categories.error = action.payload.error;
		},
	},
});

export const { categoriesRequestSuccess, categoriesRequestFailed } = categorySlice.actions;
export default categorySlice.reducer;

// Selector functions
export const selectCategories = createSelector(
	(state) => state.categories.items,
	(categories) => categories
);

// Thunk functions
export const fetchCategories = () => {
	return async (dispatch, getState) => {
		dispatch(loadingStart());

		try {
			const { data } = await getCategories();
			dispatch(loadingFinished());
			dispatch(categoriesRequestSuccess({ data }));
		} catch (error) {
			dispatch(loadingFinished());
			dispatch(categoriesRequestFailed({ error: error.message }));
		}
	};
};
