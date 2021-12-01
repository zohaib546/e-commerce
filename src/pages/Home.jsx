import Slides from "../layout/Slides";
import Categories from "../layout/Categories";
import Promotion from "../layout/Promotion";
import FeaturedProducts from "./../layout/FeaturedProducts";
import Features from "../layout/Features";

const Home = (props) => {
	return (
		<>
			<Slides />
			<Categories />
			<FeaturedProducts />
			<Promotion />
			<Features />
		</>
	);
};

export default Home;
