import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
	name: "loading",
	initialState: {
		isLoading: false,
	},
	reducers: {
		loadingStart: (loading) => {
			loading.isLoading = true;
		},
		loadingFinished: (loading) => {
			loading.isLoading = false;
		},
	},
});

export const { loadingStart, loadingFinished } = loadingSlice.actions;
export default loadingSlice.reducer;
