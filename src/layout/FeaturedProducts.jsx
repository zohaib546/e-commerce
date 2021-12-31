import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import Heading from "../components/UI/Heading";
import ProductCard from "./../components/product/ProductCard";
import Alert from "./../components/UI/Alert";
import Loader from "./../components/UI/Loader";
import product1 from "../assets/images/product-1.webp";
import product2 from "../assets/images/product-2.webp";
import product3 from "../assets/images/product-3.webp";
import product4 from "../assets/images/product-4.webp";
import product5 from "../assets/images/product-5.webp";
import product6 from "../assets/images/product-6.webp";
import product7 from "../assets/images/product-7.webp";
import product8 from "../assets/images/product-8.webp";

const DUMMY_IMAGES = [
	product1,
	product2,
	product3,
	product4,
	product5,
	product6,
	product7,
	product8,
];

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
						figure={DUMMY_IMAGES[index]}
						path={`product/${product.id}`}
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

export default FeaturedProducts;
