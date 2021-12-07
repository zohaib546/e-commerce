import BreadCrumb from "./BreadCrumb";
import Heading from "./Heading";

const Banner = (props) => {
	const renderClasses = () =>
		`flex flex-col items-center py-20 bg-center bg-no-repeat bg-cover banner ${props.background}`;

	return (
		<div className={renderClasses()}>
			<Heading white>{props.children}</Heading>
			<BreadCrumb white />
		</div>
	);
};

export default Banner;
