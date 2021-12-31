import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		userId: null,
		date: null,
		products: [],
	},
	reducers: {
		addToCart: (cart, action) => {
			const { id } = action.payload.product;

			cart.products.push(action.payload.number);

			const product = {
				quantity: 1,
				productName: "something",
			};
		},
		removeFromCart: (cart, action) => {
			cart.products.pop();
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
