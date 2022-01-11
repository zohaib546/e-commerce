import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import Heading from "../components/UI/Heading";
import ProductCard from "./../components/product/ProductCard";
import Alert from "./../components/UI/Alert";
import Loader from "./../components/UI/Loader";
import { itemImages } from "../utils/imageData";

const FeaturedProducts = (props) => {
	const loading = useSelector((state) => state.products.loading);
	const products = useSelector((state) => state.products.items);
	const error = useSelector((state) => state.products.error);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts(8));
	}, [dispatch]);

	let productContent;

	if (loading) {
		productContent = <Loader />;
	}
	if (!loading && error) {
		productContent = <Alert danger title="Error" message={error} />;
	}
	if (!loading && !error && products.length > 0) {
		productContent = (
			<div className="grid gap-6 sm:grid-cols-2 mx-7 lg:grid-cols-4 xl:mx-0 xl:gap-10">
				{products.map((product, index) => (
					<ProductCard
						key={product.id}
						id={product.id}
						figure={itemImages[index].image}
						path={`/product/${product.id}`}
						title={product.title}
						price={product.price}
					/>
				))}
			</div>
		);
	}

	return (
		<section className="my-10 sm:my-28 featured-products">
			<div className="container mx-auto">
				<Heading primary>Featured Products</Heading>
				{productContent}
			</div>
		</section>
	);
};

export default React.memo(FeaturedProducts);
