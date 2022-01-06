import { createSlice, createSelector } from "@reduxjs/toolkit";

const wishlist = createSlice({
	name: "wishlist",
	initialState: {
		items: [],
	},
	reducers: {
		addedToWishlist: (wishlist, action) => {
			const { wishlistItem } = action.payload;
			wishlist.items.push(wishlistItem);
		},
		removedFromWishlist: (wishlist, action) => {
			const { id: itemId } = action.payload;
			wishlist.items = wishlist.items.filter((item) => item.id !== itemId);
		},
	},
});

export const { addedToWishlist, removedFromWishlist } = wishlist.actions;
export default wishlist.reducer;

// Selector Functions
export const selectWishlistItem = createSelector(
	(state) => state.wishlist.items,
	(_, productId) => productId,
	(items, productId) => items.some((item) => item.id === productId)
);
