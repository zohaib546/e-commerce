import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slides from "../layout/Slides";
import FeaturedCategories from "../layout/FeaturedCategories";
import Promotion from "../layout/Promotion";
import FeaturedProducts from "./../layout/FeaturedProducts";
import Features from "../layout/Features";
import MainLoader from "./MainLoader";
import { fetchProductsWithCategories } from "../store/middleware/api";

const Home = (props) => {
	const isLoading = useSelector((state) => state.loading.isLoading);
	const products = useSelector((state) => state.products.items);
	const categories = useSelector((state) => state.categories.items);
	const productsError = useSelector((state) => state.products.error);
	const categoriesError = useSelector((state) => state.categories.error);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductsWithCategories());
	}, [dispatch]);

	if (isLoading) {
		return <MainLoader />;
	}

	return (
		<>
			<Slides />
			{!isLoading && !categoriesError && categories.length > 0 && (
				<FeaturedCategories categories={categories} />
			)}
			{!isLoading && !productsError && products.length > 0 && (
				<FeaturedProducts products={products} />
			)}
			<Promotion />
			<Features />
		</>
	);
};

export default Home;
