import { useParams } from "react-router-dom";

const Category = (props) => {
	const params = useParams();

	return <h1>this is category {params.categoryName}</h1>;
};

export default Category;
