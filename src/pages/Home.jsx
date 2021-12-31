import Slides from "../layout/Slides";
import FeaturedCategories from "../layout/FeaturedCategories";
import Promotion from "../layout/Promotion";
import FeaturedProducts from "./../layout/FeaturedProducts";
import Features from "../layout/Features";

const Home = (props) => {
	return (
		<>
			<Slides />
			<FeaturedCategories />
			<FeaturedProducts />
			<Promotion />
			<Features />
		</>
	);
};

export default Home;
