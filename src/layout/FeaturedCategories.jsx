import category1 from "../assets/images/category-1.webp";
import category2 from "../assets/images/category-2.webp";
import category3 from "../assets/images/category-3.webp";
import category4 from "../assets/images/category-4.webp";
import CategoryCard from "./../components/category/CategoryCard";

const DUMMY_CATEGORIES = ["electronics", "jewelery", "men's clothing", "women's clothing"];
const DUMMY_CATEOGRY_IMAGES = [category1, category2, category3, category4];

const FeaturedCategories = () => {
	return (
		<section className="my-10 sm:my-28 category">
			<div className="container mx-auto">
				<div className="grid gap-6 mx-7 sm:grid-cols-2 xl:mx-0 xl:grid-cols-4 xl:gap-10">
					{DUMMY_CATEGORIES.map((category, index) => (
						<CategoryCard
							key={category}
							figure={DUMMY_CATEOGRY_IMAGES[index]}
							title={category}
							url={`${category}/products`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedCategories;
