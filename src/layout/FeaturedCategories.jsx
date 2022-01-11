import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categorySlice";
import { categoryImages } from "../utils/imageData";
import Loader from "../components/UI/Loader";
import Alert from "./../components/UI/Alert";
import CategoryCard from "./../components/category/CategoryCard";

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
						figure={categoryImages[index].image}
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
