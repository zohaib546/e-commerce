import PropTypes from "prop-types";
import BreadCrumb from "./BreadCrumb";
import Heading from "./Heading";

const Banner = ({ background, ...props }) => {
	const renderClasses = () =>
		`flex flex-col items-center py-20 bg-center bg-no-repeat bg-cover banner ${background}`;

	return (
		<div className={renderClasses()}>
			<Heading white>{props.children}</Heading>
			<BreadCrumb white />
		</div>
	);
};

Banner.propTypes = {
	background: PropTypes.string.isRequired,
};

export default Banner;
