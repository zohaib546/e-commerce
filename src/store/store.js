import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";

const store = configureStore({
	reducer: {
		products: productReducer,
		categories: categoryReducer,
		cart: cartReducer,
	},
});

export default store;
