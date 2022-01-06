import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addedToCart: (cart, action) => {
			const { cartItem } = action.payload;
			const item = cart.items.find((item) => item.id === cartItem.id);
			if (item) {
				item.quantity += cartItem.quantity;
				return;
			}
			cart.items.push(cartItem);
		},
		removedFromCart: (cart, action) => {
			const { itemId } = action.payload;
			cart.items = cart.items.filter((item) => item.id !== itemId);
		},
		incrementItemQuantity: (cart, action) => {
			const { itemId } = action.payload;
			const item = cart.items.find((item) => item.id === itemId);
			item.quantity += 1;
		},
		decrementItemQuantity: (cart, action) => {
			const { itemId } = action.payload;
			const item = cart.items.find((item) => item.id === itemId);
			if (item.quantity === 1) {
				cart.items = cart.items.filter((item) => item.id !== itemId);
				return;
			}
			item.quantity -= 1;
		},
	},
});

export const { addedToCart, removedFromCart, incrementItemQuantity, decrementItemQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;

// Selector functions
export const countTotalFromCart = createSelector(
	(state) => state.cart.items,
	(cartItems) =>
		cartItems.reduce((acc, currItem) => acc + currItem.price * currItem.quantity, 0).toFixed(2)
);
