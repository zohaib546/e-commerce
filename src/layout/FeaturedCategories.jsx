import { categoryImages } from "../utils/imageData";
import CategoryCard from "./../components/category/CategoryCard";

const FeaturedCategories = ({ categories }) => {
	return (
		<section className="my-10 sm:my-28 category">
			<div className="container mx-auto">
				<div className="grid gap-6 mx-7 sm:grid-cols-2 xl:mx-0 xl:grid-cols-4 xl:gap-10">
					{categories.map((category, index) => (
						<CategoryCard
							key={category}
							figure={categoryImages[index].image}
							title={category}
							url={`/category/${category}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedCategories;
