import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		userId: null,
		date: null,
		products: [],
	},
	reducers: {
		addToCart: (state, action) => {
			state.products.push(action.payload.number);
		},
		removeFromCart: (state, action) => {
			state.products.pop();
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
