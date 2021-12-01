import Slides from "../layout/Slides";
import Categories from "../layout/Categories";
import Promotion from "../layout/Promotion";
import FeaturedProducts from "./../layout/FeaturedProducts";

const Home = (props) => {
	return (
		<>
			<Slides />
			<Categories />
			<FeaturedProducts />
			<Promotion />
		</>
	);
};

export default Home;
