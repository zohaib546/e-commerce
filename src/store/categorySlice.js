import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getCategories } from "../services/categoryService";

const categorySlice = createSlice({
	name: "categories",
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	reducers: {
		categoriesRequested: (categories) => {
			categories.loading = true;
		},
		categoriesReceived: (categories, action) => {
			categories.loading = false;
			categories.error = null;
			categories.items = action.payload.data;
		},
		categoriesRequestFailed: (categories, action) => {
			categories.loading = false;
			categories.error = action.payload.error;
		},
	},
});

export const { categoriesRequested, categoriesReceived, categoriesRequestFailed } =
	categorySlice.actions;
export default categorySlice.reducer;

// Selector functions
export const selectCategories = createSelector(
	(state) => state.categories.items,
	(categories) => categories
);

// Thunk functions
export const fetchCategories = () => {
	return async (dispatch, getState) => {
		dispatch(categoriesRequested());

		try {
			const { data } = await getCategories();
			dispatch(categoriesReceived({ data }));
		} catch (error) {
			dispatch(categoriesRequestFailed({ error: error.message }));
		}
	};
};
