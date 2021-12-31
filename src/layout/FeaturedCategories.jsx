import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categorySlice";
import Loader from "../components/UI/Loader";
import Alert from "./../components/UI/Alert";
import CategoryCard from "./../components/category/CategoryCard";
import category1 from "../assets/images/category-1.webp";
import category2 from "../assets/images/category-2.webp";
import category3 from "../assets/images/category-3.webp";
import category4 from "../assets/images/category-4.webp";

const DUMMY_CATEOGRY_IMAGES = [category1, category2, category3, category4];

const FeaturedCategories = () => {
	const loading = useSelector((state) => state.categories.loading);
	const error = useSelector((state) => state.categories.error);
	const categories = useSelector((state) => state.categories.items);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	let categoryContent;

	if (loading) {
		categoryContent = <Loader />;
	}
	if (!loading && error) {
		categoryContent = <Alert danger title="Error" message={error} />;
	}
	if (!loading && !error && categories.length > 0) {
		categoryContent = (
			<div className="grid gap-6 mx-7 sm:grid-cols-2 xl:mx-0 xl:grid-cols-4 xl:gap-10">
				{categories.map((category, index) => (
					<CategoryCard
						key={category}
						figure={DUMMY_CATEOGRY_IMAGES[index]}
						title={category}
						url={`/category/${category}`}
					/>
				))}
			</div>
		);
	}

	return (
		<section className="my-10 sm:my-28 category">
			<div className="container mx-auto">{categoryContent}</div>
		</section>
	);
};

export default FeaturedCategories;
