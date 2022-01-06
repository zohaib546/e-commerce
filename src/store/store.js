import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import wishlistReducer from "./wishlistSlice";

const store = configureStore({
	reducer: {
		products: productReducer,
		categories: categoryReducer,
		cart: cartReducer,
		wishlist: wishlistReducer,
	},
});

export default store;
