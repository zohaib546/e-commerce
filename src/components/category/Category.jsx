import { useParams } from "react-router-dom";
import Banner from "./../UI/Banner";
import Main from "./../../layout/Main";

const Category = (props) => {
	const params = useParams();

	return (
		<section>
			<Banner background="bg-banner1">{params.categoryName}</Banner>
			<Main />
		</section>
	);
};

export default Category;
