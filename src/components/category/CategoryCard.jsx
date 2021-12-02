import Button from "../UI/Button";

const CategoryCard = (props) => {
	return (
		<div className="relative overflow-hidden cursor-pointer h-72 lg:h-96 group">
			<img
				className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
				src={props.figure}
				alt={props.title}
			/>
			<Button url={props.url} flatWhite link>
				{props.title}
			</Button>
		</div>
	);
};

export default CategoryCard;
