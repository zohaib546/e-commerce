import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import wishlistReducer from "./wishlistSlice";
import loadingSlice from "./loadingSlice";
import error from "./middleware/error";

const store = configureStore({
	reducer: {
		loading: loadingSlice,
		products: productReducer,
		categories: categoryReducer,
		cart: cartReducer,
		wishlist: wishlistReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(error),
});

export default store;
