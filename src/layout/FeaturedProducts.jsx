import React from "react";
import Heading from "../components/UI/Heading";
import ProductCard from "./../components/product/ProductCard";
import { itemImages } from "../utils/imageData";

const FeaturedProducts = ({ products }) => {
	return (
		<section className="my-10 sm:my-28 featured-products">
			<div className="container mx-auto">
				<Heading primary>Featured Products</Heading>
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
			</div>
		</section>
	);
};

export default React.memo(FeaturedProducts);
