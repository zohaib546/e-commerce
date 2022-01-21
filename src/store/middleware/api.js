import { getLimitedProducts, getProduct } from "../../services/productService";
import { getCategories } from "../../services/categoryService";
import {
	productsRequestSuccess,
	productsRequestFailed,
	singleProductRequestSuccess,
	singleProductRequestFailed,
} from "../productSlice";
import { categoriesRequestSuccess, categoriesRequestFailed } from "../categorySlice";
import { loadingStart, loadingFinished } from "../loadingSlice";
import { apiCallError } from "../actions/actions";

export const fetchProductsWithCategories = () => {
	return async (dispatch, getState) => {
		dispatch(loadingStart());

		const [productsData, categoriesData] = await Promise.allSettled([
			getLimitedProducts(8),
			getCategories(),
		]);

		dispatch(loadingFinished());

		if (productsData.status === "rejected") {
			const { message: error } = productsData.reason;
			dispatch(apiCallError({ error }));
			dispatch(productsRequestFailed({ error }));
		}

		if (categoriesData.status === "rejected") {
			const { message: error } = categoriesData.reason;
			dispatch(apiCallError({ error }));
			dispatch(categoriesRequestFailed({ error }));
		}

		if (productsData.status === "fulfilled" && categoriesData.status === "fulfilled") {
			const { data: products } = productsData.value;
			const { data: categories } = categoriesData.value;

			dispatch(productsRequestSuccess({ products }));
			dispatch(categoriesRequestSuccess({ categories }));
		}
	};
};

export const fetchSingleAndLimitedProducts = (productId) => {
	return async (dispatch, getState) => {
		dispatch(loadingStart());

		const [productData, productsData] = await Promise.allSettled([
			getProduct(productId),
			getLimitedProducts(8),
		]);

		dispatch(loadingFinished());

		if (productData.status === "rejected") {
			const { message: error } = productData.reason;
			dispatch(apiCallError({ error }));
			dispatch(singleProductRequestFailed({ error }));
		}

		if (productsData.status === "rejected") {
			const { message: error } = productsData.reason;
			dispatch(apiCallError({ error }));
			dispatch(productsRequestFailed({ error }));
		}

		if (productData.status === "fulfilled") {
			const { data: product } = productData.value;
			dispatch(singleProductRequestSuccess({ product }));

			if (productsData.status !== "rejected") {
				const { data: products } = productsData.value;
				dispatch(productsRequestSuccess({ products }));
			}
		}
	};
};
