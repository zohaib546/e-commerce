import Banner from "./../components/UI/Banner";
import Main from "./../layout/Main";

const AllProducts = (props) => {
	return (
		<section className="products">
			<Banner background="bg-banner1">Products</Banner>
			<Main />
		</section>
	);
};

export default AllProducts;
